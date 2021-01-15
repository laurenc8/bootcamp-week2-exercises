const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const user = await User.query().first()
  console.log(user.firstName)

  const pet = await Pet.query().first()
  console.log(pet.isMammal)

  // -----
  cleanup()
}

run()
