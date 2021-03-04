const selectionSort = (a)=> {
    let lowest
    let temp;
    for(let i=0;i<a.length;i++){
        lowest = i
        for(let j=i+1;j<a.length;j++){
            if(a[lowest] > a[j]) lowest = j;
        }
        if(lowest !== i){
            //SWAP
            temp = a[i];
            a[i] = a[lowest]
            a[lowest] = temp;
        }
    }
    return a;
}
const desSelectionSort = (a)=> {
    let lowest
    let temp;
    for(let i=a.length-1;i>=0;i--){
        lowest = i
        for(let j=i-1;j>=0;j--){
            if(a[lowest] > a[j]) lowest = j;
        }
        if(lowest !== i){
            //SWAP
            temp = a[i];
            a[i] = a[lowest]
            a[lowest] = temp;
        }
    }
    return a;
}



desSelectionSort([100,2,-3,40,9])