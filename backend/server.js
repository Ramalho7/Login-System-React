import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import authRoutes from "./routes/auth.js";
import authenticateToken from "./middleware/authMiddleware.js";

const app = express();
const SECRET = "chave-secreta-jwt";

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/dashboard", authenticateToken, (req, res) => {
  try {
    const storedUserData = JSON.parse(req.headers["x-user-data"] || "[]");

    const user = storedUserData.find((u) => u.email === req.user.email);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json({
      message: "Bem-vindo ao dashboard!",
      user: {
        username: user.username,
        email: user.email,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Erro no backend:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});