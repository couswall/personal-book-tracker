import { AxiosError } from "axios";
import { AxiosAdapter } from "@config/axios.adapter";
import { envs } from "@config/index";
import { CustomError } from "@domain/errors/custom.error";
import { BookDatasource } from "@domain/datasources/book.datasource";
import { GetBookByIdDto, SearchBookDto } from "@domain/dtos/index";
import { ERROR_MESSAGES } from "@infrastructure/constants";
import { ISearchBookResponse, IGetBookByIdResponse } from "@domain/interfaces/book.interfaces";
import { GoogleBook, ISearchGoogleResponse } from "@domain/interfaces/googleBook.interfaces";

export class BookDatasourceImpl implements BookDatasource{
    constructor(private readonly http: AxiosAdapter){};

    async search(searchBookDto: SearchBookDto): Promise<ISearchBookResponse> {

        const params = {
            q: searchBookDto.searchText,
            startIndex: (searchBookDto.page - 1) * searchBookDto.maxResults,
            printType: searchBookDto.printType,
            maxResults: searchBookDto.maxResults,
        };

        try {
            const data = await this.http.get<ISearchGoogleResponse>(
                `${envs.BOOKS_API}/volumes`,
                {params}
            );

            if(data.totalItems === 0 || !data.items) return {
                page: searchBookDto.page,
                maxResults: searchBookDto.maxResults,
                books: []
            };
            
            const formatBooks = data.items.map(googleBook => ({
                id: googleBook.id,
                title: googleBook.volumeInfo.title,
                authors: googleBook.volumeInfo.authors,
                imageCover: 
                    googleBook.volumeInfo.imageLinks?.smallThumbnail ??
                    googleBook.volumeInfo.imageLinks?.thumbnail ?? undefined
            }));

            return {
                page: searchBookDto.page,
                maxResults: searchBookDto.maxResults,
                books: formatBooks,
            }
        } catch (error) {
            throw CustomError.internalServer(ERROR_MESSAGES.EXTERNAL_BOOKS_API.INTERNAL);
        }
    };

    async getBookById(getBookByIdDto: GetBookByIdDto): Promise<IGetBookByIdResponse> {
        const {bookId} = getBookByIdDto;

        try {
            const googleBook = await this.http.get<GoogleBook>(`${envs.BOOKS_API}/volumes/${bookId}`);
            const {id, volumeInfo} = googleBook;
            const bookImgCover = volumeInfo.imageLinks?.smallThumbnail ?? volumeInfo.imageLinks?.thumbnail;

            const book = {
                id,
                title: volumeInfo.title,
                subtitle: volumeInfo.subtitle,
                authors: volumeInfo.authors,
                publishedDate: volumeInfo.publishedDate,
                description: volumeInfo.description,
                coverImageUrl: bookImgCover,
                categories: volumeInfo.categories,
            };
            
            return book;

        } catch (error) {
            if(error instanceof AxiosError){
                const code: number = error.response?.data?.error?.code ?? 0;
                if (code === 503) {
                    throw CustomError.badRequest(`Book with id ${bookId} does not exist`);
                }
            }
            throw CustomError.internalServer(ERROR_MESSAGES.EXTERNAL_BOOKS_API.INTERNAL);
        }
    }
}