/* 
The promise constructor function must accept a callback as an argument : callback.
It must return an object with at-least two properties , then and catch
then and catch are functions which again accepts a callback and also they can be chained . Hence both must return a reference to this
We need to store the reference to callback function passed to then and catch somewhere so that they should be executed at a later point of time , depending on the status of executor. If executor resolved we must invoke the then callback . If executor rejects , we must invoke catch callback.
For simplicity , let us assume that our promise will always resolve. Hence for now , we will not implement our catch functionality , but both then and catch implementations are exactly identical
Lets store the callback passed to then in a variable named onResolve
Ref : https://dev.to/vijayprwyd/polyfill-for-promises-1f0e
*/

function MyPromise(callback){
    let onResolve;
    let onReject;
    
    let fulfilled = false;
    let rejected = false;
    let resolveCalled = false;
    let rejectCalled = false;
    let resolvedValue;
    let rejectedValue;

    /* Called when the promise has been reolved and the then callback is execued */
    function resolve(val){
        fulfilled = true;
        resolvedValue = val;
        if(typeof onResolve === "function"){
            onResolve(val)
            resolveCalled = true
        }
    }
    function reject(err){
        
        rejected = true;
        rejectedValue = err;
        if(typeof onReject === "function"){
            onReject(err)
            rejectCalled = true
        }
    }

    this.then = function(callback){
        onResolve = callback;

        if(fulfilled && !resolveCalled){
            onResolve(resolvedValue)
        }
        return this;
    }
    this.catch = function(callback){
        onReject = callback;
        if(rejected && !rejectCalled){
            onReject(rejectedValue)
        }
        return this;
    }

    callback(resolve,reject);
}

MyPromise.resolve = () => {

}

const test = new MyPromise((resolve,reject) => {
    setTimeout(() => {
        reject("YAY!!!")
    }, 3000);
})

test.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log("Rejected" + err)
})