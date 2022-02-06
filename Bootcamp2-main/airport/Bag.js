class Bag {
  constructor(weight) {
    this.weight = weight;
  }

  isOverLimit() {
    return this.weight > 23;
  }
}

// const mandyBag = new Bag(24);
// console.log(mandyBag.weight);
// console.log(mandyBag.isOverLimit());

// const ucheBag = new Bag(16);
// console.log(ucheBag.weight);
// console.log(ucheBag.isOverLimit());

module.exports = Bag;
