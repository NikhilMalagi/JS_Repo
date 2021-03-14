const bubbleSort = (arr) => {
    let temp;
    for(let i=arr.length-1;i>0;i--){
        for(let j=0;j<arr.length;j++){
            if(arr[j] > arr[j+1]){
                /* SWAP */
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([100,-20,3,23,-110])

/* The above sort loops through even if it is sorted in the first attempt */
/* SOL : Have a variable to keep track */


const optiBubbleSort = (arr) => {
    let temp;
    let swapped;
    do{
        swapped = false;
        for(let j=0;j<arr.length;j++){
            if(arr[j] > arr[j+1]){
                /* SWAP */
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;

                swapped = true;
            }
        }
    
    }while(swapped);
    return arr;
}

optiBubbleSort([100,1,2,3,4])


/* Time Complexity  : O(N^2) */