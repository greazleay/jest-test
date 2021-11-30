import { capitalize } from "@modules/capitalize";

test('Capitalize string', () => {
    expect(capitalize('industry')).toBe('Industry')
});

test('Capitalize empty string', () => {
    expect(capitalize('')).toBe('')
});

