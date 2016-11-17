function daggersAndSwords(inputRows) {
    inputRows = inputRows.filter(a => Number(a) > 10);
    let html = '<table border="1">\n' +
        '<thead>\n' +
        '<tr><th colspan="3">Blades</th></tr>\n'+
        '<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n'+
        '</thead>\n'+
        '<tbody>\n';

    for (let size of inputRows) {
        size = ~~size;
        let type = "dagger";
        if(size > 40) type = "sword";

        switch (~~size%5) {
            case 1: {
                html += `<tr><td>${size}</td><td>${type}</td><td>blade</td></tr>\n`
            } break;
            case 2: {
                html += `<tr><td>${size}</td><td>${type}</td><td>quite a blade</td></tr>\n`
            } break;
            case 3: {
                html += `<tr><td>${size}</td><td>${type}</td><td>pants-scraper</td></tr>\n`
            } break;
            case 4: {
                html += `<tr><td>${size}</td><td>${type}</td><td>frog-butcher</td></tr>\n`
            } break;
            case 0: {
                html += `<tr><td>${size}</td><td>${type}</td><td>*rap-poker</td></tr>\n`
            } break;
        }
    }
    html += '</tbody>\n' +
        '</table>';

    console.log(html)
}

daggersAndSwords(
    [
        '17.8',
        '19.4',
        '13',
        '55.8',
        '126.96541651',
        '3'
    ]
)