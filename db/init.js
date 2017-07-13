const Lead = require('../src/lead')

exports.init = () => {
  const leadOne = new Lead({
    firstName: 'Cassidy',
    lastName: 'Brown',
    gender: 'female',
    phone: '1723138274',
    email: 'c.brown@microsoft.com'
  })

  leadOne.save(err => {
    if (err) {
      throw err
    }
  })
}
