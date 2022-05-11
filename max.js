const business = 450;
const minister = 550;
const army = 650;

// if (business > minister) {
//     console.log('bisness person er pola is bigger')


// }
// else {
//     console.log('miniser er pola khankir pola')
// }

/*
// if (business > minister && business > army) {
//     console.log('busniss is biger')
// }
// else if (business < minister && minister > army) {
//     console.log('minister is biger')
// }
// else if (army > minister && business < army) {
//     console.log('army is biger')
// }*/

// // var max = Math.max(business, minister, army);
// // console.log('large :', max);
// function maxNum(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1;
//     }
//     else if (num2 > num1 && num2 > num3) {
//         return num2;

//     }
//     else if (num3 > num1 && num3 > num2) {
//         return num3;
//     }
// }

// let maxMaxNum = maxNum(6, 8, 3);
// console.log(maxMaxNum);

// system 2
// function maxNum(num1, num2, num3) {
//     var maxNumber = Math.max(num1, num2, num3);
//     return maxNumber;
// }

// let maxMaxNum = maxNum(6, 8, 3);
// console.log(maxMaxNum);

function minNum(num1, num2, num3) {
    var minNumber = Math.min(num1, num2, num3);
    return minNumber;
}

let minMinNum = minNum(6, 8, 3);
console.log(minMinNum);
