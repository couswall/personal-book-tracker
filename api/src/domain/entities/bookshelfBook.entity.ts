import { ReadingStatus } from "@/generated/prisma";

export class BookshelfBookEntity{
    constructor(
        public id: number,
        public bookshelfId: number,
        public bookId: number,
        public readingProgress: number = 0,
        public totalPages: number | null,
        public readingStatus: ReadingStatus = 'TO_BE_READ',
        public deletedAt: Date | null,
    ){};
}