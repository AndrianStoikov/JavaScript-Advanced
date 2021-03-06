class Card {
    constructor(face, suit) {
        let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        if(faces.includes(face)) this._face = face;
        else throw Error();

        let suits = {
            "S": "\u2660",
            "H": "\u2665",
            "D": "\u2666",
            "C": "\u2663"
        };
        if(suits[suit]) this._suit = suits[suit];
        else throw Error();
    }

    toString() {
        return `${this._face}${this._suit}`;
    }

    set face(face) {
        throw new Error;
    }
    set suit(suit) {
        throw new Error;
    }
}

console.log('' + new Card('A', 'S'));
console.log('' + new Card('10', 'H'));
console.log('' + new Card('J', 'D'));
console.log(C);
