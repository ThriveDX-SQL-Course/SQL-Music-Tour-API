// DEPENDENCIES - Where we require all our packages
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')


// CONFIGURATION / MIDDLEWARE - Where we configure those dependency packages
/*express.json() and express.urlencoded(...) - Configuration for body-parser, which parses request bodies that come in*/
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
// const sequelize = new Sequelize(process.env.PG_URI)

// try {
//     sequelize.authenticate()
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`)
// } catch(err) {
//     console.log(`Unable to connect to PG: ${err}`)
// }



// ROOT -- A GET for the root route ('/'), responding with a simple welcome message
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)


// LISTEN -- Where we tell our app what port to listen for connections on
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})

