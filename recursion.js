let categories = [{
  id: 'animal', parent: null
}, {
  id: 'mammal', parent: 'animal'
}, {
  id: 'dog', parent: 'mammal'
}, {
  id: 'cat', parent: 'mammal'
}, {
  id: 'labrador', parent: 'dog'
}, {
  id: 'pitbull', parent: 'dog'
}, {
  id: 'persian', parent: 'cat'
}, {
  id: 'siamese', parent: 'cat'
}]

let makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(categories, c.id))
  return node;
}

console.log(
  JSON.stringify(makeTree(categories, null), null, 2)
)