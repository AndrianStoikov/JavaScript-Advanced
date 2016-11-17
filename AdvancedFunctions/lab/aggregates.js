function aggregates (input) {
    console.log("Sum = " +
        reduce(input, (a,b) => a + b));
    console.log("Min = " +
        reduce(input, (a,b) => Math.min(a, b)));
    console.log("Max = " +
        reduce(input, (a,b) => Math.max(a, b)));
    console.log("Product = " +
        reduce(input, (a,b) => a * b));
    console.log("Join = " +
        reduce(input, (a,b) => '' + a + b));

    function reduce(arr, func) {
        let result = arr[0];
        for (let nextElement of arr.slice(1))
            result = func(result, nextElement);
        return result;
    }

}

aggregates(
    [2,3,10,5]
);