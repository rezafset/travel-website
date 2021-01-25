import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PopularPlace.css';
import popular1 from '../../resource/image/p1-poland.jpg';
import popular2 from '../../resource/image/p2-california.jpg';
import popular3 from '../../resource/image/p3-russia.jpg';
import popular4 from '../../resource/image/p4-portugal.jpg';
import popular5 from '../../resource/image/p5-greece.jpg';
import popular6 from '../../resource/image/p6-switzerland.jpg';
import popular7 from '../../resource/image/p7-norway.jpg';
import popular8 from '../../resource/image/p8-maldive.jpg';


const PopularPlace = () => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div id="popular-place" className="pt-5" style={{ overflowX: 'hidden' }}>
            <h1 className="display-5 text-uppercase text-center">Popular Place</h1>
            <div className=" py-3">
                <Slider {...settings}>
                    <div className="item">
                        <div class="bg-image">
                            <img
                                src={popular1}
                                class="img-fluid shadow-2-strong rounded"
                                alt="Sample"
                            />
                            <div class="mask">
                                <div class="d-flex justify-content-center align-items-center h-100">
                                    <h3 class="text-white mb-0">Warsaw Poland</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="item">
                        <div class="bg-image">
                            <img
                                src={popular2}
                                class="img-fluid shadow-2-strong rounded"
                                alt="Sample"
                            />
                            <div class="mask">
                                <div class="d-flex justify-content-center align-items-center h-100">
                                    <h3 class="text-white mb-0">California USA</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item ">
                        <div class="bg-image">
                            <img
                                src={popular3}
                                class="img-fluid shadow-2-strong rounded"
                                alt="Sample"
                            />
                            <div class="mask">
                                <div class="d-flex justify-content-center align-items-center h-100">
                                    <h3 class="text-white mb-0">Moscow Russia</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item ">
                        <div class="bg-image">
                            <img
                                src={popular4}
                                class="img-fluid shadow-2-strong rounded"
                                alt="Sample"
                            />
                            <div class="mask">
                                <div class="d-flex justify-content-center align-items-center h-100">
                                    <h3 class="text-white mb-0">Lisbon Portugal</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item ">
                        <div class="bg-image">
                            <img
                                src={popular5}
                                class="img-fluid shadow-2-strong rounded"
                                alt="Sample"
                            />
                            <div class="mask">
                                <div class="d-flex justify-content-center align-items-center h-100">
                                    <h3 class="text-white mb-0">Athens Greece</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item ">
                        <div class="bg-image">
                            <img
                                src={popular6}
                                class="img-fluid shadow-2-strong rounded"
                                alt="Sample"
                            />
                            <div class="mask">
                                <div class="d-flex justify-content-center align-items-center h-100">
                                    <h3 class="text-white mb-0">Bern Switzerland</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item ">
                        <div class="bg-image">
                            <img
                                src={popular7}
                                class="img-fluid shadow-2-strong rounded"
                                alt="Sample"
                            />
                            <div class="mask">
                                <div class="d-flex justify-content-center align-items-center h-100">
                                    <h3 class="text-white mb-0">Oslo Norway</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div class="bg-image">
                            <img
                                src={popular8}
                                class="img-fluid shadow-2-strong rounded"
                                alt="Sample"
                            />
                            <div class="mask">
                                <div class="d-flex justify-content-center align-items-center h-100">
                                    <h3 class="text-white mb-0">Malé Maldives</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default PopularPlace;