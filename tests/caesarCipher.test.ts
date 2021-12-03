import { caesarCipher } from '@modules/caesarCipher';

test('Encrypt string', () => {
    expect(caesarCipher('goat Skin', 25)).toBe('fnzs rjhm');
});

test('Encrypt string, test for punctuation', () => {
    expect(caesarCipher('You\'re Wrong.', 25)).toBe('xnt\'qd vqnmf.');
});

test('Encrypt string, test valid shift rangge', () => {
    expect(caesarCipher('They are hiding', -2)).toBe('Invalid shift, must be between 0 - 25');
});