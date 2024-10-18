const display = document.getElementById('display');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btnDivide = document.getElementById('btnDivide');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btnMultiply = document.getElementById('btnMultiply');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btnSubtract = document.getElementById('btnSubtract');
const btn0 = document.getElementById('btn0');
const btnDecimal = document.getElementById('btnDecimal');
const btnAdd = document.getElementById('btnAdd');
const btnEqual = document.getElementById('btnEqual');
const btnDelete = document.getElementById('delet');

btn7.addEventListener('click', () => display.value += '7');
btn8.addEventListener('click', () => display.value += '8');
btn9.addEventListener('click', () => display.value += '9');
btnDivide.addEventListener('click', () => display.value += ' ÷ ');
btn4.addEventListener('click', () => display.value += '4');
btn5.addEventListener('click', () => display.value += '5');
btn6.addEventListener('click', () => display.value += '6');
btnMultiply.addEventListener('click', () => display.value += ' x ');
btn1.addEventListener('click', () => display.value += '1');
btn2.addEventListener('click', () => display.value += '2');
btn3.addEventListener('click', () => display.value += '3');
btnSubtract.addEventListener('click', () => display.value += ' - ');
btn0.addEventListener('click', () => display.value += '0');
btnDecimal.addEventListener('click', () => display.value += '.');
btnAdd.addEventListener('click', () => display.value += ' + ');
btnDelete.addEventListener('click', () => display.value = '');

btnEqual.addEventListener('click', () => {
    try {
        if (display.value.trim() === '') {
            alert("Coloque um número!");
            display.value = '';
            return; 
        }

     
        let expression = display.value
            .replace(' x ', '*')
            .replace(' ÷ ', '/');


        const result = eval(expression);
        display.value = result;
    } catch (error) {
        alert("Erro na expressão! Verifique se está digitando corretamente.");
        display.value = ''
    }
});