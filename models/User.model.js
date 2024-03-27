const mongoose= require("mongoose");

const userSchema= mongoose.Schema({

    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobile_no:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
})

const Usermodel= mongoose.model("User",userSchema);



module.exports={Usermodel}