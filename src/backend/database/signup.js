const User = require("./usermodel");
const bcrypt = require("bcrypt");

async function createUser(userData){
    const {username,password} = userData;
    const hashed = await bcrypt.hash(password, 10);
    const createdUser = new User({
        username,         // 'name' should be 'username'
        password: hashed,  // Store the hashed password
        role: "customer"
    })

    const savedUSer = await createdUser.save();
    return savedUSer;
}

module.exports ={createUser}