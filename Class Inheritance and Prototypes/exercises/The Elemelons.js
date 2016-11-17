function solve () {
    class Melon {
        constructor(weight, melonSort) {
            if(new.target === Melon) {
                throw new Error("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this._elementIndex = weight * melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this.constructor.name.slice(0, -5)}
Sort: ${this.melonSort}
Element Index: ${this.elementIndex}`
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = weight * melonSort.length;
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._element = "Water";
        }

        morph() {
            if(!Melolemonmelon.elements) Melolemonmelon.elements = ["Fire", "Earth", "Air", "Water"];
            this._element = Melolemonmelon.elements.shift();
            Melolemonmelon.elements.push(this._element);
            return;
        }

        toString() {
            let output = `Element: ${this._element}
Sort: ${this.melonSort}
Element Index: ${this.elementIndex}`;
            return output;
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
}

let test = solve();
let watermelon = new test.Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
console.log();
let melolemonmelon = new test.Melolemonmelon(200, "Really big one");
melolemonmelon.morph();
console.log(melolemonmelon.toString());
console.log();
melolemonmelon.morph();
console.log(melolemonmelon.toString());
console.log();
melolemonmelon.morph();
console.log(melolemonmelon.toString());
console.log();
melolemonmelon.morph();
console.log(melolemonmelon.toString());