let functionCallCounter = 0
const getData = () => {
    console.log("Fetching data ::::" + functionCallCounter++)
}


const debounce = (fn,limit) => {
    let timer;
    return function (){
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, limit);
    }
}

const perfImproverFunc = debounce(getData,400)

