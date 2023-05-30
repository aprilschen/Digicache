const { buildSchema } = require('graphql');

const schema = buildSchema(`
type Cache {
    id: ID!
    title: String!
    description: String!
    latitude: Int!
    longitude: Int!
    date: String
    time: String
    tags: String
    imageLink: String
}

type Query {
    caches: [Cache]
}

`);

module.exports = schema;