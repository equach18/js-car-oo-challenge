//part 1
class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "Beep.";
    }

    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

//part 2
class Car extends Vehicle{
    constructor (make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

//part 3
class Motorcycle extends Vehicle{
    constructor (make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine(){
        return "VROOM!!!";
    }
}

//part 4
class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(newVehicle){
        if(newVehicle instanceof Vehicle){
            if(this.vehicles.length < this.capacity){
                this.vehicles.push(newVehicle);
                return "Vehicle added!";
            } 
            return "Sorry, we're full."
        }
        return "Only vehicles are allowed here!"
    }
}

