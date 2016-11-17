class Branch {
    constructor(id, branchName, companyName) {
        this._id = id;
        this._branchName =branchName;
        this._companyName = companyName
        this._employees = [];
    }

    get employees() {
        return this._employees;
    }

    hire(employee) {
        this._employees.push(employee);
    }

    toString() {
    //“@ {companyName}, {branchName}, {branchId}”
    //“Employed:”
    //“** {employee1}”
    //“** {employee2}”
    //. . .
        let output = `@ ${this._companyName}, ${this._branchName}, ${this._id}`;
        output += "\nEmployed:\n";
        if(this._employees.length > 0) {
            this._employees.forEach(employee => {
               output += `** ${employee.toString()}\n`;
            });

            return output.trim();
        } else {
            output += "\nNone...";
            return output;
        }
    }
}

module.exports = Branch;