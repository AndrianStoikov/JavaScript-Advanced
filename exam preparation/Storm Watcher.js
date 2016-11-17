class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = this.getid();
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
            this.weather  = (function () {
                if(temperature < 20 && (pressure < 700 || pressure > 900) && (windSpeed > 25))
                    return "Stormy";
                return "Not stormy";
            } ());

        }

        toString() {
            return `Reading ID: ${this.id}\n` +
                `Temperature: ${this.temperature}*C\n` +
                `Relative Humidity: ${this.humidity}%\n` +
                `Pressure: ${this.pressure}hpa\n` +
                `Wind Speed: ${this.windSpeed}m/s\n` +
                `Weather: ${this.weather}`
        }

        getid() {
            if(!Record.nextId) {
                Record.nextId = 0;
            }

            return Record.nextId++;
        }
}

let test1 = new Record(32, 66, 760, 12);
let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());
console.log(test1.toString());