let promiseToGoToGym = new Promise((resolve,reject) => {

    // logic to check if I am going to the gym

    const gymDarshan = true;

    if(gymDarshan)resolve("Finally! going to gym as promised");
    else reject("Damn it! Will wake up early tomorrow")
})

promiseToGoToGym.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})



/* Promise Eg : 2 */

let myPromise = function(number){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(Math.pow(number,2))
        }, 2000);
    })
}

myPromise(9).then((res) => console.log(res))