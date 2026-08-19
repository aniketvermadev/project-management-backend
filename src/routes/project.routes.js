import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import authorizeRoles from "../middleware/role.middleware.js";
import { createProject, deleteProject, getProjectById, getProjects, updateProject } from "../controllers/project.controller.js";

const router = express.Router();

router.post("/create", authMiddleware, authorizeRoles("admin", "manager"), createProject);
router.get("/", authMiddleware, getProjects);
router.get("/:id", authMiddleware, getProjectById);
router.put("/:id", authMiddleware, authorizeRoles("admin", "manager"), updateProject);
router.delete("/:id", authMiddleware, authorizeRoles("admin", "manager"), deleteProject);

export default router;