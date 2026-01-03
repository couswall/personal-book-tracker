import {IBaseFetchRes} from '@store/books/getBookById/interfaces';

export interface IGetReducerBase {
    loading: boolean;
    error?: string;
}

export interface ISearchBookReducer {
    searchBookData: ISearchBookData;
    loadings: ISearchBookLoadings;
    error?: string;
}

export interface ISearchBookLoadings {
    page: boolean;
    navbar: boolean;
}

export interface ISearchBookData {
    page: ISearchingRes | null;
    navbar: ISearchingRes | null;
}

export interface ISearchBook {
    id: number;
    title: string;
    authors?: string[];
    imageCover?: string;
}

export interface ISearchBookAPIResponse extends IBaseFetchRes {
    data: ISearchingRes;
}

export interface ISearchingRes {
    page: number;
    maxResults: number;
    books: ISearchBook[];
}

export interface ISearchBookParams {
    searchText: string;
    page?: number;
    maxResults?: number;
    printType?: PrintTypeEnum;
}

export enum PrintTypeEnum {
    All = 'all',
    Books = 'books',
    Magazines = 'magazines',
}
