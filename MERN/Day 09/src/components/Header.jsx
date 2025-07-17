import React from "react";
import { Link } from "react-router-dom";
const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
            <div className="container">
                {/* Logo / Brand */}
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src="https://static.vecteezy.com/system/resources/previews/052/792/818/non_2x/restaurant-logo-design-vector.jpg" alt="Restaurant Logo" width="40" height="40" className="me-2" />
                    <span className="fw-bold fs-4">Foodies Hub</span>
                </a>

                {/* Hamburger icon */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                {/* Collapsible content */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-2">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>

                    {/* Cart + CTA */}
                    <div className="d-flex align-items-lg-center gap-2 ms-lg-3 mt-3 mt-lg-0">

                        <a className="btn btn-primary fw-semibold" href="#book-table">
                            Book a Table
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;
