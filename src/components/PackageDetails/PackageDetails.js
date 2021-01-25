import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "./PackageDetails.css";
import packageData from '../../fakeData/packageData';

const PackageDetails = () => {
    const { packageId } = useParams();
    const packageCountry = packageData.find(packageCountry => packageCountry.id == packageId);
    return (
        <div id="package-details" className="pt-3" style={{ overflowX: 'hidden' }}>
            <h2 className="text-center display-5">Stay in {packageCountry.country}</h2>
            <div className="container pt-4">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <img src={packageCountry.imgP1} className="img-fluid shadow-2-strong rounded h-100 w-100" alt="" />
                            </div>

                            <div className="col-lg-6 col-12">
                                <h4 className="mt-md-3 mt-sm-3 mt-3 mt-lg-0 mt-xl-0 mt-xxl-0">{packageCountry.apartmentOne}</h4>
                                <div>
                                    <h6 className="mb-0">Facilities:</h6>
                                    <small className="mb-0">{packageCountry.facilityOne}</small> <br />
                                    <small className="mb-0">{packageCountry.facilityTwo}</small> <br />
                                    <small className="mb-0">{packageCountry.facilityThree}</small> <br />
                                    <small className="mb-0">{packageCountry.facilityFour}</small> <br />
                                    <small className="mb-0 pt-1"><i class="fas fa-star"></i> {packageCountry.reviewOne}</small>
                                </div>
                            </div>
                        </div>
                        <div className="booking-btn">
                            <Link className="btn btn-info fw-bold  mt-3 ">Booking</Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 pt-md-4 pt-sm-4 pt-4 pt-lg-0 pt-xl-0 pt-xxl-0">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <img src={packageCountry.imgP2} className="img-fluid shadow-2-strong rounded h-100 w-100" alt="" />
                            </div>

                            <div className="col-lg-6 col-12">
                                <h4 className="mt-md-3 mt-sm-3 mt-3 mt-lg-0 mt-xl-0 mt-xxl-0">{packageCountry.apartmentTwo}</h4>
                                <div>
                                    <h6 className="mb-0">Facilities:</h6>
                                    <small className="mb-0">{packageCountry.facilityOne}</small> <br />
                                    <small className="mb-0">{packageCountry.facilityTwo}</small> <br />
                                    <small className="mb-0">{packageCountry.facilityThree}</small> <br />
                                    <small className="mb-0">{packageCountry.facilityFour}</small> <br />
                                    <small className="mb-0 pt-1"><i class="fas fa-star"></i> {packageCountry.reviewOne}</small>
                                </div>
                            </div>
                        </div>
                        <div className="booking-btn">
                            <Link className="btn btn-info fw-bold mt-3 ">Booking</Link>
                        </div>
                    </div>

                </div>
                <div className="row pt-4">
                    <div className="col-lg-6 col-12">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <img src={packageCountry.imgP3} className="img-fluid h-100 w-100 shadow-2-strong rounded" alt="" />
                            </div>

                            <div className="col-lg-6 col-12">
                                <h4 className="mt-md-3 mt-sm-3 mt-3 mt-lg-0 mt-xl-0 mt-xxl-0">{packageCountry.apartmentThree}</h4>
                                <div>
                                    <h6 className="mb-0">Facilities:</h6>
                                    <small className="mb-0">{packageCountry.facilityOne}</small> <br />
                                    <small className="mb-0">{packageCountry.facilityTwo}</small> <br />
                                    <small className="mb-0">{packageCountry.facilityThree}</small> <br />
                                    <small className="mb-0">{packageCountry.facilityFour}</small> <br />
                                    <small className="mb-0 pt-1"><i class="fas fa-star"></i> {packageCountry.reviewOne}</small>
                                </div>
                            </div>
                        </div>
                        <div className="booking-btn">
                            <Link className="btn btn-info fw-bold  mt-3 ">Booking</Link>
                        </div>
                    </div>
                </div>
                <div className="text-center py-3">
                    <Link to="/" type="button" className="btn btn-danger mt-4">Go Back Home</Link>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;
