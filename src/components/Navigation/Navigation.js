import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <div id="navigation" className="sticky-top" style={{ overflowX: 'hidden'}}>
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
                                <HashLink smooth to="#" class="nav-link text-uppercase text-light me-lg-1 me-xl-1 me-xxl-1 me-md-0" aria-current="page">Home</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink smooth to="#top-place" class="nav-link text-uppercase text-light me-lg-1 me-xl-1 me-xxl-1 me-md-0">Top Place</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink smooth to="#popular-place" class="nav-link text-uppercase text-light me-lg-1 me-xl-1 me-xxl-1 me-md-0">Popular Place</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink smooth to="#discount" class="nav-link text-uppercase text-light me-lg-1 me-xl-1 me-xxl-1 me-md-0" >Discount</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink smooth to="#packages" class="nav-link text-uppercase text-light me-lg-1 me-xl-1 me-xxl-1 me-md-0">Packages</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink  smooth to="#faq" class="nav-link text-uppercase text-light me-lg-1 me-xl-1 me-xxl-1 me-md-0">Faq</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink smooth to="#contact" class="nav-link text-uppercase text-light me-lg-1 me-xl-1 me-xxl-1 me-md-0" href="#contact">Contact Us</HashLink>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link text-uppercase me-3" href="#">Contact Us</a> */}
                                {/* <button type="button" class="btn btn-danger mt-2"><span className="text-uppercase fw-bold">Log in</span></button> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;