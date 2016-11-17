let result = function solve() {
        return function ()
        {
            return {
                add: ([Xa, Ya], [Xb, Yb]) => {
                    return [Xa + Xb, Ya + Yb];
                },
                multiply: ([Xa, Ya], scalar) => {
                    return [Xa * scalar, Ya * scalar];
                },
                length: ([Xa, Ya]) => {
                    return Math.sqrt(Math.pow(Xa, 2) + Math.pow(Ya, 2));
                },
                dot: ([Xa, Ya], [Xb, Yb]) => {
                    return (Xa * Xb + Ya * Yb);
                },
                cross: ([Xa, Ya], [Xb, Yb]) => {
                    return (Xa * Yb) - (Ya * Xb);
                },
            }
        }
}


result.add([1, 1], [1, 0]);

//console.log(solve);
//var answer = solve.add([1, 1], [1, 0]);
//console.log(answer);
//answer = solve.multiply([3.5, -2], 2);
//console.log(answer);
//answer = solve.length([3, -4]);
//console.log(answer);
//answer = solve.dot([1, 0], [0, -1]);
//console.log(answer);
//answer = solve.cross([3, 7], [1, 0]);
//console.log(answer);