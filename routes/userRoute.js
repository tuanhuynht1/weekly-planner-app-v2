// setup process environmnet
const dotenv = require('dotenv');
dotenv.config();

// connect to database
const PostgreSQL = require('../database');
const pg = new PostgreSQL(process.env.DATABASE_URL);

const bcrypt = require('bcryptjs');             // for hashing password
const jwt = require('jsonwebtoken');            // for access token
const router = require('express').Router();     // for modulating routes

// request access token
router.get('/login', async (req,res) => {
    const {usr, pwd} = req.body;
    const user = await pg.getUser(usr);

    // can't find user
    if (user.length === 0) {
        res.status(400).send('username does not exist');
    }

    // validate hash password
    const valid = await bcrypt.compare(pwd, user.pwd);

    if (valid) {
        // sign and send access token
        const token = jwt.sign({usr: user.usr}, process.env.TOKEN_SK);
        res.header('auth-token', token).send(token);
    }
    else {
        res.status(400).send('incorrect password');
    }
})

// add new user
router.post('/register', async (req,res) => {
    const {usr, pwd} = req.body;

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pwd, salt);

    // add new user and send confirmation or error
    const results = await pg.addNewUser(usr,hash);

    if(results.name === 'error'){
        res.status(400).send(results.detail);
    }
    else {
        res.send(results);
    }
})

module.exports = router;