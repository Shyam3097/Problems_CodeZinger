function isEqual (a, b) {
    if (a[0] == b[0] && a[1] == b[1]) {
        return true;
    }
    if (a[0] == b[1] && a[1] == b[0]) {
        return true;
    }
    return false;
}

function solution (n, arr) {
    // Write your solution here
    let mat = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            mat.push([arr[i], arr[j]]);
        }
    }
    n = mat.length;
    let sum = [];
    for (let i = 0; i < n; i++) {
        let flag = false;
        for (let j = i + 1; j < n; j++) {
            if (isEqual(mat[i], mat[j]) === true) {
                flag = true;
            }
        }
        if (flag === true) {
            continue;
        } else {
            sum.push(mat[i][0] + mat[i][1]);
        }
    }
    n = arr.length;

    // 1st approache
    const newArr = new Set(arr);
    arr = [...newArr];

    /*
      // 2nd approache
      let obj = {};
      for(let i = 0; i<n; i++){
          if(obj[arr[i]] === undefined){
              obj[arr[i]] = 1;
          }else{
              obj[arr[i]]++;
          }
      }
      arr = Object.keys(obj).map(Number);
      */

    let count = 0;
    for (let i = 0; i < sum.length; i++) {
        for (let j = 0; j < n; j++) {
            if (sum[i] == arr[j]) {
                count++;
            }
        }
    }
    return count;
}

console.log(solution(6, [1, 5, 6, 4, -1, 5, 10]));
