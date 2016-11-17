let Turtle = require("./Turtle");

class GalapagosTurtle extends Turtle {
    constructor(name, age, gender) {
        super(name, age, gender);
        this._thingsEaten = [];
    }

    get thingsEaten() {
        return this._thingsEaten;
    }

    eat(food) {
        this._thingsEaten.push(food);
    }

    grow(age) {
        if(age > 0) {
            super.grow(age);
            this._thingsEaten = [];
        }
    }

    toString() {
        let output = super.toString();
        output += `\nThings, eaten this year: ${this.thingsEaten.join(", ")}`;
        return output;
    }
}

module.exports = GalapagosTurtle;