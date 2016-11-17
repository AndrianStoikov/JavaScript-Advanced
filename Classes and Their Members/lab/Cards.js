let result = (function(){

    class Card {
        constructor (face, suit) {
            let possibleFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
            if(possibleFace.indexOf(face) > -1) {
                this.face = face;
            } else {
                throw Error("Not valid face")
            }

            let possibleSuit = {
                SPADES: "U+2660",
                HEARTS: "U+2665",
                DIAMONDS:"U+2666",
                CLUBS: "U+2663"
            };

            if(possibleSuit[suit]) {
                this.suit = suit;
            } else {
                throw Error("Not valid suit");
            }
        }
    }

    class Suits {
        constructor () {

        }

        static get CLUBS() {
            return "CLUBS";
        }

        static get HEARTS() {
            return "HEARTS";
        }

        static get DIAMONDS() {
            return "DIAMONDS";
        }

        static get SPADES() {
            return "SPADES";
        }
    }

    return {
        Suits:Suits,
        Card:Card
    }
}());

let Card = result.Card;
let Suits = result.Suits;

let card = new Card("Q", Suits.CLUBS);
card.face = "A";
card.suit = Suits.DIAMONDS;
let card2 = new Card("2",Suits.SPADES);