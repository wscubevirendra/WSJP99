import React from 'react';


const Contact = () => {
    return (
        <>
    
            <div className="container py-5">
                {/* Heading */}
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bold">Contact Us</h1>
                    <p className="lead text-muted">
                        Have a question, project idea, or just want to say hello? We’d love to hear from you.
                    </p>
                </div>

                {/* Contact Details + Form */}
                <div className="row g-5">
                    {/* Details */}
                    <div className="col-lg-5">
                        <div className="border rounded-4 p-4 h-100 shadow-sm">
                            <h3 className="mb-4">Get in touch</h3>

                            <ul className="list-unstyled mb-4">
                                <li className="mb-3 d-flex">
                                    <i className="bi bi-geo-alt-fill fs-4 me-3 text-primary"></i>
                                    <span>1234 Bootstrap Ave, Suite 500<br />New Delhi, IN 110001</span>
                                </li>
                                <li className="mb-3 d-flex">
                                    <i className="bi bi-telephone-fill fs-4 me-3 text-primary"></i>
                                    <span>+91 98765 43210</span>
                                </li>
                                <li className="d-flex">
                                    <i className="bi bi-envelope-fill fs-4 me-3 text-primary"></i>
                                    <span>hello@example.com</span>
                                </li>
                            </ul>

                            <h5 className="mb-3">Follow us</h5>
                            <div className="d-flex gap-3">
                                <a href="#" className="text-decoration-none fs-4 text-dark"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="text-decoration-none fs-4 text-dark"><i className="bi bi-twitter"></i></a>
                                <a href="#" className="text-decoration-none fs-4 text-dark"><i className="bi bi-linkedin"></i></a>
                                <a href="#" className="text-decoration-none fs-4 text-dark"><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="col-lg-7">
                        <form className="border rounded-4 p-4 shadow-sm">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Your name" />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <input type="text" className="form-control" id="subject" placeholder="How can we help you?" />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Write your message here"></textarea>
                                </div>

                                <div className="col-12 text-end">
                                    <button type="submit" className="btn btn-primary px-4">
                                        Send&nbsp;Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          
        </>

    );
};

export default Contact;
