// N = 5
// 12345
// 1234
// 123
// 12
// 1

var getPattern = function (N) {
  console.log('Pattern');
  for (let x = N; x >= 1; x--) {
    let str = '';
    for (let j = 1; j <= x; j++) {
      str = str + j.toString();
    }
    console.log(str);
  }
};
console.log('Hello');

getPattern(5);
