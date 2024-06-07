const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

// مسار افتراضي لـ /admin
router.get('/', adminController.getLogin);
router.post('/', adminController.postLogin);

// مسار لوحة التحكم
router.get('/dashboard', adminController.getDashboard);

module.exports = router;
