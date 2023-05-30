const { gql } = require('apollo-server');

module.exports = gql`

type Cache {
    title: String!
    description: String!
    latitude: Float!
    longitude: Float!
    createdAt: String
    tags: String
    image: String
    thumbsUp: Int
    thumbsDown: Int
}

type User {
    firstName: String
    lastName: String
    username: String!
    password: String!
    biography: String
    image: String
}

input UserInput {
    firstName: String
    lastName: String
    username: String!
    password: String!
    biography: String
    image: String
}

input CacheInput {
    title: String!
    description: String!
    latitude: Float!
    longitude: Float!
    tags: String
    image: String
}

type Query {
    cache(ID: ID!): Cache!
    getCaches(amount: Int): [Cache]
}

type Mutation {
    createCache(cacheInput: CacheInput): Cache!
    deleteCache(ID: ID!): Boolean
    editCache(ID: ID!, cacheInput: CacheInput): Boolean
}

`