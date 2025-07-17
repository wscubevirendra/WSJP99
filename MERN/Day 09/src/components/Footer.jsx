import React from "react";
const Footer = () => (
    <footer className="bg-dark text-light pt-5 pb-4 mt-auto">
        <div className="container">
            {/* Top grid */}
            <div className="row gy-4">
                {/* Brand + tagline */}
                <div className="col-12 col-md-4">
                    <a href="#" className="d-flex align-items-center mb-3 text-decoration-none text-light">
                        <img src="/logo.svg" alt="Logo" width="50" height="50" className="me-3 rounded-circle border border-light" />
                        <span className="fs-3 fw-bold">Foodies Hub</span>
                    </a>
                    <p className="small text-muted fst-italic">Serving passion on every plate since 2020.</p>
                    {/* Social icons */}
                    <div className="d-flex gap-3 fs-4 mt-3">
                        <a href="https://facebook.com" className="text-light" aria-label="Facebook"><i className="bi bi-facebook" /></a>
                        <a href="https://instagram.com" className="text-light" aria-label="Instagram"><i className="bi bi-instagram" /></a>
                        <a href="https://twitter.com" className="text-light" aria-label="Twitter"><i className="bi bi-twitter-x" /></a>
                        <a href="mailto:hello@foodieshub.com" className="text-light" aria-label="Email"><i className="bi bi-envelope" /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="col-6 col-md-2">
                    <h6 className="fw-semibold mb-3 text-uppercase">Links</h6>
                    <ul className="list-unstyled lh-lg small">
                        <li><a href="#" className="text-decoration-none text-light">Home</a></li>
                        <li><a href="#menu" className="text-decoration-none text-light">Menu</a></li>
                        <li><a href="#reservations" className="text-decoration-none text-light">Reservations</a></li>
                        <li><a href="#about" className="text-decoration-none text-light">About Us</a></li>
                        <li><a href="#contact" className="text-decoration-none text-light">Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="col-6 col-md-3">
                    <h6 className="fw-semibold mb-3 text-uppercase">Contact</h6>
                    <ul className="list-unstyled small lh-lg">
                        <li className="text-light"><i className="bi bi-geo-alt me-2" />123 Spice Street, Jaipur 302001</li>
                        <li><a href="tel:+911234567890" className="text-decoration-none text-light"><i className="bi bi-telephone me-2" />+91 12345 67890</a></li>
                        <li><a href="mailto:hello@foodieshub.com" className="text-decoration-none text-light"><i className="bi bi-envelope me-2" />hello@foodieshub.com</a></li>
                    </ul>
                </div>

                {/* Opening Hours */}
                <div className="col-12 col-md-3">
                    <h6 className="fw-semibold mb-3 text-uppercase">Hours</h6>
                    <table className="table table-borderless table-sm text-light small mb-0">
                        <tbody>
                            <tr><td>Mon – Fri</td><td className="text-end">11 am – 11 pm</td></tr>
                            <tr><td>Saturday</td><td className="text-end">10 am – 11:30 pm</td></tr>
                            <tr><td>Sunday</td><td className="text-end">10 am – 10 pm</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-secondary my-4" />

            {/* Copyright strip */}
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center small">
                <span className="text-muted">© {new Date().getFullYear()} <span className="fw-bold text-light">Foodies Hub</span>. All rights reserved.</span>
                <span className="text-muted mt-2 mt-sm-0">Made with <i className="bi bi-heart-fill text-danger" /> in Jaipur.</span>
            </div>
        </div>
    </footer>
);

export default Footer;