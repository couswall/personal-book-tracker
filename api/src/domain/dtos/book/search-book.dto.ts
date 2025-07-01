import { BOOK_DTO_ERRORS } from "@domain/constants/book.constants";
import { ISearchBookDto, PrintTypeEnum } from "@domain/interfaces/book.interfaces";


export class SearchBookDto{
    constructor(
        public readonly searchText: string,
        public readonly page: number = 1,
        public readonly printType: PrintTypeEnum = PrintTypeEnum.Books,
        public readonly maxResults: number = 10,
    ){};

    static validate(object: ISearchBookDto): string | null{
        const {searchText, page, printType, maxResults} = object;
        
        if(!searchText) return BOOK_DTO_ERRORS.SEARCH_BOOK.SEARCH_TEXT.REQUIRED;
        if(searchText.trim().length === 0) return BOOK_DTO_ERRORS.SEARCH_BOOK.SEARCH_TEXT.BLANK_SPACES;

        if(typeof page !== 'undefined' && (typeof page !== 'number' || isNaN(page))) 
            return BOOK_DTO_ERRORS.SEARCH_BOOK.PAGE.NUMBER;
        
        if(printType && !Object.values(PrintTypeEnum).includes(printType)) 
            return BOOK_DTO_ERRORS.SEARCH_BOOK.PRINT_TYPE.TYPE;

        if(typeof maxResults !== 'undefined' && (typeof maxResults !== 'number' || isNaN(maxResults))) 
            return BOOK_DTO_ERRORS.SEARCH_BOOK.MAX_RESULTS.NUMBER;
        
        return null;
    };

    static create(object: ISearchBookDto): [string?, SearchBookDto?]{
        const {searchText, page, printType, maxResults} = object;
        
        const errorMsg = SearchBookDto.validate(object);

        if(errorMsg) return [errorMsg];

        return [undefined, new SearchBookDto(searchText.trim(), page, printType, maxResults)];
    };
}