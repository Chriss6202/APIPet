var {
    getAll,
    getWanted,
    getOwned,
    createPost,
    deletePost,
    updatePost,
    Favorite,
    Comment,
    Survey,
} = require("../controllers/post");
var express = require("express");
var router = express.Router();


router.patch("/fav/:id", Favorite)
router.get("/all", getAll);
router.get("/wanted/:title", getWanted);
router.get("/owned", getOwned);
router.post("/create", createPost);
router.put("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
router.patch("/comment/:id", Comment)
router.patch("/survey/:id", Survey)

module.exports = router;