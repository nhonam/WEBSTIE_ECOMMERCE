const express = require('express')
const Router = express.Router()
const errorMiddleware = require("./middleware/error")


//Route Imports
const product = require("./routes/ProductRoute")
const user = require("./routes/userRoute")
const order = require("./routes/orderRoute")
Router.use('/api/v1', product)
Router.use('/api/v1', user)
Router.use('/api/v1', order)

// Middleware for Errors
Router.use(errorMiddleware)

module.exports = Router