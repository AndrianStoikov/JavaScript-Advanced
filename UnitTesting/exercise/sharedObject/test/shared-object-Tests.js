let jsdom = require('jsdom-global')();
let $ = require('jquery');

sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};
let expect = require('chai').expect;

describe("Test Shared Object's functionality", function () {

    let testObject;
    beforeEach("Init new Object", function () {
        testObject = Object.create(sharedObject);
        document.body.innerHTML =
            `<div id="wrapper">
                <input type="text" id="name">
                <input type="text" id="income">
            </div>`;
    });

    describe("Test if the object has following properties", function () {
        it("should have property name", function () {
            let proto = Object.getPrototypeOf(testObject);
            expect(proto.hasOwnProperty("name")).to.be.equal(true);
        });
        it("should have property income", function () {
            let proto = Object.getPrototypeOf(testObject);
            expect(proto.hasOwnProperty("income")).to.be.equal(true);
        });
        it("should have property changeName", function () {
            let proto = Object.getPrototypeOf(testObject);
            expect(proto.hasOwnProperty("changeName")).to.be.equal(true);
        });
        it("should have property changeIncome", function () {
            let proto = Object.getPrototypeOf(testObject);
            expect(proto.hasOwnProperty("changeIncome")).to.be.equal(true);
        });
        it("should have property updateName", function () {
            let proto = Object.getPrototypeOf(testObject);
            expect(proto.hasOwnProperty("updateName")).to.be.equal(true);
        });
        it("should have property updateIncome", function () {
            let proto = Object.getPrototypeOf(testObject);
            expect(proto.hasOwnProperty("updateIncome")).to.be.equal(true);
        });
    });

    describe("Test if the object starts with initial values", function () {
        it("should have property name with value null", function () {
            expect(testObject.name).to.be.equal(null);
        });

        it("should have property income with value null", function () {
            expect(testObject.income).to.be.equal(null);
        });

        it("should have property income with value null", function () {
            expect(testObject.income).to.be.equal(null);
            expect(testObject.name).to.be.equal(null);
        });

        it('should return null on testObject.income', () => {
            expect(testObject.income).to.equal(null);
            expect($('#income').val()).to.equal('');
            expect(testObject.name).to.equal(null);
            expect($('#name').val()).to.equal('');
        });
    });

    describe("Test changeName(name) functionality", function () {

        it("should do nothing if empty string is passed", function () {
            testObject.changeName("");
            expect($("#name").val()).to.be.equal('');
            expect(testObject.name).to.be.equal(null);
        });

        it("should not change the old value if empty string is passed", function () {
            testObject.changeName("pesho");
            testObject.changeName("");
            expect($("#name").val()).to.be.equal("pesho");
            expect(testObject.name).to.be.equal("pesho");
        });

        it("should change the old value for passed in string", function () {
            testObject.changeName("pesho");
            testObject.changeName("Georgi Georgiev");
            expect($("#name").val()).to.be.equal("Georgi Georgiev");
            expect(testObject.name).to.be.equal("Georgi Georgiev");
        });
    });

    describe("Test changeIncome(income) functionality", function () {

        it("should do nothing if float or less or equal to 0 is parsed", function () {
            testObject.changeIncome(3.14);
            testObject.changeIncome(0);
            expect($("#income").val()).to.be.equal('');
            expect(testObject.income).to.be.equal(null);
        });

        it("should not change the old value if float or less or equal to 0 is parsed", function () {
            testObject.changeIncome(310);
            testObject.changeIncome(1.32);
            testObject.changeIncome(0);
            expect($("#income").val()).to.be.equal("310");
            expect(testObject.income).to.be.equal(310);
        });

        it("should change the old value for passed in positive integer", function () {
            testObject.changeIncome(310);
            testObject.changeIncome(15);
            expect($("#income").val()).to.be.equal("15");
            expect(testObject.income).to.be.equal(15);
        });
    });

    describe("Test updateName() functionality", function () {

        it("should do nothing if empty string is passed", function () {
            $("#name").val("");
            testObject.updateName();
            let objectName = testObject.name;
            expect(objectName).to.be.equal(null);
            expect("").to.be.equal($("#name").val());
        });

        it("should make equal names", function () {
            $("#name").val("test");
            testObject.updateName();
            let objectName = testObject.name;
            expect(objectName).to.be.equal("test");
            expect(objectName).to.be.equal($("#name").val());
        });

        it("should make equal names again", function () {
            $("#name").val("testAgain");
            testObject.updateName();
            let objectName = testObject.name;
            expect(objectName).to.be.equal("testAgain");
            expect(objectName).to.be.equal($("#name").val());
        });
    });

    describe("Test updateIncome() functionality", function () {

        it("should do nothing if float is passed", function () {
            $("#income").val(3.14);
            testObject.updateIncome();
            let objectName = testObject.income;
            expect(objectName).to.be.equal(null);
        });

        it("should do nothing if not possitive, float or 0 is passed", function () {
            $("#income").val(3.14);
            testObject.updateIncome();
            $("#income").val(0);
            testObject.updateIncome();
            $("#income").val(-1);
            testObject.updateIncome();
            let objectName = testObject.income;
            expect(objectName).to.be.equal(null);;
        });

        it("should do nothing if not possitive, float or 0 is passed", function () {
            $("#income").val(3.14);
            testObject.updateIncome();
            $("#income").val(1);
            testObject.updateIncome();
            $("#income").val(0);
            testObject.updateIncome();
            $("#income").val(-1);
            testObject.updateIncome();
            let objectName = testObject.income;
            expect(objectName).to.be.equal(1);
        });

        it("should do nothing NaN is passed", function () {
            $("#income").val(56);
            testObject.updateIncome();
            $("#income").val("NaN");
            testObject.updateIncome();
            let objectName = testObject.income;
            expect(objectName).to.be.equal(56);
        });

        it("should update the income for valid input", function () {
            $("#income").val(12);
            testObject.updateIncome();
            let objectName = testObject.income;
            expect(objectName).to.be.equal(12);
        });

        it("should update the income for valid input", function () {
            $("#income").val(123);
            testObject.updateIncome();
            let objectName = testObject.income;
            expect(objectName).to.be.equal(123);
        });
    });
});