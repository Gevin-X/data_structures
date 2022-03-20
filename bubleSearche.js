arr = [23, 54, 3, 7, 542, 4, 35,333,1,5,553,3,22222];

function buble(arr) {
    
    for (let j = 0; j < arr.length; j++) {
    
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let hold   = arr[i];
                arr[i]     = arr[i + 1];
                arr[i + 1] = hold;
            }
        }
    }
    console.log(arr);
}

buble(arr);
