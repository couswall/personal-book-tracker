import { prisma } from "@src/data/postgres";
import { CustomError } from "@domain/errors/custom.error";
import { BookshelfEntity } from "@domain/entities";
import { BookshelfDatasource } from "@domain/datasources/bookshelf.datasource";
import { CreateCustomBookShelfDto } from "@domain/dtos/index";
import { ERROR_MESSAGES } from "@infrastructure/constants";

export class BookshelfDatasourceImpl implements BookshelfDatasource{
    
    async createCustom(createBookShelfDto: CreateCustomBookShelfDto): Promise<BookshelfEntity> {
        const {userId, shelfName} = createBookShelfDto;

        const existingBookshelf = await prisma.bookshelf.findFirst({
            where: {userId, name: shelfName, deletedAt: null}
        });

        if(existingBookshelf) throw CustomError.badRequest(ERROR_MESSAGES.BOOKSHELF.CREATE_CUSTOM.EXISTING);

        const customBookshelf = await prisma.bookshelf.create({
            data: {
                name: shelfName,
                type: "CUSTOM",
                userId,   
            }
        });

        return BookshelfEntity.fromObject(customBookshelf);
    };

    async getMyBookshelves(userId: number): Promise<BookshelfEntity[]> {
        const bookshelves = await prisma.bookshelf.findMany({
            where: {userId, deletedAt: null}
        });

        return BookshelfEntity.convertArray(bookshelves);
    }
}