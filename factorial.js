function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

let num = 8;
console.log(`Factorial of ${num} is ${factorial(num)}`);
