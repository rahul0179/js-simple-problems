function largestElement(age) {
    let largest = 0;
    for (let i = 0; i < age.length; i++) {
        const element = age[i];
        if (element > largest) {
            largest = element;
        }

    }
    return largest;


}

const ages = [22, 55, 66, 67, 88, 33, 6, 80, 90];
var oldest = largestElement(ages);
console.log(oldest);