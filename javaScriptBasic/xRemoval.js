function xRemoval(inputRows) {
    let Matrix = inputRows.map(row => row.split(''));

    let resultMatrix = inputRows.map(row => row.split(''));
    for(let row = 0; row < Matrix.length - 2; row++) {
        for(let col = 0; col < Matrix[row].length - 2; col++) {
            let [leftDiagonal,rightDiagonal] = getDiagonals(row,col);
            if ((leftDiagonal.toLowerCase()  == rightDiagonal.toLowerCase()) && (leftDiagonal.length >= 3 && rightDiagonal.length >= 3)) {
                resultMatrix = markAsUndefined(resultMatrix,row,col);
            }
        }
    }

    resultMatrix.forEach(row=> console.log(row.join("")));

    function getDiagonals(row,col) {
        let leftDiagonal = '';
        let rows = row;
        for(let cols = col; cols < col + 3; cols++) {
            if(Matrix[rows][cols] !== undefined) {
                leftDiagonal += Matrix[rows][cols];
            }
            rows++;
        }

        let rightDiagonal = '';
        rows = row;
        for(let cols = col + 2; cols >= col; cols--) {
            if(Matrix[rows][cols] !== undefined) rightDiagonal += Matrix[rows][cols];
            rows++;
        }

        return [leftDiagonal, rightDiagonal];
    }

    function markAsUndefined(matrix, row, col) {
        let rows = row;
        for(let cols = col; cols < col + 3; cols++) {
            matrix[rows][cols] = undefined;
            rows++;
        }

        rows = row + 2;
        for(let cols = col; cols <= col + 2; cols++) {
            matrix[rows][cols] = undefined;
            rows--;
        }

        return matrix;
    }

}

xRemoval(
    [
        'puoUdai',
        'miU',
        'ausupirina',
        '8n8i8',
        'm8o8a',
        '8l8o860',
        'M8i8',
        '8e8!8?!'
    ]
);