function swap(arr,start,end){
    [arr[start],arr[end]] = [arr[end],arr[start]]
}

/* Finding the pivot,
    Using startIndex as the iniial pivot
*/
const findPivot = (ar,start,end) => {
    let pivot = ar[start];
    let swapIndex = start;

    for(let i=0;i<end;i++){
        if(ar[i] < pivot){
            swapIndex++;
            swap(ar,swapIndex,i)
        } 
    }
    swap(ar,start,swapIndex);
    return swapIndex;
}

// findPivot([4,3,5,6,1,7,2,8])

const quickSort = (arr,left=0,right = arr.length-1) =>{
    if(left < right){
        let pivotIndex = findPivot(arr,left,right)
        // sort left
        quickSort(arr,left,pivotIndex-1)
        // sort right
        quickSort(arr,pivotIndex+1,right)
    }
    return arr;

}

console.log(quickSort([4,3,5,6,1,7,2,8]))

