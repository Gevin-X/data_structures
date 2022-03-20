arr = [23, 54, 3, 7, 542, 4, 35,333,1,5,553,3,22222];


function ssort(arr) {
    for(let j = 0; j < arr.length ; j++  ){
        let leesNum = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (leesNum > arr[i]){
                leesNum = arr[i]; 
            }
            
        }
        arr.sift(leesNum);
    }
    console.log(arr);
}
ssort(arr)