const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskName: String,
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
