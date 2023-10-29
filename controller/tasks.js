const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getTasksWithId = (req, res) => {
  res.status(200).json({ sucess: true, id: req.params.id });
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

const deleteTask = (req, res) => {
  res.status(200).send(`Deleted the tasks with id ${req.params.id}`);
};

module.exports = {
  getAllTasks,
  createTask,
  getTasksWithId,
  updateTask,
  deleteTask,
};
