class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        if(innerLength < 3) innerLength = 0;
        this.innerLength = innerLength;
    }

    increase(length) {
        if(this.innerLength + length < 3) {
            this.innerLength = 0;
        } else {
            this.innerLength += length;
        }

    }

    decrease(length) {
        if(this.innerLength - length < 3) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }

    }

    toString() {
        if(this.innerLength == 0) {
            return "...";
        } else if (this.innerString.length > this.innerLength) {
            let resultString = this.innerString.slice(0, this.innerLength);
            resultString += "...";
            return resultString;
        } else {
            return this.innerString;
        }
    }
}


let stringer = new Stringer("zdrPesho, ti si maniak", -3);
stringer.increase(10000)
console.log(stringer.toString());