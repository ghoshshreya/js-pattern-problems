// N = 5
// 1
// 22
// 333
// 4444
// 55555

var getPattern = function (N) {
  for (let x = 1; x <= N; x++) {
    let str = '';
    for (let j = 1; j <= x; j++) {
      str = str + x.toString();
    }
    console.log(str);
  }
};

getPattern(5);
