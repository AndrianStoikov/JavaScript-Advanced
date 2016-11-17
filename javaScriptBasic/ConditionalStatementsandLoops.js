function biggestOf3Numbers(input) {
    input = input.map(Number);
    return Math.max(Number(input[0]), input[1], input[2]);
}

function pointsInRectangle(input) {
    let [x, y, xMin, xMax, yMin, yMax] = input.map(Number);
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax ) {
        console.log("inside");
    } else {
        console.log("outside");
    }
}

function oddNumberToN(n) {
    for(let i = 1; i <= Number(n); i += 2) {
        console.log(i);
    }
}

function triangleOfDollars(n) {
    for(let row = 1; row <= Number(n); row++)
        console.log('$'.repeat(row));
}

function moviePrices(input) {
    let theGodFather = {
        monday:12,
        tuesday:10,
        wednesday:15,
        thursday:12.50,
        friday:15,
        saturday:25,
        sunday:30
    };

    let SchindlersList = {
        monday:8.50,
        tuesday:8.50,
        wednesday:8.50,
        thursday:8.50,
        friday:8.50,
        saturday:15,
        sunday:15
    };

    let Casablanca = {
        monday:8,
        tuesday:8,
        wednesday:8,
        thursday:8,
        friday:8,
        saturday: 10,
        sunday: 10
    };

    let TheWizardofOz = {
        monday:10,
        tuesday:10,
        wednesday:10,
        thursday:10,
        friday:10,
        saturday: 15,
        sunday: 15
    };

    let title = input[0].toLowerCase();
    let day = input[1].toLowerCase();

    switch (title) {
        case "the godfather": {
            if(theGodFather.hasOwnProperty(day))
                console.log(theGodFather[day]);
            else console.log("error");
            } break;
        case "schindler's list": {
            if(SchindlersList.hasOwnProperty(day))
                console.log(SchindlersList[day]);
            else console.log("error");
            } break;
        case "casablanca": {
            if(Casablanca.hasOwnProperty(day))
                console.log(Casablanca[day]);
            else console.log("error");
            } break;
        case "the wizard of oz": {
            if(TheWizardofOz.hasOwnProperty(day))
                console.log(TheWizardofOz[day]);
            else console.log("error");
            } break;
        default: {
            console.log("error");
        }
    }
}

function quadraticEquation(input) {
    let a = input[0];
    let b = input[1];
    let c = input[2];

    let discriminant = b * b - (4 * a * c);
    if(discriminant >= 0 ) {
        let x1 = ((b * -1) + Math.sqrt(discriminant)) / (2 * a);
        let x2 = ((b * -1) - Math.sqrt(discriminant)) / (2 * a);

        if(x1 < x2) {
            console.log(x1);
            console.log(x2);
        } else if (x1 > x2){
            console.log(x2);
            console.log(x1);
        } else {
            console.log(x1);
        }
    } else {
        console.log("No");
    }
}

function multiplicationTable([n]) {
    let size = Number(n);
    console.log("<table border='1'>");
    let output = "<tr><th>x</th>";

    for(let i = 1; i <= n; i++) {
        output += `<th>${i}</th>`
    }
    output += "</tr>";
    console.log(output);

    output = "";
    for(let i = 1; i <= n; i++) {
        output += `<tr><th>${i}</th>`;
        for(let j = 1; j <= n; j++) {
            output += `<td>${i * j}</td>`;
        }
        output += "</tr>"
        console.log(output);
        output = '';
    }
    console.log("</table>");
}

function figureOf4Squares([n]) {
    let size = Number(n);
    let output = '';

    for(let row = 0; row < 3; row++) {
        for(let i = 0; i < 2; i++) {
            output += "+";
            for(let j = 0; j < size - 2;j++) {
                output += "-";
            }
        }
        output += "+";
        console.log(output);
        output = '';
    }

}

figureOf4Squares([4]);
