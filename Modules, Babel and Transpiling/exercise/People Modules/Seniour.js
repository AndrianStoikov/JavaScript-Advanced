import {Employee} from './Employee';

export class Senior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks =
            [`${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`]
    }
}