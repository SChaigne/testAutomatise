const convertToRoman = require('./chiffreRomain');


//ETANT DONNE le chiffre 1
// QUAND on le converti en nombre romain
// ALORS on obtient I
test('convert decimal 1 to roman I', () => {
  expect(convertToRoman(1)).toBe("I");
});

test('convert decimal 2 to roman II', () => {
  expect(convertToRoman(2)).toBe("II");
});

test('convert decimal 3 to roman III', () => {
  expect(convertToRoman(3)).toBe("III");
});

test('convert decimal 4 to roman IV', () => {
  expect(convertToRoman(4)).toBe("IV");
});

test('convert decimal 5 to roman V', () => {
  expect(convertToRoman(5)).toBe("V");
});

test('convert decimal 6 to roman VI', () => {
  expect(convertToRoman(6)).toBe("VI");
});

test('convert decimal 7 to roman VII', () => {
  expect(convertToRoman(7)).toBe("VII");
});

test('convert decimal 8 to roman VIII', () => {
  expect(convertToRoman(8)).toBe("VIII");
});

test('convert decimal 9 to roman IX', () => {
  expect(convertToRoman(9)).toBe("IX");
});

test('convert decimal 10 to roman X', () => {
  expect(convertToRoman(10)).toBe("X");
});

test('convert decimal 11 to roman XI', () => {
  expect(convertToRoman(11)).toBe("XI");
});

test('convert decimal 12 to roman XII', () => {
  expect(convertToRoman(12)).toBe("XII");
});
