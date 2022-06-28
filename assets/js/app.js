
  let units = ['', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

  let teens = ['десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];

  let tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];

  let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

  // let num = +prompt('Введите число:');

  let num = 643;

  function hrivna(num){
    let lastDigitStr = String(num).slice(-1);
    let lastDigitNum = Number(lastDigitStr);
    if (lastDigitNum == 1) {
      return 'гривна';
    }else if (lastDigitNum == 2 || lastDigitNum == 3){
      return 'гривны';
    }else {
      return 'гривен';
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
    if (num >= 1000) {
      return convertHundreds(Math.floor(num / 1000)) + ' тысяч ' + convertHundreds(num % 1000); 
    }else {
      return convertHundreds(num);
    }
  }

  function convertMillions(num) {
    if (num >= 1000000 && num <= 999999999){
      units.splice(1, 2, 'один', 'два');
      return convertThousands(Math.floor(num / 1000000)) + ' миллионов ' + convertThousands(num % 1000000);
    }else {
      return convertThousands(num);
    }
  }

  console.log(convertMillions(num) + ' ' + hrivna(num));

  

