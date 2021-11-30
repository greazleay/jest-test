import calculator from "@modules/calculator";

test('Add numbers', () => {
    expect(calculator.add(2, 3)).toBe(5)
});

test('Subtract numbers', () => {
    expect(calculator.subtract(4, 3)).toBe(1)
});

test('Divide numbers 1', () => {
    expect(calculator.divide(4, 2)).toBe(2)
});

test('Divide numbers 2', () => {
    expect(calculator.divide(5, 0)).toBe("Infinity")
});

test('Multiply numbers', () => {
    expect(calculator.multiply(7, 3)).toBe(21)
});