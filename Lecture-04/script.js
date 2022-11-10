'use strict'

const calc = bills => (bills > 50 && bills < 300) ? bills * 0.15 : bills * 0.20;

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.5: bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(bills[i] + tip);
}

console.log(bills, tips)

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(bills));

