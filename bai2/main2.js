// Dữ liệu 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

// Dữ liệu 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// Tính BMI
function calculateBMI(mass, height) {
    return mass / (height * height);
}

let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// Kiểm tra xem BMI của Mark có cao hơn của John không và in ra console
if (markBMI1 > johnBMI1) {
    console.log(`Dữ liệu 1: BMI của Mark (${markBMI1}) cao hơn của John (${johnBMI1})!`);
} else {
    console.log(`Dữ liệu 1: BMI của John (${johnBMI1}) cao hơn của Mark (${markBMI1})!`);
}

if (markBMI2 > johnBMI2) {
    console.log(`Dữ liệu 2: BMI của Mark (${markBMI2}) cao hơn của John (${johnBMI2})!`);
} else {
    console.log(`Dữ liệu 2: BMI của John (${johnBMI2}) cao hơn của Mark (${markBMI2})!`);
}
