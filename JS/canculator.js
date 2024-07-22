'use strict';

const res = document.querySelector('#result');
const canculatorClearBtn = document.querySelector('.calculator-clear-button');
const calculatorBtns = document.querySelectorAll('.calculator-button');
const equalBtn = document.querySelector('.calculator-result');

function calculator(value) {
    const calculatorValue = eval(value || null); //! || це або

    //! eval - Обчислює значення
    // console.log(eval(0 / 0));
    // console.log(eval(5 + 3));
    // console.log(eval(5 * 3 + 5));
    if(isNaN(calculatorValue)) {
        res.value = "Дія неможлива"
        // очищає інпут через 1 секунду
        setTimeout(() => {
            res.value = "";
}, 1000 )  
    } else {
        // Якщо приклад обчислеться
        res.value = calculatorValue;
    }

}

function liveScreen(enteredValue) {
    if(!res.value) {
        res.value = ""
    }
    res.value += enteredValue
}

calculatorBtns.forEach(btn => {
 btn.addEventListener('click', () => {
    liveScreen(btn.value)
 })
})

equalBtn.addEventListener('click', () => {
    calculator(res.value)
})

canculatorClearBtn.addEventListener('click', () => {
    res.value = ""
})