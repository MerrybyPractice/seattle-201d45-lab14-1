/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}
console.log('cart in cart.js right after line 13, after new cart declared', cart);
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tr = document.getElementsByClassName('tr');
  tr.innerhtml = '';
}


// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() { 

  // TODO: Find the table body
  var tbody = document.getElementsByClassName('tbody');

  // TODO: Iterate over the items in the cart
  for (var i = 0; i < Cart.cartItems.length; i++){

    // TODO: Create a TR
    var tr = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    var remove = document.createElement('td');
    remove.textContent = 'Remove';
    Element.id = 'removeButton';
    var quant = document.createElement('td');
    quant.textContent = Cart.cartItems[i].quantity;
    var itemCell = document.createElement('td');
    itemCell.textContent = Cart.cartItems[i];
     
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tbody.appendChild(tr);
    tr.appendChild(remove);
    tr.appendChild(quant);
    tr.appendChild(itemCell);
  }
}
function whenRemoveClicked(){

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    removeButton.onclick;

  // TODO: Save the cart back to local storage
   clearLocal();
  Cart.saveToLocalStorage;

  // TODO: Re-draw the cart table
  clearCart();
  showCart();
}
addEventListener('click', removeItemFromCart());
// This will initialize the page and draw the cart on screen
renderCart();
