// Input: N = 4
// Output:
// *
// * *
// * * *
// * * * *
var getPattern = function (N) {
  let str = '';
  for (let x = 0; x < N; x++) {
    let j = x + 1;
    let str = '';
    while (j > 0) {
      str = str + '*';
      j--;
    }
    console.log(str);
  }
};

getPattern(4);
