function transform(text) {
  var arr = text.split('');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = toNum(arr[i]);
  }
  return parseInt(arr.join(''));
}

function toNum(v) {
  var _m = v.toUpperCase().charCodeAt();
  if (_m < 48) {
    return 0;
  }
  if (_m >= 48 && _m <= 57) {
    return v;
  }
  if (_m >= 65 && _m <= 73) {
    return _m - 64;
  }
  if (_m >= 74 && _m <= 82) {
    return _m - 73;
  }
  if (_m >= 83 && _m <= 90) {
    return _m - 82;
  }
  return 0;
}

let x1 = transform('abcdefghijklm');
let x2 = transform('nopqrstuvwxyz');
let x3 = transform('ABCDEFGHIJKLMN');
let x4 = transform('OPQRSTUVWXYZ0');
let x5 = transform('987654321#$%^&*(');
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);
