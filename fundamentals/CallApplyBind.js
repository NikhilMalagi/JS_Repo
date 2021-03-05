let vehicle = {
    wheels : 4,
    fuel : "pertrol",
    run : function() {
        console.log(`My vehicle has ${this.wheels} and is running on ${this.fuel}`)
    }
}

const reachLocation = function(firstStop,lastStop){
    console.log(`My vehicle has ${this.wheels} and is running on ${this.fuel} is going to stop at ${firstStop} first and will reach ${lastStop} `)
}

let myTruck={
    wheels : 6,
    fuel : "disel"
}

/* Function Borrowing */
/* call */
vehicle.run.call(myTruck,"hubli","banglore")
reachLocation.call(myTruck,"hubli","banglore")

/* apply */
reachLocation.apply(myTruck,["hubli","banglore"])

/* bind */
/* same way to call the function but the difference is bind will attach the context passed to a new function and will return it */
const runVehicle = vehicle.run.bind(myTruck,"hubli","banglore")
const drive = reachLocation.bind(myTruck,"hubli","banglore")

/* The above functions can be called */
runVehicle();
drive();
