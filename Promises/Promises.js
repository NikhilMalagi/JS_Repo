const brush = function(){
    return new Promise((resolve,reject) => {
        resolve("Somebody,please get me my toothbrush")
    })
}

const excerise = function(message){
    return new Promise((resolve,reject) => {
        resolve(`${message},
Need to burn some fat today!`)
    })
}
const work = function(message){
    return new Promise((resolve,reject) => {
        reject(`${message},
lets hustle!!!`)
    })
}

// brush().then((res) => {
//     return excerise(res)
// }).then(res => {
//     return work(res)
// }).then((res) => {
//     console.log(res)
// })


Promise.all([brush(),excerise(),work()]).then((res) => {
    console.log("Morning kickstart")
}).catch((err) => {
    console.log("Damn it...Need to wake up early from tomorrow ")
})

Promise.race([brush(),excerise(),work()]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log("Damn it...Need to wake up early from tomorrow ")
})

