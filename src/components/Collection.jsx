import React from 'react'
import Slider from 'react-slick';
import about5 from '../assets/img/about-05.png'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderData from '../data/sliderData';
import '../assets/css/collection.css';
const Collection = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <section className="collection my-5">
                <div className="container-fluid">
                    <div className="col-12 text-center">
                        <div className="collection-txt">
                            <h6><span>Collection
                            </span></h6>
                            <h3>OUR COLLECTION</h3>
                        </div>
                    </div>
                    <div className="col-12 ">
                        <div className="collection-slider gap-3">
                            <Slider {...settings} >
                                {sliderData.map((product, index) => (
                                    <div className='slide' key={index}>
                                        <div className='slide-box'>
                                            <div className='img'>
                                                <Link >
                                                    <img src={product.image} alt="" />
                                                </Link>
                                            </div>
                                            <div className='content'>
                                                <Link className='content-txt'>{product.title}</Link>
                                            </div>
                                        </div>
                                    </div>))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Collection