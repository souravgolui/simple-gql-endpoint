const config = {}

config.PORT = 8080
config.DATABASE_URL = 'mongodb://localhost:27017/gql'
config.SECRET_KEY = 'secretkey'
config.mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }

module.exports = config