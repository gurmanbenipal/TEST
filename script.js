
const input = document.getElementById('num');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subract');
const answer = document.querySelector('.total p');

let total = 0; 

function addition(){
    let value = parseInt(input.value); 



    if (!isNaN(value)) total += value;


    answer.innerHTML = total;

    if(total < 0){
        answer.style.color = 'red'
    } else {answer.style.color = 'black'}

}
function subraction(){
    let value = parseInt(input.value); 



    if (!isNaN(value)) total -= value;


    answer.innerHTML = total;

    if(total < 0){
        answer.style.color = 'red'
    } else {answer.style.color = 'black'}

}
 input.value ='1'


add.addEventListener('click', addition); 
subtract.addEventListener('click',subraction);

