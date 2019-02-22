/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var option_el = document.createElement('option');
    option_el.id = 'Product.allProducts.name';
    option_el.textContent = Product.allProducts[i].name;
    selectElement.appendChild(option_el);
  }
}
console.log(Product.allProducts);

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  //Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart(event.target);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart


function addSelectedItemToCart(item) {

  //suss out the item picked from the select list
  var select_item = document.getElementById('items');
  console.log(select_item.value);

  //get the quantity
  var select_quantity = document.getElementById('quantity');
  console.log(select_quantity.value);

  // TODO: using those, add one item to the Cart
  new CartItem (select_item,select_quantity);
  console.log(CartItem);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
