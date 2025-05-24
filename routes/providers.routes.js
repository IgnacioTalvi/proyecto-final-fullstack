const express = require('express');
const providersController = require("../controllers/providers.Controller");
const router = express.Router();

router.get("/",providersController.getAllProviders);

module.exports = router;