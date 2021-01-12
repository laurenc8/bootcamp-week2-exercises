TABLES
User:
- userId - number
- firstName - string
- lastName - string
- DOB - date
- password - string
- bio - string

Posts:
- authorId - number - link to userId
- postId - number
- text - string
- date - date
- likes - number

Friends:
- requestorId - number - link to userId
- requestedId - number - link to userId
- date - date
- status - enum (accepted/declined/requested)