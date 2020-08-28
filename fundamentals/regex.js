const str = `
RegExr was created by gskinner.com.

Regular exp
`


/* + quantifier ---> ( atleast 1 or more)
const matched = str.match(/e+/g); */

/* ? ---> ( 0 or 1 occurence)
const matched = str.match(/eg?/g); */

 
/* * = + & ? combined ---> ( 0 or more) */
// const matched = str.match(/eg*/g);

/* . ---> match preceding or next char.except for line break
to search for "." --> /.
const matched = str.match(/.a/g);
const matched = str.match(/\./g); */

const matched = str.match(/\w/g);


console.log(matched)