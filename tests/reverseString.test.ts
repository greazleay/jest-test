import { reverseString } from "@modules/reverseString";

test('Reverse a string', () => {
    expect(reverseString('fire')).toBe('erif');
});

test('Reverse another string', () => {
    expect(reverseString('Water')).toBe('retaW');
});

test('Reverse an empty string', () => {
    expect(reverseString('')).toBe('')
});