import { useEffect, useState } from "react"
import axios from "axios"
import { useAuth } from "../context/AuthContext"

export default function Dashboard() {
    const { token, logout } = useAuth()
    const [data, setData] = useState(null)
    const [userName, setUserName] = useState("")

    useEffect(() => {
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]))
                setUserName(payload.name || "Usuário")
            } catch (error) {
                setUserName("Usuário")
            }
        }
    }, [token])

    useEffect(() => {
        if (token) {
            console.log("Token sendo enviado:", token);
            axios
                .get("http://localhost:3000/dashboard", {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => setData(res.data))
                .catch((err) => console.error("Erro na requisição:", err));
        }
    }, [token]);

    if (!token) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                <span className="ml-2 text-gray-600">Carregando...</span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow rounded-lg mb-6">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                        <button
                            onClick={logout}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200 ease-in-out flex items-center"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Sair
                        </button>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg mb-6">
                    <div className="px-6 py-4">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">Bem-vindo!</h2>
                        <p className="text-gray-600">Bem vindo de volta, {userName}!</p>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Dados do Servidor</h3>
                    </div>
                    <div className="px-6 py-4">
                        {data ? (
                            <div className="bg-gray-50 rounded-md p-4">
                                <pre className="text-sm text-gray-700 whitespace-pre-wrap overflow-x-auto">
                                    {JSON.stringify(data, null, 2)}
                                </pre>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center py-8">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                                <span className="ml-2 text-gray-600">Carregando dados...</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}