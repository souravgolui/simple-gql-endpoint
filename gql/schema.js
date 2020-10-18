const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type userData {
        _id: ID!
        name: String
        email: String
        password: String
        mobileNumber: String
        loginType:String
        profilePicture: String
        role: Int
        isVerified: Boolean
    }

    input InputUserData {
        name: String!
        email: String!
        password: String!
        mobileNumber: String!
        loginType:String
        profilePicture: String
        role: Int
        isVerified: Boolean
    }

    type UserRootQuery {
        user: [userData]!
    }

    type userMutation {
        createUser(userInput: InputUserData): userData
    }

    schema {
        query: UserRootQuery
        mutation: userMutation
    }
`)