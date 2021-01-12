const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  firstName: casual.first_name,
  lastName: casual.last_name,
  DOB: casual.date(),
  password: casual.password,
  bio: casual.description,
}))

const userData=[]

for (let i = 0; i < 20; i += 1) {
  userData.push(casual.user)
}

module.exports = userData