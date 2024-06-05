const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

// مسار افتراضي لـ /admin
router.get('/', (req, res) => {
    res.send('Welcome to the Admin Panel');
});

// مسار لوحة التحكم
router.get('/dashboard', adminController.getDashboard);

module.exports = router;