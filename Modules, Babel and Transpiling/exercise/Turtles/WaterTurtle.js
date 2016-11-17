let Turtle = require("./Turtle");

class WaterTurtle extends Turtle {
    constructor(name, age, gender, waterPool) {
        super(name, age, gender);
        this._waterPool = waterPool;
    }

    get currentWaterPool() {
        return this._waterPool;
    }

    travel(waterPool) {
        if(waterPool != this._waterPool) {
            this._waterPool = waterPool;
            super.grow(5);
        }
    }

    toString() {
        let output = `${super.toString()}\n` + `Currently inhabiting ${this.currentWaterPool}`;
        return output;
    }
}

module.exports = WaterTurtle;