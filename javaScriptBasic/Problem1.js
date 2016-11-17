function main(input){
    let i, currentLine, examPoints, exam,
        bonuses, grade, output = "", counter = 0,
        targetedCourse = input[input.length-1].trim(),
        sumOfGrades = 0;

    for (i = 0; i < input.length-1; i++) {
        currentLine = input[i].split(/\s+/).filter(function(e){return e});
        if(currentLine[1] === targetedCourse){
            counter++;
            sumOfGrades += parseInt(currentLine[2]);
        }

        examPoints = parseInt(currentLine[2]);
        if(examPoints < 100) {
            console.log( currentLine[0] + ' failed at "' + currentLine[1] + '"');
            continue;
        }

        exam = examPoints * 0.2;
        bonuses = parseFloat(currentLine[3]);
        grade = (((exam + bonuses) / 80) * 4) + 2;
        if(grade > 6.00) {
            grade = 6.00;
        }
        console.log( currentLine[0] +
            ': Exam - "'  + currentLine[1] +
            '"; Points - ' + parseFloat((exam + bonuses).toFixed(2)) +
            '; Grade - '+ (grade).toFixed(2));
    }
    console.log( '"' + targetedCourse + '"' + ' average points -> ' + parseFloat((sumOfGrades/counter).toFixed(2)));
}

main([ 'Student1 C#-Advanced 100 3',
    'Student2 C#-Advanced 157 3',
    'Student3 C#-Advanced 317 12',
    'Student4 C#-Advanced 57 15',
    'Student5 C#-Advanced 157 15',
    'Student6 C#-Advanced 333 7',
    'Student7 C#-Advanced 222 6',
    'Student8 C#-Advanced 111 15',
    'Student9 C#-Advanced 99 1',
    'Student10 C#-Advanced 0 0',
    'Student11 C#-Advanced 236 0',
    'Student12 C#-Advanced 150 0',
    'Student13 C#-Advanced 77 1',
    'Student14 C#-Advanced 390 12',
    'Student15 C#-Advanced 100 10',
    'C#-Advanced']);