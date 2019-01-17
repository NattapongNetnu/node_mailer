module.exports = (app) => {
    const index = require('../controllers/index.controller')
    app.get('/', index.render)
}