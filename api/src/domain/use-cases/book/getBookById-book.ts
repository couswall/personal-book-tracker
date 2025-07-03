import { BookRepository } from "@domain/repositories/book.repository";
import { GetBookByIdDto } from "@domain/dtos/index";
import { GetBookByIdUseCase } from "@domain/use-cases/interfaces/book.interfaces";
import { IGetBookByIdResponse } from "@domain/interfaces/book.interfaces";

export class GetBookById implements GetBookByIdUseCase{
    constructor(
        private readonly repository: BookRepository,
    ){};

    execute(getBookByIdDto: GetBookByIdDto): Promise<IGetBookByIdResponse> {
        return this.repository.getBookById(getBookByIdDto);
    }
}