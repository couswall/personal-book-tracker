import { IBookshelfBookFromObject } from "@domain/interfaces/bookshelfBook.interfaces";

export class BookshelfBookEntity{
    constructor(
        public id: number,
        public bookshelfId: number,
        public bookId: number,
        public readingProgress: number = 0,
        public totalPages: number | null,
        public deletedAt: Date | null,
    ){};

    static fromObject(object: IBookshelfBookFromObject): BookshelfBookEntity{
        const {id, bookshelfId, bookId, readingProgress, totalPages, deletedAt} = object;
        return new BookshelfBookEntity(
            id, 
            bookshelfId, 
            bookId, 
            readingProgress, 
            totalPages, 
            deletedAt,
        );
    }
}