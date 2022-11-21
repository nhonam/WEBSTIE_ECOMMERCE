const express = require('express')
const dotenv = require('dotenv')
const route =require("./app")
const connectDatabase = require('./config/database')
const cookieParse = require('cookie-parser')
const app =express()
require("dotenv").config();
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });
  
//config
dotenv.config({path:"backend/config/config.env"})
//connect database
connectDatabase()




app.use(express.json())
app.use(cookieParse())
app.use(route)
app.listen(process.env.PORT , () => {

    console.log(`Server is working on http://localhost:${process.env.PORT }`)
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });