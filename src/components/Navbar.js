import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

// Styles & images
import './Navbar.css';
import Temple from '../assets/temple.svg';

export default function Navbar() {

    const { logout, isPending } = useLogout();

    return (
        <div className="navbar">
            <ul>
                <li className="logo">
                    <img src={Temple} alt="Logo" />
                    <span>Project Management App</span>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Register</Link>
                </li>
                <li>
                    {!isPending && <button className="btn" onClick={logout}>Logout</button>}
                    {isPending && <button className="btn" disabled>Signing out...</button>}
                </li>
            </ul>
        </div>
    )
}