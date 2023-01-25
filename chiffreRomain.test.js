const convertToRoman = require('./chiffreRomain');


//ETANT DONNE le chiffre 1
// QUAND on le converti en nombre romain
// ALORS on obtient I
test('convert decimal 1 to roman I', () => {
  expect(convertToRoman(1)).toBe("I");
});

test('convert decimal numbers from 1 to 12 to roman', () => {
  for (let i = 1; i <= 12; i++) {
    expect(decimalToRoman(i)).toBe(convertToRoman(i));
  }
});
