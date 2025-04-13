import { Request, Response } from "express";
import { User } from "../entities/Users";
import { AppDataSource } from "../data-source";
import asyncHandler from "../middleware/asyncHandler";
import generateToken from "../utils/generateToken";
import bcrypt from "bcrypt";
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("❌ JWT_SECRET is not defined in environment variables.");
}

const productRepo = AppDataSource.getRepository(User);

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExist = await productRepo.findOneBy({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  } else {
    const userEntity = await productRepo.create({
      name,
      email,
      password,
    });
    const user = await productRepo.save(userEntity);
    if (user) {
      generateToken(res, user.id);
      res.json({
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin,
        name: user.name,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
});

// @desc    Auth user & get token
// @route   POST /users/auth
// @access  Public
const authUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await productRepo.findOneBy({ email });
  if (user && (await user.comparePassword(password))) {
    generateToken(res, user.id);
    res.json({
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
      name: user.name,
    });
  } else {
    res.status(401);
    throw new Error("Invalid User or Password");
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
  const user = await productRepo.findOneBy({ id: req.user.id });
  if (user) {
    res.send({
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
  const user = await productRepo.findOneBy({ id: req.user.id });

  if (user) {
    user.email = req.body.email || user.email;
    user.name = req.body.name || user.name;
    if (req.body.password) user.password = req.body.password;

    const updatedUser = await productRepo.save(user);
    res.send({
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
// @desc    Logout user / clear cookie
// @route   POST /users/logout
// @access  Public
const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "Logged out successfully" });
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await productRepo.find();
  res.json(users);
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await productRepo.findOneBy({ id });
  if (user) res.json(user);
  else {
    res.status(404);
    throw new Error("User not found");
  }
});
// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await productRepo.findOneBy({ id });
  if (user) {
    user.email = req.body.email;
    user.name = req.body.name;
    user.isAdmin = req.body.isAdmin;
    const updatedUser = await productRepo.save(user);
    res.json({
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await productRepo.findOneBy({ id });
  if (user) {
    if (user.isAdmin) {
      res.status(400);
      throw new Error("Can not delete admin user");
    }
    await productRepo.delete(id);
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  authUser,
  logoutUser,
  getUsers,
  getUserById,
  updateUser,
  registerUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
};
