const express = require('express');
const router = express.Router();
const userController = require('../controllers/controller');

router.get('/',userController.getHome);
router.post('/add',userController.addUser);
router.post('/delete/:id',userController.deleteUser);
router.post('/update/:id',userController.updateUser);

module.exports= router;
