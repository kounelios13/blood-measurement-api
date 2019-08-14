const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
router.get('/', async (req, res, next) => {
    let userId = res.locals.user._id;
    let user = await User.findById(userId).exec();
    let profile = {
        name: user.name,
        surname: user.surname,
        role: user.role,
        email: user.email,
        password: user.password,
        _id: user._id,
        records: user.records
    };
    res.json(profile);
});


module.exports = router;