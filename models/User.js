const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
    username: {
        type: "ibukun",
        required: true,
        unique: true,
    },
    email: {
        type: "lolideborah6@gmail.com",
        required: true,
        unique: true,
    },
    password: {
        type: "Numbers",
        required: true,
    },
});

// Export the User model
module.exports = mongoose.model('User', UserSchema);