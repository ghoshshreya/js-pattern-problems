var getPattern = function (N) {
  let max = N * 2 - 1;
  let str1 = '';
  for (let x = 1; x <= N; x++) {
    let i = 2 * x - 1; // Number of * that will be printed
    let str = '';
    while (i > 0) {
      str = str + '*';
      i--;
    }

    let addSpace = Math.floor((max - str.length) / 2);
    while (addSpace > 0) {
      str = '&nbsp;' + str;
      str = str + '&nbsp;';
      addSpace = addSpace - 1;
    }
    str1 = str1 + '\n' + str;
  }
  console.log(str1);
};

getPattern(4);
