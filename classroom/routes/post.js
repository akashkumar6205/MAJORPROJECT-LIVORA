const express = require("express");
const router = express.Router();

//index 
router.get("/", (req, res) => {
    res.send("Get for posts");
});

//Show 
router.get("/:id", (req, res) => {
    res.send("Get for show posts id");
});

//post 
router.get("/", (req, res) => {
    res.send("Post for posts");
});

//delete 
router.get("/:id", (req, res) => {
    res.send("delete for posts id");
});

module.exports = router;