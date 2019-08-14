const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
router.get('/', (req, res, next) => {
    let user = {
        ...res.locals.user
    };
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