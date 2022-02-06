const Bag = require("./Bag");
const Traveller = require("./Traveller");

class Passenger extends Traveller {
  constructor(name, luggage, passportNumber, seatNumber) {
    super(name, luggage);
    this.passportNumber = passportNumber;
    this.seatNumber = seatNumber;
  }
}

module.exports = Passenger;
