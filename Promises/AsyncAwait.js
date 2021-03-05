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
        resolve(`${message},
lets hustle!!!`)
    })
};

(async () => {
    try{
        // const v1 = await brush();
        // const v2 = await excerise();
        // const v3 = await work();
        // console.log(v1,v2,v3)

        const [v1,v2,v3] = await Promise.all([work(),brush(),excerise()])
        console.log(v1,v2,v3)
    }catch(err){
        console.log(err)
    }
})();


// Promise.all([brush(),excerise(),work()]).then((res) => {
//     console.log("Morning kickstart")
// }).catch((err) => {
//     console.log("Damn it...Need to wake up early from tomorrow ")
// })

// Promise.race([brush(),excerise(),work()]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log("Damn it...Need to wake up early from tomorrow ")
// })

