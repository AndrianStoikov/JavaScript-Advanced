function squareOfStars(size) {

    for (let i =0; i < size; i++) {
        printStars(size);
    }
    function printStars(n) {
    console.log("* ".repeat(n));
    }
}

function dayOfWeek(day) {
    switch (day[0].toString()) {
        case "Monday": {
            return 1;
        }
        case "Tuesday": {
            return 2;
        }
        case "Wednesday": {
            return 3;
        }
        case "Thursday": {
            return 4;
        }
        case "Friday": {
            return 5;
        }
        case "Saturday": {
            return 6;
        }
        case "Sunday": {
            return 7;
        }
        default :{
            return "error";
        }
    }
}

function triangle(n) {
    for (let i = 1; i < n; i++)
        print(i);
    for (let i = n; i >= 1; i--)
        print(i);
    function print(size) {
        console.log("*".repeat(size));
    }
}

function insideVolume(input) {
    for(let i = 0; i < input.length; i += 3) {
        let x = input[i];
        let y = input[i+1];
        let z = input[i+2];

        if(inVolume(x, y, z)) {
            console.log("inside");
        } else {
            console.log("outside")
        }
    }
    function inVolume(x, y, z) {
        let x1 = 10, x2 = 50;
        let y1 = 20, y2 = 80;
        let z1 = 15, z2 = 50;

        if(x >= x1 && x <= x2) {
            if(y >= y1 && y <= y2) {
                if(z >= z1 && z <= z2) {
                    return true;
                }
            }
        }
        return false;
    }
}

function roadRadar(input) {
    let area = input[1];
    let speed = input[0];

    let limit = getLimit(area);
    let infraction = getInfraction(limit, speed);
    function getLimit(zone) {
        switch (zone) {
            case "city": {
                return 50;
            }
            case "residential": {
                return 20;
            }
            case "interstate": {
                return 90;
            }
            case "motorway": {
                return 130;
            }
        }
    }
    function getInfraction(limit, speed1) {
        let overSpeed = speed1 - limit;
        if(overSpeed <= 0) return false;
        else {
            if(overSpeed <= 20) return "speeding";
            if(overSpeed >= 20 && overSpeed <= 40) return "excessive speeding";
            if(overSpeed > 40) return "reckless driving";
        }
    }
    if(infraction) {
        console.log(infraction);
    }
}

function templateFormat(input) {
    let html = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<quiz>\n';
    for(let i = 0; i < input.length; i += 2) {
        let question = input[i];
        let answer = input[i + 1];
        html += buildHTML(question, answer);
    }

    html += '</quiz>';

    console.log(html)
    function buildHTML(question, answer) {
        let html = '  <question>\n';
        html += `    ${question}\n`;
        html += '  </question>\n';
        html += '  <answer>\n';
        html += `    ${answer}\n`;
        html += '  </answer>\n';
        return html;
    }
}

function cookingByNumbers(input) {
    let number = Number(input[0]);
    for(let i = 1; i < input.length; i++) {
        let inputOperation = input[i];
        number = operateWithTheNumber(inputOperation, number);
        console.log(number);
    }

    function operateWithTheNumber(operation, numberToBeChanged) {
        numberToBeChanged = Number(numberToBeChanged);
        switch (operation) {
            case "chop": {
                numberToBeChanged = numberToBeChanged / 2;
                return numberToBeChanged;
            }

            case "dice": {
                numberToBeChanged = Math.sqrt(numberToBeChanged);
                return numberToBeChanged;
            }

            case "spice": {
                numberToBeChanged += 1;
                return numberToBeChanged;
            }

            case "bake": {
                numberToBeChanged *= 3;
                return numberToBeChanged;
            }

            case "fillet": {
                numberToBeChanged = numberToBeChanged - (numberToBeChanged * 0.2);
                return numberToBeChanged;
            }
        }
    }
}

function modifyAverage(input) {
    let number = parseInt(input[0]);

    while(checkAverage(number)) {
        number = number.toString();
        number += 9;
        number = parseInt(number);
    }

    console.log(number);
    function checkAverage(numberToCheck) {
        let averageSum = 0;
        let digitCounter = 0;
        while(numberToCheck > 0) {
            averageSum += numberToCheck % 10;
            numberToCheck = parseInt(numberToCheck / 10);
            digitCounter++;
        }

        if((averageSum /= digitCounter) > 5) return false;
        else return true;
    }
}

