const cote = require('cote')
const { connect } = require('../db/connection')
const { init } = require('../db/init')
const Lead = require('./lead')

connect()
  // .then(() => init())
  // .catch(err => console.log(err))

const responder = new cote.Responder({ name: 'lead responder', key: 'lead' })

responder.on('index', () => {
  return Lead.find({})
})

responder.on('show', ({ id }) => {
  return Lead.findById(id)
})
