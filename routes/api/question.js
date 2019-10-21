const router = require("express").Router();
const questController = require("../../controllers/questionController");
// Matches with "/api/questions"
router.route("/").get(questController.findAll);

router.route("/:topic").get(questController.findByTopic);

module.exports = router;
