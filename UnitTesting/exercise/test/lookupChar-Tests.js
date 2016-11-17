let lookupChar = require("../lookupChar").lookupChar;
let expect = require("chai").expect;

describe("Test isOddOrEven ()", function () {
    it("should return undefined for ()", function () {
        let actualOutput = lookupChar();
        expect(actualOutput).to.be.equal(undefined);
    });

    it("should return undefined for (54, \"Pesho\")", function () {
        let actualOutput = lookupChar(54, "Pesho");
        expect(actualOutput).to.be.equal(undefined);
    });

    it("should return undefined for (54, 54)", function () {
        let actualOutput = lookupChar(54, "Pesho");
        expect(actualOutput).to.be.equal(undefined);
    });

    it("should return undefined for (\"Goshe\", \"Pesho\")", function () {
        let actualOutput = lookupChar("Goshe", "Pesho");
        expect(actualOutput).to.be.equal(undefined);
    });

    it("should return undefined for (\"Object composition factory is really important for the programmers\", 54.1)", function () {
        let actualOutput = lookupChar("Object composition factory is really important for the programmers", 54.1);
        expect(actualOutput).to.be.equal(undefined);
    });

    it("should return Incorrect index for (\"PEsho\", 54)", function () {
        let actualOutput = lookupChar("PEsho", 54);
        expect(actualOutput).to.be.equal("Incorrect index");
    });

    it("should return Incorrect index for (\"Pesho\", -1)", function () {
        let actualOutput = lookupChar("Pesho", -1);
        expect(actualOutput).to.be.equal("Incorrect index");
    });

    it("should return Incorrect index for (\"Pesho\", 5)", function () {
        let actualOutput = lookupChar("Pesho", 5);
        expect(actualOutput).to.be.equal("Incorrect index");
    });

    it("should return P for (\"PEsho\", 0)", function () {
        let actualOutput = lookupChar("PEsho", 0);
        expect(actualOutput).to.be.equal("P");
    });

    it("should return E for (\"PEsho\", 1)", function () {
        let actualOutput = lookupChar("PEsho", 1);
        expect(actualOutput).to.be.equal("E");
    });

    it("should return E for (\"Object composition factory is really important for the programmers\", 54)", function () {
        let actualOutput = lookupChar("Object composition factory is really important for the programmers", 54);
        expect(actualOutput).to.be.equal(" ");
    });
});