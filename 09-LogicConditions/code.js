

const output = document.querySelector('div');
const myinput = document.querySelector('input');

const mybutton = document.querySelector('button');

myinput.value = 'Hugo';

let counter = 0;

mybutton.onclick = function () {

    counter = counter + 1;
    console.log(counter);

    let boo = (counter < 3);


    if (counter < 3) {
        output.style.color = 'red';
    } else if (counter < 9) {
        output.style.color = 'green';

    }
    else {

        output.style.color = 'blue';
    }




    output.textContent = 'Counter: ' + counter + '  ' + boo;
    console.log(counter);

    updater();  


}


let val = 'Nohing changed';

output.innerText = val;


function updater() {
    switch (counter) {
        case 0:
            val = `Case  ${counter}`;
            break;
        case 1:
            val = `Case  ${counter}`;
            break;
        case 2:
            val = `Case  ${counter}`;
            break;
        case 3:
            val = `Case  ${counter}`;
            break;
        case 4:
            val = `Case  ${counter}`;
            break;
        default:
            val = `DEFAULT  ${counter}`;
            break;
    }

    output.innerText = val; 

}