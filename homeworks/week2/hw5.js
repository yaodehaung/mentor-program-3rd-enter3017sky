function join(str, concatStr) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (i !== str.length - 1) {
      result += str[i] + concatStr;
    } else {
      result += str[i];
    }
  }
  return result;
}

function repeat(str, times) {
  let result = '';
  for (let i = 0; i < times; i += 1) {
    result += str;
  }
  return result;
}

console.log(join([1, 2, 3], ''));

console.log(repeat('yoyo', 2));
