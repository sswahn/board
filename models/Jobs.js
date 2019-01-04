const database = require('../database')

function Jobs() {
 
  function read() {
    const sql = 'SELECT id, subject, description, country, city, salary, date_created, date_updated FROM jobs ORDER BY date_created'
    return database.any(sql)
  }

  function readOne(id) {
    const values = {
      id: parseInt(id)
    }
    const sql = 'SELECT id, subject, description, country, city, salary, date_created, date_updated FROM jobs WHERE id = ${id}'
    return database.one(sql, values)
  }
  
  function create(body) {
    if (!body.subject) {
      throw new Error('A subject is required.')
    }
    if (!body.description) {
      throw new Error('A description is required.')
    }
    if (!body.country) {
      throw new Error('A country is required.')
    }
    if (!body.city) {
      throw new Error('A city is required.')
    }
    if (!body.job_start) {
      throw new Error('A contract start date is required.')
    }
    if (!body.job_end) {
      throw new Error('A contract end date is required.')
    }
    const values = {
      subject: body.subject,
      description: body.description,
      country: body.country,
      city: body.city,
      job_start: body.job_start,
      job_end: body.job_end,
      salary: body.salary || null,
      date_created: new Date(),
      date_updated: new Date()
    }
    const sql = 'INSERT INTO jobs (subject, description, country, city, salary, date_created, date_updated) VALUES (${subject}, ${description}, ${country}, ${city}, ${salary}, ${date_created}, ${date_updated})'
    return database.none(sql, values)
  }

  function update(body, id) {
    if (!body.subject) {
      throw new Error('A subject is required.')
    }
    if (!body.description) {
      throw new Error('A description is required.')
    }
    if (!body.country) {
      throw new Error('A country is required.')
    }
    if (!body.city) {
      throw new Error('A city is required.')
    }
    if (!body.job_start) {
      throw new Error('A contract start date is required.')
    }
    if (!body.job_end) {
      throw new Error('A contract end date is required.')
    }
    const values = {
      subject: body.subject,
      description: body.description,
      country: body.country,
      city: body.city,
      job_start: body.job_start,
      job_end: body.job_end,
      salary: body.salary || null,
      date_updated: new Date(),
      id: parseInt(id)
    }
    const sql = 'UPDATE jobs SET subject = ${subject}, description = ${description}, country = ${country}, city = ${city}, salary = ${salary}, date_updated = ${date_updated} WHERE id = ${id}'
    return database.none(sql, values)
  }

  function remove(id) {
    const values = {
      id: parseInt(id)
    }
    const sql = 'DELETE FROM jobs where id = ${id}'
    return database.none(sql, values)
  }

  return { read, readOne, create, update, remove }
}

module.exports = Jobs