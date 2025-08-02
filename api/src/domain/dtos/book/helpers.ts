export const isValidStringArray = (fieldName: string, array?: string[], ): string | undefined => {
    if(!array) return `${fieldName} is required`;
    if(!Array.isArray(array)) return `${fieldName} must be an array`;
    const areAllStrings = array.every(a => typeof a === 'string');
    if(!areAllStrings) return `${fieldName} must be an array of strings`;
};