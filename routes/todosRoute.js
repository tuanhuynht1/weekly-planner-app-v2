// connect to database
const PostgreSQL = require('../database');
const pg = new PostgreSQL(process.env.DATABASE_URL);

const jwt = require('jsonwebtoken');            // for access token
const router = require('express').Router();     // for modulating routes
 
// auth middleware
const auth = async(req, res, next) => {
    const token = req.header('Authorization');
    try{
        const data = jwt.verify(token, process.env.TOKEN_SK)
        req.user = data.usr;
        next();
    }
    catch (error){
        res.status(400).send({error: 'Unauthorized'});
    }
}

// get all users todos
router.get('/', auth, async (req,res) => {
    res.send(await pg.getTodos(req.user));
})

// post new todo
router.post('/', auth, async (req,res) => {
    const {pid,text,assigned_date} = req.body;
    res.send(await pg.addNewTodo(req.user,pid,text,assigned_date));
})

// toggle completed state
router.put('/:tid', auth, async (req,res) => {
    const { tid } = req.params;
    res.send(await pg.toggleStatus(tid));
})

// delete todo
router.delete('/:tid', auth, async (req,res) => {
    const {tid} = req.params;
    res.send(await pg.deleteTodo(tid));
})

module.exports = router;