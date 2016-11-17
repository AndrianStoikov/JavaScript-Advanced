function algrotihm (num1, num2) {
    var gcd = function(a, b) {
        if ( ! b) {
            return a;
        }

        return gcd(b, a % b);
    };

    return gcd(num1, num2);
}

console.log(algrotihm(252, 105));