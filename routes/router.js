const router = require("express").Router();
const ManagementControlling = require("../controllers/management");

router.post("/savefield", ManagementControlling.saveFields);
router.get("/getfields", ManagementControlling.getFields);

router.post("/saveidoc", ManagementControlling.saveIdocs);


router.post("/updatevalue", ManagementControlling.updateValue);


module.exports = router;
