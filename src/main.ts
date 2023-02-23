let hat = {
  name: "Hat",
  price: 100
};
let boots = {
  name: "Boots",
  price: 100,
  category: "Snow Gear"
}
console.log(`Name: ${hat.name}, Price: ${hat.price}`);
console.log(`Name: ${boots.name}, Price: ${boots.price}`);
function printDetails(product : { name: string, price: number, category?: string}) {
  if (product.category != undefined) {
    console.log(`Name: ${product.name}, Price: ${product.price}, ` +
      `Category: ${product.category}`);
  } else {
    console.log(`Name: ${product.name}, Price: ${product.price}`);
  }
}
printDetails(hat);
printDetails(boots);
