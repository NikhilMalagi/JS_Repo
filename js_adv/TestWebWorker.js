if(window.Worker){
    let myWorker = new Worker("WebWorker.js")
    let msg = { addThis : { n1 : 1,n2 : 2}}

    myWorker.postMessage(msg);

    myWorker.onmessage = function(e){
        console.log(e.data.result)
    }
}