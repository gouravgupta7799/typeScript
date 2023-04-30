"use strict";
let numin1 = document.getElementById('num1');
let numin2 = document.getElementById('num2');
let buttonele = document.querySelector('button');
// let numarr: number[] = [];
let numarr = [];
// let strarr: string[] = [];
let strarr = [];
function add(num1, num2) {
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return (num1 + ' ' + num2);
    }
    else if (typeof num1 === 'number' && typeof num2 === 'number') {
        return (num1 + num2);
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonele.addEventListener('click', () => {
    let num1 = numin1.value;
    let num2 = numin2.value;
    let res1 = add(+num1, +num2);
    numarr.push(res1);
    let res2 = add(num1, num2);
    strarr.push(res2);
    console.log(numarr, strarr);
    printResult({ val: res1, timestamp: new Date() });
});
let myPromis = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it work');
    }, 1000);
});
myPromis
    .then(res => {
    console.log(res.split('w'));
})
    .catch(err => {
    console.log(err);
});
