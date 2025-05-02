import React from 'react'
import s1_img from '../assets/img/download (1).png'
import banner1 from '../assets/img/banner1.png'
import ethLogo from '../assets/img/download (2).png'
import profilP from '../assets/img/avt-01.png'
import About from '../components/About'
import Speciality from '../components/Speciality'
import Portfolio from '../components/Portfolio'
import Collection from '../components/Collection'
import Brands from '../components/Brands'
import FAQ from '../components/FAQ'
import Blog from '../components/Blog'
import '../assets/css/home.css'
import { useMode } from '../context/ModeContext'
const Home = () => {
    const [mode, toggleMode] = useMode();
    return (
        <div>
            <section className="home">
                <div className={`background-light ${mode}`} />
                <div className="container big">


                    <div className="row">
                        <div className="col-xl-6 col-md-12 col-12">
                            <div className="banner-left">
                                <h2 className="banner-txt">
                                    Collect Next
                                    <br />
                                    Generation <span className="s1">NFTs<span className="s1-img"><img src={s1_img} alt /></span></span>
                                    <br />
                                    Today
                                </h2>
                                <p className="banner-desc">
                                    Cyfonii is the premier marketplace for nifties, which are digital items you can truly own
                                    for yourself
                                </p>
                                <a className="main-btn" href>
                                    <span className="home-btn">Get Connected</span>
                                </a>
                            </div>
                            <div className="banner-bot">
                                <h6>
                                    We are Monteno NFT
                                </h6>
                                <div className="icons">
                                    <p>We accept:</p>
                                    <ul>
                                        <li>
                                            <span>
                                                <i className="fa-brands fa-ethereum" />
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-brands fa-btc" />
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="banner-right mx-3">
                                <div className="image d-flex justify-content-center align-items-center">
                                    <div className="square1" />
                                    <img src={banner1} alt />
                                    <div className="square2" />
                                </div>
                                <div className="price">
                                    <div className="img me-3">
                                        <img src={ethLogo} alt />
                                    </div>
                                    <div className="content">
                                        <span>Current Bid</span>
                                        <h5>2.26 ETH</h5>
                                    </div>
                                </div>
                                <div className="creater">
                                    <div className="img me-3">
                                        <img src={profilP} alt />
                                    </div>
                                    <div className="content">
                                        <h5>Leslie Alexander</h5>
                                        <span>@leslie754</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Speciality />
            <Portfolio />
            <Collection />
            <Blog />
            <Brands />
            <FAQ />
        </div>

    )
}

export default Home