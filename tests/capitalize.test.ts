import { capitalize } from "@modules/capitalize";

test('capitalize string', () => {
    expect(capitalize('industry')).toBe('Industry')
});

test('capitalize empty string', () => {
    expect(capitalize('')).toBe(null)
});

