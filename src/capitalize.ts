export const capitalize = (str: string): string | null => {
    return str.length ? str.replace(str[0], str[0].toUpperCase()) : null;
}