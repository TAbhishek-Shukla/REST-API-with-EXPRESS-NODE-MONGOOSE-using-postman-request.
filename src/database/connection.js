const mongoose = require("mongoose");
mongoose.set('strictQuery',true);

mongoose.connect("mongodb://127.0.0.1:27017/studentsapi",{useNewUrlParser:true,useUnifiedTopology:true})                                               
.then(()=>{
    console.log("connecton is succcesful!");
}).catch((err)=>{
    console.log(err);
})


