let Dog = require("./Dog");

class Person extends Dog {
    constructor(name, phrase, dog) {
        super(name);
        this.phrase = phrase;
        this.dog = dog;
    }

    saySomething() {
        let dogBark = this.dog.saySomething();
        return `${this.name} says: ${this.phrase}` + dogBark;
    }
}

module.exports = Person;