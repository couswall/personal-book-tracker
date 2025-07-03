import { BookshelfBookEntity } from "@domain/entities/bookshelfBook.entity";
import {NoteEntity, ReviewEntity} from '@domain/entities/index';

export class BookEntity{
    constructor(
        public id: number,
        public googleId: string,
        public title: string,
        public authors: string[],
        public description: string | null,
        public publishedDate: Date | null,
        public coverImageUrl: string | null,
        public categories: string[],
        public averageRating: number = 0,
        public reviewCount: number = 0,
        public bookshelves: BookshelfBookEntity[],
        public reviews: ReviewEntity[] = [],
        public notes: NoteEntity[] = [],

    ){};
}