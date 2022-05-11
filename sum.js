// const number = [4, 55, 34, 23, 56, 3, 78]
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];

//     sum = sum + element;


// }
// console.log(sum);

function arrayTotal(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];

        sum = sum + element;


    }
    return sum;
}

const total = arrayTotal([20, 49, 55, 66, 77, 4]);
console.log(total);

function add(a, b) {
    return a + b;
}
console.log(add('adam' + 'eve'));