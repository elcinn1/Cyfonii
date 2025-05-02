import React from 'react'
import about1 from '../assets/img/about-01.png'
import about2 from '../assets/img/about-02.png'
import about3 from '../assets/img/about-03.png'
import about4 from '../assets/img/about-04.png'
import about5 from '../assets/img/about-05.png'
import { Link } from 'react-router-dom'
import '../assets/css/about.css'
const About = () => {
    return (
        <div>
            <section className="about">

                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="images d-flex justify-content-center align-items-center">
                                <div className="square1" />
                                <div><img className="img1" src={about1} alt /></div>
                                <div><img className="img2" src={about2} alt /></div>
                                <div><img className="img3" src={about3} alt /></div>
                                <div><img className="img4" src={about4} alt /></div>
                                <div><img className="img5" src={about5} alt /></div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12 d-flex align-items-center">
                            <div className="about-txt">
                                <h6><span>About us</span></h6>
                                <h3>Hight Quality NFT Collections</h3>
                                <p>Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for
                                    yourself</p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur...</p>
                                <Link to={"/about"} className="main-btn" >
                                    <span>More About Us</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About