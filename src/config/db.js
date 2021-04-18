require('dotenv').config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbKey = process.env.DB_KEY;

const dbUrl = `mongodb+srv://${dbUser}:${dbKey}@cluster0.g9qdo.mongodb.net/${dbName}?retryWrites=true&w=majority`;

module.exports = dbUrl;