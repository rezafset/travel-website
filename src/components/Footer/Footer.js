import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div id="footer" className="mt-5 bg-dark text-light" style={{ overflowX: 'hidden' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center py-3">
                        <p className="mb-0">Copyright © 2021 | Design with <i class="fas fa-heart"></i> by Reza</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;