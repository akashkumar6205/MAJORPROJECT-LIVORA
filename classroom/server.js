const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");

app.use(session({ 
    secret: "mysecretstring",
    resave: false,
    saveUninitialized: true,
}));

app.get("/test", (req, res) => {
    res.send("test is sucessfull");
});


app.listen(3000, () => {
    console.log("Server is listening to 3000");
});