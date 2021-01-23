import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import packageData from '../../fakeData/packageData';
import './Package.css';

const Package = () => {
    
    const [packageDetails, setPackageDetails] = useState(packageData)

    return (
        <div id="packages" className="pt-5">
            <div className="container">
                <h1 className="display-5 text-uppercase text-center">Packages</h1>
                <div className="row">

                    {
                        packageDetails.map(packageInfo =>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-4">
                                <div className="card shadow">
                                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img
                                            src={packageInfo.image}
                                            className="img-fluid"
                                        />
                                        <Link href="#!">
                                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Weekdays in {packageInfo.country} </h5>
                                        <h6>{packageInfo.city}, {packageInfo.country}</h6>
                                        <div className="d-flex flex-row justify-content-between pt-2">
                                            <small><i className="fas fa-calendar-day"></i> No Of Days: {packageInfo.day}</small>
                                            <small><i className="far fa-user"></i> Person: {packageInfo.person}</small>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between pt-1">
                                            <small><i className="fas fa-person-booth"></i> Bedrooms: {packageInfo.bedroom}</small>
                                            <small><i className="fas fa-sink"></i> Bathrooms: {packageInfo.bathroom}</small>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <h4 className="text-info fw-bold">${packageInfo.price} </h4>
                                            <Link to={"/packageDetails/" + packageInfo.id} className="btn btn-primary fw-bold">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Package;