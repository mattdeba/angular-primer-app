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
class DiscountProduct extends Product {
  constructor(name: string, price: number, private discount: number) {
    super(name, price - discount);
  }
}
let hat = new DiscountProduct("Hat", 100, 10);
let boots = new Product("Boots", 100, "Snow Gear");
console.log(`Name: ${hat.name}, Price: ${hat.price}`);
console.log(`Name: ${boots.name}, Price: ${boots.price}`);
hat.printDetails();
boots.printDetails();

console.log(`Hat is a Product? ${hat instanceof Product}`);
console.log(`Hat is a DiscountProduct? ${hat instanceof DiscountProduct}`);
console.log(`Boots is a Product? ${boots instanceof Product}`);
console.log(`Boots is a DiscountProduct? ${boots instanceof DiscountProduct}`);

