TABLES
users:
.uuid('id').notNullable().primary()
.string('email').unique().notNullable()
.string('firstName').notNullable()
.string('lastName').notNullable()
.datetime('DOB', [precision]).notNullable()
.string('password').notNullable()
.text('bio')

posts:
.uuid('id').notNullable().primary()
.uuid('authorId').references(users.id)
.text('text')
.datetime('date')
.number('likes')

friends:
.uuid('id').notNullable().primary()
.uuid('requestorId').references(users.id)
.uuid('requestedId').references(users.id)
.datetime('date)
.enum('status', ['ACCEPTED', 'DECLINED', 'REQUESTED'])