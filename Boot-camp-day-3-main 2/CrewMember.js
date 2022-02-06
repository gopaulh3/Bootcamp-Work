const Traveller = require("./Traveller");
const Bag = require("./Bag");

class CrewMember extends Traveller {
  constructor(name, luggage, position, staffNumber) {
    super(name, luggage);
    this.position = position;
    this.staffNumber = staffNumber;
  }
}
module.exports = CrewMember;
