const { MongoClient } = require('mongodb');
const url = "tempNot";

const client = new MongoClient(url);

client.connect();

const resolvers = {
    Query: {
        caches: async () => {
            try {
                return 'returns all necessary caches!';
            } catch (err) {
                console.error('Failed to fetch caches:', err);
                throw new Error('Failed to fetch books from the database');
            }
        }
    }
};

module.exports = resolvers;