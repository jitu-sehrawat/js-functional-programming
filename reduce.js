var orders = [{
  amount: '250'
}, {
  amount: '400'
}, {
  amount: '100'
}, {
  amount: '325'
}]

/*
var totalAmount = 0;
for(var i = 0; i < orders.length; i++) {
  totalAmount += parseInt(orders[i].amount);
}
*/

// here 'sum' is variable which will be used to store return value after each iteration and 0 is initial value.
/*
var totalAmount = orders.reduce(function(sum, order) {
  console.log(`Hello ${sum}, ${JSON.stringify(order)}`);
  return sum + parseInt(order.amount);
}, 0);
*/

console.log(totalAmount);