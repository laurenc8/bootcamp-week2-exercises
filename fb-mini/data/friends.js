const casual = require('casual')

casual.define('friend', () => ({
  id: casual.uuid,
  requestorId: casual.uuid,
  requestedId: casual.uuid,
  date: casual.date(),
  status: casual.random_element(['ACCEPTED', 'DECLINED', 'REQUESTED']),
}))

const friendData=[]

for (let i = 0; i < 20; i += 1) {
  friendData.push(casual.friend)
}

module.exports = friendData