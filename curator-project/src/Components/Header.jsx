
import '../styling/Header.css'; 
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
    const location = useLocation();

    return (
        <nav className="header">
            <div className="header-brand">
                <Link to="/">Museum Curator</Link>
            </div>
            <ul className="header-links">
                <li>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                </li>
                <li>
                    <Link to="/exhibition" className={location.pathname === '/exhibition' ? 'active' : ''}>Exhibitions</Link>
                </li>
                <li>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;