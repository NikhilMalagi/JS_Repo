let Car = function(color){
	this.color = color;
  this.getColor = function(){
  	return this.color;
  }
 
}

let myCar = new Car('red');

console.log(myCar);