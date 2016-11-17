function result() {
    class Figure {
        constructor() {
            if(new.target === Figure) {
                throw new Error("This is an abstract class, cannot be instantiated");
            }
        }

        toString() {
            return `${this.constructor.name} - `;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            let output = super.toString();
            output += `radius: ${this.radius}`;
            return output;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            let output = super.toString();
            output += `width: ${this.width}, height: ${this.height}`;
            return output;
        }
    }

    return {Figure, Circle, Rectangle};
}

result();