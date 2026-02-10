    // MongoDB implementation
    // const { MongoClient, ObjectId } = require('mongodb');
    // ...setup code...
    // Example: Assume 'collection' is a MongoDB collection instance

    class UserRepositoryMongo {
      constructor(collection) {
        this.collection = collection;
      }

      async create(user) {
        const result = await this.collection.insertOne(user);
        return { ...user, id: result.insertedId };
      }

      async findAll() {
        return await this.collection.find().toArray();
      }

      async update(id, data) {
        const { ObjectId } = require('mongodb');
        await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: data });
        return await this.collection.findOne({ _id: new ObjectId(id) });
      }

      async delete(id) {
        const { ObjectId } = require('mongodb');
        await this.collection.deleteOne({ _id: new ObjectId(id) });
        return { id };
      }
    }

    module.exports = UserRepositoryMongo;
