const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  const noCats = await Pet.query().delete().where('type', 'CAT').returning("*")
  console.log(noCats)

  // -----
  cleanup()
}

run()
