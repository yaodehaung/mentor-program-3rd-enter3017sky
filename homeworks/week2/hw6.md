``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程

1. 執行這個檔案的時候，先建立這個檔案的執行環境，執行環境裡面有這個 isValid function。
2. 然後呼叫這個 function
3. => arr.length = 6
4. 進入第一個 for 迴圈
5. => 當 i = 0 時，判斷 arr[0] <= 0 是否成立？否！i++
6. => 當 i = 1 時，判斷 arr[1] <= 0 是否成立？否！i++
7. ...
8. => 當 i = 5 時，判斷 arr[5] <= 0 是否成立？否！i++
9. i = 6 時，i < arr.length 嗎？ false！跳出第一個迴圈。
10. 進入第二個 for 迴圈
11. => 當 i = 2 時，判斷 arr[2] !== arr[2-1] + arr[2-2](8 !== 5 + 3) 是否成立？否！i++
12. => 當 i = 3 時，判斷 arr[3] !== arr[3-1] + arr[3-2](13 !== 8 + 5) 是否成立？否！i++
13. => 當 i = 4 時，判斷 arr[4] !== arr[4-1] + arr[4-2](22 !== 13 + 8) 是否成立？是！回傳 'invalid'
14. function 執行完畢。
