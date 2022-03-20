let i = 5;
let answer = 5;


function findFactorialRecursive(number) {
    if (i <= 1) {
        console.log(answer);
        return answer
    }
    let j = i - 1;
    answer = answer * j;
    i = j
    //return number*findFactorialRecursive(number-1);
    findFactorialRecursive(i)
}

findFactorialRecursive(i)