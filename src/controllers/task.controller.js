import Task from "../models/task.model.js";
import Project from "../models/project.model.js";
import User from "../models/user.model.js";

// Create Task
export const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      project,
      assignedTo,
      status,
      priority,
      deadline,
    } = req.body;

    // Check whether project exists
    const existingProject = await Project.findById(project);

    if (!existingProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Check whether assigned user exists
    const developer = await User.findById(assignedTo);

    if (!developer) {
      return res.status(404).json({
        success: false,
        message: "Developer not found",
      });
    }

    // Make sure only developer can be assigned
    if (developer.role !== "developer") {
      return res.status(400).json({
        success: false,
        message: "Task can only be assigned to a developer",
      });
    }

    // Make sure developer is assigned to the project
    const isDeveloperAssigned =
      existingProject.assignedDevelopers.some(
        (developerId) => developerId.toString() === assignedTo
      );

    if (!isDeveloperAssigned) {
      return res.status(400).json({
        success: false,
        message: "Developer is not assigned to this project",
      });
    }

    const task = await Task.create({
      title,
      description,
      project,
      assignedTo,
      status,
      priority,
      deadline,
    });

    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create task",
      error: error.message,
    });
  }
};

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("project", "title")
      .populate("assignedTo", "name email");

    return res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch tasks",
      error: error.message,
    });
  }
};

// Get task by ID
export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id)
      .populate("project", "title")
      .populate("assignedTo", "name email");

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      task,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch task",
      error: error.message,
    });
  }
};

// Update task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update task",
      error: error.message,
    });
  }
};

// Delete task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete task",
      error: error.message,
    });
  }
};
