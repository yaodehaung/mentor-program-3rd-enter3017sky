function capitalize(str) {
  const conventString = str.split(''); // 將字串使用 split 方法變成陣列
  const result = []; // 宣告變數 result 為空陣列，將處理好的字元塞給它

  // conventString 這個 Array，對它使用 forEach 方法，使用箭頭函式
  conventString.forEach((item, index) => {
    if (index === 0) { // 當 index === 0 時，當下的元素就轉成大寫，然後使用陣列的 push 方法新增到 result
      result.push(item.toUpperCase());
    } else { // 如果不是就直接 push 給 reuslt
      result.push(item);
    }
  });

  return result.join(''); // 將轉換好的 result Array 變原本的字串
}
console.log(capitalize('hello'));


// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// 使用三元運算子
// conventString.forEach((item, index) => {
//   index === 0 ? result.push(item.toUpperCase()) : result.push(item)
// })

// 一開始寫的
// conventString.forEach((item, index) => {
//   if(index === 0 ) {
//     result.push(conventString[index].toUpperCase())
//   } else {
//     result.push(conventString[index])
//   }
// })
