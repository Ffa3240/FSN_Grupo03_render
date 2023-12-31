const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainController')


router.get("/", mainControllers.home)
router.get("/home", mainControllers.home)
router.get("/contact", mainControllers.contact)
router.post("/contact", mainControllers.contactOk)
//router.get("/about", mainControllers.about)
//router.get("/faqs", mainControllers.faqs)

module.exports = router;