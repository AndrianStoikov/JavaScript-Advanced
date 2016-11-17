let Turtle = require("./Turtle");

class EvkodianTurtle extends Turtle {
    constructor(name, age, gender, evkodiumValue) {
        super(name, age, gender);
        this._evkodium = evkodiumValue;
    }

    get evkodium() {
        let that = this;
        return {
            value: this._evkodium,
            density: (function () {
                if(that.gender == "male")
                    return that.age * 3;
                if(that.gender == "female")
                    return that.age * 2;
                else return 0;
            } ())
        }
    }

    toString() {
        let output = super.toString();
        let evkodiumValues = this.evkodium;
        output += `\nEvkodium: ${evkodiumValues.value * evkodiumValues.density}`;
        return output;
    }
}

module.exports = EvkodianTurtle;