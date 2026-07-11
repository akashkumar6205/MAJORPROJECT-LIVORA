const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default || require("passport-local-mongoose");


// we don't have to create username, password beacuse it will already exist inthe passport-local-mongoose packages
const userSchema = new Schema({
    email:{
        type: String,
        required: true,
    }
});

//we use this line because it create username, password beacuse it will already exist inthe passport-local-mongoose packages by using hashing and salting
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);