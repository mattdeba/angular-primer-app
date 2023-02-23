class Product {
  constructor(public name: string, public price: number, public category?: string) {
  }
  printDetails() {
    if (this.category != undefined) {
      console.log(`Name: ${this.name}, Price: ${this.price}, ` +
        `Category: ${this.category}`);
    } else {
      console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
  }
}
let hat = new Product("Hat", 100);
let boots = new Product("Boots", 100, "Snow Gear");
console.log(`Name: ${hat.name}, Price: ${hat.price}`);
console.log(`Name: ${boots.name}, Price: ${boots.price}`);
hat.printDetails();
boots.printDetails();

