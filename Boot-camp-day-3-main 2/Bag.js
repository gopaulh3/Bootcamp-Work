class Bag {
  constructor(weight) {
    this.weight = weight;
  }

  isOverLimit() {
    return this.weight > 23;
  }
}

module.exports = Bag;
