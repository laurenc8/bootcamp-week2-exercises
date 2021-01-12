const casual = require('casual')

casual.define('post', () => ({
  id: casual.uuid,
  userId: casual.uuid,
  text: casual.text,
  date: casual.date(),
  password: casual.password,
  likes: casual.integer(from = 0, to = 500),
}))

const postData=[]

for (let i = 0; i < 20; i += 1) {
  postData.push(casual.post)
}

module.exports = postData