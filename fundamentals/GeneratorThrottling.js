function * throttle(func, time) {
    let timerID = null;
    function throttled(arg) {
      clearTimeout(timerID);
      timerID = setTimeout(func.bind(window, arg), time);
    }
    while(true){
        throttled(yield);
    }
  }
  
  class GeneratorThrottle {
  
    constuctor() {};
  
    start = () => {
      const thr = throttle(console.log, 3000);
      thr.next('');
    };
  
    toString = () => {
      console.log(throttle);
      console.log('start =', this.start);
    };
  };

  const throttleObj = new GeneratorThrottle()
  throttleObj.start()