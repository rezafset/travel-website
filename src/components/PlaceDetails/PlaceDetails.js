import React from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/placeData';
import './PlaceDetails.css';

const PlaceDetails = () => {
    const { placeId } = useParams();
    const place = fakeData.find(place => place.id == placeId);
    return (
        <div id="place-details" className="container py-3">
            <div className="row">
                <div className="col-sm-8 col-12">
                    <img src={place.img} className="img-fluid shadow-2-strong rounded" alt=""/>
                    <h2 className="display-6 pt-3">{place.name}</h2>
                    <p>{place.description}</p>
                    <Link to="/" type="button" className="btn btn-success">Go Back Home</Link>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;