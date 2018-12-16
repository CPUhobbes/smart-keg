const express = require('express');
const Index = require('../controllers/');
const Users = require('../controllers/users');

const router = express.Router();
/*
 * --- Index Route ---
 */
router.get('/', Index.loadIndex);

/*
 * --- API Routes ---
 */

// Validate login
router.post('/login/validate', Users.validateLogin);

module.exports = router;
