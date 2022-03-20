
function fibonacciIterative(num) {
    let arr = [0,1];
    for (let i = 2; num +1 > i; i++) {
        //console.log([arr.length-1]);
        //arr.push[(arr.length-1)+(arr.length-2)]
        //arr.push[j]
        arr.push(arr[arr.length-1]+arr[arr.length-2])
    }    
    // console.log(arr);

}

fibonacciIterative(8);


// function fibonachi(n) {
//     if (n<2){
//         return n;
//     }
//     return fibonachi(n-1) + fibonachi(n-2); 
// }


// fibonachi(5)
// 