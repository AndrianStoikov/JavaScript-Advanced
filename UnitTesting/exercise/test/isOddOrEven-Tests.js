let isOddOrEven = require("../isOddOrEven").isOddOrEven;
let expect = require("chai").expect;

describe("Test isOddOrEven ()", function () {
    it("should return undefined for 54", function () {
        let actualOutput = isOddOrEven(54);
        expect(actualOutput).to.be.equal(undefined);
    });

    it("should return undefined for ()", function () {
        let actualOutput = isOddOrEven();
        expect(actualOutput).to.be.equal(undefined);
    });

    it("should return undefined for ({})", function () {
        let actualOutput = isOddOrEven({});
        expect(actualOutput).to.be.equal(undefined);
    });

    it("should return odd for (\"Pesho\")", function () {
        let actualOutput = isOddOrEven("Pesho");
        expect(actualOutput).to.be.equal("odd");
    });

    it("should return even for (\"Pesho0\")", function () {
        let actualOutput = isOddOrEven("Pesho0");
        expect(actualOutput).to.be.equal("even");
    });
});