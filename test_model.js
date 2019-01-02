const database = require('./database')

class Posts {
  get() {
    const sql = 'SELECT id, subject, message, date_created, date_updated FROM test_table ORDER BY date_created'
    return database.any(sql)
  }

  getOne(request) {
    const values = {
      id: parseInt(request.params.id)
    }
    const sql = 'SELECT id, subject, message, date_updated FROM test_table WHERE id = ${id}'
    return database.one(sql, values)
  }

  post(request) {
    if (request.body.subject === undefined) {
      throw new Error('A subject is required.')
    }
    if (request.body.message === undefined) {
      throw new Error('A message is required.')
    }
    const values = {
      subject: request.body.subject,
      message: request.body.message,
      date_created: new Date(),
      date_updated: new Date()
    }
    const sql = 'INSERT INTO test_table (subject, message, date_created, date_updated) VALUES (${subject}, ${message}, ${date_created}, ${date_updated})'
    return database.none(sql, values)
  }

  put(request) {
    if (request.body.subject === undefined) {
      throw new Error('A subject is required.')
    }
    if (request.body.message === undefined) {
      throw new Error('A message is required.')
    }
    const values = {
      subject: request.body.subject,
      message: request.body.message,
      date_updated: new Date(),
      id: parseInt(request.params.id)
    }
    const sql = 'UPDATE test_table SET subject=${subject}, message=${message}, date_updated=${date_updated} WHERE id=${id}'
    return database.none(sql, values)
  }

  delete(request) {
    const values = {
      id: parseInt(request.params.id)
    }
    const sql = 'DELETE FROM test_table where id = ${id}'
    return database.none(sql, values)
  }
}

module.exports = Posts
