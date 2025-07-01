import { SearchBookDto } from "@src/domain/dtos/index";
import { ISearchBookResponse } from "@domain/interfaces/book.interfaces";

export interface SearchBookUseCase{
    execute(searchBookDto: SearchBookDto): Promise<ISearchBookResponse>;
}