const Cache = require('../models/Cache');

module.exports = {
    Query: {
        async cache(_, { ID }) {
            return await Cache.findById(ID)
        },

        async getCaches(_, {amount}) {
            return await Cache.find().sort({createdAt: -1}).limit(amount)
        }
    },
    Mutation: {
        async createCache(_, {cacheInput: {title, description, latitude, longitude, tags, image}}) {
            const createdCache = new Cache({
                title: title,
                description: description,
                latitude: latitude,
                longitude: longitude,
                createdAt: new Date().toISOString(),
                tags: tags,
                image: image,
                thumbsUp: 0,
                thumbsDown: 0
            });

            const res = await createdCache.save();  // MongoDB Saving
            return true;
        },

        async deleteCache(_, {ID}) {
            const wasDeleted = (await Cache.deleteOne({_id: ID})).deletedCount
            return wasDeleted;
        },
        async editCache(_, {ID, cacheInput:{title, description, latitude, longitude, tags, image}}) {
            const wasEdited = (await Cache.updateOne({_id: ID}, {
                title: title,
                description: description,
                latitude: latitude,
                longitude: longitude,
                tags: tags,
                image: image
                })).modifiedCount;
            return wasEdited;
        }
    }
}