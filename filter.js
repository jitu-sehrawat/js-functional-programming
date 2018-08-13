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
// Bsaic method
var dogs = [];
for(var i =0;  i < animals.length; i++) {
  if(animals[i].species === 'dog') {
    dogs.push(animals[i]);
  }
}
*/

/*
//using Filter
var dogs = animals.filter(function(animal) {
  return animal.species === 'dog'
})
*/

/*
var isDog = function(animal) {
  return animal.species === 'dog'
};
var dogs = animals.filter(isDog);
*/