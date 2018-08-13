var animals = [{
  name: 'Fluffy', species: 'rabbit'
}, {
  name: 'Caro', species: 'dog'
}, {
  name: 'Ham', species: 'dog'
}, {
  name: 'Harold', species: 'fish'
}, {
  name: 'Ursula', species: 'cat'
}, {
  name: 'Jimmy', species: 'fish'
}]


/*
// Basic 
var names = [];
for(var i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}
*/

/*
var names = animals.map(function(animal) {
  return animal.name;
})
*/

/*
var names = animals.map(function(animal) {
  return animal.name + ' is a ' + animal.species;
})
*/

console.log(names);
