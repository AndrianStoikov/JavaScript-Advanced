function createMixins() {
    let computerQualityMixin = (superclass) => {

        superclass.prototype["getQuality"] = function () {
            let processorSpeed = this.processorSpeed;
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };

        superclass.prototype["isFast"] = function () {
            return this.processorSpeed > (this.ram / 4)
        };

        superclass.prototype["isRoomy"] = function (){
            return this.hardDiskSpace  > Math.floor(this.ram * this.processorSpeed);
        };
    };

    let styleMixin = (superclass) => {
        superclass.prototype["isFullSet"] = function () {
            let computerManufacturer = this.manufacturer;
            let keyboardManufacturer = this.keyboard.manufacturer;
            let monitorManufacturer = this.monitor.manufacturer;

            return (computerManufacturer == keyboardManufacturer) && (keyboardManufacturer  == monitorManufacturer);
        };

        superclass.prototype["isClassy"] = function () {
            let expectedLife = this.battery.expectedLife;
            let color = this.color;
            let weight = this.weight;

            return (expectedLife >= 3) && (color == "Silver" || color == "Black") && (weight < 3);
        };
    };

    return {
        computerQualityMixin,
        styleMixin
    }
}

let mixins = createMixins();
let computerQualityMixin = mixins.computerQualityMixin;
let styleMixin = mixins.styleMixin;

function createComputerHierarchy() {

    class Manufacturer {
        constructor(manufacturer) {
            if(new.target === Manufacturer) {
                throw new Error;
                this.manufacturer = manufacturer;
            }
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Manufacturer{
        constructor(manufacturer, responseTime ) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends Manufacturer{
        constructor(manufacturer, width, height ) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends Manufacturer{
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends Manufacturer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            super(manufacturer);
            if(new.target === Computer) {
                throw new Error
            }

            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            if(battery instanceof Battery) {
                this._battery = battery;
            } else {
                throw new TypeError;
            }
        }

        get battery() {
            return this._battery;
        }

        set battery(battery) {
            if(battery instanceof Battery)
                this._battery = battery;
            else
                throw new TypeError;
        }
    }

    class Desktop  extends  Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            if(keyboard instanceof Keyboard) {
                this._keyboard = keyboard;
            } else {
                throw new TypeError;
            }
            if(monitor instanceof Monitor) {
                this._monitor = monitor;
            } else {
                throw new TypeError;
            }
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(keyboard) {
            if(keyboard instanceof Keyboard) {
                this._keyboard = keyboard;
            } else {
                throw new TypeError;
            }
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(monitor) {
            if(monitor instanceof Monitor) {
                this._monitor = monitor;
            } else {
                throw new TypeError;
            }
        }
    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;

let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

computerQualityMixin(Desktop);
styleMixin(Desktop);
computerQualityMixin(Laptop);
styleMixin(Laptop);

let keyboard = new Keyboard('Logitech',70);
let keyboard2 = new Keyboard('A-4',70);
let monitor = new Monitor('Logitech',28,18);
let battery = new Battery('Energy',3);
let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,2.99,"Silver",battery);
let desktop = new Desktop("Logitech",3.3,8,1,keyboard,monitor);

console.log(desktop.isFullSet());