export const reverseString = (str: string) : string => {
    return str.length ? str.split('').reverse().join('') : '';
};