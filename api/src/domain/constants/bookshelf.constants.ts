export const BOOK_SHELF_DTO_ERRORS = {
    CREATE_CUSTOM_BOOKSHELF:{
        USER_ID: {
            REQUIRED: 'userId is required',
            NUMBER: 'userId must be a number',
        },
        SHELF_NAME: {
            REQUIRED: 'shelfName is required',
            STRING: 'shelfName should be a string',
            BLANK_SPACES: 'shelfName cannot include only blank spaces',
            MIN_LENGHT: 'shelfName must contain at least 1 character long',
            MAX_LENGHT: 'shelfName must contain at last 90 characters long',
        }
    },
};