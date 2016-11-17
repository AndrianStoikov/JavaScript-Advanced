class CheckingAccount {
    constructor(clientId, email, firstName, lastName ) {
        if(clientId.length === 6)
            this.cliendId = clientId;
        else throw new TypeError("Client ID must be a 6-digit number");

        if(/[A-Za-z0-9]+@[A-za-z.]+/g.test(email))
            this.email = email;
        else throw new TypeError("Invalid e-mail");

        if(firstName.length >= 3 && firstName.length <= 20) {
            if(/^[A-Za-z]+$/g.test(firstName)) {
                this.firstName = firstName;
            } else {
                throw new TypeError("First name must contain only Latin characters");
            }
        } else {
            throw new TypeError(`First name must be between 3 and 20 characters long`);
        }
        if(lastName.length >= 3 && lastName.length <= 20) {
            if(/^[A-Za-z]+$/g.test(lastName)) {
                this.lastName = lastName;
            } else {
                throw new TypeError("Last name must contain only Latin characters");
            }
        } else {
            throw new TypeError(`Last name must be between 3 and 20 characters long`);
        }


    }
}

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')
console.log(acc);