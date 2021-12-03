export const caesarCipher = (str: string, shift: number) : string => {
    if (shift < 0 || shift > 25) return 'Invalid shift, must be between 0 - 25'
    const formattedStr: string = str.toLowerCase();
    let cipher: string = '';
    for (let i = 0; i < str.length; i++) {
        let key: string = str[i];
        let toPoint: number = formattedStr.charCodeAt(i) + shift;
        if (/[a-z]/i.test(formattedStr[i])) {
            key = String.fromCharCode(toPoint > 122 ? toPoint - 26 : toPoint);
        }
        cipher += key;
    }
    return cipher
}

// 65 - 90; // 97 - 122
