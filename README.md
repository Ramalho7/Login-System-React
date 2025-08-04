# Sistema de Autenticação React com JWT

Um aplicativo web full-stack completo demonstrando um sistema de autenticação seguro utilizando React, Express e JSON Web Tokens (JWT).

![Badge de Versão](https://img.shields.io/badge/versão-1.0.0-green)

## 📋 Índice

- [Sistema de Autenticação React com JWT](#sistema-de-autenticação-react-com-jwt)
  - [📋 Índice](#-índice)
  - [📄 Visão Geral](#-visão-geral)
  - [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [✨ Recursos do Projeto](#-recursos-do-projeto)
  - [📁 Estrutura do Projeto](#-estrutura-do-projeto)
  - [⚙️ Configuração e Instalação](#️-configuração-e-instalação)
    - [Pré-requisitos](#pré-requisitos)
    - [Instalação](#instalação)
  - [🚀 Uso](#-uso)
  - [🔄 Fluxo de Autenticação](#-fluxo-de-autenticação)
  - [🔍 Implementação Técnica](#-implementação-técnica)
    - [JWT (JSON Web Token)](#jwt-json-web-token)
    - [Contexto de Autenticação](#contexto-de-autenticação)
    - [Proteção de Rotas](#proteção-de-rotas)
  - [🔒 Segurança](#-segurança)

## 📄 Visão Geral

Este projeto implementa um sistema completo de autenticação de usuários. Inclui funcionalidades de registro, login, rotas protegidas e gerenciamento de sessão baseado em tokens JWT.

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React** v19.1.0 - Biblioteca JavaScript para construção de interfaces
- **Vite** v7.0.4 - Ferramenta de build rápida
- **React Router DOM** v7.7.1 - Roteamento do lado do cliente
- **Tailwind CSS** v3.4.17 - Framework CSS para design responsivo
- **React Hook Form** v7.62.0 - Gerenciamento de formulários
- **Zod** v4.0.14 - Validação de esquemas
- **Axios** v1.11.0 - Cliente HTTP para requisições API

### Backend
- **Express** v5.1.0 - Framework web para Node.js
- **jsonwebtoken** v9.0.2 - Implementação de JWT
- **CORS** v2.8.5 - Middleware para habilitar requisições cross-origin

## ✨ Recursos do Projeto

- ✅ Registro de usuário
- ✅ Autenticação de usuário (login/logout)
- ✅ Rotas protegidas que requerem autenticação
- ✅ Validação de formulários
- ✅ Gerenciamento de estado de autenticação
- ✅ Armazenamento de token persistente
- ✅ Interface responsiva com Tailwind CSS

## 📁 Estrutura do Projeto

```
react-job/
├── backend/                # Servidor Express
│   ├── middleware/         # Middleware de autenticação JWT
│   └── routes/             # Rotas da API
├── public/                 # Arquivos estáticos
├── src/
│   ├── assets/             # Recursos estáticos
│   ├── components/         # Componentes reutilizáveis
│   ├── context/            # Contexto de autenticação React
│   ├── pages/              # Componentes de página
│   └── routes/             # Lógica de proteção de rotas
```

## ⚙️ Configuração e Instalação

### Pré-requisitos
- Node.js (versão 16+)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Ramalho7/Login-System-React.git
   cd Login-System-React
   ```

2. Instale as dependências do frontend:
   ```bash
   npm install
   ```

3. Instale as dependências do backend:
   ```bash
   cd backend
   npm install
   ```

## 🚀 Uso

1. Inicie o servidor backend (em um terminal):
   ```bash
   cd backend
   npm start
   ```

2. Inicie o frontend (em outro terminal):
   ```bash
   npm run dev
   ```

3. Acesse o aplicativo em seu navegador:
   ```
   http://localhost:5173
   ```

## 🔄 Fluxo de Autenticação

1. **Registro do Usuário**:
   - O usuário preenche o formulário de registro
   - Os dados são validados com Zod
   - As informações do usuário são armazenadas no localStorage

2. **Login**:
   - O usuário envia credenciais para o endpoint `/auth/login`
   - O backend verifica as credenciais
   - Um token JWT é gerado e retornado ao cliente
   - O token é armazenado no localStorage

3. **Acesso a Rotas Protegidas**:
   - O componente `PrivateRoute` verifica a existência de um token válido
   - Se não houver token, redireciona para a página de login
   - Se houver token, o usuário pode acessar a rota protegida

4. **Logout**:
   - O token é removido do localStorage
   - O estado de autenticação é atualizado
   - O usuário é redirecionado para a página de login

## 🔍 Implementação Técnica

### JWT (JSON Web Token)
- Gerado no servidor usando o pacote `jsonwebtoken`
- Contém dados do usuário no payload
- Configurado com expiração de 12 horas
- Verificado pelo middleware de autenticação

### Contexto de Autenticação
- Fornece:
  - Estado do token
  - Função de login
  - Função de logout
  - Estado de carregamento

### Proteção de Rotas
- Componente `PrivateRoute` envolve rotas que requerem autenticação
- Verifica token antes de renderizar o componente protegido

## 🔒 Segurança

- Tokens JWT para autenticação sem estado
- Expiração de token configurada
- Validação de dados de entrada com Zod
- Middleware de autenticação para verificação de token

---
