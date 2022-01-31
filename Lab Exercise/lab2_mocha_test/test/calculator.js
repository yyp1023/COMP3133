var assert = require('chai').assert;
var calculator = require('../app/calculator');

describe('Addition', () => {
    makeTest = (i, j) => {
        let expected = i + j;
        it(`${i} + ${j} is ${expected}`, () => {
            assert.equal(calculator.add(i, j), expected);
        });
    }

    makeTest(1, 2);
});

describe('Addition', () => {
    makeTest = (i, j) => {
        let expected = i + j + 1;
        it(`${i} + ${j} is ${expected}`, () => {
            assert.equal(calculator.add(i, j), expected);
        });
    }

    makeTest(1, 2);
});

describe('Subtraction', () => {
    makeTest = (i, j) => {
        let expected = i - j;
        it(`${i} - ${j} is ${expected}`, () => {
            assert.equal(calculator.sub(i, j), expected);
        });
    }

    makeTest(5, 3);
});

describe('Subtraction', () => {
    makeTest = (i, j) => {
        let expected = i - j + 1;
        it(`${i} - ${j} is ${expected}`, () => {
            assert.equal(calculator.sub(i, j), expected);
        });
    }

    makeTest(5, 3);
});

describe('Multiplication', () => {
    makeTest = (i, j) => {
        let expected = i * j;
        it(`${i} * ${j} is ${expected}`, () => {
            assert.equal(calculator.mul(i, j), expected);
        });
    }

    makeTest(8, 4);
});

describe('Multiplication', () => {
    makeTest = (i, j) => {
        let expected = i * j + 1;
        it(`${i} * ${j} is ${expected}`, () => {
            assert.equal(calculator.mul(i, j), expected);
        });
    }

    makeTest(8, 4);
});

describe('Division', () => {
    makeTest = (i, j) => {
        let expected = i / j;
        it(`${i} / ${j} is ${expected}`, () => {
            assert.equal(calculator.div(i, j), expected);
        });
    }

    makeTest(10, 5);
});

describe('Division', () => {
    makeTest = (i, j) => {
        let expected = i / j + 1;
        it(`${i} / ${j} is ${expected}`, () => {
            assert.equal(calculator.div(i, j), expected);
        });
    }

    makeTest(10, 5);
});
