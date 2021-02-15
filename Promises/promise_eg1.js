// let p = fetch("https://6005cc0a3698a80017de0fbf.mockapi.io/testprmoise/v1/comment");

// p.then((res) => {
//     return console.log(res);
// })
// p.catch(() => {
//     console.log("inside")
//     setTimeout(() => {
//         console.log("catch")
//     }, 10000)
// })

let numArray = [1, 2, 3]
let anotherArray = []

function test() {
    const returedArray = numArray.map(async (num, index) => {
        const res = await fetch("https://6005cc0a3698a80017de0fbf.mockapi.io/testprmoise/v1/comment")
        return res
    })
    return returedArray;
}

const obj = test()