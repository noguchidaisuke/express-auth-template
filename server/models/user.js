const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {type: String, require: true},
  email: {type: String, unique: true, required: true},
  password: {type: String, require: true},
})

module.exports = mongoose.model('User', UserSchema)