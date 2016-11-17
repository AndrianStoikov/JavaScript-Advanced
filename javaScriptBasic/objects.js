function parseTownsToJSON(towns) {
    let townsArr = [];
    for (let town of towns.slice(1)) {
        let [empty, townName, lat, lng] =
            town.split(/\s*\|\s*/);
        let townObj = { Town: townName, Latitude:
            Number(lat), Longitude: Number(lng) };
        townsArr.push(townObj);
    }
    return JSON.stringify(townsArr);
}

function scoreToHTML(input) {
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th></tr>\n";

    for(let row of JSON.parse(input)) {
        html += `  <tr><td>${escapeHtml(row.name)}</td><td>${row.score}</td></tr>\n`
    }

    html += "</table>";

    console.log(html);

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}

function jsonToHtmlTable(input) {
    let html = "<table>\n";

    html += "  <tr>";
    let object = JSON.parse(input[0]);
    object.slice(0,1).forEach(obj => Object.keys(obj).forEach(key => html += `<th>${key}</th>`));
    html += "</tr>\n";
    for(let row of object) {
        let keys = Object.keys(row);
        html += "  <tr>";
        keys.forEach(key => html += `<td>${escapeHtml(row[key])}</td>`);
        html += "</tr>\n";
    }
    html += "</table>";
    console.log(html);

    function escapeHtml(unsafe) {
        if (typeof (unsafe) != "number") {
            return unsafe
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;")
        }
        return unsafe;
    }
}

function sumByTown(input) {
    let map = {};
    for(let i = 0; i < input.length; i += 2) {
        if (! map.hasOwnProperty(input[i])) {
            map[input[i]] = Number(input[i+1]);
        } else map[input[i]] += Number(input[i+1]);
    }

    console.log(JSON.stringify(map));
}

function countWords(input) {
    let arrOfWords = input[0].match(/\w+/g);
    let words = {};

    for(let i = 0; i < arrOfWords.length; i++) {
        if (! words.hasOwnProperty(arrOfWords[i])) {
            words[arrOfWords[i]] = 1;
        } else words[arrOfWords[i]] += 1;
    }

    console.log(JSON.stringify(words));
}

function countWordsWithMap(inputLines) {
    let words = inputLines.join('\n').toLowerCase()
        .split(/[^A-Za-z0-9_]+/).filter(w => w != '');
    let wordsCount = new Map();
    for (let w of words)
        wordsCount.has(w) ? wordsCount.set(w,
            wordsCount.get(w)+1) : wordsCount.set(w, 1);
    let allWords = Array.from(wordsCount.keys()).sort();
    allWords.forEach(w =>
        console.log(`'${w}' -> ${wordsCount.get(w)} times`));
}

function sumsByTown(inputRows) {
    let map = new Map();

    for(let row of inputRows) {
        let [city,population] = row.split(" <-> ");
        if(!map.has(city)) {
            map.set(city, Number(population));
        } else map.set(city, map.get(city) + Number(population))
    }

    map.forEach((v,k) => console.log(`${k} : ${v}`))
}

function cityMarkets(sales) {
    let townsWithProducts = new Map();

    for (let sale of sales) {
        let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
        let [quantity, price] = quantityPrice.split(/\s*:\s*/);
        if (!townsWithProducts.has(town))
            townsWithProducts.set(town, new Map());
        let income = quantity * price;
        let oldIncome = townsWithProducts.get(town).get(product);
        if (oldIncome) income += oldIncome;
        townsWithProducts.get(town).set(product, income);
    }

    townsWithProducts.forEach(function (v,k) {
        console.log(`Town - ${k}`);
        v.forEach((sales,product) => console.log(`$$$${product} : ${sales}`));
    });
}

function uniqueWords (input) {
    let set = new Set();

    let text = input.join("").toLowerCase();

    let arrOfWords = text.match(/\w+/g);

    arrOfWords.forEach(word => set.add(word));

    arrOfWords = [];
    set.forEach(v => arrOfWords.push(v));
    console.log(arrOfWords.join(", "));
}

function lowestPrices(inputRows) {
    let products = new Map();
    for(let row of inputRows) {
        let [town,product,price] = row.split(/\s*\|\s*/);
        if (! products.has(product)) {
            products.set(product, new Map());
            products.get(product).set(town,price);
        } else {
            let mapIter = products.get(product).values();
            console.log(mapIter);
            if (Number(mapIter.next().value) > price) {
                mapIter = products.get(product).keys();
            }
        }
    }

    products.forEach(function (v, k) {
        let output = '';
        output += `${k} -> `;
        v.forEach((price,town) => output += `${price} (${town})`);
        console.log(output);
    });
}

