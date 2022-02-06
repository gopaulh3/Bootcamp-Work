const Bag = require("./Bag");

class Traveller {
  bags = [];

  constructor(name, luggage) {
    this.name = name;
    if (luggage.length !== 0)
      Array.from(luggage).forEach((e) => this.addBag(e));
  }

  addBag(bag) {
    if (!bag.isOverLimit()) {
      this.bags.push(bag);
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Traveller;
