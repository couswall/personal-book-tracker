import { BOOKSHELF_BOOK_DTO_ERRORS } from "@domain/constants/bookshelfBook.constants";
import { IAddToBookshelfDto } from "@domain/interfaces/bookshelfBook.interfaces";

export class AddToBookshelfDto{
    constructor(
        public readonly bookshelfId: number,
        public readonly bookId: number,
        public readonly apiBookId: string,
    ){};

    static create(object: IAddToBookshelfDto): [string?, AddToBookshelfDto?]{
        const {bookshelfId, bookId, apiBookId} = object;
        
        if(!bookshelfId) return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.BOOKSHELF_ID.REQUIRED];
        if(typeof bookshelfId !== 'number') return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.BOOKSHELF_ID.NUMBER];

        if(!bookId) return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.BOOK_ID.REQUIRED];
        if(typeof bookId !== 'number') return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.BOOK_ID.NUMBER];
       
        if(!apiBookId) return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.API_BOOK_ID.REQUIRED];
        if(typeof apiBookId !== 'string') return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.API_BOOK_ID.STRING];


        return [undefined, new AddToBookshelfDto(bookshelfId, bookId, apiBookId)];
    }
};