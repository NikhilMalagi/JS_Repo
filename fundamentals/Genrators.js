function *generator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const itr = generator();

const v1 = itr.next().value


// Ex2
function *generator2(){
    yield 2;

}
function *generator1(){
    yield 1;
    yield *generator2();
    yield 3;

}

const iter = generator1();

const vi1 = iter.next().value
const vi2 = iter.next().value
const vi3 = iter.next().value

console.log(vi1,vi2,vi3)


/* Actul usage of generators */
