let result = (function () {
    let classBuilder = (function () {
        let id = -1;
        return (function () {
            class Extensible {
                constructor() {
                    id++;
                    this.id = id;
                }

                extend(template) {
                    let keys = Object.keys(template);

                    for( let i = 0; i  < keys.length; i++) {
                        let key = keys[i];
                        if(typeof(template[key]) == "function") {
                            Extensible.prototype[key] = template[key];
                        } else {
                            this[key] = template[key];
                        }
                    }
                    return 0;
                }
            }
            return Extensible;
        }) ();
    }) ();

    return classBuilder;
}) ();



let obj1 = new result();
let obj2 = new result();
let obj3 = new result();

var template = {
    extensionData: 5,
    extensionMethod: function (value) {
        return value + 1;
    }
};

obj1.extend(template);
let prototype = Object.getPrototypeOf(obj1);
console.log(Object.getPrototypeOf(obj1).hasOwnProperty('extensionMethod'));