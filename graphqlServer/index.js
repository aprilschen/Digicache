const schema = require('./schema.js');
const resolvers = require ('./resolvers.js');

const port = process.env.port || 3000;

const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express()

app.use(
    '/graphql',graphqlHTTP({
        schema: schema,
        rootValue: resolvers,
        graphiql: true
    })
);

app.listen(port, () => {
    console.log(`GraphQL server running on port http://localhost:${port}/graphql`);
})