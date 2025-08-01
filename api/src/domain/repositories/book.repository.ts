import { CreateBookDto, GetBookByIdDto, SearchBookDto } from "@domain/dtos/index";
import { BookEntity } from "@domain/entities/book.entity";
import { ISearchBookResponse } from "@domain/interfaces/book.interfaces";

export abstract class BookRepository {
    abstract search(searchBookDto: SearchBookDto): Promise<ISearchBookResponse>;
    abstract getBookById(getBookByIdDto: GetBookByIdDto): Promise<BookEntity>;
    abstract fetchByIdFromAPI(getBookByIdDto: GetBookByIdDto): Promise<BookEntity>;
    abstract create(createBookDto: CreateBookDto): Promise<BookEntity>;
}