function convertToRoman(nombreArabe) {
    // tableau des valeurs numériques romaines
    const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    // tableau des valeurs décimales correspondantes
    const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    let roman = '';
    let index = 0;
  
    while (nombreArabe > 0) {
      if (nombreArabe >= decimalValues[index]) {
        roman += romanNumerals[index];
        nombreArabe -= decimalValues[index];
      } else {
        index++;
      }
    }
    return roman;
  }
  
  module.exports = convertToRoman;