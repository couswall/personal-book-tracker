import { Router } from "express";
import { BookshelfBookController } from "@presentation/bookshelfBook/controller";

export class BookshelfBookRoutes{

    static get routes(): Router{
        const router = Router();
        const bookshelfController = new BookshelfBookController();

        router.put('/addToBookshelf', bookshelfController.addToBookshelf);

        return router;
    }
}