const database = require('../database')

function RegisterCompany() {
  
  function create(body, hash) {
    if (!body.company) {
      throw new Error('A company name is required.')
    }
    if (!body.email) {
      throw new Error('An email is required.')
    }
    if (!body.password) {
      throw new Error('A password is required.')
    }
    if (body.password.length < 8) {
      throw new Error('Password must be at least 8 characters.')
    }
    if (body.password !== body.password_verify) {
      throw new Error('Passwords do not match.')
    }
    const values = {
      company: body.company,
      email: body.email,
      password: body.password, // salt/hash
      logo: body.logo || null,
      is_verified: false,
      activation: hash,
      date_created: new Date(),
      date_updated: new Date()
    }
    console.log(values)
    const sql = 'INSERT INTO companies (company, email, password, logo, is_verified, activation, date_created, date_updated) VALUES (${company}, ${email}, ${password}, ${logo}, ${is_verified}, ${activation}, ${date_created}, ${date_updated})'
    return database.none(sql, values)
  }

  function update(body, id) {
    if (!body.company) {
      throw new Error('A company name is required.')
    }
    if (!body.email) {
      throw new Error('An email is required.')
    }
    if (!body.password) {
      throw new Error('A password is required.')
    }
    if (body.password.length < 8) {
      throw new Error('Password must be at least 8 characters.')
    }
    if (body.password !== body.password_verify) {
      throw new Error('Passwords do not match.')
    }
    const values = {
      company: body.company,
      email: body.email,
      password: body.password, // salt/hash
      logo: body.logo || null,
      date_updated: new Date(),
      id: parseInt(id)
    }
    const sql = 'UPDATE companies SET company = ${company}, email = ${email}, password = ${password}, logo = ${logo}, date_updated = ${date_updated} WHERE id = ${id}'
    return database.none(sql, values)
  }

  async function activateAccount(params) {
    const id = await getCompany(params)
    return setAsVerified(id)
  }

  function getCompany(params) {
    const values = {
      token: params.token
    }
    const sql = 'SELECT id FROM companies WHERE activation = ${token}'
    return database.one(sql, values)
  }

  function setAsVerified(id) {
    const sql = 'UPDATE companies SET is_verified = true, activation = null WHERE id = $1'
    return database.none(sql, id)
  }

  return { create, update, activateAccount }
}

module.exports = RegisterCompany