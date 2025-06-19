const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
 name: String,
 email:{type: String, unique:true,required: true},
 password:{type: String, required: true},
 role:{
type: String,
    enum: ['Admin', 'Supervisor','Employee'],
    default: 'Employee'
 }
 }, {timestamps:true});

 //Password Hashing
 userSchema.pre('save', async function(next) {
if(!this.isModified('password')) return;
this.password = await bcrypt.hash(this.password, 10);
 });

//compare password
userSchema.methods.matchPassword = async function(password){

    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);