const display = document.querySelector('.display');
const show = document.querySelector('.show');
const btn_1 = document.querySelector('.btn-1');
const btn_eq = document.querySelector('.btn-eq');

let number1, number2;
let operator = '+-*/';

for(let i = 0; i <= operator.length; i++){
    if (operator.charAt(i) == '+'){
        number1 = display.value.
        alert()
    }else if(operator.charAt(i) == '-'){

    }else if(operator.charAt(i) == '*'){
        
    }else if(operator.charAt(i) == '/'){
        
    }
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

display.addEventListener('change', ()=>{
    this.value = display.value;
})

btn_eq.addEventListener('click', () =>{
    alert(display.value);
})

