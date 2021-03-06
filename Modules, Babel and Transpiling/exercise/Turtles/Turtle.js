class Turtle {
    constructor(name, age, gender) {
        if(new.target === Turtle) {
            throw new Error("This is an abstract class cannot be instantiated");
        }
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get gender() {
        return this._gender;
    }

    grow(age) {
        this._age += age;
    }

    toString() {
        let output = `Turtle: ${this._name}\n`;
        output += `Aged - ${this._age}; Gender - ${this._gender}`;

        return output;
    }
}

module.exports = Turtle;