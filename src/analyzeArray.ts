interface IObj {
    average: number,
    min: number,
    max: number,
    length: number
}

export const analyzeArray = (arr: number[]): IObj => {
    return {
        average: arr.reduce((p, c) => p + c) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}