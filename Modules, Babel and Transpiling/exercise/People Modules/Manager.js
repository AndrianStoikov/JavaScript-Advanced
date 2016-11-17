import {Employee} from './Employee';

export class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
        this.dividend = 0;
        this.tasks = [`${this.name} scheduled a meeting.`,
            `${this.name} is preparing a quarterly report.`,]
    }

    collectSalary() {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }

    getSalary() {
        return this.salary + this.dividend;
    }
}
