import { Request, Response, Router } from "express";
import {
  authUser,
  getUsers,
  logoutUser,
  getUserById,
  updateUser,
  registerUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/user.controller";
import { protect, admin } from "../middleware/authmiddleware";
const route = Router();

route.route("/").get(protect, admin, getUsers).post(registerUser);

route.post("/auth", authUser);
route.post("/logout", logoutUser);

route
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

route
  .route("/:id")
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser);

export default route;
