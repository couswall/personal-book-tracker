import { BookDatasource } from "@domain/datasources/book.datasource";
import { GetBookByIdDto, SearchBookDto } from "@domain/dtos/index";
import { IGetBookByIdResponse, ISearchBookResponse } from "@domain/interfaces/book.interfaces";
import { BookRepository } from "@domain/repositories/book.repository";

export class BookRepositoryImpl implements BookRepository{
    constructor(
        private readonly datasource: BookDatasource,
    ){};

    search(searchBookDto: SearchBookDto): Promise<ISearchBookResponse> {
        return this.datasource.search(searchBookDto);
    }

    getBookById(getBookByIdDto: GetBookByIdDto): Promise<IGetBookByIdResponse> {
        return this.datasource.getBookById(getBookByIdDto);
    }
}