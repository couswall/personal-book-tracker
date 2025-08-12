export const isValidStringArray = (fieldName: string, array?: string[], ): string | undefined => {
    if(!array) return `${fieldName} is required`;
    if(!Array.isArray(array)) return `${fieldName} must be an array`;
    const areAllStrings = array.every(a => typeof a === 'string');
    if(!areAllStrings) return `${fieldName} must be an array of strings`;

    return undefined;
};

export const isValidString = (
    fieldName: string, 
    text?: string, 
    minLength?: number,
    maxLength?: number,
    blankSpaces?: boolean,
): [string?, string?] => {
    if(!text) return [`${fieldName} is required`];
    if(typeof text !== 'string') return [`${fieldName} must be a string`];
    const trimmedText = text.trim();

    if(blankSpaces && text.trim().length === 0)
        return [`${fieldName} must not contain only blankspaces`];

    if(minLength && trimmedText.length < minLength) 
        return [`${fieldName} must contain at least ${minLength} characters long`];

    if(maxLength && trimmedText.length > maxLength)
        return [`${fieldName} must contain at most ${maxLength} characters long`];

    return [undefined, trimmedText];
};

export const isValidNullString = (
    fieldName: string,
    text: string | null,
    minLength?: number,
    maxLength?: number,
): string | undefined => {
    if(text === null) return undefined;
    if(text !== null && typeof text !== 'string') return `${fieldName} must be a string or null`;

    if(typeof text === 'string'){
        const trimmedText = text.trim();
            if (minLength && trimmedText.length < minLength) {
            return `${fieldName} must contain at least ${minLength} characters long`;
        }
        if (maxLength && trimmedText.length > maxLength) {
            return `${fieldName} must contain at most ${maxLength} characters long`;
        }
    }

    return undefined;
};

export const isValidRequiredNumber = (
    fieldName: string,
    field?: number | string,
): [string?, number?]=> {
    if(field === undefined || field === null) return [`${fieldName} is required`];
    if(Array.isArray(field) || typeof field === 'boolean') return [`${fieldName} must be a number`];
    field = +field
    if(isNaN(field)) return [`${fieldName} must be a number`];

    return [undefined, field];
};