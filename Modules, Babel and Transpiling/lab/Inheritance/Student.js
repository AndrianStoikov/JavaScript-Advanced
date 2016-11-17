let Person = require("./Person");

class Student extends Person {
    constructor(name, phrase, dog, id) {
        super(name, phrase, dog);
        this.id = id;
    }

    saySomething() {
        let personSay = super.saySomething();
        return `Id: ${this.id} ` + personSay;
    }
}

module.exports = Student;