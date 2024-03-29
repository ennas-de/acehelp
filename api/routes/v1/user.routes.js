import express from "express";
import {
  deleteUser,
  deleteUsers,
  getUser,
  getUsers,
  updateUser,
  getUsersWithSearch,
} from "../../controllers/user.controller.js";
import { isAdmin } from "../../middleware/authMiddleware.js";

const router = express.Router();

// individual routes
router.get("/", isAdmin, getUsers);
router.get("/", getUsersWithSearch);
router.get("/:userId", getUser);
router.patch("/:userId", updateUser);
router.delete("/", deleteUser);
router.delete("/", isAdmin, deleteUsers);

export default router;
