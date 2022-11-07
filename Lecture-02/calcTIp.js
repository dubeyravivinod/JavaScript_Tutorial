'use strict';

const cal = bills => (bills >= 50 && bills <= 300) ? bills * 0.15 : bills * 0.2;

const calcTip = bill => {
    const tip = cal(bill);
    const total = bill + tip;
    return tip;
}

const bills = [100, 555, 45];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total)