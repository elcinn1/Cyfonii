import React, { useEffect } from 'react'
import about1 from '../assets/img/about-06.png'
import stats from '../assets/img/couter.png'
import { Link } from 'react-router-dom'
import Portfolio from '../components/Portfolio'
import Brands from '../components/Brands'
import Aos from 'aos'
import '../assets/css/aboutDetails.css'
import "aos/dist/aos.css";
import { useMode } from '../context/ModeContext'
import PageTitles from '../components/PageTitles'

const AboutDetails = () => {
  useEffect(() => {
    Aos.init({
      once: false
    });
  }, []);
  return (
    <>
      <section className="aboutDetails my-5">
        <PageTitles />
        <div className="container my-5">
          <div className="row">
            <div className="col-xl-12 col-md-12 ">
              <div className="about-txt text-center">
                <h6><span>About us</span></h6>
                <h3>Hight Quality NFT <br /> Collections</h3>
                <div data-aos="fade-up" data-aos-duration="3000">
                  <img src={about1} alt="" />
                </div>
                <p>Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occae cat cupidatat non proident, sunt in
                  <br /> culpa qui officia dese runt mollit anim id est laborum
                  velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
              </div>
            </div>
          </div>
        </div>
        <Brands />
      </section>
      <section className="stats mb-5">
        <div className='container'>
          <div className="stats-body ">
            <div className="row w-75 d-flex">
              <div className="col-md-12 col-xl-3 d-flex flex-column justify-content-center align-items-center">
                <div className="icons my-3">
                  <i className="fa-solid fa-users"></i>
                </div>
                <h4>100K</h4>
                <p>Registered User</p>
              </div>
              <div className="col-md-12 col-xl-3  d-flex flex-column justify-content-center align-items-center">
                <div className="icons my-3">
                  <i className="fa-solid fa-images"></i>
                </div>
                <h4>5M</h4>
                <p>Total Assets</p>
              </div>
              <div className="col-md-12 col-xl-3  d-flex flex-column justify-content-center align-items-center">
                <div className="icons my-3">
                  <i className="fa-solid fa-chart-pie" />
                </div>
                <h4>10B</h4>
                <p>Yearly Trading</p>
              </div>
            </div>
            <div className="img">
              <img src={stats} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Portfolio />
    </>
  )
}

export default AboutDetails