import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact" className="pt-5">
            <div className="container">
                <h1 className="display-5 text-uppercase text-center">contact</h1>
                <div className="row pt-5">
                    <div className="col-md-6">
                        <h3 className="">Get In Touch</h3>
                        <div className="pt-4">
                            <p><i class="fas fa-map-marker-alt"></i> Post office goli Chawkbazar, Chattogram, Bangladesh</p>
                            <p><i class="fas fa-phone-alt"></i> +8801674957611</p>
                            <p><i class="far fa-envelope"></i> travelinfo@gmail.com</p>
                            <a href="#"><i class="fab fa-facebook-square me-2"></i></a>
                            <a href="#"><i class="fab fa-linkedin me-2"></i></a>
                            <a href="#"><i class="fab fa-twitter-square me-2"></i></a>
                            <a href="#"><i class="fab fa-google-plus-square"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 pt-4 pt-sm-4 pt-md-0 pt-lg-0 pt-xl-0 pt-xxl-0">
                        <h3 className="text-center">Contact Us</h3>
                        <form action="" className="pt-4">

                            <div class="mb-3">
                                <input type="text" placeholder="Enter Name" class="form-control" required />
                            </div>

                            <div class="mb-3">
                                <input type="email" placeholder="Enter Email" class="form-control" required />
                            </div>

                            <div class="mb-3">
                                <textarea class="form-control" placeholder="Enter Your message" rows="4" required></textarea>
                            </div>

                            <div class="form-check d-flex justify-content-center mb-3">
                                <input
                                    class="form-check-input me-2"
                                    type="checkbox"
                                    value=""
                                    id="form4Example4"
                                    checked
                                />
                                <label class="form-check-label" for="form4Example4">
                                    Send me a copy of this message
                                </label>
                            </div>

                            <div className="text-center">
                                <button type="submit" class="btn btn-primary w-75 mb-3">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;