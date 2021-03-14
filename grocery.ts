class Grocery{
    constructor(public name:string, public quantity: number, public price: number){
        console.log("Item Bought: " + name, " Quantity Bought: " + quantity, " At the Price of: $" + price, );
    }


}

interface Product {
	name: string;
	quantity: number;
	price: number;
	
}

function grocery(product : Product) {
	return "Item Bought: " + product.name + " Quantity Bought: " + product.quantity + " At the Price of $" + product.price;
}



let Shopping = [
    new Grocery("Egg", 24,3,),
	new Grocery("Bread", 5,2),
	new Grocery("Milk",4,3)
];


var textcontent: string;

textcontent = ""

// for loop to create body text based on function grocery and shopping
for (var i = 0; Shopping.length > i; i++) {
	textcontent += "<br>" + grocery(Shopping[i]) + "<br>";
}


document.body.innerHTML = textcontent;