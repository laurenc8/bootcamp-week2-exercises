const { userParams } = require('../lib')
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey

  const peterGraph = await User.query().insertGraph({
    email: 'peter.bynum@gmail.com',
    firstName: 'Peter',
    lastName: 'Bynum',

    pets: [
      {
        type: 'DOG',
        name: 'Rocco'
      },
      {
        type: 'DOG',
        name: 'Rosey'
      }
    ]
  })
  console.log(peterGraph)

  // -----
  cleanup()
}

run()
