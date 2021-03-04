


/* Analogy : Sorting deck of cards.Key as the current card to be sorted */

const insertionSortSwapped = (a) => {
    let temp;
    for(let i=1;i<a.length;i++){
        for(j=i;j>0 && a[j] < a[j-1];j--){
            /* SWAPPING */
            temp = a[j];
            a[j] = a[j-1]
            a[j-1] = temp
        }
    }
    return a;
}

/* 
[2,100,-3,40,9]

[2,-3,100,40,9]
[-3,2,100,40,9] 
*/

const insertionSort = (a) => {
    for(let i=1;i<a.length;i++){
        let key = a[i];
        let j = i-1;
        while(j>=0 && a[j]>key){
            a[j+1] = a[j];
            j=j-1
        }
        a[j + 1] = key
    }
    return a;
}

insertionSort([100,2,-3,40,9])

/* 
[2,100,-3,40,9]

[2,100,100,40,9]
[2,2,100,40,9]
[-3,2,100,40,9] 
*/

/* 
[100,2,3,4,5]
[2,100,3,4,5]

*/
