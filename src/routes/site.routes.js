const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController')

router.get('/search',siteController.Search)
router.get('/',siteController.Home)

module.exports = router;