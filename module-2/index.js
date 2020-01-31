
export default function fizzBuzz(value) {
    validateInput(value);
    const range = getRange(1, value);
    const mapped = replaceRangeValues(range);
    return mapped.join(' ');
}

function replaceRangeValues(range) {
    return range.map(item => {
        if (item % 15 === 0) {
            return 'FizzBuzz';
        }
        if (item % 3 === 0) {
            return 'Fizz';
        }
        if (item % 5 === 0) {
            return 'Buzz';
        }
        return item;
    });
}

function validateInput(value) {
    const isInteger = Number.isInteger(value);
    if (!isInteger) {
        throw new Error("Input must be an integer");
    }
    if (value < 1 || value > 100) {
        throw new Error("Input is out of range");
    }
}

function getRange(from, to) {
    let range = [];

    for (let i = from; i <= to; i++) {
        range.push(i);
    }
    return range;
}