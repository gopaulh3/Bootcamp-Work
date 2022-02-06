const Passenger = require("./Passenger");
const CrewMember = require("./CrewMember");
const Bag = require("./Bag");
const Traveller = require("./Traveller");

class Plane {
  boarded = [];

  constructor(type) {
    this.type = type;
  }

  board(traveller) {
    this.boarded.push(traveller);
    console.log(
      `${traveller.name} has the following details: 
      Passport Number: ${traveller.passportNumber}  
      Boarding: ${this.type} 
      Seat number: ${traveller.seatNumber} 
      Luggage: ${traveller.bags.length} bags`
    );
  }
}

module.exports = Plane;
