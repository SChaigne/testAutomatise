import { decimalToRoman } from './chiffreRomain';


//ETANT DONNE le chiffre 1
// QUAND on le converti en nombre romain
// ALORS on obtient I
test('convert decimal 1 to roman I', () => {
  expect(decimalToRoman(1)).toBe("I");
});

test('convert decimal 3 to roman III', () => {
  expect(decimalToRoman(3)).toBe("III");
});
