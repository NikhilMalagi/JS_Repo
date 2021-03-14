const defaultSize = 10;
class Hash{
    constructor(hashTableSize = defaultSize){
        this.key = new Array(hashTableSize)
    }


    hashFunction(key){
        let hashValue = 0;
        /* Prime number distrubutes the value in the hash function,Hence minimizing the collisions */
        const PRIME = 31;
        for(let i=0;i<Math.min(key.length,15);i++){
            const char = key[i]
            hashValue += char.charCodeAt(0) + PRIME;
        }
        return hashValue % defaultSize
    }
}

const c = new Hash();
alert(c.hashFunction("nikhils"))