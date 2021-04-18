const mongoose = require('mongoose');
const dbURL = require('../config/db');

const dbConnect = () => {
    mongoose.connect(
        dbURL,
        {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }
    );    
};

module.exports = dbConnect;