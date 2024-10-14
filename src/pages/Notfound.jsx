import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="container-fluid bg-light py-5" style={{minHeight: '100vh'}}>
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-md-8 text-center">
                    <div className="bg-white p-5 rounded shadow-lg">
                        <h1 className="display-1 text-danger mb-4">404</h1>
                        <h2 className="display-4 text-secondary mb-3">Oops! Page Not Found</h2>
                        <p className="lead mb-4">
                            The page you are looking for might have been removed, 
                            had its name changed, or is temporarily unavailable.
                        </p>
                        <div className="mb-4">
                            <i className="bi bi-emoji-frown display-1 text-muted"></i>
                        </div>
                        <Link className="btn btn-primary btn-lg px-4" to="/">
                            <i className="bi bi-house-door me-2"></i>
                            Return Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

