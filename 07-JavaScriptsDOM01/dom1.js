/*


    --> todo lo que contiene el documento, aquì podemos ver todas las propiedades
    console.dir(document);


*/


const ele = document.body.children;

console.dir(ele);



const ele2 = document.body.children[0].textContent;

const ele3 = document.body.children[1];

console.dir(ele2);


ele3.textContent = "Adios Mundo";   

console.log('Classico Name');
console.log('Class name - ' + ele3.className);
console.log('InnetHTML - ' +ele3.innerHTML);


ele3.innerHTML = '<h1>Adios Mundo</h1>';