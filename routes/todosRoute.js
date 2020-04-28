// connect to database
const PostgreSQL = require('../database');
const pg = new PostgreSQL(process.env.DATABASE_URL);

const router = require('express').Router();

// GET all todos
router.get('/', async (req,res) => {
    res.send('ALL');
})

// POST new todo
router.post('/', async (req,res) => {
    res.send('NEW');
})

// DELETE todo
router.delete('/', async (req,res) => {
    res.send('DEL');
})

module.exports = router;