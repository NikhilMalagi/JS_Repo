/**
 * Initialize your data structure here.
 */
var MyHashMap = function(size = 1000000) {
    this.myMap = Array.from({length : 1000},(val) => [])
    this.hashFunc = function(key){ return key%1000}
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const arr = this.myMap[this.hashFunc(key%1000)]
    const index = arr.indexOf(key)
    if(index === -1) arr.push(key,""+value)
    else arr.splice(index+1,1,""+value)

};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let arr = this.myMap[this.hashFunc(key)];
    let index = arr.indexOf(key);
    if(index!==-1) return +arr[index+1];
    return -1;
};

MyHashMap.prototype.remove = function(key) {
    let arr = this.myMap[this.hashFunc(key)];
    let index = arr.indexOf(key);
    if(index!==-1) arr.splice(index, 2);
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */