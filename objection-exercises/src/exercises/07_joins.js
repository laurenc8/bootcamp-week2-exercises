const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const usersAndPets = await User.query().withGraphFetched('pets')
  console.dir(usersAndPets, {depth: null})

  // Get all users, their pets, AND their children
  const usersPetsAndChildren = await User.query().withGraphFetched('[pets, children]')
  console.dir(usersPetsAndChildren, {depth: null})

  // Get all users, their parents, and their grandparents
  const usersParentsAndGrandparents = await User.query().withGraphFetched('parents.^2')
  console.dir(usersParentsAndGrandparents, {depth: null})

  // Get all users, their pets, their children, and their childrens' pets
  const usersPetsChildrenAndCPets = await User.query().withGraphFetched('[pets, children.pets]')
  console.dir(usersPetsChildrenAndCPets, {depth: null})

  // -----
  cleanup()
}

run()
