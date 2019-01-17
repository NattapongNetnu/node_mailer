module.exports = (app) => {
    const verified = require('../controllers/register.controller')
    app.post('/register', verified.register)
}