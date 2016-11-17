function result(arr, sortCriteria) {
    class Ticket {
        constructor (destinationName, price, status) {
            this.destination = destinationName;
            this.price = Number(price);
            this.status = status;
        }

        get getDestination() {
            return this.destination;
        }

        get getPrice() {
            return this.price;
        }

        get getStatus() {
            return this.status;
        }
    }

    let Tickets = [];

    for(let row of arr) {
        let [destinationName, price, status] = row.split("|");
        let newTicket = new Ticket(destinationName, price, status);
        Tickets.push(newTicket);
    }

    // Sort the tickets Array
    (function () {
        switch (sortCriteria) {
            case "destination": {
                Tickets = Tickets.sort(function(a, b){
                    if(a.getDestination < b.getDestination) return -1;
                    if(a.getDestination > b.getDestination) return 1;
                    return 0;
                })
            }break;

            case "status": {
                Tickets = Tickets.sort((a,b) => {
                    if(a.getStatus < b.getStatus) return -1;
                    if(a.getStatus > b.getStatus) return 1;
                    return 0;
                });
            }break;

            case "price": {
                Tickets = Tickets.sort((a,b) => Number(a.getPrice) - Number(b.getPrice));
            }break;
        }
    } ());

    return Tickets;
}

let resultArray = result(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);

console.log(resultArray);