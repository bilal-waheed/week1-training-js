let calculateSum = (...args) => {
    let total = args.reduce((sum, current) => {
        sum += current;
        return sum;
    })
    return total;
}


console.log(calculateSum(1,2)); // 3
console.log(calculateSum(2,5,6,7)); // 20
console.log(calculateSum(1,2,8,6,5,3,5)); // 30