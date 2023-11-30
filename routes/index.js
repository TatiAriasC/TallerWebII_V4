const express = require('express')
const eventsRouter = require('./cars.router')

function routerApi(app){
    const router = express.Router()

    app.use('/api/v1', router)

    router.use('/cars', eventsRouter)
}

module.exports = routerApi