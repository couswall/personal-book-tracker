import { Request, Response } from "express";
import { CustomError } from "@domain/errors/custom.error";
import { CreateCustomBookShelfDto } from "@domain/dtos/index";
import { BookshelfRepository } from "@domain/repositories/bookshelf.repository";
import { CreateCustom } from "@domain/use-cases/bookshelf/createCustom-bookshelf";
import { UserRepository } from "@domain/repositories/user.repository";

export class BookshelfController{
    constructor(
        private readonly repository: BookshelfRepository,
        private readonly userRepository: UserRepository,
    ){};

    public createCustom = (req: Request, res: Response) => {
        const [errorMsg, dto] = CreateCustomBookShelfDto.create(req.body);
        if(errorMsg || !dto){
            res.status(400).json({
                success: false,
                error: {message: errorMsg}
            });
            return;
        }

        new CreateCustom(this.repository, this.userRepository)
            .execute(dto)
            .then(bookshelf => res.status(201).json({
                success: true,
                message: 'Custom bookshelf created successfully',
                data: {
                    id: bookshelf.id,
                    name: bookshelf.name,
                    type: bookshelf.type,
                },
            }))
            .catch(error => CustomError.handleError(error, res))

    }
}