const { toLowerCase, toUpperCase, text2Hex, hex2Text, numberToHex, hexToNumber } = require('../index');

test('converts string to lowercase', () => {
    expect(toLowerCase("HELLO WORLD")).toBe("hello world");
});

test('converts string to uppercase', () => {
    expect(toUpperCase("hello world")).toBe("HELLO WORLD");
});

test('converts text to hex', () => {
    expect(text2Hex("hello")).toBe("68656c6c6f");
});

test('converts hex to text', () => {
    expect(hex2Text("68656c6c6f")).toBe("hello");
});

test('converts number to hex', () => {
    expect(numberToHex(255)).toBe("ff");
});

test('converts hex to number', () => {
    expect(hexToNumber("ff")).toBe(255);
});
