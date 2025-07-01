export const BOOK_DTO_ERRORS = {
    SEARCH_BOOK: {
        SEARCH_TEXT: {
            REQUIRED: 'searchText is required',
            BLANK_SPACES: 'searchText cannot contain only blank spaces',
        },
        PAGE: {NUMBER: 'page must be a number',},
        PRINT_TYPE: {TYPE: 'printType must be all, books or magazines',},
        MAX_RESULTS: {NUMBER: 'maxResults must be a number',}
    },
}