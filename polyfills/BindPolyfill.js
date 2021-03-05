let vehicle = {
    wheels : 4,
    fuel : "pertrol",

}

const run = function(bind,testParam) {
    console.log(`${bind} :My vehicle has ${this.wheels} and is running on ${this.fuel},${testParam}`)
}

const bindOG = run.bind(vehicle,"BindOG")
bindOG("TestedParamFromReturnedFunction")

/* MyBind */

Function.prototype.myBind = function(...args){
    const func = this;
    const context = args[0];
    const params = args.slice(1);
    return function(...returnFuncParams){
        const allParams = [...params,...returnFuncParams]
        func.apply(context,allParams)
    }
}

const myBindFun = run.myBind(vehicle,"myBindFun")
myBindFun("TestedParamFromReturnedFunction")