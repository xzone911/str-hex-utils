function toLowerCase(str) {
    return str.toLowerCase();
}

function toUpperCase(str) {
    return str.toUpperCase();
}

function text2Hex(str) {
    return Array.from(str).map(c => c.charCodeAt(0).toString(16)).join('');
}

function hex2Text(hex) {
    var hexes = hex.match(/.{1,2}/g) || [];
    return hexes.map(h => String.fromCharCode(parseInt(h, 16))).join('');
}

function numberToHex(number) {
    return number.toString(16);
}

function hexToNumber(hex) {
    return parseInt(hex, 16);
}

module.exports = {
    toLowerCase,
    toUpperCase,
    text2Hex,
    hex2Text,
    numberToHex,
    hexToNumber
};
