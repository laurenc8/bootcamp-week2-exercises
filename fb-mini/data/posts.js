const casual = require('casual')
const userData = require('./users')

casual.define('post', ({userId}) => ({
  id: casual.uuid,
  authorId: userId,
  text: casual.text,
  date: casual.date(),
  likes: casual.integer(from = 0, to = 500),
}))

const postData=[]

for (let i = 0; i < 20; i += 1) {
  const userId = casual.random_element(userData).id
  postData.push(casual.post({userId}))
}

module.exports = postData