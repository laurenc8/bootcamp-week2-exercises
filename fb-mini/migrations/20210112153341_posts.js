exports.up = async knex => knex.schema.createTable('posts', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))
  
  table
    .uuid('authorId')
    .notNullable()
    .references('users.id')

  table
    .text('text')
  
  table
    .datetime('date')
    .notNullable()
    .defaultTo(knex.fn.now())

  table
    .number('likes')
    .notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')