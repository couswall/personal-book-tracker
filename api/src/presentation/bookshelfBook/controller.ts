import { Request, Response } from "express";

export class BookshelfBookController{

    public addToBookshelf = (req: Request, res: Response) => {
        res.json('add to bookshelf')
    };
};