
// const fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//     // nth=(n-1)th +(n-2)th
//     // ith=(i-1)th + (i-2)th

//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }

// console.log(fibo);


function fibonacci(num) {
    console.log(typeof num);
    if (typeof num != 'number') {

        return "please enter a number";
    }
    else if (num < 2) {
        return "please Enter a positive number";
    }
    const fibo = [0, 1];

    for (let i = 2; i <= num; i++) {
        // nth=(n-1)th +(n-2)th
        // ith=(i-1)th + (i-2)th

        fibo[i] = fibo[i - 1] + fibo[i - 2];


    }
    return fibo;
}

let fibonaciSeq = fibonacci(-9);
console.log(fibonaciSeq);