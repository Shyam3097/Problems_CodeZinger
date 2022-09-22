function solution(n, arr) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] == sum / 2) {
      return "Yes";
    }
  }
  return "No";
}
