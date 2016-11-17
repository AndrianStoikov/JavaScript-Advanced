function bunnyKill(inputRows) {
    let bombBunnies  = inputRows.pop().split(/ /g);

    let matrix = inputRows.map(row => row.split(" ").map(Number));

    let snowballDamage = 0;
    let snowballKills = 0;

    function isInMatrix(matrix, row, column) {
        if((row >= 0 && row < matrix.length)
            && (column >= 0 && column < matrix[row].length)) {
            return true;
        }
        return false;
    }

    function explode(matrix, bombRow, bombColumn, bombDamage) {
        for(let row = bombRow - 1; row <= bombRow + 1; row++) {
            for(let col = bombColumn - 1; col <= bombColumn + 1; col++) {
                if (isInMatrix(matrix, row,col)) {
                    matrix[row][col] -= bombDamage;
                }
            }
        }
    }

    for(let i = 0; i < bombBunnies.length; i++) {
        let currentBombBunny = bombBunnies[i].split(",").map(Number);

        let bombRow = currentBombBunny[0];
        let bombColumn = currentBombBunny[1];

        let bombDamage = matrix[bombRow][bombColumn];
        if(bombDamage > 0 ) {
            snowballDamage += bombDamage;
            snowballKills++;
            explode(matrix, bombRow,bombColumn,bombDamage);
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for(let column = 0; column < matrix[row].length; column++) {
            let currentCell = matrix[row][column];

            if(currentCell > 0) {
                snowballDamage += currentCell;
                snowballKills++;
            }
        }
    }

    console.log(snowballDamage);
    console.log(snowballKills);
}

bunnyKill([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0',
]);