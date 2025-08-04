import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

function isTokenValid(token) {
  try {
    const { exp } = jwtDecode(token);
    return exp * 1000 > Date.now(); 
  } catch (error) {
    return false; 
  }
}

export default function PrivateRoute({ children }) {
  const { token, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-2 text-gray-600">Verificando autenticação...</span>
      </div>
    );
  }

  const isValid = token && isTokenValid(token);

  return isValid ? children : <Navigate to="/login" />;
}