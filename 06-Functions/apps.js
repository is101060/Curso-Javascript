

const fun1 = function (){
    console.log('Hello');
}


let counter = 0;

fun1();
fun1();
fun2();
fun2();

fun3('Hugo');

let valTotal = suma(3,9,13);

let valTotal2 = sumita(9,13);


console.log(valTotal);

console.log(valTotal2);

function fun2(){
    counter++;
    const output = `<div>Hello ${counter}</div>`;
    document.write(output);
}

function fun3(name){
    counter++;
    const output = `<div>Hello ${counter} --- ${name} </div> `;
    document.write(output);
}


function suma( num1, num2, num3){
    return num1 + num2 + num3;
}


// Podemos agregar valors por defecto a los parametros de una funcion
function sumita( num1=0, num2=0, num3=0){
    return num1 + num2 + num3;
}