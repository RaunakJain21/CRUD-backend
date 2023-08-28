const express = require('express');
const router = express.Router();
const {createTodo} = require("../controllers/createTodo");
const {getTodo} = require('../controllers/getTodo');
const { getTodoById } = require('../controllers/getTodo');
const { Updatetodo } = require('../controllers/Updatetodo');
const { deleteTodo } = require('../controllers/deleteTodo');


router.post("/createTodo",createTodo);
router.get('/getTodo',getTodo);
router.get('/getTodo/:id',getTodoById);
router.put('/Updatetodo/:id',Updatetodo);
router.delete('/deleteTodo/:id',deleteTodo);
module.exports = router;
