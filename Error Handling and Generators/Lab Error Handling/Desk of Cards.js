function printDeckOfCards(cards) {
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

    let deck = [];
    for(let card of cards) {
        let suit = card.slice(card.length - 1);
        let face = card.slice(0, card.length - 1);
        try {
            let newCard = new Card(face, suit);
            deck.push(newCard.toString());
        } catch (ex) {
            console.log(`Invalid card: ${card}`);
        }
    }

    console.log(deck.join(" "));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));
