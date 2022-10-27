const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [30, "name cannot be greater than 30 characters"],
  },
  completed: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
