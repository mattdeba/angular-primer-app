let hat = {
  name: "Hat",
  price: 100
};
let boots = {
  name: "Boots",
  price: 100
}
console.log(`Name: ${hat.name}, Price: ${hat.price}`);
console.log(`Name: ${boots.name}, Price: ${boots.price}`);
function printDetails(product : { name: string, price: number}) {
  console.log(`Name: ${product.name}, Price: ${product.price}`);
}
printDetails(hat);
printDetails(boots);
