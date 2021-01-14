const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const insertMe = await User.query().insert({
    email: '022063@gmail.com',
    firstName: 'Lauren',
    lastName: 'Chen',
    age: 17
  })
  console.log(insertMe)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  // const insertMyPet = await Pet.query().insert({
  //   ownerId: ,
  //   type: FISH,
  //   name: 'Henry'
  // })
  // console.log(insertMyPet)

  // -----
  cleanup()
}

run()
