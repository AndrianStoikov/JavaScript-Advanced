function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person {
        constructor (name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let output = super.toString().slice(0, -1);
            output += `, subject: ${this.subject})`;
            return output;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let output = super.toString().slice(0, -1);
            output += `, course: ${this.course})`;
            return output;
        }
    }

    let t = new Teacher("gosho", "adsa@adsadas.vdf", "sex");
    let p = new Person("gosho", "adsa@adsadas.vdf");
    console.log(t.toString());

    return {
        Person,
        Teacher,
        Student
    }
}

personAndTeacher();