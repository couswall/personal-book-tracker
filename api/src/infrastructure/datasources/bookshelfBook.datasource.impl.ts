import { prisma } from "@data/postgres";
import { BookshelfType } from "@/generated/prisma";
import { CustomError } from "@domain/errors/custom.error";
import { BookshelfBookEntity } from "@domain/entities";
import { AddToBookshelfDto } from "@domain/dtos/bookshelfBook/addToBookshelf-bookshelfBook.dto";
import { BookshelfBookDatasource } from "@domain/datasources/bookshelfbook.datasource";
import { ERROR_MESSAGES } from "@infrastructure/constants";


export class BookshelfBookDatasourceImpl implements BookshelfBookDatasource{
    
    async addToBookshelf(addToBookshelfDto: AddToBookshelfDto): Promise<BookshelfBookEntity> {
        const {bookshelfId, bookId = 0, bookshelfType = BookshelfType.TO_BE_READ, totalPages = 0} = addToBookshelfDto;
        let readingProgress = bookshelfType === BookshelfType.READ ? 100 : 0;

        const existingBookshelfBook = await prisma.bookshelfBook.findFirst({
            where: {bookshelfId, bookId: bookId, deletedAt: null}
        });

        if(existingBookshelfBook) throw CustomError.badRequest(
            ERROR_MESSAGES.BOOKSHELF_BOOK.ADD_TO_BOOKSHELF.ALREADY_ADDED,
        );

        const book = await prisma.bookshelfBook.create({
            data:{
                bookshelfId,
                bookId,
                readingProgress,
                totalPages,
            }
        });

        return BookshelfBookEntity.fromObject(book);
    }
}