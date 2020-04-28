// connect to database
const PostgreSQL = require('../database');
const pg = new PostgreSQL(process.env.DATABASE_URL);

const router = require('express').Router();

router.get('/', (req,res) => res.send('USERS'));

router.post('/login', async (req,res) => {
    res.send('LOGIN');
})

router.post('/register', async (req,res) => {
    res.send('REGISTER');
})

module.exports = router;