const str = `
RegExr was created by gskinner.com.

Regular exp
`


/* + quantifier ---> sereis of the string
const matched = str.match(/e+/g); */

const matched = str.match(/eg?/g);
/* ? ---> optional character in series
const matched = str.match(/eg?/g); */

console.log(matched)