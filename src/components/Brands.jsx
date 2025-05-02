import React, { useEffect } from 'react'
import brand1 from '../assets/img/brand1.png'
import brand2 from '../assets/img/brand2.png'
import brand3 from '../assets/img/brand3.png'
import brand4 from '../assets/img/brand4.png'
import brand5 from '../assets/img/brand5.png'
import brand6 from '../assets/img/brand6.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos'
import '../assets/css/brands.css'
import "aos/dist/aos.css";


const Brands = () => {
  useEffect(() => {
    Aos.init({
      once: false
    });
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };
  return (
    <section className='brands'>
      <div data-aos="fade-up" data-aos-duration="2000" className='container text-center'>
        <h6 className="my-5"><span>We Are Partnered with Top Brands</span></h6>
        <div className='brands-img justify-content-center'>
          <Slider {...settings} >
            <div>
              <img src={brand1} alt="" />
            </div>
            <div>
              <img src={brand2} alt="" />
            </div>
            <div>
              <img src={brand3} alt="" />
            </div>
            <div>
              <img src={brand4} alt="" />
            </div>
            <div>
              <img src={brand5} alt="" />
            </div>
            <div>
              <img src={brand6} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Brands