const getAllTasks = (req, res) => {
  res.send("All Tasks item");
};

const getTasksWithId = (req, res) => {
  res.status(200).json({ sucess: true, id: req.params.id });
};

const createTask = (req, res) => {
  res.status(201).json({ sucess: true, data: req.body });
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
