function queryMess(inputRows) {
    for(let row of inputRows) {
        let object = {};
        let keyValuePairs = row.split(/[&?]/g);
        keyValuePairs.forEach(pair => {
            let regex = /(.+)=(.+)/g;
            let match = pair.match(regex);
            if (match === null) match = [];
            match.forEach(value => {
                value = value.replace(/(%20)|(\+)/g, " ");
                value = value.replace(/\s+/g, " ");
                value = value.split("=");
                if(!object.hasOwnProperty(value[0].trim())) object[value[0].trim()] = [];
                object[value[0].trim()].push(value[1].trim())
            });
        });

        let output = '';
        for(var value in object) {
            output +=`${value}=[${object[value].join(", ")}]`;
        }
        console.log(output);
    }
}

queryMess(
    [
        'foo=%20foo&value=+val&foo+=5+%20+203',
        'foo=poo%20&value=valley&dog=wow+',
        'url=https://softuni.bg/trainings/coursesinstances/details/1070',
        'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
    ]
)