class Rat {
    constructor (name) {
        this.name = name;
        this.united = [];
    }

    unite(otherRat) {
        if(otherRat instanceof Rat) {
            this.united.push(otherRat);
        }
    }

    getRats() {
        return this.united;
    }

    toString() {
        let output = '';
        output += this.name + '\n';
        for (let rat of this.united) {
            output += `##${rat}\n`;
        }

        return output.trim();
    }
}

let rat1 = new Rat("Goshu");
let rat2 = new Rat("Pesho");
let rat3 = new Rat("Ivan");
let rat4 = new Rat("Minka");
let rat5 = new Rat("Penka");
rat1.unite(rat2);
rat1.unite(rat3);
rat1.unite(rat4);
rat1.unite([]);
console.log(rat1.toString());

rat2.unite(rat1)
rat2.unite(rat3)
rat2.unite(rat5)
rat2.unite({})

console.log(rat2.toString());
