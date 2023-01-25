import { convertToRoman } from './chiffreRomain';


//ETANT DONNE le chiffre 1
// QUAND on le converti en nombre romain
// ALORS on obtient I
test('convert decimal 1 to roman I', () => {
  expect(convertToRoman(1)).toBe("I");
});

test('convert decimal 2 to roman II', () => {
  expect(convertToRoman(3)).toBe("II");
});

test('convert decimal 3 to roman III', () => {
  expect(convertToRoman(3)).toBe("III");
});
