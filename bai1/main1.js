// dữ liệu 1:
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

// data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

//  BMI 
function calculateBMI(mass, height) {
    return mass / (height * height);
}

let markBMI1 = calculateBMI(markMass1,markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);
 
let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

