import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faSignInAlt, faUserPlus, faCode } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto p-4">
        <ul className="flex justify-between items-center">
          <li>
            <Link to="/" className="hover:text-teal-200 transition-colors flex items-center gap-2">
            <FontAwesomeIcon icon={faCode} className="text-xl" />Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-teal-200 transition-colors flex items-center gap-2">
            <FontAwesomeIcon icon={faInfoCircle} />
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-teal-200 transition-colors flex items-center gap-2">
            <FontAwesomeIcon icon={faSignInAlt} />
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="hover:text-teal-200 transition-colors flex items-center gap-2">
            <FontAwesomeIcon icon={faUserPlus} />
            Registrar
          </Link>
        </li>
      </ul>
    </nav>
    </header >
  );
};

export default Header;