import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faSignInAlt, faUserPlus, faCode, faPhone, faTools, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto p-4">
        <div className="hidden md:grid md:grid-cols-3 md:items-center">
          <div className="justify-self-start">
            <Link to="/" className="hover:text-teal-200 transition-colors flex items-center gap-2">
              <FontAwesomeIcon icon={faCode} className="text-xl" />Home
            </Link>
          </div>

          <div className="justify-self-center flex items-center gap-4">
            <Link to="/about" className="hover:text-teal-200 transition-colors flex items-center gap-2">
              <FontAwesomeIcon icon={faInfoCircle} />
              Sobre
            </Link>
            <Link to="/contact" className="hover:text-teal-200 transition-colors flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} />
              Contato
            </Link>
            <Link to="/services" className="hover:text-teal-200 transition-colors flex items-center gap-2">
              <FontAwesomeIcon icon={faTools} />
              Serviços
            </Link>
          </div>

          <div className="justify-self-end flex items-center gap-4">
            <Link to="/login" className="hover:text-teal-200 transition-colors flex items-center gap-2">
              <FontAwesomeIcon icon={faSignInAlt} />
              Login
            </Link>
            <Link to="/register" className="hover:text-teal-200 transition-colors flex items-center gap-2">
              <FontAwesomeIcon icon={faUserPlus} />
              Registrar
            </Link>
          </div>
        </div>

        <div className="md:hidden flex justify-between items-center">
          <Link to="/" className="hover:text-teal-200 transition-colors flex items-center gap-2">
            <FontAwesomeIcon icon={faCode} className="text-xl" />Home
          </Link>
          
          <button
            onClick={toggleMenu}
            className="text-white hover:text-teal-200 transition-colors"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-xl" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 text-right">
            <Link 
              to="/about" 
              className="block py-2 hover:text-teal-200 transition-colors flex items-center gap-2 justify-end"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Sobre
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 hover:text-teal-200 transition-colors flex items-center gap-2 justify-end"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faPhone} />
              Contato
            </Link>
            <Link 
              to="/services" 
              className="block py-2 hover:text-teal-200 transition-colors flex items-center gap-2 justify-end"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faTools} />
              Serviços
            </Link>
            <Link 
              to="/login" 
              className="block py-2 hover:text-teal-200 transition-colors flex items-center gap-2 justify-end"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faSignInAlt} />
              Login
            </Link>
            <Link 
              to="/register" 
              className="block py-2 hover:text-teal-200 transition-colors flex items-center gap-2 justify-end"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faUserPlus} />
              Registrar
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;