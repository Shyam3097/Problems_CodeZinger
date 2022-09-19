function solution(n,m,arr){
    // Write your solution here
    for(let i = 0; i<n; i++){
        let ar = [];
        let sum = 0;
        for(let j = 0; j<n; j++){
            if(arr[i]<arr[j]){
                ar.push(arr[i]);
            }else{
                ar.push(arr[j]);
            }
            sum += ar[j];
        }
        if(sum == m){
            return arr[i];
        }
    }
    return -1;
}
