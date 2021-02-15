const Company = (function(){
    function CEO(){
        this.employees = 0
    }

    let theOnlyCEO;
    function makeCEO(){
        theOnlyCEO =  new CEO()
        return theOnlyCEO
    }

    return {
        buildCompany : () => {
            if(!theOnlyCEO){
                theOnlyCEO =  new makeCEO()
            }
            return theOnlyCEO;
        }
    }
})()