const add = require('./stringCalculator');

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('should return the number itself if the string contains one number', () => {
    expect(add("1")).toBe(1);
});

test('should return the sum of two numbers separated by a comma', () => {
    expect(add("1,2")).toBe(3);
});

test('should return the sum of multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});

test('should handle newlines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('should support custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n1|2|3")).toBe(6);
});

test('should throw an exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    expect(() => add("//;\n1;-2;-3")).toThrow("Negative numbers not allowed: -2, -3");
});

test('should handle an empty custom delimiter string and return 0', () => {
    expect(add("//;\n")).toBe(0);
});

test('should handle numbers with large values', () => {
    expect(add("1000,2000")).toBe(3000);
});

