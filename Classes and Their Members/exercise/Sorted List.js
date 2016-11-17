class list {

    constructor() {
        this.colection = [];
        this.size = 0;
    }

    add(element) {
        this.colection.push(element);
        this._sort();
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index < this.colection.length) {
            let array = this.colection;
            if (index > -1) {
                array.splice(index, 1);
            }
            this.colection = array;
            this._sort();
            this.size--;
        }
    }

    get(index) {
        if (index < this.colection.length)
            return this.colection[index];
    }

    _sort() {
        this.colection = this.colection.sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    }
}

var myList = new list();
console.log(list.prototype.hasOwnProperty("add"));
console.log(list.prototype.hasOwnProperty("remove"));
console.log(list.prototype.hasOwnProperty("get"));
console.log(list.hasOwnProperty("size"));


//expect(result.prototype.hasOwnProperty('add')).to.equal(true, "Function add() was not found");
//expect(result.prototype.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found");
//expect(result.prototype.hasOwnProperty('get')).to.equal(true, "Function get() was not found");
//
// Instantiate and test functionality
//expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");
//
myList.add(5);
console.log(myList.get(0));
//expect(myList.get(0)).to.equal(5, "Element wasn't added");
//
//myList.add(3);
//expect(myList.get(0)).to.equal(3, "Collection wasn't sorted");
//
//myList.remove(0);
//expect(myList.get(0)).to.equal(5, "Element wasn't removed");
//expect(myList.size).to.equal(1, "Element wasn't removed");