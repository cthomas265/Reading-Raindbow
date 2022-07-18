const { gql } = require ('apollo-server-express')

const typedefs = gql `
    type Book {
        bookId: ID
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID
        savedBooks: [Book]
        email: String
        username: String
        password: String
    }

    type Auth {
        token: ID
        user: User
    }

    input bookInput {
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    type Query {
        me: User 
    }

    type Mutation {
        addUser(username: String, email: String, password: String): Auth
        login(email: String, password: String): Auth
        saveBook(bookData: bookInput): User
        removeBook(bookId: ID): User
    }


`

module.exports = typedefs