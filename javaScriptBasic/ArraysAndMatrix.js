function printArrayWithDelimiter(input) {
    let delimiter = input.pop();
    let result = [];

    let i =0;
    while (input.length > 0) {
        result[i] = input.shift();
        i++;
    }

    console.log(result.join(delimiter));
}

function printElement(input) {
    let n = Number(input.pop());
    let result = [];

    for (let i = 0, j = 0; i < input.length; i += n) {
        result[j] = input[i];
        j++;
    }

    console.log(result.join("\n"));
}

function addRemoveElement(input) {
    let result = [];
    for(let i = 0, j = 1; i < input.length; i++, j++) {
        switch (input[i]) {
            case "add": result.push(j);
                break;
            case "remove": result.pop();
                break;
        }
    }

    if(result[0] === undefined) console.log("Empty");
    else console.log(result.join("\n"));
}

function rotateArray(input) {
    let rotations = Number(input.pop());

    for (let i = 0; i < rotations; i++) {
        let number = input.pop();
        input.unshift(number);
    }

    console.log(input.join(" "));
}

function extract(input) {
    input = input.map(Number);
    let result = [];
    result[0] = input[0];
    for (let i = 1; i < input.length; i++) {
        if(input[i] >= result[result.length - 1]) result[result.length] = input[i];
    }

    console.log(result.join("\n"));
}

function sortArray (input) {
    input.sort( (a,b) =>{ if (a.length - b.length) return (a.length - b.length);
    else return secondCompare(a, b)});

    console.log(input.join("\n"));
    function secondCompare(a, b){
        if(a.firstname < b.firstname) return -1;
        if(a.firstname > b.firstname) return 1;
        return 0;
    }

    //TODO:: Da se dovurshi :/
}

function magic_Matrix(input) {

    let matrix = [];
    for (let r = 0; r < input.length; r++) {
        let line = input[r].split(' ').map(Number);
        matrix.push(line);
    }
    let sum = matrix[0].reduce((a, b) => (a + b));  //сума на първия ред


    if (input.length == 2) { // само при 2x2 матрица е невалдно ако провериш реда няма смисъл да проверяваш колоната
        for (let row = 1; row < matrix.length; row++) {
            let sumRow = matrix[row].reduce((a, b) => (a + b));
            if (sum != sumRow) {
                return false;
            }
        }

        for (let col = 0; col < matrix[0].length; col++) {
            let sumCol = 0;
            for (let row = 0; row < matrix.length; row++) {
                sumCol += matrix[row][col];
            }

            if (sumCol != sum) {
                return false;
            }
        }

        return true;
    }
    else {
        for (let row = 1; row <= input.length; row++) {
            let sumRow = matrix[row].reduce((a, b) => (a + b));

            if (sum != sumRow) { // ака сумата на n ред не съвпада с първия ред
                return false;
            }
            else {
                return true;
            }
        }
    }

}

function equalNeighborsCount(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' '));
    let neighbors = 0;
    for (let row = 0; row < matrix.length-1; row++)
        for (let col = 0; col < matrix[row].length; col++)
            if (matrix[row][col] == matrix[row + 1][col])
                neighbors++;

    for (let row = 0; row < matrix.length; row++)
        for (let col = 0; col < matrix[row].length; col++)
            if (matrix[row][col] == matrix[row][col+1])
                neighbors++;

    return neighbors;
}

function sumLastKNumbersSequence([n, k]) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current - 1;
        seq[current] = sumer(start,end,seq);
    }

    function sumer(start,end,arr) {
        let sum  = 0;
        for (let i = start; i <= end; i++) {
            sum += arr[i];
        }
        return sum;
    }

    console.log(seq.join(' '));
}

function diagonals(input) {

    let [rows,cols] = input[0].split(" ");
    let matrix = createArray(rows,cols);
    let startNumber = 1;

    for(let row = 0, rowsBecomeSmaller = 0, colsBecomeSmaller = 0; row < rows - rowsBecomeSmaller; row++) {
        for(let col = 0 + rowsBecomeSmaller; col < cols - rowsBecomeSmaller; col++) {
            matrix[row][col] = startNumber;
            startNumber++;

            if(col == cols - 1 - rowsBecomeSmaller) {

                for(let j = row+1; j < rows - rowsBecomeSmaller ; j++) {
                    matrix[j][col] = startNumber;
                    startNumber++;
                }
                rowsBecomeSmaller++;

                for(let j = cols - 1 - rowsBecomeSmaller; j >= rowsBecomeSmaller ; j--) {
                    matrix[rows - rowsBecomeSmaller][j] = startNumber;
                    startNumber++;
                }

                for(let j = rows - 1 - colsBecomeSmaller; j >= colsBecomeSmaller + 1; j--) {
                    matrix[j][colsBecomeSmaller] = startNumber;
                    startNumber++;
                }
                colsBecomeSmaller++;
            }
        }
    }

    matrix.forEach(r => console.log(r.join(" ")));
    function createArray(length) {
        var arr = new Array(length || 0),
            i = length;

        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while(i--) arr[length-1 - i] = createArray.apply(this, args);
        }

        return arr;
    }
}

diagonals([ '5 5' ]);
