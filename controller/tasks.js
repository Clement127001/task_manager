const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getTasksWithId = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    //helps to handle the null task, if no task is found
    if (!task) {
      return res.status(404).json({ msg: `no task found with id : ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (err) {
    //helps to catch error if the id structure wasn't maintained
    res.status(500).json({ msg: err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.send(500).json({ msg: err });
  }
};

const updateTask = (req, res) => {
  res.status(200).send(`update the tasks with id ${req.params.id}`);
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task)
      return res.status(404).json({ msg: `no task found with id : ${taskID}` });

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTasksWithId,
  updateTask,
  deleteTask,
};
