const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    refreshtoken:{
        type:String
    },
})
module.exports = mongoose.model("user",userSchema,);
