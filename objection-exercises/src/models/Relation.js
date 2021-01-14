const { ManyToManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Relation extends BaseModel {
  static get tableName() {
    return 'relations'
  }

  static get relationMappings() {
    const User = require('./User')
    return {
      users: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'relations.parentId',
          through: {
            from: 'users.id',
            to: 'users.id',
          },
          to: 'relations.childId',
        },
      },
    }
  }
}

module.exports = Relation
