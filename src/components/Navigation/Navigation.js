import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div id="navigation" className="sticky-top">
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
                <div class="container">
                    <Link to="/" class="navbar-brand text-uppercase text-light" href="#">Travel</Link>
                    <button
                        class="navbar-toggler text-light"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse  text-center" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link text-uppercase text-light me-lg-2 me-xl-2 me-xxl-2 me-md-0" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-uppercase text-light me-lg-2 me-xl-2 me-xxl-2 me-md-0" href="#top-place">Top Place</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-uppercase text-light me-lg-2 me-xl-2 me-xxl-2 me-md-0" href="#discount">Discount</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-uppercase text-light me-lg-2 me-xl-2 me-xxl-2 me-md-0" href="#packages">Packages</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-uppercase text-light me-lg-2 me-xl-2 me-xxl-2 me-md-0" href="#faq">Faq</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-uppercase text-light me-lg-2 me-xl-2 me-xxl-2 me-md-0" href="#contact">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link text-uppercase me-3" href="#">Contact Us</a> */}
                                <button type="button" class="btn btn-danger mt-1"><span className="text-uppercase fw-bold">Log in</span></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;