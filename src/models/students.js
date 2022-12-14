const mongoose=require("mongoose");
const validator= require("validator");

const studentSchema= new  mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:3,
    },
     email:{
            type:String,
            required:true,
            unique:[true,"email i already present!"],
         validate(v){
                    if(!validator.isEmail(v)){
                        throw new Error( "invalid email!");
                    }
                }
        },
        phone:{
            type:Number,
            required:true,
            unique:[true,"phone  no already exits!"],
            min:8,
        },
        address:{
            type:String,
            required:true,
        }
    
})
//creating model using studentSchema

const Student= new mongoose.model("Student",studentSchema);
module.exports= Student; 
