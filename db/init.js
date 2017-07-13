const Lead = require('../src/lead')

exports.init = () => {
  const leadOne = new Lead({
    firstName: 'Cassidy',
    lastName: 'Brown',
    gender: 'female',
    phone: '1723138274',
    email: 'c.brown@microsoft.com',
    street: '1 rue de la Poulaillerie',
    lat: 45.764043,
    lng: 4.835659
  })

  leadOne.save(err => {
    if (err) {
      throw err
    }
  })
}
