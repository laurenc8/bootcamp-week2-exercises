const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const { userParams } = require('../lib')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const yolanda = await User.query().where('firstName', 'Yolanda')
  console.log(yolanda)

  // Do the same with object notation
  const yolanda2 = await User.query().where({ firstName: 'Yolanda'})
  console.log(yolanda2)

  // Get all DOGS and BIRDS
  const dogsAndBirds = await Pet.query().whereIn('type', ['DOG','BIRD'])
  console.log(dogsAndBirds)

  // -----
  cleanup()
}

run()
