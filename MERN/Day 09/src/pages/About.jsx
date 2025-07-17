import React from 'react';


const About = () => {
    return (
        <>
       
            <div className="container py-5">
                {/* Page Heading */}
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold">About Us</h1>
                    <p className="lead text-muted">Learn more about our journey, mission, and values.</p>
                </div>

                {/* About Section */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-6">
                        <img
                            src="https://via.placeholder.com/500x300"
                            alt="Our Team"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2>Who We Are</h2>
                        <p>
                            We are a passionate team of developers, designers, and thinkers who are dedicated to delivering
                            high-quality digital experiences. With years of experience in the industry, we strive to innovate
                            and exceed expectations in every project we undertake.
                        </p>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="row align-items-center">
                    <div className="col-md-6 order-md-2">
                        <img
                            src="https://via.placeholder.com/500x300"
                            alt="Our Mission"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-md-6 order-md-1">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to empower individuals and businesses through innovative technology solutions.
                            We aim to bridge the gap between ideas and reality by crafting modern, efficient, and user-friendly
                            applications.
                        </p>
                    </div>
                </div>
            </div>
    

        </>

    );
};

export default About;
