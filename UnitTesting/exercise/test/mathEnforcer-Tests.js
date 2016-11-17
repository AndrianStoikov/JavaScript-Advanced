let mathEnforcer = require("../mathEnforcer").mathEnforcer;
let expect = require("chai").expect;

describe("Test isOddOrEven ()", function () {
    describe("Test addFive", function () {
        it("should return true for has property addFive", function () {
            let hasProperty = mathEnforcer.hasOwnProperty("addFive");
            expect(hasProperty).to.be.equal(true);
        });

        it("should return undefined for addFive(\"Pesho\")", function () {
            let actualResult = mathEnforcer.addFive("Pesho");
            expect(actualResult).to.be.equal(undefined);
        });

        it("should return undefined for addFive({})", function () {
            let actualResult = mathEnforcer.addFive({});
            expect(actualResult).to.be.equal(undefined);
        });

        it("should return undefined for addFive([1.213, 21321.5, 132])", function () {
            let actualResult = mathEnforcer.addFive("54");
            expect(actualResult).to.be.equal(undefined);
        });

        it("should return undefined for addFive()", function () {
            let actualResult = mathEnforcer.addFive();
            expect(actualResult).to.be.equal(undefined);
        });

        it("should return 59 for addFive(54)", function () {
            let actualResult = mathEnforcer.addFive(54);
            expect(actualResult).to.be.equal(54 + 5);
        });

        it("should return 6.233 for addFive(1.233)", function () {
            let actualResult = mathEnforcer.addFive(1.233);
            expect(actualResult).to.be.equal(5 + 1.233);
        });

        it("should return 1.233 for addFive(-6.233)", function () {
            let actualResult = mathEnforcer.addFive(-6.233);
            expect(actualResult).to.be.equal(-6.233 + 5);
        });

        it("should return 0 for addFive(-5)", function () {
            let actualResult = mathEnforcer.addFive(-5);
            expect(actualResult).to.be.equal(-5 + 5);
        });

    });

    describe("Test  subtractTen", function () {
        it("should return true for has property addFive", function () {
            let hasProperty = mathEnforcer.hasOwnProperty("subtractTen");
            expect(hasProperty).to.be.equal(true);
        });

        it("should return undefined for subtractTen(\"Pesho\")", function () {
            let actualResult = mathEnforcer.subtractTen("Pesho");
            expect(actualResult).to.be.equal(undefined);
        });

        it("should return undefined for subtractTen({})", function () {
            let actualResult = mathEnforcer.subtractTen({});
            expect(actualResult).to.be.equal(undefined);
        });

        it("should return undefined for subtractTen(\"54\")", function () {
            let actualResult = mathEnforcer.subtractTen("54");
            expect(actualResult).to.be.equal(undefined);
        });

        it("should return undefined for subtractTen()", function () {
            let actualResult = mathEnforcer.subtractTen();
            expect(actualResult).to.be.equal(undefined);
        });

        it("should return 44 for subtractTen(54)", function () {
            let actualResult = mathEnforcer.subtractTen(44);
            expect(actualResult).to.be.equal(44 - 10);
        });

        it("should return -8.767 for subtractTen(1.233)", function () {
            let actualResult = mathEnforcer.subtractTen(1.233);
            expect(actualResult).to.be.equal(1.233 - 10);
        });

        it("should return -16.233 for subtractTen(-6.233)", function () {
            let actualResult = mathEnforcer.subtractTen(-6.233);
            expect(actualResult).to.be.equal(-6.233 - 10);
        });

        it("should return 0 for subtractTen(10)", function () {
            let actualResult = mathEnforcer.subtractTen(10);
            expect(actualResult).to.be.equal(-10 + 10);
        });
    });

    describe("Test sum", function () {
        it("should return true for has property sum", function () {
            let hasProperty = mathEnforcer.hasOwnProperty("sum");
            expect(hasProperty).to.be.equal(true);
        });

        it("should return undefined for sum(\"Pesho\")", function () {
            let actualResult = mathEnforcer.sum("Pesho" , 5);
            expect(actualResult).to.be.equal(undefined);
        });

        it("should return undefined for sum(\"Pesho\", \"Gosho\")", function () {
            let actualResult = mathEnforcer.sum("Pesho", "Gosho");
            expect(actualResult).to.be.equal(undefined);
        });

        it("should return undefined for sum(54, \"21\")", function () {
            let actualResult = mathEnforcer.sum(54, "21");
            expect(actualResult).to.be.equal(undefined);
        });

        it("should return undefined for sum(\"54\", 21)", function () {
            let actualResult = mathEnforcer.sum("54", 21);
            expect(actualResult).to.be.equal(undefined);
        });

        it("should return undefined for sum(\"54\", \"21\")", function () {
            let actualResult = mathEnforcer.sum("54", "21");
            expect(actualResult).to.be.equal(undefined);
        });

        it("should return undefined for sum()", function () {
            let actualResult = mathEnforcer.sum();
            expect(actualResult).to.be.equal(undefined);
        });

        it("should return 22 for sum(21, 1)", function () {
            let actualResult = mathEnforcer.sum(21, 1);
            expect(actualResult).to.be.equal(21 + 1);
        });

        it("should return 25.28 for sum(23.50, 1.78)", function () {
            let actualResult = mathEnforcer.sum(23.50, 1.78);
            expect(actualResult).to.be.equal(23.50 + 1.78);
        });

        it('should return -4 on sum(-2, -2)', () => {
            expect(mathEnforcer.sum(-2, -2)).to.equal(-4);
        });

        it('should return -18 on sum(-2.8, -15.2)', () => {
            expect(mathEnforcer.sum(-2.8, -15.2)).to.equal(-2.8 + -15.2);
        });

        it("should return 7 for sum(2.7, 5.5)", function () {
            let actualResult = mathEnforcer.sum(2.7, 5.5);
            expect(actualResult).to.be.equal(2.7 + 5.5);
        });

        it("should return 2 for sum(0, 2)", function () {
            let actualResult = mathEnforcer.sum(0, 2);
            expect(actualResult).to.be.equal(2);
        });

        it("should return 0 for sum(0, 0)", function () {
            let actualResult = mathEnforcer.sum(0, 0);
            expect(actualResult).to.be.equal(0);
        });
    });
});