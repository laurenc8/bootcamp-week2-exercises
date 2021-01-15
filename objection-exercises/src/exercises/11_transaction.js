const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
// Import models
const User = require('../models/User')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  const tran = await User.transaction(async trx => {
    const kaylee = await User.query(trx)
      .insert({email: 'kaylee@gmail.com', firstName: 'Kaylee', lastName: 'Chen', age: 15})
      .returning("*")
    console.log(kaylee)

    const louise = await kaylee.$relatedQuery('pets', trx)
      .insert({type: 'CAT', name: 'Louise'})
      .returning("*")
    console.log(louise)

    const totalPets = await Pet.query().resultSize()
    console.log(totalPets)
    if (totalPets > 15) {
      const birds = await Pet.query().delete().where('type', 'BIRD').returning("*")
      console.log(birds)
    }
    
    return kaylee;
  })
  console.log(tran)

  // -----
  cleanup()
}

run()
