class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    addToSelector(selector) {
        let div = $("<div>").addClass(`person ${this.name}`);
        div.append($("<p>").addClass("name").text(this.name));
        div.append($("<p>").addClass("age").text(this.age));
        div.append($("<div>").addClass(`posts ${this.name}`));
        div.appendTo(selector);
    }
}

module.exports = Person;