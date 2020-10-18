# simple-gql-endpoint
### Mutation and Query of GraphQL


# API Doc

### GraphQL endpoint 
`POST http://localhost:8080/graphql`

#### create user
`POST`
```bash
{
  mutation: `{
    createUser(userInput: {name: "Demo Name", email: "demo@mail.com", password: "123456", mobileNumber: "9547******"}) {
        _id
        name
        email
        mobileNumber
        role
        ...
    }`
  }
}
```

#### Retrive user list
`POST`
```bash
{
  query: `{
    user {
        _id
        name
        email
        profilePicture
        isVerified
        ...
    }
  }`
}
```
