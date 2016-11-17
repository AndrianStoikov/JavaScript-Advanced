let SortedList = require("../sortedList").SortedList;
let expect = require("chai").expect;

describe("Test class SortedList", function () {
    let testObject;
    beforeEach("Build new object to test", function () {
        testObject = new SortedList();
    });

    describe("Object has the needed properties", function () {
        it("should have property add()", function () {
            expect(SortedList.prototype.hasOwnProperty("add")).to.be.equal(true);
        });

        it("should have property remove()", function () {
            expect(SortedList.prototype.hasOwnProperty("remove")).to.be.equal(true);
        });

        it("should have property get()", function () {
            expect(SortedList.prototype.hasOwnProperty("get")).to.be.equal(true);
        });
        it("should have getter size", function () {
            expect(SortedList.prototype.hasOwnProperty("size")).to.be.equal(true);
        });
    });

    describe("Test add() property", function () {
        it("should return undefined", function () {
            testObject.add();
            expect(testObject.get(0)).to.be.equal(undefined);
        });

        it("should return 1", function () {
            testObject.add(1);
            expect(testObject.get(0)).to.be.equal(1);
        });

        it("should return 1, 2, 3", function () {
            testObject.add(1);
            testObject.add(2);
            testObject.add(3);
            let arr = [];
            for(let i = 0; i < testObject.size; i++) {
                let number = testObject.get(i);
                arr.push(number);
            }

            expect(arr).to.be.eql([1, 2, 3]);
        });

        it("should return 10, 53, 948, 949, 950, 1000", function () {
            testObject.add(10);
            testObject.add(1000);
            testObject.add(53);
            testObject.add(950);
            testObject.add(949);
            testObject.add(948);
            let arr = [];
            for(let i = 0; i < testObject.size; i++) {
                let number = testObject.get(i);
                arr.push(number);
            }

            expect(arr).to.be.eql([10, 53, 948, 949, 950, 1000]);
        });

        it("should return 53, 53, 53, 53, 53, 54", function () {
            testObject.add(53);
            testObject.add(53);
            testObject.add(54);
            testObject.add(53);
            testObject.add(53);
            testObject.add(53);
            let arr = [];
            for(let i = 0; i < testObject.size; i++) {
                let number = testObject.get(i);
                arr.push(number);
            }

            expect(arr).to.be.eql([53, 53, 53, 53, 53, 54]);
        });
    });

    describe("Test get() property", function () {
        it("should return undefined", function () {
            testObject.add();
            expect(testObject.get(0)).to.be.equal(undefined);
        });

        it("should return throw error, collection is empty", function () {
            expect(function () {
                testObject.get(0);
            }).to.throw(Error)
        });

        it("should return throw error, invalid Index", function () {
            expect(function () {
                testObject.add(10);
                testObject.add(1000);
                testObject.add(53);
                testObject.add(950);
                testObject.add(949);
                testObject.add(948);
                testObject.get(-12);
            }).to.throw(Error)
        });

        it("should return throw error, invalid Index", function () {
            expect(function () {
                testObject.add(10);
                testObject.add(1000);
                testObject.add(53);
                testObject.add(950);
                testObject.add(949);
                testObject.add(948);
                testObject.get(6);
            }).to.throw(Error)
        });

        it("should return Pesho", function () {
            testObject.add("Pesho");
            expect(testObject.get(0)).to.be.equal("Pesho");
        });

        it("should return 1", function () {
            testObject.add(1);
            expect(testObject.get(0)).to.be.equal(1);
        });

        it("should return 22", function () {
            testObject.add(1);
            testObject.add(22);
            testObject.add(3);
            expect(testObject.get(2)).to.be.eql(22);
        });

        it("should return 950", function () {
            testObject.add(10);
            testObject.add(1000);
            testObject.add(53);
            testObject.add(950);
            testObject.add(949);
            testObject.add(948);

            expect(testObject.get(5)).to.be.eql(1000);
        });
    });

    describe("Test remove() property", function () {

        it("should return throw error, collection is empty", function () {
            expect(function () {
                testObject.remove(0);
            }).to.throw(Error)
        });

        it("should return throw error, invalid Index", function () {
            expect(function () {
                testObject.remove(-1);
            }).to.throw(Error)
        });

        it("should return throw error, invalid Index", function () {
            expect(function () {
                testObject.add(10);
                testObject.add(1000);
                testObject.add(53);
                testObject.add(950);
                testObject.add(949);
                testObject.add(948);
                testObject.remove(6);
            }).to.throw(Error)
        });

       it("should return size 0", function () {
           testObject.add("Pesho");
           testObject.remove(0);
           expect(testObject.size).to.be.equal(0);
       });

       it("should return size 1", function () {
           testObject.add(1);
           testObject.add(1);
           testObject.remove(0);
           expect(testObject.size).to.be.equal(1);
       });

       it("should return [22, 23, 78, 432 , 581, 689]", function () {
           testObject.add(22);
           testObject.add(23);
           testObject.add(678);
           testObject.add(432);
           testObject.add(581);
           testObject.add(689);
           testObject.remove(3);
           testObject.remove(2);

           let arr = [];
           for(let i = 0; i < testObject.size; i++) {
               let number = testObject.get(i);
               arr.push(number);
           }

           expect(arr).to.be.eql([ 22, 23, 678, 689 ]);
        });
    });

    describe("Test size getter", function () {
        it("should return 0, collection is empty", function () {
            expect(testObject.size).to.be.equal(0);
        });

        it("should return 3, collection is empty", function () {
            testObject.add(12312);
            testObject.add(12312);
            testObject.add(12312);
            expect(testObject.size).to.be.equal(3);
        });

        it("should not return size 3", function () {
            testObject.add(12312);
            testObject.add(12312);
            testObject.add(12312);
            testObject.remove(1);
            expect(testObject.size).to.not.be.equal(3);
        });

        it("size cannot be changed", function () {
            testObject.add(12312);
            testObject.add(12312);
            testObject.add(12312);
            testObject.size = 5;
            expect(testObject.size).to.not.be.equal(5);
        });
    });
});