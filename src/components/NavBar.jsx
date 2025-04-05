import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ children, searchTerm, setSearchTerm, onSearch }) {

    // triggers the search function when the user presses enter or the search button
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(event);
    }

    return (
        <>
            <nav className="navbar">
                {/* TODO : change back to /explore once account page is set up */}
                <Link to="/" className="nav-link">
                    <img src="/icons/icon.png" alt="Explore" className="logo-icon" />
                </Link>

                <div className="search-bar">
                    <form onSubmit={handleSubmit}>
                        <button type="submit" style={{ background: 'none', border: 'none'}}>
                            <img src="/icons/search.png" alt="Search Icon" className="search-icon" />
                        </button>
                        <input
                            type="text"
                            placeholder="Search"
                            className="nav-search"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                    </form>
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