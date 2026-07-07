const express = require("express");
const router = express.Router();



//index - user
router.get("/", (req, res) => {
    res.send("Get for users");
});

//Show - user
router.get("/:id", (req, res) => {
    res.send("Get for show users id");
});

//post - user
router.post("/", (req, res) => {
    res.send("Post for users");
});

//delete - user
router.delete("/:id", (req, res) => {
    res.send("delete for users id");
});

module.exports = router;