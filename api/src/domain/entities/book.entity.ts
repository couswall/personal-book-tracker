import { BookshelfBookEntity } from "@domain/entities/bookshelfBook.entity";
import {NoteEntity, ReviewEntity} from '@domain/entities/index';
import { ICreateBookEntityFromObject } from "@domain/interfaces/book.interfaces";

export class BookEntity{
    constructor(
        public id: number,
        public googleBookId: string,
        public title: string,
        public authors: string[],
        public description: string | null,
        public publishedDate: Date | null,
        public coverImageUrl: string | null,
        public categories: string[],
        public averageRating: number = 0,
        public reviewCount: number = 0,
        public bookshelves: BookshelfBookEntity[] = [],
        public reviews: ReviewEntity[] = [],
        public notes: NoteEntity[] = [],
    ){};

    public static fromObject(object: ICreateBookEntityFromObject): BookEntity{
        return new BookEntity(
            object.id,
            object.googleBookId,
            object.title,
            object.authors,
            object.description,
            object.publishedDate,
            object.coverImageUrl,
            object.categories,
            object.averageRating ?? 0,
            object.reviewCount,
            object.bookshelves,
            object.reviews,
            object.notes,
        );
    }
}