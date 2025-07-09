import { Request, Response } from "express";
import { CreateCustomBookShelfDto } from "@domain/dtos/index";
import { BookshelfRepository } from "@domain/repositories/bookshelf.repository";

export class BookshelfController{
    constructor(
        // private readonly repository: BookshelfRepository
    ){};

    public createCustom = (req: Request, res: Response) => {
        const [errorMsg, dto] = CreateCustomBookShelfDto.create(req.body);
        if(errorMsg){
            res.status(400).json({
                success: false,
                error: {message: errorMsg}
            });
            return;
        }

        res.json(dto)
    }
}