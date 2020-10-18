const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql');

const config = require('./config')

const glSchema = require('./gql/schema')
const glResolvers = require('./gql/resolver')

mongoose.Promise = global.Promise
mongoose.connect(config.DATABASE_URL, config.mongoClientOptions)

/**
 * mongo db connection on success
 */
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.DATABASE_URL)
})

/**
 * mongo db on connection Error
 */
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err)
})

/**
 * App uses resource
 */

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: glSchema,
    rootValue: glResolvers,
    graphiql: true
}))

app.get('/', (req, res) => {
    res.json({
        msg: 'workig'
    })
})

app.listen(config.PORT, function () {
    console.log('server running on localhost:' + config.PORT)
});
