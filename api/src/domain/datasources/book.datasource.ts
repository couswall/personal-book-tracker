import { ISearchBookResponse } from "@domain/interfaces/book.interfaces";
import { SearchBookDto } from "@domain/dtos/index";

export abstract class BookDatasource {
    abstract search(searchBookDto: SearchBookDto): Promise<ISearchBookResponse>;
}