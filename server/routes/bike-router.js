const express = require("express");

const BikeCtrl = require("../controllers/bike-ctrl");

const router = express.Router();

router.post("/bike", BikeCtrl.createBike);
router.post("/bikes", BikeCtrl.createBikes);
router.put("/bike/:id", BikeCtrl.updateBike);
router.delete("/bike/:id", BikeCtrl.deleteBike);
router.get("/bike/:id", BikeCtrl.getBikeById);
router.get("/bikes", BikeCtrl.getBikes);

module.exports = router;
