const { toLowerCase, toUpperCase, text2Hex, hex2Text, numberToHex, hexToNumber } = require('./index');

console.log(toLowerCase("HELLO WORLD")); // hello world
console.log(toUpperCase("hello world")); // HELLO WORLD
console.log(text2Hex("hello")); // 68656c6c6f
console.log(hex2Text("68656c6c6f")); // hello
console.log(numberToHex(255)); // ff
console.log(hexToNumber("ff")); // 255
