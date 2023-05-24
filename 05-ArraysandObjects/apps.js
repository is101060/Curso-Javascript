

const arr1 = [ 'one', 100,  false, null, [1,2,3]];
const obj1 = {
    first : 'Laurence',
    last : 'Svekis',
    'Full Name': 'Laurence Svekis',
    age : 40,
    status: true


};


arr1[3] = 'My name';

let val = arr1[0];
let val2 = arr1[3];

console.log (val);
document.write (val);

console.log (val2);
document.write (val2);


console.log (obj1);
document.write (obj1)


console.log (obj1.first);
console.log ( obj1['first']);   

obj1.first = 'John';

console.log (obj1.first);






