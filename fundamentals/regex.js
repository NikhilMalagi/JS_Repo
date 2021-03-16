const str = `
The RegExr was the
test
9st
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

/* \w ---> for char(other char - only "_" & Alphanumeric)
   \W ---> !(\w)
   \s ---> space,tabs,linebreak
   \S ---> !(\s)
   \w{m,n} --> matches word with 4 or 5 char
*/

/* [] ---> char gruping 
 |  ---> similar to or character
 ^  ---> beginning of the string or  line (for multiline use /m modifier)
 $  ---> end of the string or  line (for multiline use /m modifier)
const matched = str.match(/[w]as/g);
const matched = str.match(/[a-z0-9]s/g);
const matched = str.match(/[t | T]he/g); */


console.log(matched)