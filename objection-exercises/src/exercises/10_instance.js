const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const carmine = await User.query().findById('94299526-cfea-4344-90c2-50b415cb796d');
  console.log(carmine);

  // Use that instance to create a new pet related that user
  const carminePet = await carmine.$relatedQuery('pets').insert({ type: 'BIRD', name: 'Polly' });
  console.log(carminePet);

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const carminePetsAndChildren = await carmine.$fetchGraph('[pets, children]');
  console.log(carminePetsAndChildren);

  // -----
  cleanup()
}

run()
