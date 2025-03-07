const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dashsuchitra6:123@cluster0.mj5qn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const UserSchema = new mongoose.Schema({
   userName:{
    type: String,
    required : true,
    unique: true,
    trim : true,
    lowercase : true,
    minLength : 3,
    maxLength : 30
   },
   password : {
    type : String,
    required : true,
    minLength : 6
   },
   firstName :{
    type : String,
    required: true,
    trim : true,
    maxLength : 50
   },
   lastName : {
    type : String,
    required: true,
    trim : true,
    maxLength: 50
   }
})

const accountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type : Number,
        required: true
    }
});

const Account = mongoose.model('Account',accountSchema);
const User = mongoose.model("User",UserSchema);
module.exports = {
    User,
    Account,
}