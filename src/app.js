const express = require("express");
const Student=require("./models/students");
const studrouter=require("./routers/student")
require("./database/connection");

const app = express();
const port=process.env.Port || 3000;

app.use(express.json());
app.use(studrouter);

app.listen(port,()=>{
    console.log(`connectionnis at port no : ${port}`);
})