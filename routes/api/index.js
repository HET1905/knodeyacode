const router = require("express").Router();

const quesRoutes = require("./question");
const scoreRoutes = require("./score");
const userRoutes = require("./user");

router.use("/scores", scoreRoutes);
router.use("/questions", quesRoutes);
router.use("/users", userRoutes);

module.exports = router;
