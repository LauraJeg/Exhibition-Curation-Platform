import { Link } from 'react-router-dom';
import '../styling/Header.css'; // Create a CSS file for styling

const Header = () => {
    return (
        <nav className="Header">
            <div className="Header-brand">
                <Link to="/">Museum Curator</Link>
            </div>
            <ul className="Header-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/exhibitions">YOUR Exhibition</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;