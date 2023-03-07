// Input: N = 4
// Output:
// * * * *
// * * * *
// * * * *
// * * * *
var getPattern = function (N) {
  let str = '';
  for (let x = 0; x < N; x++) {
    str = str + '*';
  }

  for (let x = 0; x < N; x++) {
    console.log(str);
  }
};

getPattern(4);
