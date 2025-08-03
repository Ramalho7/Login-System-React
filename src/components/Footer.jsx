const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black w-full p-4">
      <div className="flex justify-center items-center space-x-4">
        <p>&copy; 2025 Projeto Login</p>
        <a
          href="https://github.com/Ramalho7/Login-System-React"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-6 h-6"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/lucasadramalho"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin text-blue-600 text-2xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;