var fs = require('fs');

var output = fs.readFileSync('./reduce-advance.txt', 'utf-8')
  .trim()
  .split('\n')
  .map(function(line) {
    return line.split(',')
  })
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {});

console.log(JSON.stringify(output, null, 2));