var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        
        console.log("buy item " + name, " with quantity " + quantity, " for price $" + price);
    }
    return Grocery;
}());
function grocery(product) {
    return "Item Bought: " + product.name + " Quantity Bought: " + product.quantity + " At the price of: $" + product.price + ".";
}

var shopping = [
        new Grocery("Egg", 24, 3,),
    new Grocery("Bread", 5, 2,),
    new Grocery("Milk", 4, 3,)
];
var textcontent;
textcontent = "";
// for loop to create body text based on function grocery 
for (var i = 0; shopping.length > i; i++) {
    textcontent += "<br>" + grocery(shopping[i]) + "<br>";
}

document.body.innerHTML = textcontent;