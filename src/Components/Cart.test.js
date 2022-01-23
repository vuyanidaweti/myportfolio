import React from "react";

const Cart= require("./Cart");
const cart = new Cart();
cart.addToCart("cheesecake");
const hasOneItem= cart.items.length===1;
const hasACheeseCake = cart.items[0]==="cheesecake"

if(hasOneItem && hasACheeseCake){
    console.log("The addToCart function can add an item to the Cart");
}else {
    const actualContent = cart.items.join(", ");
    //console.error("The addToCart function didn't do what we expect!");
    //console.error(`Here is the actual content of the cart: ${actualContent}`);
    // eslint-disable-next-line no-throw-literal
    throw("Test failed!");
}