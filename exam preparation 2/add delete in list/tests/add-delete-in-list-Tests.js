let list = require("../add-delete-in-list");
let expect = require("chai").expect;

describe("Test list functionality", function() {
    describe("If it supports following functionality", function() {
        it("has property add()" , function () {
            expect(list.hasOwnProperty("add")).to.be.equal(true);
        });
        it("has property delete()" , function () {
            expect(list.hasOwnProperty("delete")).to.be.equal(true);
        });
        it("has property toString()" , function () {
            expect(list.hasOwnProperty("toString")).to.be.equal(true);
        });
    });

    describe("Test add functionality", function() {
        it("should return \"\"" , function () {
            expect(list.toString()).to.equal("");
        });

        it("should return \"0, pesho\"" , function () {
            list.add(0);
            list.add("Pesho");
            expect(list.toString()).to.equal("0, Pesho");
        });

        it("should return 0, Pesho, 0.132" , function () {
            list.add(0.132);
            expect(list.toString()).to.equal("0, Pesho, 0.132");
        });
    });

    describe("Test delete functionality", function() {
        it("should return undefined float index" , function () {
            let res = list.delete(1.2);
            expect(res).to.equal(undefined);
        });

        it("should return undefined index < 0" , function () {
            let res = list.delete(-1);
            expect(res).to.equal(undefined);
        });

        it("should return undefined index >= list.lenght" , function () {
            let res = list.delete(5);
            expect(res).to.equal(undefined);
        });

        it("should return Pesho, 0.132, 0, Pesho; delete(0)" , function () {
            let res = list.delete(0);
            expect(res).to.equal(0);
        });

        it("should return Pesho, 0.132, 0, Pesho; delete(0)" , function () {
            let res = list.delete(1);
            expect(res).to.equal(0.132);
        });
    });

    describe("Test toString functionality", function() {
        it("should not return 0,Pesho float index" , function () {
            expect(list.toString()).to.not.equal("0,Pesho");
        });

        it("should not return 0,  Pesho float index" , function () {
            expect(list.toString()).to.not.equal("0,  Pesho");
        });
    });
});
