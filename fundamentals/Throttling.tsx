/* Simple Throttle function */

window.addEventListener("resize",throttleFunction(expensiveFunc,500));

function throttleFunction(expensiveFunc,limit){
    let closureFlag = true;
    return function(){
        if(closureFlag){
            expensiveFunc()
            closureFlag = false;
            setTimeout(() => {
                closureFlag = true;
            }, limit);
        }
    }
}

function expensiveFunc(){
    console.log("expensive")
}