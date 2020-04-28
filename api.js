// connect to database
const PostgreSQL = require('./database');
const pg = new PostgreSQL(process.env.DATABASE_URL);

const router = require('express').Router();

router.get('/', async (req,res) => {
    res.send(await pg.test());
})

module.exports = router;