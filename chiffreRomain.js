function decimalToRoman(decimal) {
    // tableau des valeurs numériques romaines
    const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    // tableau des valeurs décimales correspondantes
    const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    let roman = '';
    let index = 0;
  
    while (decimal > 0) {
      if (decimal >= decimalValues[index]) {
        roman += romanNumerals[index];
        decimal -= decimalValues[index];
      } else {
        index++;
      }
    }
    return roman;
  }
  