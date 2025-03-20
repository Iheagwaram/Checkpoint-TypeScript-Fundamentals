// Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Implementing the Car class that adheres to the Vehicle interface
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

// Creating an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2022);

// Calling the start method
myCar.start();
