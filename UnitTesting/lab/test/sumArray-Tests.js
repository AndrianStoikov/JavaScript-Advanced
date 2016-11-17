let sum = require("../sumArray").sum;
let expect = require("chai").expect;

describe("Test sumArray ()", function () {
    it("should return 3 for [1,2]", function () {
        let expectedSum = 3;
        let actualSum = sum([1,2]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return -4 for [1,2,-1,-7,-9,10]", function () {
        let expectedSum = -4;
        let actualSum = sum([1,2,-1,-7,-9,10]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return NaN for [\"pesho\", \"gosho\"]", function () {
        let expectedSum = NaN;
        let actualSum = sum(["gosho", "pesho"]);
        expect(actualSum).to.be.NaN;
    });
});