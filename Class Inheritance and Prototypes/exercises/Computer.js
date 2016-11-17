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

let battery = new Battery('Energy',3);
let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver",battery);
console.log(laptop);