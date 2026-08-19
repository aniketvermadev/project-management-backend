import Project from "../models/project.model.js";

export const createProject = async (req, res) => {
  try {
    const { title, description, createdBy, assignedDevelopers, status, deadline } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Name and description are required",
      });
    }

    const project = await Project.create({
      title,
      description,
      createdBy,
      assignedDevelopers,
      status,
      deadline
    });

    return res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getProjects = async (_req, res) => {
  try {
    const projects = await Project.find().populate("createdBy", "name email").populate("assignedDevelopers", "name email");

    return res.status(200).json({
      message: "Projects fetched successfully",
      projects,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findById(id).populate("createdBy", "name email").populate("assignedDevelopers", "name email");

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    return res.status(200).json({
      message: "Project fetched successfully",
      project,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, assignedDevelopers, status, deadline } = req.body;

    const project = await Project.findByIdAndUpdate(
      id,
      { title, description, assignedDevelopers, status, deadline },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    return res.status(200).json({
      message: "Project updated successfully",
      project,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    return res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};