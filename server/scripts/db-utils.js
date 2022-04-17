const {MongoClient} = require("mongodb");

const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "../.env")});

const {MONGO_URI} = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Connect to database and return established connection.
const getConn = async () => {
    try {
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db("deliveries");

        return {client, db};
    } catch (err) {
        throw new Error("Database connection error");
    }
};

module.exports = {getConn};