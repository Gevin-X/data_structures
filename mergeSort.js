const numbers = [21,3,24,65,13,86,234,32,6]

function mergesort(array) { 
    if(array.length === 1){
        return array; 
    }
    
    const length = array.length;
    const middle =Math.floor(length/2);
    const left = array.slice(0,middle);
    const right = array.slice(middle);

    return merge(mergesort(left),mergesort(right))
}

function merge(left,right) {
    const result =[];
    let leftIndex = 0;
    let rhgtIndex = 0;
    while (leftindex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < rihgt[rightIndex]){
            result.push
        }
    }
}
