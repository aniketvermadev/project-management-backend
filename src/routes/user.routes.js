import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import authorizeRoles from "../middleware/role.middleware.js";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post(
  "/create",
  authMiddleware,
  authorizeRoles("admin"),
  createUser
);

router.get(
  "/get-all",
  authMiddleware,
  authorizeRoles("admin"),
  getAllUsers
);

router.get(
  "/:id",
  authMiddleware,
  getUserById
);

router.put(
  "/:id",
  authMiddleware,
  updateUser
);

router.delete(
  "/:id",
  authMiddleware,
  deleteUser
);

export default router;