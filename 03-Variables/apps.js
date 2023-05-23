

// Variables

let a = 5;
let b = 'Hugo';


let w = 'Hugo \' esta aqui \'';

// Constantes
const c = 'Esta es una constante';


let operacion = `Math ${ 1 + 2 + a}`;

document.write(a);
document.write('<br>');
document.write(b);  
document.write('<br>'); 
document.write(c);
document.write('<br>'); 
document.write(w);
document.write('<br>'); 
document.write(operacion);
document.write('<br>'); 

//Las variables y constantes también tiene un scope, es decir, un alcance.

{
    let b = 'Esta es la constante Paco'; 
    document.write(b);
}



