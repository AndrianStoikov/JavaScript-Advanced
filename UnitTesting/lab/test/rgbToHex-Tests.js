let rgbToHexColor = require("../rgbToHex").rgbToHexColor;
let expect = require("chai").expect;

describe("Test rgbToHexColor ()", function () {
    it("should return #FF9EAA for (255, 158, 170)", function() {
        let symmetric = rgbToHexColor(255, 158, 170);
        expect(symmetric).to.be.equal("#FF9EAA");
    });

    it("should return #000000 for (0, 0, 0)", function() {
        let symmetric = rgbToHexColor(0, 0, 0);
        expect(symmetric).to.be.equal("#000000");
    });

    it("should return #FFFFFF for (255, 255, 255)", function() {
        let symmetric = rgbToHexColor(255, 255, 255);
        expect(symmetric).to.be.equal("#FFFFFF");
    });

    it("should return undefined for (0, 0, -1)", function() {
        let symmetric = rgbToHexColor(0, 0, -1);
        expect(symmetric).to.be.equal(undefined);
    });

    it("should return undefined for (0, -1, 0)", function() {
        let symmetric = rgbToHexColor(0, -1, 0);
        expect(symmetric).to.be.equal(undefined);
    });

    it("should return undefined for (-1, 0, 0)", function() {
        let symmetric = rgbToHexColor(-1, 0, 0);
        expect(symmetric).to.be.equal(undefined);
    });

    it("should return undefined for (0, 0, 256)", function() {
        let symmetric = rgbToHexColor(0, 0, 256);
        expect(symmetric).to.be.equal(undefined);
    });

    it("should return undefined for (0, 256, 0)", function() {
        let symmetric = rgbToHexColor(0, 256, 0);
        expect(symmetric).to.be.equal(undefined);
    });

    it("should return undefined for (256, 0, 0)", function() {
        let symmetric = rgbToHexColor(256, 0, 0);
        expect(symmetric).to.be.equal(undefined);
    });

    it("should return undefined for (0, 0, 3.14)", function() {
        let symmetric = rgbToHexColor(0, 0, 3.14);
        expect(symmetric).to.be.equal(undefined);
    });

    it("should return undefined for (0, 3.14, 0)", function() {
        let symmetric = rgbToHexColor(0, 3.14, 0);
        expect(symmetric).to.be.equal(undefined);
    });

    it("should return undefined for (3.14, 0, 0)", function() {
        let symmetric = rgbToHexColor(3.14, 0, 0);
        expect(symmetric).to.be.equal(undefined);
    });

    it("should return undefined for ()", function() {
        let symmetric = rgbToHexColor();
        expect(symmetric).to.be.equal(undefined);
    });

    it("should return undefined for (\"5\", [3], {8:9})", function() {
        let symmetric = rgbToHexColor("5", [3], {8:9});
        expect(symmetric).to.be.equal(undefined);
    });
});