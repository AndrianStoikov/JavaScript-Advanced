function HelloJavaScript([name]) {
    return "Hello, " + name + ", I am JavaScript!";
}

function areaAndPerimeter([a, b]) {
    console.log(a * b);
    console.log((2 * a) + (2 * b));
}

function distanceOverTime([obj1, obj2, time]) {
    let distance1 = Number(obj1) * (time / 3600);
    let distance2 = Number(obj2) * (time / 3600);

    let delta = Math.abs(distance1 -  distance2);
    return delta * 1000;
}

function distanceBetween2Points([x1,y1,z1,x2,y2,z2]) {
    let distance = Math.sqrt(Math.pow(x2 - (x1), 2) + Math.pow(y2 - (y1), 2) + Math.pow(z2 - (z1), 2))
    return distance;
}

function gradsToDegrees([grads]) {
    let degrees = 0.9 * grads;
    while(degrees <= 0) {
        degrees = Math.abs(degrees);
        degrees = 360 - degrees;
    }

    while(degrees >= 360) {
        degrees = 360 - degrees;
        degrees = Math.abs(degrees);
    }
    return degrees;
}

function compoundInterest([principalSum, interestRate, compoundingPeriod, timespan]) {
    interestRate = interestRate / 100;
    let result = Math.pow(principalSum * ( 1 + (interestRate / compoundingPeriod)), compoundingPeriod * timespan).toFixed(2);
    return result
}

function rounding([number, round]) {
    return Math.round(Number(number) * Math.pow(10 ,round)) / Math.pow(10 ,round);
}

function nowPlaying (par) {
    let result = `Now Playing: ${par[1]} - ${par[0]} [${par[2]}] `;
    return result;
}

function composeTag(par) {
    let tag = `<img src="${par[0]}" alt="${par[1]}">`;
    return tag;
}

function binaryToDecimal (par) {
    return parseInt(par[0], 2);
}

function assignProperties (input) {
    let obj = {};

    for (let i = 0; i < input.length; i += 2) {
        obj[input[i]] = input[i + 1];
    }

    console.log(obj);
}

function lastMonth(input) {
    let day = Number(input[0]);
    let month = Number(input[1]);
    let year = Number(input[2]);

    let date = new Date (year, month - 1, day);
    date.setDate(0);
    return date.getDate();
}
console.log(lastMonth(['17','3','2002']));