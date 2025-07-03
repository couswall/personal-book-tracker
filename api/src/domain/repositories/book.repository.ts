import { GetBookByIdDto, SearchBookDto } from "@domain/dtos/index";
import { IGetBookByIdResponse, ISearchBookResponse } from "@domain/interfaces/book.interfaces";

export abstract class BookRepository {
    abstract search(searchBookDto: SearchBookDto): Promise<ISearchBookResponse>;
    abstract getBookById(getBookByIdDto: GetBookByIdDto): Promise<IGetBookByIdResponse>;
}