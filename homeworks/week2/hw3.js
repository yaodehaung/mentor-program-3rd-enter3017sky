function reverse(str) {
  const conventString = str.split(''); // 將字串使用 split 方法變成陣列
  const lastIndex = conventString.length - 1; // 宣告變數 lastIndex 設定陣列最後的 index 是多少
  const result = [];
  conventString.forEach((item, index) => {
    result[lastIndex - index] = item; // 將第一個 item 放入 result 的最後一個, 第二個 item 放入最後一格減一格的位置...以此類推
  });
  return result.join(''); // 轉回字串
}

console.log(reverse('hello'));
