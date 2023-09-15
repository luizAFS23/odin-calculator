const display = document.querySelector('.display');
const show = document.querySelector('.show');
const btn_1 = document.querySelector('.btn-1');
const btn_eq = document.querySelector('.btn-eq');

let number1, number2;
let operator = '+-*/';


function add(num1, num2){
    show.textContent = num1 + num2;
}

function subtract(num1, num2){
    show.textContent = num1 - num2;
}

function multiply(num1, num2){
    show.textContent = num1 * num2;
}

function divide(num1, num2){
    show.textContent = num1 / num2;
}

display.addEventListener('change', ()=>{
    this.value = display.value;
})

btn_eq.addEventListener('click', () =>{
    for(let i = 0; i <= display.value.length; i++){
        number1 = parseInt(display.value.slice(0, i));
        number2 = parseInt(display.value.slice(i + 1));
        
        if (display.value.charAt(i) == '+'){
            add(number1, number2);
        }else if(display.value.charAt(i) == '-'){
            subtract(number1, number2);
        }else if(display.value.charAt(i) == '*'){
            multiply(number1, number2);
        }else if(display.value.charAt(i) == '/'){
            divide(number1, number2);
        }
    }
})

