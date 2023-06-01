const output = document.querySelector('div');
const myinput = document.querySelector('input');
const mybutton = document.querySelector('button');



let a=val=b=100;
let c = a + b+ 100;
let d = 501 % 3;

 a = a + 1;
 a++;

let e = 10;
e *= a;

console.log(e); 



console.log(c);
console.log(d);


console.clear();

console.log ('5' == 5);
console.log ('5' === 5);
console.log ('5' == 6);
console.log ('5' === 6);



mybutton.onclick = function () {

    let val = Number(myinput.value);
    console.log(typeof(val)); 
    console.log(val);   

    console.log(isNaN(val));

    if (isNaN(val)) {
        output.textContent = 'Not a number';
    } else{
        output.textContent = 'Its a number';
    }


}

