import React from 'react';
// import img1 from '../../resource/image/carousel1.jpg';
import img1 from '../../resource/image/slider1.jpg';
import img2 from '../../resource/image/slider2.jpg';
import img3 from '../../resource/image/slider3.jpg';

const Slider = () => {
    return (
        <div id="slider">
            <div
                id="carouselBasicExample"
                class="carousel slide carousel-fade"
                data-mdb-ride="carousel"
            >
                <ol class="carousel-indicators">
                    <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="0" class="active"></li>
                    <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1"></li>
                    <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src={img1}
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img
                            src={img2}
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img
                            src={img3}
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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