function validityChecker(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    if (isNaN(x1) == true || isNaN(x2) == true || isNaN(y1) == true || isNaN(y2) == true) {
        console.log('{' + x1 + ', ' + x2 + '} to {0, 0} is invalid');
        console.log('{' + y1 + ', ' + y2 + '} to {0, 0} is invalid');
        console.log('{' + x1 + ', ' + x2 + '} to {' + y1 + ',' + y2 + '} is invalid');
    }

    if(x1AndY1ToZeroZeroChecker(x1, y1)) console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    else console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

    if(x2AndY2ToZeroZeroChecker(x2, y2)) console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    else console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

    if(x1AndY1ToX2AndY2Checker) console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    else console.log(`{${x1}, ${y1} to {${x2}, ${y2}} is invalid`);
    function x1AndY1ToZeroZeroChecker(x, y) {
        let distance = Math.sqrt(Math.pow(0 - x, 2) + Math.pow(0 - y, 2));
        if(isInt(distance)) return true;

    }

    function x2AndY2ToZeroZeroChecker(x, y) {
        let distance = Math.sqrt(Math.pow(0 - x, 2) + Math.pow(0 - y, 2));
        if(isInt(distance)) return true;
    }

    function x1AndY1ToX2AndY2Checker(x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        if(isInt(distance)) return true;
    }

    function isInt(n) {
        return n % 1 === 0;
    }
}

function treasureLocator(input) {
    input = input.map(Number);

    for(let i = 0; i < input.length; i += 2) {
        let x1 = input[i];
        let y1 = input[i + 1];
        if(locateTavalu(x1,y1)) console.log("Tuvalu");
        else if(locateTonga(x1,y1)) console.log("Tonga");
        else if(locateSamoa(x1,y1)) console.log("Samoa");
        else if(locateTokelau(x1,y1)) console.log("Tokelau");
        else if(locateCook(x1,y1)) console.log("Cook");
        else console.log("On the bottom of the ocean");
    }
    function locateTavalu(x, y) {
        if (x >= 1 && x <= 3) {
            if (y >= 1 && y <= 3) return true;
        }
    }
    
    function locateTonga(x, y) {
        if (x >= 0 && x <= 2) {
            if (y >= 6 && y <= 8) return true;
        }
    }

    function locateSamoa(x, y) {
        if (x >= 5 && x <= 7) {
            if (y >= 3 && y <= 6) return true;
        }
    }

    function locateTokelau(x, y) {
        if (x >= 8 && x <= 9) {
            if (y >= 0 && y <= 1) return true;
        }
    }

    function locateCook(x, y) {
        if (x >= 4 && x <= 9) {
            if (y >= 7 && y <= 8) return true;
        }
    }
}

function tripLenght(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x3 = Number(input[4]);
    let y3 = Number(input[5]);

    let AB = calculateDistance(x1,y1,x2,y2);
    let BC = calculateDistance(x2,y2,x3,y3);
    let AC = calculateDistance(x3,y3,x1,y1);

    if (AB + BC <= BC + AC) {
        console.log('1->2->3: ' + Number(AB + BC));
    }
    else if (AB + AC < BC + AC) {
        console.log("2->1->3: " + Number(AB + AC));
    }
    else {
        console.log("1->3->2: " + Number(BC + AC));
    }

    function calculateDistance(x, y, secondX, secondY) {
        let distance = Math.sqrt(Math.pow(secondX - x, 2) + Math.pow(secondY - y, 2));
        return distance;
    }
}

