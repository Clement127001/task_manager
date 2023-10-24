const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTasksWithId,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTasksWithId).patch(updateTask).delete(deleteTask);

module.exports = router;
