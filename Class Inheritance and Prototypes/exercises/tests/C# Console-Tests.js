let Console = require("../C# Console").Console;
let expect = require("chai").expect;

describe("Test class Console", function () {

    describe("Object has the needed property", function () {
        it("should have property writeLine()", function () {
            expect(Console.hasOwnProperty("writeLine")).to.be.equal(true);
        });
    });

    describe("Test writeLine() property with 0 or 1 arguments", function () {
        it("should return JSON Object for passed object", function () {
            let obj = {hello: function () {
                return "Hello World";
            },
                moreExamples: function () {
                    return 5;
                },
                testValue: 12,
                testString: "132",
            };
            expect(Console.writeLine(obj)).to.be.equal(JSON.stringify(obj));
        });

        it("should return Pesho for passed string Pesho", function () {
            let value = "Pesho";
            expect(Console.writeLine(value)).to.be.equal(value);
        });
    });

    describe("Test writeLine() property for more than 1 arguments", function () {
        it("should return TypeError for object argument passed first", function () {
            let obj = {
                hello: function () {
                return "Hello World";
            },
                moreExamples: function () {
                    return 5;
                },
                testValue: 12,
                testString: "132",
            };
            expect(function () {
                Console.writeLine(obj, 1, 2 ,3)
            }).to.throw(TypeError);
        });

        it("should return TypeError for numeric argument passed first", function () {
            expect(function () {
                Console.writeLine(0, 1, 2 ,3)
            }).to.throw(TypeError);
        });

        it("should return RangeError for more placeholders than parameters", function () {
            expect(function () {
                Console.writeLine("Zdraveite {0}, mnogo {1} za vas, ne znam veche kakvo da {2}.", 1, 2)
            }).to.throw(RangeError)
        });

        it("should return RangeError for more parameters than placeholders", function () {
            expect(function () {
                Console.writeLine("Zdraveite {0}, mnogo {1} za vas, ne znam veche kakvo da {2}.", 1, 2, 3, 4)
            }).to.throw(RangeError)
        });

        it('should trow RangeError on out-of-range placeholder index', () => {
            expect(() => Console.writeLine('Test {20}', 'first')).to.throw(RangeError); //!!!!!!!!!!
        });

        it("should return RangeError for placeholders not within the range", function () {
            expect(function () {
                Console.writeLine("Zdraveite {0}, mnogo {12} za vas, ne znam veche kakvo da {2}.",
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13)
            }).to.throw(RangeError)
        });

        it("should return RangeError for placeholders not within the range", function () {
            expect(function () {
                Console.writeLine("{1}", "Pesho");
            }).to.throw(RangeError)
        });

        it("should return RangeError for negative placeholders not within the range", function () {
            expect(function () {
                Console.writeLine("{-6}", "Pesho");
            }).to.throw(RangeError)
        });

        it("should return Pesho", function () {
            expect(Console.writeLine("{0}", "Pesho")).to.be.equal("Pesho");
        });

        it("should return Pesho", function () {
            expect(Console.writeLine("{0}", "Pesho")).to.be.equal("Pesho");
        });

        it("should return Pesho, 1", function () {
            expect(Console.writeLine("{0}, {1}", "Pesho", "1")).to.be.equal("Pesho, 1");
        });

        it("should return The sum of 3 and 4 is 7", function () {
            expect(Console.writeLine("The sum of {0} and {1} is {2}", "3", "4", "7")).to.be.equal("The sum of 3 and 4 is 7");
        })

        it('should replace correctly all placeholders', () => {
            expect(Console.writeLine('Test {0}, {1} {2} - {3}', 'first', 'second', 'third', 'chetvyrti')).to.equal('Test first, second third - chetvyrti');
        });

        it('should replace correctly all placeholders on mixed placeholder numbers', () => {
            expect(Console.writeLine('Test {1}, {0} {2} - {3}', 'first', 'second', 'third', 'chetvyrti')).to.equal('Test second, first third - chetvyrti');
        });

        it('should replace correctly one placeholder', () => {
            expect(Console.writeLine('{0}', 'first')).to.equal('first');
        });

        it("should throw RangeError for invalid placeholder ", function () {
            expect(function () {
                Console.writeLine("The sum of {dve} and {1} is {2}", "3", "4", "7");
            }).to.throw(RangeError);
        })
    });
});