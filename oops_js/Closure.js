function TestFn(v1) {
    var v1 = "value1"
    var v2 = "value2"

    this.getV1 = function () {
        return v1 + v2;
    }
}

const o1 = new TestFn();
console.log(o1.getV1())