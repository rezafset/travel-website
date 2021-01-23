import React from 'react';
import './Slider.css';
import img1 from '../../resource/image/carousel.jpg';
import img2 from '../../resource/image/carousel1.jpg';
import img3 from '../../resource/image/carousel2.jpg';
import img4 from '../../resource/image/carousel3.jpg';

const Slider = () => {
    return (
        <div id="slider">
            <div
                id="carouselBasicExample"
                class="carousel slide carousel-fade"
                data-mdb-ride="carousel"
            >

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src={img1}
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block text-start">
                            <h1 className="display-4 text-capitalize fw-bold">Lorem ipsum </h1>
                            <h3 className="text-capitalize fw-bold">Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
                            <button type="button" class="btn btn-info fw-bold mt-3">Enjoy</button>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img
                            src={img2}
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block text-end">
                            <h1 className="display-4 text-capitalize fw-bold">Lorem ipsum </h1>
                            <h3 className="text-capitalize fw-bold">Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
                            <button type="button" class="btn btn-danger fw-bold mt-3">Enjoy</button>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img
                            src={img3}
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block text-center">
                            <h1 className="display-4 text-capitalize fw-bold">Lorem ipsum </h1>
                            <h3 className="text-capitalize fw-bold">Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
                            <button type="button" class="btn btn-success fw-bold mt-3">Enjoy</button>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img
                            src={img4}
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block text-start">
                            <h1 className="display-4 text-capitalize fw-bold">Lorem ipsum </h1>
                            <h3 className="text-capitalize fw-bold">Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
                            <button type="button" class="btn btn-dark mt-3 fw-bold">Enjoy</button>
                        </div>
                    </div>

                </div>

                <a
                    class="carousel-control-prev"
                    href="#carouselBasicExample"
                    role="button"
                    data-mdb-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a
                    class="carousel-control-next"
                    href="#carouselBasicExample"
                    role="button"
                    data-mdb-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Slider;