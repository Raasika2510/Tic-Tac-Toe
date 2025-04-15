const express = require("express")
const app = express()


const signuproute = require("../endpoints/signup")
app.use(express.json());
const port = process.env.PORT || 5000;

app.use("/user",signuproute);

app.listen(port, ()=>{
    console.log("Server running at:",port)
})