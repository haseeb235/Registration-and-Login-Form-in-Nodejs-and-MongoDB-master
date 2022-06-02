const router = require('express').Router();

const indexContoller = require('../controllers/index-controller');

router.get('/homeScreen', indexContoller.getHome);
router.get('/aboutUs', indexContoller.getaboutUs);
module.exports = router;
