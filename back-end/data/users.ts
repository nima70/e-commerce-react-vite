// data/users.ts
import bcrypt from "bcrypt";
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("❌ JWT_SECRET is not defined in environment variables.");
}

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync(JWT_SECRET, 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@email.com",
    password: bcrypt.hashSync(JWT_SECRET, 10),
    isAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "jane@email.com",
    password: bcrypt.hashSync(JWT_SECRET, 10),
    isAdmin: false,
  },
];

export default users;
