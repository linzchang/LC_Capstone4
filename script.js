//create empty array of item objects
var itemsInCart = [];

$(".add").onclick = function() {
  add();
};

function add(name, price) {
    var formattedPrice = formatCurrency(price);
    var item = createItem(name, formattedPrice);
    addItem(item);
}

function createItem(itemName, itemPrice) {
  var item = { name: itemName, price: itemPrice };
  return item;
}

function addItem(item) {
  itemsInCart.push(item);
}

function formatCurrency(number) {
  return Number.parseFloat(number).toFixed(2);
}

$(".check_out").onclick = function() {
  checkOut();
};

function checkOut() {
  var newHTML = [];
  var subtotal = getSubtotal();
  var tax = getTax(subtotal);
  var total = getTotal(subtotal, tax);
  newHTML.push('<p><h2>Items in cart: </h2></p>');

  itemsInCart.forEach(function(item) {
    var name = item.name;
    var price = item.price;
    newHTML.push('<p>' + name + ' $' + price + '</p>');
  });
  newHTML.push('<p></p>');
  newHTML.push('<p> _______________________________________ </p>');
  newHTML.push('<p> Subtotal: $' + subtotal + '</p>');
  newHTML.push('<p> Tax: $' + tax + '</p>');
  newHTML.push('<p> Total: $' + total + '</p>');
  $(".element").html(newHTML.join(""));
}

function getSubtotal() {
  var sum = 0.0;
  for (var i = 0; i < itemsInCart.length; i++) {
      sum += parseFloat(itemsInCart[i].price);
  }
  sum = formatCurrency(sum);
  return sum;
}

function getTax(subtotal) {
  const taxRate = 0.06;
  var tax = subtotal * taxRate;
  tax = formatCurrency(tax);
  return tax;
}

function getTotal(subtotal, tax) {
  var total = parseFloat(subtotal) + parseFloat(tax);
  total = formatCurrency(total);
  return total;
}
