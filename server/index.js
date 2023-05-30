const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const uri = "mongodb+srv://aprilschen:TheNexusGaming1!@digicache.pcgxuqa.mongodb.net/?retryWrites=true&w=majority";

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(uri, {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB Connection Successful');
        return server.listen({port: 5001});
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    });
