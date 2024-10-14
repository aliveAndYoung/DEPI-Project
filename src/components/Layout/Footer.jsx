import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="nav-link">Home</Link></li>
                            <li><Link to="/movies" className="nav-link">Movies</Link></li>
                            <li><Link to="/tvseries" className="nav-link">TV Shows</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h5>Connect With Us</h5>
                    </div>
                </div>
                <hr className="my-4 bg-secondary" />
                <div className="row">
                    <div className="text-center">
                        <p className="mb-0">&copy; 2024 DEPI-MovieApp.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
