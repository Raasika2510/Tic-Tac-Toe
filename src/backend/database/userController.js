const userService = require("./signup");

async function createUser(req,res){
    try{
        const userdata = req.body;
    const user = await userService.createUser(userdata);
    res.status(201).json({user:user, message: "User Created successfully"});
    }catch(error){
        console.log(error);
        res.status(400).json({message: error.message});
    }
}

module.exports = {createUser};