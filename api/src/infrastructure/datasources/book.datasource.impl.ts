import { AxiosAdapter } from "@config/axios.adapter";
import { envs } from "@config/index";
import { SearchBookDto } from "@domain/dtos/index";
import { ISearchGoogleResponse, ISearchBookResponse } from "@domain/interfaces/book.interfaces";
import { BookDatasource } from "@domain/datasources/book.datasource";
import { CustomError } from "@domain/errors/custom.error";

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
            throw CustomError.internalServer('Google books API error');
        }
    };
}