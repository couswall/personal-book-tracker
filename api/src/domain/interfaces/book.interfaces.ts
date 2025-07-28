import { BookshelfBookEntity, NoteEntity, ReviewEntity } from "@domain/entities";

export interface ISearchGoogleBook{
    id: string;
    title: string;
    authors: string[];
    imageCover?: string;
};

export enum PrintTypeEnum {
    All = 'all',
    Books = 'books',
    Magazines = 'magazines',
};

export interface ISearchBookDto{
    searchText: string;
    page?: number;
    printType?: PrintTypeEnum;
    maxResults?: number;
};

export interface ISearchBookResponse{
    page: number;
    maxResults: number;
    books: ISearchGoogleBook[];
}

export interface IGetBookByIdResponse{
    id: string;
    title: string;
    subtitle?: string;
    authors: string[];
    publishedDate?: string;
    description?: string;
    coverImageUrl?: string;
    categories: string[];
}

export interface IFindByApiIdDto{
    apiBookId?: string;
}

export interface ICreateBookEntityFromObject{
    id: number;
    googleBookId: string;
    title: string;
    authors: string[];
    description: string | null;
    publishedDate: Date | null;
    coverImageUrl: string | null;
    categories: string[];
    averageRating: number | null;
    reviewCount: number;
    bookshelves?: BookshelfBookEntity[];
    reviews?: ReviewEntity[];
    notes?: NoteEntity[];
}