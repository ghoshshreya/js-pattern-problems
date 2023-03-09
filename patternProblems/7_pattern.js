var getPattern = function (N) {
  let max = N * 2 - 1;
  for (let x = 1; x <= N; x++) {
    let i = 2 * x - 1; // Number of * that will be printed
    let str = '';
    while (i > 0) {
      str = str + '*';
      i--;
    }

    // let addSpace = Math.floor((max - str.length) / 2);

    // while (addSpace > 0) {
    //   str = ' ' + str;
    //   str = str + ' ';
    //   addSpace--;
    // }

    console.log(str);
  }
};

getPattern(4);
