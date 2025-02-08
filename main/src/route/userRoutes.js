const express  = require('express');
const router = express.Router();

const userController = require('../contorller/userController')

router.get('/',userController.Home) ;
router.get('/lib.html',userController.lib) ;
router.get("*",userController.page_404) ;
module.exports = router