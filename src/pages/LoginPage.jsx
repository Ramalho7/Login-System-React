import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem("userData")) || [];
    console.log("Dados do localStorage:", storedUserData);

    try {
      const res = await axios.post(
        "http://localhost:3000/auth/login",
        { email, password }, 
        {
          headers: {
            "x-user-data": JSON.stringify(storedUserData), 
          },
        }
      );

      login(res.data.token);
      navigate("/dashboard"); 
    } catch (err) {
      console.error("Erro no login:", err.response?.data || err.message);
      alert("Erro no login: " + (err.response?.data?.message || "Tente novamente"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}