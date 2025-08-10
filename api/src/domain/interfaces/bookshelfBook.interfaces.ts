export interface IAddToBookshelfDto{
    bookshelfId? : number | string;
    apiBookId?: string;
    bookId?: number;
    totalPages?: number;
    bookshelfType?: string;
}

export interface IBookshelfBookFromObject{
    id: number;
    bookshelfId: number;
    bookId: number;
    readingProgress: number;
    totalPages: number | null;
    deletedAt: Date | null;
}