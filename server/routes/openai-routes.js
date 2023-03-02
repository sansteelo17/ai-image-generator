const { Router } = require("express");
const router = Router();

const { generateImage } = require("../controller/controller");

router.route("/generateimage").post(generateImage);

module.exports = router;
