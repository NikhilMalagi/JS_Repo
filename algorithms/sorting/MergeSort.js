const merge = (a1,a2) =>{
    let mergedArr = []
    let i= 0;
    let j= 0;
    while(i<a1.length && j<a2.length){
        if(a1[i] < a2[j]){
            mergedArr.push(a1[i])
            i++
        }else{
            mergedArr.push(a2[j])
            j++
        }
    }
    while(i !== a1.length){
        mergedArr.push(a1[i])
            i++
    }
    while(j !== a2.length){
        mergedArr.push(a2[j])
        j++
    }
   
    return mergedArr;
}

const mergeSort = (a) => {
    if(a.length === 1) return a;
    let mid = Math.floor(a.length/2)
    let left = mergeSort(a.slice(0,mid))
    let right = mergeSort(a.slice(mid))
    return merge(left,right)
}

mergeSort([3,5,-1,10])