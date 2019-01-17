const express = require('express')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()
    app.use(bodyParser.urlencoded({ extended: true }));
    require('../app/routes/index.routes')(app)
    require('../app/routes/register.routes')(app)
    app.set('views', './app/views')
    app.set('view engine', 'jade')
    
    return app
}