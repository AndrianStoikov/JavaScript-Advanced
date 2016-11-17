let Turtle = require("./Turtle");

class NinjaTurtle extends Turtle {
    constructor(name, age, gender, maskColor, weapon) {
        super(name, age, gender);
        this._maskColor = maskColor;
        this._weapon = weapon;
        this._level = 0;
    }

    grow(age) {
        super.grow(age);
        this._level += age;
    }

    toString() {
        let output = super.toString();
        let that = this;
        output += (function () {
            if(that._level < 25) {
                return `\n${that.name.slice(0, 3)} wears a ${that._maskColor} mask, and is an apprentice with the ${that._weapon}.`
            } else if (that._level >= 25 && that._level < 100) {
                return `\n${that.name.slice(0, 3)} wears a ${that._maskColor} mask, and is smokin strong with the ${that._weapon}.`
            } else if (that._level >= 100){
                return `\n${that.name.slice(0, 3)} wears a ${that._maskColor} mask, and is BEYOND GODLIKE with the ${that._weapon}.`
            }
        } ());

        return output;
    }
}

module.exports = NinjaTurtle;