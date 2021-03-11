let arr = [1,2,3,4,5]

const myIterator = arr[Symbol.iterator]()

const v1 = myIterator.next().value
const v2 = myIterator.next().value
const v3 = myIterator.next().value
// So on until it gives the done as true {value : undefiend,done : true}


/* Writing iterator for my arr*/
const myArr = {
    [Symbol.iterator] : function(){
        /* closure */
        let i = 0;
        return {
            /*
            Can use async here 
            next : function(){ 
            */
            next : function(){
                i++;
                const num = Math.random();
                if(num > 0.75){
                    return {done :true}
                }
                return {
                    value : num,
                    done : false
                }

            }
        }
    }
}


for( let v of myArr){
    console.log(v)
}


/* Can use await in for of */
/* (async function(){
    for await(let v of myAsyncArr){
        //
    }
})() 

// Same as below

(async function(){
    const asyncItr = myArr[Symbol.iterator]();
    const v1 = (await asyncItr.next()).value
})() 

*/
