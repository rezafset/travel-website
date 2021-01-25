import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/placeData';
import './TopPlace.css';

const TopPlace = () => {
    
    const [placeData, setPlaceData] = useState(fakeData);

    return (
        <div className="container pt-5" id="top-place" style={{ overflowX: 'hidden' }}>
            <h1 className="display-5 text-uppercase text-center">Top Places</h1>
            <div className="row py-3">

                {
                    placeData.map(place =>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
                            <div class="card shadow text-center">
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img
                                        src={place.img}
                                        class="img-fluid"
                                    />
                                    <Link href="#!">
                                        <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                    </Link>
                                </div>

                                <div class="card-body">
                                    <h5 class="card-title">{place.name}</h5>
                                    <p class="card-text">
                                        {place.text}
                                    </p>
                                    <Link to={"/placeDetails/"+ place.id} class="btn btn-primary">More Details</Link>
                                </div>
                            </div>
                        </div>

                    )
                }

            </div>
        </div>
    );
};

export default TopPlace;