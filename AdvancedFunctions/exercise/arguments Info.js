function result () {

    for (let i = 0 ; i < arguments.length; i++) {
        let argument = arguments[i];
        let test = typeof (argument);
        if (typeof (argument) == "object") console.log('object:');
        else console.log(typeof (argument)+ ": " + argument );
    }

    let typeOccurrences = (function () {
        let map = new Map();
        for (let i = 0 ; i < arguments[0].length; i++) {
            let argument = arguments[0][i];
            let type = typeof (argument);
            if(map.has(type)) map.set(type, map.get(type) + 1);
            else map.set(type, 1);
        }

        return map;
    }) (arguments);

    (function () {
        let sorted = [...typeOccurrences.entries()].sort((a,b) => Number(b[1]) - Number(a[1]));
        typeOccurrences = new Map(sorted);
        typeOccurrences.forEach((v,k) => console.log(k + " = " +v));
    }) ();
}

result({ name: 'bob'}, 3.333, 9.999);