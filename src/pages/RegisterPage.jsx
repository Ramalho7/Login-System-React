import React from 'react';
import Form from '../components/Form';

const RegisterPage = () => {
    const handleRegisterSubmit = (data) => {
        let storedUserData = localStorage.getItem('userData');

        if (!storedUserData) {
            storedUserData = [];
        } else {
            try {
                storedUserData = JSON.parse(storedUserData);
                if (!Array.isArray(storedUserData)) {
                    storedUserData = [];
                }
            } catch (error) {
                console.error("Erro ao ler os dados de 'userData' do localStorage:", error);
                storedUserData = [];
            }
        }

        const userExists = storedUserData.some(
            (user) => user.email === data.email || user.username === data.username
        );

        if (userExists) {
            alert("E-mail ou nome de usuário já estão em uso.");
            return;
        }

        storedUserData.push(data);

        localStorage.setItem('userData', JSON.stringify(storedUserData));

        console.log('Novo usuário cadastrado:', data);
        alert("Usuário cadastrado com sucesso!");
    }

    return (
        <div className="register-page">
            <Form onSubmit={handleRegisterSubmit} mode="register" />
        </div>
    );
};

export default RegisterPage;
    