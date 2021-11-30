class Calculator {
    add = (a: number, b: number): number => {
        return a + b
    };

    subtract = (a: number, b: number): number => {
        return a - b
    };

    divide = (a: number, b: number): number | string => {
        return b ? a / b : 'Infinity'
    };

    multiply = (a: number, b: number): number => {
        return a * b
    };
}

export default new Calculator