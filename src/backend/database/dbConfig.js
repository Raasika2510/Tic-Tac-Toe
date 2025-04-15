const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tictactoelogin")
mongoose.connection.on("connected", ()=>{
    console.log("Connected to Mongo DB");
})

mongoose.connection.on("error",(error)=>{
    console.log("Error in COnnecting with Mongo DB:",error);
})

module.exports = mongoose;
