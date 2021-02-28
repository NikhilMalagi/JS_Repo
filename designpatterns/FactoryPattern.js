function EmployeeDev(employeeName,id){
    this.name = employeeName
    this.type = "DEVELOPER"
    this.getShortId = function(){
        console.log(this)
        return this.name + id
    }
}
function EmployeeTester(employeeName,id){
    this.name = employeeName
    this.type = "TESTER"
    this.getShortId = function(){
        console.log(this)
        return this.name + id
    }
}

function Employeefactory(){
    this.create = (employeeName,id,type) => {
        switch(type){
            case 1 : 
            return new EmployeeDev(employeeName,id); 
            case 2 : return new EmployeeTester(employeeName,id)
        }
    }
}

const eFactory = new Employeefactory()
const factory = [eFactory.create("Nikhil",58,1),eFactory.create("Malagi",60,2)]




