import { Link } from 'react-router-dom';

export default function NavBar({ children }) {
    return (
        <>
            <nav className="navbar">
                <Link to="/explore" className="nav-link">
                    <img src="/icons/icon.png" alt="Explore" className="logo-icon" />
                </Link>

                <div className="search-bar">
                    <img src="/icons/search.png" alt="Search Icon" className="search-icon" />
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="nav-search" 
                    />
                </div>
                
                <Link to="/create" className="nav-link">
                    <img src="/icons/create.png" alt="Create" className="create-icon" />
                </Link>
                <Link to="/home" className="nav-link">
                    <img src="/icons/user.png" alt="Home" className="home-icon" />
                </Link>
            </nav>
            <div>
                {children}
            </div>
        </>
    );
}