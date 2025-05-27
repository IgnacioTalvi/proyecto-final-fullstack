const express = require('express');
const providersController = require("../controllers/providers.Controller");
const router = express.Router();

router.get("/",providersController.getAllProviders);
router.get("/:id", providersController.getProviderById);
router.delete("/", providersController.deleteProvider);

module.exports = router;

