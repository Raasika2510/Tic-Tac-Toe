const mongoose1 = require("./dbConfig");

const userSchema = new mongoose1.Schema({
    username: { type: String, required: true },  // Ensure 'username' is defined here
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "customer"], default: "customer" }
});

const model = mongoose1.model("tictactoelogin",userSchema);
module.exports = model;