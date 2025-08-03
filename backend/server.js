import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import authMiddleware from "./middleware/authMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Bem-vindo ao dashboard!",
    user: req.user, 
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});