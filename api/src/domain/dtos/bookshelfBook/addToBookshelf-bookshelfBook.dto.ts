import { BOOKSHELF_BOOK_DTO_ERRORS } from "@domain/constants/bookshelfBook.constants";
import { IAddToBookshelfDto } from "@domain/interfaces/bookshelfBook.interfaces";

export class AddToBookshelfDto{
    constructor(
        public readonly bookshelfId: number,
        public readonly apiBookId: string,
    ){};

    static create(object: IAddToBookshelfDto): [string?, AddToBookshelfDto?]{
        let {bookshelfId, apiBookId} = object;
        
        if(!bookshelfId) return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.BOOKSHELF_ID.REQUIRED];
        if(Array.isArray(bookshelfId)) return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.BOOKSHELF_ID.NUMBER];
        bookshelfId = +bookshelfId
        if(isNaN(bookshelfId)) return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.BOOKSHELF_ID.NUMBER];
   
        if(!apiBookId) return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.API_BOOK_ID.REQUIRED];
        if(typeof apiBookId !== 'string') return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.API_BOOK_ID.STRING];
        
        apiBookId = apiBookId.trim();
        if(apiBookId.trim().length === 0) return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.API_BOOK_ID.BLANK_SPACES];
        if(apiBookId.length < 3) return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.API_BOOK_ID.MIN_LENGTH];
        if(apiBookId.length > 15) return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.API_BOOK_ID.MAX_LENGTH];

        return [undefined, new AddToBookshelfDto(bookshelfId, apiBookId)];
    }
};