import fizzBuzz from './index';

describe('fizzBuzz', () => {
    it("exists", () => {
        const type = typeof fizzBuzz;
        expect(type).toEqual('function');
    });
    describe("input validation", () => {
        it("throws error if non-numeric", () => {
            expect(() => fizzBuzz('asdf')).toThrowError("Input must be an integer");
        });

        it("throws error if non-integer", () => {
            expect(() => fizzBuzz(1.4)).toThrowError("Input must be an integer");
        });

        it("throws error if less than 1", () => {
            expect(() => fizzBuzz(-1)).toThrowError("Input is out of range");
        });

        it("throws error if bigger than 100", () => {
            expect(() => fizzBuzz(101)).toThrowError("Input is out of range");
        });

    });

    describe("return correct result", () => {
        it("return correct result when input=14", () => {
            const result = fizzBuzz(14);
            expect(result).toEqual("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14");
        });

        it("return correct result when input =15", () => {
            const result = fizzBuzz(15);
            expect(result).toEqual("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz");
        });
    });

});