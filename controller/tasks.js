const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async-wrapper");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTasksWithId = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  //helps to handle the null task, if no task is found
  if (!task) {
    return res.status(404).json({ msg: `no task found with id : ${taskID}` });
  }

  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task)
    return res.status(404).json({ msg: `No task found with id : ${taskID}` });

  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task)
    return res.status(404).json({ msg: `no task found with id : ${taskID}` });

  res.status(200).json({ task });
});

//the alternate way for building the response
//res.status(200).json({sucess:true,tasks})
//res.status(200).json({status:"sucess",data:{tasks,nbHits:tasks.length}})

module.exports = {
  getAllTasks,
  createTask,
  getTasksWithId,
  updateTask,
  deleteTask,
};
