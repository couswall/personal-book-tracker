import { Request, Response } from "express";
import { CustomError } from "@domain/errors/custom.error";
import { AddToBookshelfDto } from "@domain/dtos";
import { BookshelfBookRepository } from "@domain/repositories/bookshelfBook.repository";
import { BookRepository } from "@domain/repositories/book.repository";
import { AddToBookshelf } from "@domain/use-cases/bookshelfBook/addToBookshelf-bookshelf";
import { BookshelfRepository } from "@domain/repositories/bookshelf.repository";

export class BookshelfBookController{

    constructor(
        private readonly repository: BookshelfBookRepository,
        private readonly bookRepository: BookRepository,
        private bookshelfRepository: BookshelfRepository,
    ){};

    public addToBookshelf = (req: Request, res: Response) => {
        const [errorMsg, dto] = AddToBookshelfDto.create(req.body);
        if(errorMsg || !dto){
            res.status(400).json({
                success: false,
                error: {message: errorMsg}
            });
            return;
        }
        
        new AddToBookshelf(this.repository, this.bookRepository, this.bookshelfRepository)
            .execute(dto)
            .then(bookshelfBook => {
                const {deletedAt, ...rest} = bookshelfBook;
                res.status(201).json({
                    success: true,
                    message: 'Book added to bookshelf',
                    data: {book: {...rest}}
                })
            })
            .catch(error => CustomError.handleError(error, res))
    };
};