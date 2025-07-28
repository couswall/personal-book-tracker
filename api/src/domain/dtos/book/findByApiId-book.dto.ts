import { BOOKSHELF_BOOK_DTO_ERRORS } from "@domain/constants/bookshelfBook.constants";
import { IFindByApiIdDto } from "@domain/interfaces/book.interfaces";

export class FindByApiIdDto{
    constructor(
        public readonly apiBookId: string,
    ){};

    static create(object: IFindByApiIdDto): [string?, FindByApiIdDto?]{
        let {apiBookId} = object;

        if(!apiBookId) return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.API_BOOK_ID.REQUIRED];
        if(typeof apiBookId !== 'string') return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.API_BOOK_ID.STRING];
                
        apiBookId = apiBookId.trim();
        if(apiBookId.trim().length === 0) return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.API_BOOK_ID.BLANK_SPACES];
        if(apiBookId.length < 3) return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.API_BOOK_ID.MIN_LENGTH];
        if(apiBookId.length > 15) return [BOOKSHELF_BOOK_DTO_ERRORS.ADD_TO_BOOKSHELF.API_BOOK_ID.MAX_LENGTH];
    
        return [undefined, new FindByApiIdDto(apiBookId)];
    }
}