function heroicInventory(input) {
    let result =[];

    let obj = {};
    for(let row of input) {
        let [Name,Level,Items] = row.split(/\s*\/\s*/g);
        if(Items !== undefined) Items = Items.split(", ");
        else Items = [];
        let heroData = {name: Name, level: Number(Level), items: Items};
        result.push(heroData);
    }

    console.log(JSON.stringify(result))
}

function jsonTable(input) {
    let html = "<table>\n";

    for (let row of input) {
        let informationObject = JSON.parse(row);
        html += "	<tr>\n";
        for(var key in informationObject) {
            html += `		<td>${informationObject[key]}</td>\n`;
        }
        html += "	<tr>\n";
    }
    html += "</table>";
    console.log(html)
}

function cappyJuice(input) {
    let juiceBottles = new Map();

    let juiceQuantity = new Map();
    for(let row of input) {
        let [juice, quantity] = row.split(/\s*=>\s*/);
        quantity = Number(quantity);
        debugger;
        if (!juiceQuantity.has(juice)) {
            if(quantity >= 1000) {
                let bottle = ~~(quantity/1000);
                quantity = quantity % 1000;
                juiceBottles.set(juice,bottle);
            }
            juiceQuantity.set(juice, quantity);
        } else {
            quantity += Number(juiceQuantity.get(juice));
            if(quantity >= 1000) {
                let bottle = ~~(quantity/1000);
                quantity = quantity % 1000;
                let sum = 0;
                if(!isNaN(juiceBottles.get(juice) + bottle)) sum = juiceBottles.get(juice) + bottle;
                else sum = bottle;
                juiceBottles.set(juice, sum);
            }
            juiceQuantity.set(juice, quantity);
        }
    }

    juiceBottles.forEach((v,k) => console.log(`${k} => ${v}`));
}

function storeCatalogue(input) {
    let map = new Map();

    for (let row of input) {
        let [product,price] = row.split(/\s*:\s*/g);
        price = Number(price);
        let letter = product.slice(0,1);
        if(!map.has(letter)) {
            map.set(letter, new Map);
        }
        map.get(letter).set(product, price);
    }

    let resultMap = new Map();

    let asd;
    for(asd of map.entries()) {
        resultMap.set(asd[0], new Map([...asd[1].entries()].sort()));
    }

    resultMap = new Map([...resultMap.entries()].sort());

    resultMap.forEach(function (v, k) {
        console.log(k);
        v.forEach((value,key) => console.log( `  ${key}: ${value}` ));
    })
}

function autoEngineeringCompany(inputRows) {
    let cars = new Map();
    for (let row of inputRows) {
        let [car,model,quantity] = row.split(/\s*\|\s*/g);
        quantity = Number(quantity);
        if(!cars.has(car)) {
            cars.set(car, new Map);
        }

        debugger;
        if (cars.get(car).get(model)) {
            let oldValue = cars.get(car).entries().next().value[1];
            quantity += oldValue;
        }
        cars.get(car).set(model,quantity);
    }

    cars.forEach(function (v, k) {
        console.log(k);
        v.forEach((quantity, model) => console.log(`###${model} -> ${quantity}`))
    })
}

function systemComponents(data) {
    let catalogue = new Map;
    for (let line of data) {
        let [system, component, subComponent] = line.split(/\s\|\s/);
        if (!catalogue.has(system)) {
            catalogue.set(system, new Map);
        }

        if (!catalogue.get(system).has(component)) {
            catalogue.get(system).set(component, [])
        }
        catalogue.get(system).get(component).push(subComponent);
    }

    function sortSystemComparator(sysA, sysB, catalogue) {
        let aComponents = catalogue.get(sysA).size;
        let bComponents = catalogue.get(sysB).size;
        if (aComponents > bComponents) return -1;
        if (aComponents < bComponents) return 1;

        return sysA.toLowerCase().localeCompare(sysB.toLocaleLowerCase());
    }

    let systems = [...catalogue.keys()].sort((a, b) => sortSystemComparator(a, b, catalogue));
    for (let system of systems) {
        console.log(system);
        let components = [...catalogue.get(system).keys()].sort((s1, s2) => catalogue.get(system).get(s2).length - catalogue.get(system).get(s1).length);
        for (let component of components) {
            console.log(`|||${component}`);
            for (let subComponent of catalogue.get(system).get(component)) {
                console.log(`||||||${subComponent}`);
            }
        }
    }
}


systemComponents([
    "SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security",

]);
