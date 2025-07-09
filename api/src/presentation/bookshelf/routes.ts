import { Router } from "express";
import { BookshelfController } from "@presentation/bookshelf/controller";

export class BookshelfRoutes{

    static get routes(): Router{
        const router = Router();
        const bookshelfController = new BookshelfController();

        router.post('/createCustom', bookshelfController.createCustom);

        return router;
    };
}