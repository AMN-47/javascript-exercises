const factorial = function(n) {
    let result = 1;
    for(let i = 2; i<= n; i++) {
        result = result * i;
    }
    return result;
};

// Do not edit below this line
module.exports = factorial;