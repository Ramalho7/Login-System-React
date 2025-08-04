import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

const SECRET = "chave-secreta-jwt";

router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "E-mail e senha são obrigatórios" });
    }

    const storedUserData = JSON.parse(req.headers["x-user-data"] || "[]");

    const user = storedUserData.find(
      (user) => user.email === email && user.password === password
    );
    console.log("Usuário encontrado:", user);

    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const token = jwt.sign({ name: user.name, email: user.email }, SECRET, { expiresIn: "10s" });

    res.json({ token });
  } catch (error) {
    console.error("Erro no backend:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
});

export default router;