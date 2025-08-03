import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

const SECRET = "chave-secreta-jwt";
const mockUser = {
  email: "admin@email.com",
  password: "123456",
  name: "Admin"
};

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== mockUser.email || password !== mockUser.password) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }

  const token = jwt.sign({ name: mockUser.name, email: mockUser.email }, SECRET, { expiresIn: "12h" });

  res.json({ token });
});

export default router;