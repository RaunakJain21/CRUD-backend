const express = require('express');
const router = express.Router();
const {createTodo} = require("../controllers/createTodo");
const {getTodo} = require('../controllers/getTodo');
const { getTodoById } = require('../controllers/getTodo');

router.post("/createTodo",createTodo);
router.get('/getTodo',getTodo);
router.get('/getTodo/:id',getTodoById);
module.exports = router;