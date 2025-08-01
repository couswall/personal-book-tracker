import { BookshelfBookRepository } from "@domain/repositories/bookshelfBook.repository";
import { BookRepository } from "@domain/repositories/book.repository";
import { AddToBookshelfDto, CreateBookDto } from "@domain/dtos";
import { BookshelfBookEntity } from "@domain/entities";
import { CustomError } from "@domain/errors/custom.error";
import { AddToBookshelfUseCase } from "@domain/use-cases/interfaces/bookshelfBook.interfaces";

export class AddToBookshelf implements AddToBookshelfUseCase{
    constructor(
        public readonly repository: BookshelfBookRepository,
        public readonly bookRepository: BookRepository
    ){};

    async execute(addToBookshelfDto: AddToBookshelfDto): Promise<BookshelfBookEntity> {

        const existingBook = await this.bookRepository.getBookById({bookId: addToBookshelfDto.apiBookId});

        if(existingBook.id === 0){
            const {id, bookshelves, reviews, notes, deletedAt, ...rest} = existingBook;
            const [error, dto] = CreateBookDto.create(rest);
            if (error) throw CustomError.badRequest(error);
            await this.bookRepository.create(dto!);
        }

        return this.repository.addToBookshelf(addToBookshelfDto);
    }
    
}