import { Router } from "express";
import { AuthRoutes } from "@presentation/auth/routes";
import { BookRoutes } from "@presentation/book/routes";
import { BookshelfRoutes } from "@presentation/bookshelf/routes";

export class AppRoutes{

    static get routes(): Router {
        const router = Router();

        router.use('/api/auth', AuthRoutes.routes);
        router.use('/api/book', BookRoutes.routes);
        router.use('/api/bookshelf', BookshelfRoutes.routes);

        return router;
    }
}