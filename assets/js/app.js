
  let units = ['', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

  let teens = ['десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];

  let tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];

  let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

  // let num = +prompt('Введите число:');

  let num = 11;

  function hrivna(num){
    let lastDigit = +String(num).slice(-1);
    let twoLastDigit = +String(num).slice(-2);
    if (lastDigit > 3 && lastDigit <= 9 || lastDigit == 0 || twoLastDigit == 11) {
      return 'гривен';
    }else if (lastDigit == 2 || lastDigit == 3){
      return 'гривны';
    }else if (lastDigit == 1){
      return 'гривна';
    }
  }

  function convertTens(num) {
    if(num < 10){
      return units[num];
    }else if(num >= 10 && num < 20){
      return teens[num - 10];
    }else {
      return tens[Math.floor(num / 10)] + ' ' + units[num % 10];
    }
  }

  function convertHundreds(num) {
    if (num >= 100){
      return hundreds[Math.floor(num / 100)] + ' ' + convertTens(num % 100);
    }else {
      return convertTens(num)
    }
  }
  
  function convertThousands(num) {
    if (num >= 1000 && num < 2000) {
      return convertHundreds(Math.floor(num / 1000)) + ' тысяча ' + convertHundreds(num % 1000); 
    }else if (num >= 2000 && num < 5000){
      return convertHundreds(Math.floor(num / 1000)) + ' тысячи ' + convertHundreds(num % 1000);
    }else if (num >= 5000){
      return convertHundreds(Math.floor(num / 1000)) + ' тысяч ' + convertHundreds(num % 1000);
    }else{
      return convertHundreds(num);
    }
  }

  function convertMillions(num) {
    if (num >= 1000000 && num < 2000000){
      return convertThousands(Math.floor(num / 1000000)) + ' миллион ' + convertThousands(num % 1000000);
    }else if (num >= 2000000 && num < 5000000){
      return convertThousands(Math.floor(num / 1000000)) + ' миллиона ' + convertThousands(num % 1000000);
    }else if (num >= 5000000 && num <= 999999999){
      return convertThousands(Math.floor(num / 1000000)) + ' миллионнов ' + convertThousands(num % 1000000);
    }else {
      return convertThousands(num);
    }
  }

  function main() {
  var cases = [1, 2, 10, 11, 19, 20, 21, 22, 27, 50, 99, 100, 101, 110, 111, 1000, 2011, 4000, 5000, 1000011, 2000000, 3000000, 5000000, 999999999];
  for (var i = 0; i < cases.length; i++) {
    console.log(cases[i] + ": " + convertMillions(cases[i]) + ' ' + hrivna(cases[i]));
  }
}

  main();

  console.log(convertMillions(num) + ' ' + hrivna(num));

  

