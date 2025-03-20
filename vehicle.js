// Implementing the Car class that adheres to the Vehicle interface
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Creating an instance of the Car class
var myCar = new Car("Toyota", "Corolla", 2022);
// Calling the start method
myCar.start();
