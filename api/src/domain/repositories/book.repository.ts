import { FindByApiIdDto, GetBookByIdDto, SearchBookDto } from "@domain/dtos/index";
import { BookEntity } from "@domain/entities/book.entity";
import { IGetBookByIdResponse, ISearchBookResponse } from "@domain/interfaces/book.interfaces";

export abstract class BookRepository {
    abstract search(searchBookDto: SearchBookDto): Promise<ISearchBookResponse>;
    abstract getBookById(getBookByIdDto: GetBookByIdDto): Promise<IGetBookByIdResponse>;
    abstract findByApiId(findByApiIdDto: FindByApiIdDto): Promise<BookEntity>;
    // abstract create(): Promise<BookEntity>;
}