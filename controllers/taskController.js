const Task= require('../models/Task');

// Post / tasks
exports.createTask = async (req, resizeBy,next) => {
try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
    }
catch(err){ next(err); }
};

// Get / tasks
exports.getAllTasks = async (req, res, next) => {
try{
     const tasks = await Task.find();
     res.status(200).json(tasks); 


}
catch(err){next(err);}


};

//Get / tasks/:id
exports.getTaskById = async (req, res, next) => {
 try{const task= await Task.findById(req.params.id);
  if(!task) return res.json(404).json({message: 'Task not found'});
  res.status(200).json(task);   

 }
 catch(err) {
    next(err);
  }


};
// DELETE /tasks/:id
exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    next(err);
  }
};