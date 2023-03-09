// N = 5
// ***********
//  *********
//    *****
//     ***
//      *

let getPattern = function (n) {
  for (let x = n; x > 0; x--) {
    for (y = x; y > 0; y--) {
      console.log('*');
    }
  }
};

getPattern(1);
