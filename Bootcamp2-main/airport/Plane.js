const Passenger = require("./Passenger");
const Bag = require("./Bag");

class Plane {
  type;

  board(passenger) {
    this.passenger = passenger;
    console.log(`${this.passenger.name} has been boarded!`);
  }
}

const boeing77 = new Plane();
const passenger = new Passenger("mandy", 849242, 34);
passenger.addBag(new Bag(21));
boeing77.board(passenger);
