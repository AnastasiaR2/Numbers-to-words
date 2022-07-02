
  let units = ['', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

  let teens = ['десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];

  let tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];

  let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

  let num = +prompt('Введите число:');

  function hrivna(num){
    let lastDigit = +String(num).slice(-1);
    let twoLastDigit = +String(num).slice(-2);
    if (lastDigit >= 5 && lastDigit <= 9 || lastDigit == 0 || twoLastDigit >= 11 && twoLastDigit <= 14) {
      return 'гривен';
    }else if (lastDigit >= 2 && lastDigit <= 4){
      return 'гривны';
    }else if (lastDigit == 1){
      return 'гривна';
    }
  }

  function thousandsWords(num){
    let checkT = Math.floor(num / 1000);
    let lastDigit = +String(checkT).slice(-1);
    let twoLastDigit = +String(checkT).slice(-2);
    if (lastDigit >= 5 && lastDigit <= 9 || lastDigit == 0 || twoLastDigit >= 11 && twoLastDigit <= 14) {
      return ' тысяч ';
    }else if (lastDigit >= 2 && lastDigit <= 4){
      return ' тысячи ';
    }else if (lastDigit == 1){
      return ' тысяча ';
    }
  }

  function millionWords(num){
    let checkM = Math.floor(num / 1000000);
    let lastDigit = +String(checkM).slice(-1);
    let twoLastDigit = +String(checkM).slice(-2);
    if (lastDigit >= 5 && lastDigit <= 9 || lastDigit == 0 || twoLastDigit >= 11 && twoLastDigit <= 14) {
      return ' миллионов ';
    }else if (lastDigit >= 2 && lastDigit <= 4){
      return ' миллиона ';
    }else if (lastDigit == 1){
      return ' миллион ';

    }
  }

  function convertTens(num) {
    if (num < 10){
      return units[num];
    }else if (num < 10){
      return unitsMil[num];
    }else if (num >= 10 && num < 20){
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
      return convertHundreds(Math.floor(num / 1000)) + thousandsWords(num) + convertHundreds(num % 1000); 
    }else {
      return convertHundreds(num);
    }
  }

  function convertMillions(num) {
    
    if (num >= 1000000 && num <= 999999999){
      num =  convertHundreds(Math.floor(num / 1000000)) + millionWords(num) + convertThousands(num % 1000000);
      let milArr = num.split('миллион');
      milArr[0] = milArr[0].replace('две', 'два');
      milArr[0] = milArr[0].replace('одна', 'один');
      return milArr = milArr.join('миллион');
    }else {
      return convertThousands(num);
    }
  }

  function result (num){
    return (convertMillions(num) + ' ' + hrivna(num)).replace(/ +/g, ' ');
  }

  console.log(`${num}: ${result(num)}`);

  

