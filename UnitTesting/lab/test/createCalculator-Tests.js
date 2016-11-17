let createCalculator = require("../createCalculator").createCalculator;
let expect = require("chai").expect;

describe("Test createCalculator ()", function () {

    let calc;
    beforeEach(function() {
        calc = createCalculator();
    });

    it("should has property add", function () {
        let ownsProperty = calc.hasOwnProperty("add");
        expect(ownsProperty).to.be.equal(true);
    });

    it("should has property subtract", function () {
        let ownsProperty = calc.hasOwnProperty("subtract");
        expect(ownsProperty).to.be.equal(true);
    });

    it("should has property get", function () {
        let ownsProperty = calc.hasOwnProperty("get");
        expect(ownsProperty).to.be.equal(true);
    });

    it("should return 5", function () {
        calc.add(2);
        calc.add("3");
        let result = calc.get();
        expect(result).to.be.equal(3 + 2);
    });

    it("should return -5", function () {
        calc.subtract(2);
        calc.subtract("3");
        let result = calc.get();
        expect(result).to.be.equal( 0 - (3 + 2));
    });

    it("should return 4.2", function () {
        calc.add(5.3);
        calc.subtract("1.1");
        let result = calc.get();
        expect(result).to.be.equal(5.3 - 1.1);
    });

    it("should return 2", function () {
        calc.add(10);
        calc.subtract('7');
        calc.add('-2');
        calc.subtract(-1);
        let result = calc.get();
        expect(result).to.be.equal(2);
    });

    it("should return NaN", function () {
        calc.add("pesho");
        let result = calc.get();
        expect(result).to.be.NaN;
    });

    it("should return NaN", function () {
        calc.subtract("pesho");
        let result = calc.get();
        expect(result).to.be.NaN;
    });
});