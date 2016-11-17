function printLetters (a) {
    let arr = a[0].split("");
    arr.forEach((letter, i ) => console.log(`str[${i}] -> ${letter}`));
}

function concatenateRevers(a) {
    let text = '';
    for(let word of a) {
        text += word;
    }

    console.log(text.split('').reverse().join(""));
}

function countOccurences ([word,text]) {
    let regex = new RegExp(word, "g");
    console.log(regex);
    console.log(text.match(regex).length)
}

function extractText([text]) {
    let regex = /\((.*?)\)/g;
    console.log(text.match(regex).join(", ").replace(/[(]/g, "").replace(/[)]/g, ""));
}

function aggregateTable(input) {
    let income = 0;
    let towns = [];
    for (let town of input) {
        let information = town.split(/[\|]\s+/g);
        information = information.filter(Boolean);
        towns.push(information[0].trim());
        income += Number(information[1].trim());
    }

    console.log(towns.join(", "));
    console.log(income);
}

function restaurantBill(input) {
    let purchases = [];
    let bill = 0;
    for (let i = 0; i < input.length; i += 2) {
        purchases.push(input[i]);
        bill += Number(input[i+1]);
    }

    console.log(`You purchased ${purchases.join(", ")} for a total sum of ${bill}`)
}

function userNames(input) {
    let results = [];
    for (let email of input) {
        let [name,domain] = email.split("@");
        name = name + ".";
        let domainParts = domain.split('.');
        domainParts.forEach(p => name += p[0]);
        results.push(name);
    }

    console.log(results.join(", "));
}

function censorship(input) {
    let text = input.shift();

    for(let censor of input) {
        text = text.replace(new RegExp(escapeRegExp(censor), "g"), a => "-".repeat(a.length));
    }

    console.log(text);

    function escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
}

function htmlList(items) {
    let output = "<ul>\n";
    output += items.map(htmlEscape).map(item => `  <li>${item}</li>`).join("\n");
    output += "</ul>\n";
    return output;

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

function match ([text]) {
    let match = text.match(/\w+/g);
    console.log(match.join("|"));
}

function validEmail([email]) {

        let pattern =
            /^[a-zA-Z0-9\._]+\@[a-z]+(\.[a-z]+)+$/g;
        let result = pattern.test(email);
        if (result) {
            console.log("Valid");
        } else {
            console.log("Invalid");
        }

}

function expresionSplit([text]) {
    let regex = /([ ,'();.]|\\t)+/g;
    console.log(text.replace(regex, "\n"));
}

function extractDates(inputSentences) {
    let pattern =
        /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let dates = [], match;
    for (let sentence of inputSentences)
        while (match = pattern.exec(sentence))
            dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
    console.log(dates.join("\n"));
}

function employeeData(input) {
    let regex = /^([A-Z][a-z]+) - (\d+) - (.+)$/g;
    for (let row of input) {
        let match = '';
        while(match = regex.exec(row)) {
            console.log(
                `Name: ${match[1]}\n` +
                `Position: ${match[3]}\n` +
                `Salary: ${match[2]}`
            )
        }
    }
}

function formFiller(input) {
    let username = input.shift();
    let email = input.shift();
    let phoneNumber = input.shift();

    let text = input.join("\n");

    let usernameRegex = /<!\w+!>/g;
    let emailRegex = /<@\w+@>/g;
    let phoneNumberRegex = /<\+\w+\+>/g;

    text = text.replace(usernameRegex, username);
    text = text.replace(emailRegex, email);
    text = text.replace(phoneNumberRegex, phoneNumber);

    console.log(text);
}

function splitString ([string, delimiter]) {

    let regex = new RegExp(escapeRegExp(delimiter), "g");

    let arr = string.split(regex);

    console.log(arr.join("\n"));
    function escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
}

function repeatStringNTimes([string, n]) {
    console.log(string.repeat(Number(n)));
}

function stringStartWith([string,substring]) {
    let text = string.toString();
    return text.startsWith(substring);
}

function stringEndsWith([string,substring]) {
    return (string.endsWith(substring));
}

function capitalizeWords([text]) {
    text = text.toLowerCase();
    let words = text.split(" ");

    let result = [];
    for (let word of words) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        result.push(word)
    }

    console.log(result.join(" "));
}

function captureNumber(input) {
    let regex = /\d+/g;

    let text = input.join("");
    let numbers = text.match(regex);
    console.log(numbers.join(" "));
}

function findVariableNames([text]) {
    let regex = /\b_[A-Za-z\d]+\b/g;

    let match;
    let variables = [];
    while (match = regex.exec(text)) {
        let variable = match[0];
        variable = variable.replace('_', '');
        variables.push(variable);
    }

    console.log(variables.join(","));
}

function findOccurences([text,word]) {
    let regexExpression = "\\b";
    word = escapeRegExp(word);
    regexExpression += word;
    regexExpression += "\\b";

    let regex = new RegExp(regexExpression, "gi");
    let match = text.match(regex);
    if (match != null) console.log(match.length);
    else console.log("0");

    function escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
}

function extractLinks(input) {
    let text = input.join("\n");
    let regex = /(www)\.([A-Za-z0-9-]+)\.([a-z]+(?:\.[a-z]+))*/g;

    let match = text.match(regex);
    if (match !== null) console.log(match.join("\n"));
}

function secretData(input) {
    let f = input.forEach
    (l => console.log(l.replace
    (/(\*[A-Z][a-zA-Z]*)(?= |\t|$)|(\+[0-9-]{10})(?= |\t|$)|(![0-9a-zA-Z]+)(?= |\t|$)|(_[0-9a-zA-Z]+)(?= |\t|$)/g,
        (m) => '|'.repeat(m.length))));
// нямам думи за regexa
}


