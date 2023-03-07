// N = 5
// 1
// 12
// 123
// 1234
// 12345

var getPattern = function (N) {
  for (let x = 1; x <= N; x++) {
    let str = '';
    for (let j = 1; j <= x; j++) {
      str = str + j.toString();
    }
    console.log(str);
  }
};

getPattern(5);
