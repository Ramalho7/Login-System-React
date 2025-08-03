import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormInput from './FormInput';

const schemas = {
  login: z.object({
    email: z.string().email({ message: "Digite um e-mail válido." }),
    password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres." }),
  }),
  register: z.object({
    username: z.string().min(6, { message: "O username precisa possuir pelo menos 6 caracteres" }),
    email: z.string().email({ message: "Digite um e-mail válido." }),
    password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres." }),
  }),
};

const Form = ({ onSubmit, mode = 'login' }) => {
  const schema = schemas[mode];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-sm">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              {mode === 'login' ? 'Login' : 'Cadastro'}
            </h2>
          </div>

          {mode === 'register' && (
            <FormInput
              label="Username"
              type="text"
              name="username"
              placeholder="Digite seu username"
              register={register}
              error={errors.username}
            />
          )}

          <FormInput
            label="E-mail"
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            register={register}
            error={errors.email}
          />

          <FormInput
            label="Senha"
            type="password"
            name="password"
            placeholder="Digite sua senha"
            register={register}
            error={errors.password}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 mt-2"
          >
            {mode === 'login' ? 'Entrar' : 'Registrar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;