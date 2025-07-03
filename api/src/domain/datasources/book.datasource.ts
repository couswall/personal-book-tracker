import { GetBookByIdDto, SearchBookDto } from "@domain/dtos/index";
import { ISearchBookResponse, IGetBookByIdResponse } from "@domain/interfaces/book.interfaces";

export abstract class BookDatasource {
    abstract search(searchBookDto: SearchBookDto): Promise<ISearchBookResponse>;
    abstract getBookById(getBookByIdDto: GetBookByIdDto): Promise<IGetBookByIdResponse>;
}