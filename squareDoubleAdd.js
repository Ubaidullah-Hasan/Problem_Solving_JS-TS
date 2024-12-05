function square(num) {
    return num * num;
}
const double = (num) => {
    return num * 2;
}

const add5 = (num) => {
    return num + 5;
}

const composeNumber = (num) => {
    const squared = square(num);
    const doubled = double(squared);
    return add5(doubled);
}

const result = composeNumber(3);
console.log(result);