const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/tasks', taskController.createTask); // Create a new task
router.get('/tasks', taskController.getAllTasks); // Get all tasks
router.get('/tasks/:id',taskController.getTaskById); // Get a task by ID
router.delete('/tasks/:id', taskController.deleteTask); // Delete a task by ID

module.exports = router;
