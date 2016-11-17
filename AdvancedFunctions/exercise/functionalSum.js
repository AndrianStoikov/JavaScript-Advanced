function add(n) {
    function calc(x) {
        return add(n + x);
    }
    calc.valueOf = function() {
        return n;
    };

    return calc;
}

console.log(add(1)(1)(2) + "");