(function robot(lines) {
    let recipes = (function () {
        return {
            apple: (function () {
                let carbohydrate = 1;
                let flavour = 2;
                return {
                    getWhatsNeeded: function () {
                        let map = new Map();
                        map.set("carbohydrate", carbohydrate);
                        map.set("flavour", flavour);
                        return map;
                    }
                }
            }) (),

            coke: (function () {
                let carbohydrate = 10;
                let flavour = 20;
                return {
                    getWhatsNeeded: function () {
                        let map = new Map();
                        map.set("carbohydrate", carbohydrate);
                        map.set("flavour", flavour);
                        return map;
                    }
                }
            }) (),

            burger: (function () {
                let carbohydrate = 5;
                let fat = 7;
                let flavour = 3;

                return {
                    getWhatsNeeded: function () {
                        let map = new Map();
                        map.set("carbohydrate", carbohydrate);
                        map.set("flavour", flavour);
                        map.set("fat", fat);
                        return map;
                    }
                }
            }) (),

            omelete: (function () {
                let protein = 5;
                let fat = 1;
                let flavour = 1;

                return {
                    getWhatsNeeded: function () {
                        let map = new Map();
                        map.set("protein", protein);
                        map.set("flavour", flavour);
                        map.set("fat", fat);
                        return map;
                    }
                }
            }) (),

            cheverme: (function () {
                let protein = 10;
                let carbohydrate = 10;
                let fat = 10;
                let flavour = 10;

                return {
                    getWhatsNeeded: function () {
                        let map = new Map();
                        map.set("protein", protein);
                        map.set("carbohydrate", carbohydrate);
                        map.set("flavour", flavour);
                        map.set("fat", fat);
                        return map;
                    }
                }
            }) ()
        }
    }) ();

    let robot = (function () {
        let microElements = {
            carbohydrate: 0,
            protein: 0,
            fat: 0,
            flavour: 0
        };

        return {
            restock: (microelement, quantity) => {
                microElements[microelement] += quantity;
                console.log("Success");
            },

            prepare: (meal, quantity) => {
                let neededProducts = recipes[meal].getWhatsNeeded();
                let entries = [...neededProducts.entries()];

                let successfulCreation = true;
                entries.every(entri => {
                    let typeOfProduct = entri[0];
                    let neededProducts = entri[1] * quantity;

                    if (microElements[typeOfProduct] < neededProducts) {
                        console.log(`Error: not enough ${typeOfProduct} in stock`);
                        successfulCreation = false;
                        return false;
                    } else {
                        return true;
                    }
                });

                if(successfulCreation) {
                    entries.forEach(entry => {
                        let typeOfProduct = entry[0];
                        let neededProducts = entry[1] * quantity;
                        microElements[typeOfProduct] -= neededProducts
                    });
                    console.log("Success");
                }
            },

            report: () => {
                console.log(`protein=${microElements["protein"]} ` +
                    `carbohydrate=${microElements["carbohydrate"]} ` +
                    `fat=${microElements["fat"]} flavour=${microElements["flavour"]}`);
            }
        }
    }) ();

    for(let line of lines) {
        let [command, info, quantity] = line.split(" ");

        if(command == "restock") {
            robot.restock(info, Number(quantity));
        } else if (command == "prepare") {
            robot.prepare(info, Number(quantity))
        } else {
            robot.report();
        }
    }
}) ();


(function solve() {

    let recipes = {
        apple: {'carbohydrate': 1, 'flavour': 2},
        coke: {'carbohydrate': 10, 'flavour': 20},
        burger: {'carbohydrate': 5, 'fat': 7, 'flavour': 3},
        omelet: {'protein': 5, 'fat': 1, 'flavour': 1},
        cheverme: {'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10}
    };

    let microElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let result = function (input) {
        let [command, arg2, quantity] = input.split(' ').filter(x=>x != '');

        let implement = (function () {
            return {
                restock: (microelement, quantity) => {
                    microelement = microelement.toLowerCase();
                    microElements[microelement] += Number(quantity);
                    return "Success";
                },

                prepare: (recipe, quantity) => {
                    recipe = recipe.toLowerCase();
                    let mealQuantity = quantity;
                    let insufficient = '';
                    for (let prop of Object.keys(recipes[recipe])) {
                        let quantity = recipes[recipe][prop]*Number(mealQuantity);
                        if (quantity > microElements[prop]) {
                            return `Error: not enough ${prop} in stock`;
                        }
                    }

                    Object.keys(recipes[recipe]).forEach(key=> {
                        let quantity = recipes[recipe][key]*Number(mealQuantity);
                        microElements[key] -= quantity;
                    });

                    return 'Success';
                },

                report: () => `protein=${microElements.protein} carbohydrate=${microElements.carbohydrate} fat=${microElements.fat} flavour=${microElements.flavour}`
            }
        })();

        return implement[command](arg2, quantity);

    };

    return result;
})();
// Vqrnoto reshenie za judge!!!
