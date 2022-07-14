function sum(x) {
    let computedSum = x;
    return function innerSum(y) {
        if (y) {
            computedSum += y;
            return innerSum;
        } else {
            return computedSum;
        }
    }
}

console.log(sum(21)()); // 21
console.log(sum(21)(10)(40)()); // 71
console.log(sum(1)(2)(3)(4)(5)(6)(7)()); // 28

// Last empty () are required otherwise a function is returned instead of the sum