'use strict';

const mark = {
    name: "Mark Miller",
    weight: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    name: "John Smith",
    weight: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    }
};

mark.calcBMI()
john.calcBMI()

console.log(mark.bmi)

const getSummary = mark.calcBMI() > john.calcBMI() ? `${mark.name}'s BMI (${mark.calcBMI()}) is higher than ${john.name}'s (${john.calcBMI()})` : `${john.name}'s BMI (${john.calcBMI()}) is higher than ${mark.name}'s (${mark.calcBMI()}) `


console.log(getSummary)