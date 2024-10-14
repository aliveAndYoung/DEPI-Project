import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../App";

const Navbar = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    return (
        <nav
            className={`navbar navbar-expand-lg p-3 ${
                darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
            }`}
        >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    MovieApp
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">
                                Movies
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tvseries">
                                TV Series
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/trending">
                                Trending
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/upcoming">
                                Upcoming
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/toprated">
                                Top Rated
                            </Link>
                        </li>
                    </ul>
                    <button
                        className="btn rounded-circle "
                        onClick={() => setDarkMode(!darkMode)}
                        aria-label={
                            darkMode
                                ? "Switch to Light Mode btn-dark"
                                : "Switch to Dark Mode btn-light"
                        }
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
