
export const ERROR_MESSAGES = {
    USER: {
        LOGIN: {
            INVALID_CREDENTIALS: 'Invalid credentials',
        },
        CREATE: {
            EXISTING_USERNAME: 'User with provided username already exists',
            EXISTING_EMAIL: 'User with provided email already exists',
        },
        GET_BY_ID:{
            NO_EXISTING: 'User with the provided ID not found.'
        }
    },
    TOKEN: {
        CREATING: 'Error while creating token',
        INVALID: 'Invalid or expired token',
        NO_TOKEN: 'No token sent',
    },
    EXTERNAL_BOOKS_API:{
        INTERNAL: 'Google books API error',
    },
    BOOKSHELF: {
        CREATE_CUSTOM:{
            EXISTING: 'A booksheld with that name already exists',
        }
    }
}