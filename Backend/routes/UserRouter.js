const router = require("express").Router();
const controller = require("../controllers/UserController");
// const middleware = require("../middleware");

// router.get(":/items", controller.GetItems);
router.get("/", controller.GetUser);
router.post("/", controller.PostUser);
router.delete("/", controller.DeleteAllUsers);
module.exports = router;
