import { ISearchBookResponse } from "@domain/interfaces/book.interfaces";
import { SearchBookDto } from "@domain/dtos/index";

export abstract class BookRepository {
    abstract search(searchBookDto: SearchBookDto): Promise<ISearchBookResponse>;
}