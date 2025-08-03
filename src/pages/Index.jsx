const steps = [
  { text: "Criação da interface de login" },
  { text: "Implementação do backend para autenticação e geração do JWT" },
  { text: "Implementação dos routers no React" },
  { text: "Armazenamento seguro do JWT no frontend" },
  { text: "Proteção de rotas usando JWT" },
  { text: "Implementação de logout e expiração do token" },
];

const IndexPage = () => {
  return (
    <div className="flex items-center flex-col mb-6 mt-6">
      <h1 className="text-black-500 text-2xl font-bold mb-6">Sistema de login</h1>
      <p className="text-xl">Objetivo do projeto: realizar autenticação com React + JWT e react-router</p>
      <div className="steps container bg-gray-200 rounded-lg shadow-md flex flex-col mb-6 mt-6 p-6 text-center items-center">
        <h1 className="font-semibold mb-4 text-2xl text-black-600 flex items-center">
          <span className="mr-1">📝</span> Passos:</h1>
        <ul className="space-y-4">
          {steps.map((step, idx) => (
            <li key={idx} className="flex items-center text-lg">
              <span className="mr-2">{idx + 1}.</span>
              <span>{step.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndexPage;