import { BOOK_DTO_ERRORS } from "@domain/constants/book.constants";

export class GetBookByIdDto{
    constructor(
        public readonly bookId: string,
    ){};

    static create(bookId: string): [string?, GetBookByIdDto?]{

        if(!bookId) return [BOOK_DTO_ERRORS.GET_BOOK_BY_ID.REQUIRED];

        return [undefined, new GetBookByIdDto(bookId.trim())];
    }
};