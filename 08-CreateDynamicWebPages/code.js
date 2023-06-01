 

 const ele1 = document.querySelector('div');


ele1.textContent = 'Hugo Hola';


const eles = document.querySelectorAll('div');


 console.dir(ele1);
 console.dir(eles); 


 eles[0].textContent = 'Hugo Hola 2';
 eles[1].textContent = 'Hugo Hola 3';



 const ele3 = document.querySelector('#saludo');

 ele3.textContent = 'Hugo Hola 4';


 const ele4 = document.querySelector('.blue');
 ele4.textContent = 'Hugo Hola 5 azul desde javascript';



 const myInput  = document.querySelector('input');

 console.log(myInput.value);

 myInput.value = 'Hugo Hola 6 desde javascript';


 eles[1].style.border = '1px solid red';
 eles[1].style.width = '200px'; 
 eles[1].style.textAlign = 'center';
 eles[1].onclick = function(){

        console.log ('Hugo Hola 7 desde javascript en un CLICK');
 } 


 eles[3].style.border = '3px solid pink';
 eles[3].onclick = clicker;


 function clicker(){

    console.log ('Hugo Hola 8 desde javascript en un CLICK FUNCION');
    let temp = myInput.value;
    eles[1].textContent = temp;
 }