function radioCrystals(input) {
    for (let i =1; i < input.length; i++) {
        let thickness = Number(input[0]);
        let crystalsThickness = input[i];

        console.log(`Processing chunk ${crystalsThickness} microns`);
        while (crystalsThickness != thickness) {
            if(cut(thickness,crystalsThickness)[0]) {
                let result = cut(thickness,crystalsThickness);
                crystalsThickness = result[1];
                console.log(`Cut x${result[2]}`);
                crystalsThickness = Math.round(crystalsThickness);
                console.log("Transporting and washing");
            }
            if (lap(thickness, crystalsThickness)[0]) {
                let result = lap(thickness,crystalsThickness);
                crystalsThickness = result[1];
                console.log(`Lap x${result[2]}`);
                crystalsThickness = Math.round(crystalsThickness);
                console.log("Transporting and washing");
            }

            if (grind(thickness, crystalsThickness)[0]) {
                let result = grind(thickness,crystalsThickness);
                crystalsThickness = result[1];
                console.log(`Grind x${result[2]}`);
                crystalsThickness = Math.round(crystalsThickness);
                console.log("Transporting and washing");
            }

            if (etch(thickness, crystalsThickness)[0]) {
                let result = etch(thickness,crystalsThickness);
                crystalsThickness = result[1];
                console.log(`Etch x${result[2]}`);
                crystalsThickness = Math.round(crystalsThickness);
                console.log("Transporting and washing");
            }

            if (xray(thickness, crystalsThickness)[0]) {
                let result =  xray(thickness,crystalsThickness);
                crystalsThickness = result[1];
                console.log(`X-ray x${result[2]}`);
            }
        }

        console.log(`Finished crystal ${thickness} microns`);
    }
    
    function cut(thickness, crystalsThickness) {
        let cutCounter = 0;
        let operationCanBePerformed = false;
        while (crystalsThickness / 4 >= thickness) {
            operationCanBePerformed = true;
            crystalsThickness /= 4;
            cutCounter++;
        }
        return [operationCanBePerformed,crystalsThickness, cutCounter];
    }
    
    function lap(thickness, crystalThickness) {
        let lapCounter = 0;
        let operationCanBePerformed = false;
        while (crystalThickness - 0.2 * crystalThickness >= thickness) {
            operationCanBePerformed = true;
            crystalThickness = crystalThickness - (0.2 * crystalThickness);
            lapCounter++;
        }
        return [operationCanBePerformed,crystalThickness, lapCounter];
    }

    function grind(thickness, crystalThickness) {
        let grindCounter = 0;
        let operationCanBePerformed = false;
        while (crystalThickness - 20>= thickness) {
            operationCanBePerformed = true;
            crystalThickness = crystalThickness - 20;
            grindCounter++;
        }
        return [operationCanBePerformed,crystalThickness, grindCounter];
    }

    function etch(thickness, crystalThickness) {
        let etchCounter = 0;
        let operationCanBePerformed = false;
        while (crystalThickness - 2 >= thickness) {
            operationCanBePerformed = true;
            crystalThickness = crystalThickness - 2;
            if(crystalThickness - thickness === 1) {
                crystalThickness = crystalThickness - 2;
                etchCounter++;
            }
            etchCounter++;
        }
        return [operationCanBePerformed,crystalThickness, etchCounter];
    }

    function xray(thickness, crystalThickness) {
        let xrayCounter = 0;
        let operationCanBePerformed = false;
        while (crystalThickness + 1== thickness) {
            operationCanBePerformed = true;
            crystalThickness = crystalThickness + 1;
            xrayCounter++;
        }
        return [operationCanBePerformed,crystalThickness, xrayCounter];
    }
}

function dnaHelix(input) {
    function dna(input) {
        let rows = Number(input[0]);
        let sequence = 'ATCGTTAGGG';
        let curentindex = 0;

        for (let i = 0; i < rows; i++) {
            let cuurentRow = i % 4;   // текущия ред да се върти само от 0 до 4 защото толково се повтаря спиралата

            if (cuurentRow === 0) { // модулното делене е да не излизаме от  дължината
                console.log('**' + sequence[curentindex++ % sequence.length] + sequence[curentindex++ % sequence.length] + '**');
            }
            else if (cuurentRow === 1 || cuurentRow === 3) {
                console.log('*' + sequence[curentindex++ % sequence.length] + '--' + sequence[curentindex++ % sequence.length] + '*');
            }
            else {
                console.log(sequence[curentindex++ % sequence.length] + '----' + sequence[curentindex++ % sequence.length]);
            }
        }
    }
}
dnaHelix(["10"]);