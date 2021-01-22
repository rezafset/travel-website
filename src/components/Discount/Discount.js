import React from 'react';
import './Discount.css';

const Discount = () => {
    return (
        <div id="discount" className="pt-5">
            <h1 className="display-5 text-uppercase text-center">Discount Offer</h1>
            <div className="overlay mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 pt-5 mt-5">
                            <h4 className="text-light fw-bold">900 $ for person - 5 nights</h4>
                            <h1 className="text-light fw-bold">Discount <span className="text-info">20-30%</span> Off</h1>
                            <p className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus eius itaque neque quisquam incidunt doloremque hic debitis sunt perferendis maiores, dignissimos odit dolorum beatae quas molestias praesentium natus explicabo.</p>
                            <button type="button" class="btn btn-warning text-dark fw-bold">Happy Tour</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;