import React, { useEffect } from 'react'
import '../assets/css/portfolio.css'
import icon1 from '../assets/img/icon-1.f92d6716453648917140d0982c1235c8.svg'
import icon2 from '../assets/img/icon-2.d14354eb7e60d2f3c8ea5cd46c8c5bdc.svg'
import icon3 from '../assets/img/icon-3.0f1a333637c772f2ac2dc19dfe37278e.svg'
import icon4 from '../assets/img/icon-4.3362ae6a9dd4e1d14fd1400a55131ba0.svg'
import portfolioImg from '../assets/img/portfolio.5.png'
import Aos from 'aos'
import "aos/dist/aos.css";
import { useMode } from '../context/ModeContext'
const Portfolio = () => {
    useEffect(() => {
        Aos.init({
            once: false
        });
    }, []);
    const [mode, toggleMode] = useMode();
    return (
        <div>
            <section className="portfolio">
                <div className={`background-light ${mode}`} />
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="portfolio-txt">
                                <h6><span>Join NFT Portfolio
                                </span></h6>
                                <h3>Become a Cyfonii <br /> Player Now
                                </h3>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="portfolio-left">
                                <div data-aos="fade-right" data-aos-duration="2000" className="portfolio-card">
                                    <div className="step">
                                        <h6>step 1</h6>
                                    </div>
                                    <div className="img">
                                        <img src={icon1} alt />
                                    </div>
                                    <div className="portfolio-txt">
                                        <h5>Connect your wallet</h5>
                                        <p>Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu
                                            ad litora torquent per conubia nostra, per inceptos himenaeos</p>
                                    </div>
                                </div>
                                <div data-aos="fade-right" data-aos-duration="2000" className="portfolio-card">
                                    <div className="step">
                                        <h6>step 2</h6>
                                    </div>
                                    <div className="img">
                                        <img src={icon2} alt />
                                    </div>
                                    <div className="portfolio-txt">
                                        <h5>Buy your NFT</h5>
                                        <p>Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu
                                            ad litora torquent per conubia nostra, per inceptos himenaeos</p>
                                    </div>
                                </div>
                                <div data-aos="fade-right" data-aos-duration="2000" className="portfolio-card">
                                    <div className="step">
                                        <h6>step 3</h6>
                                    </div>
                                    <div className="img">
                                        <img src={icon3} alt />
                                    </div>
                                    <div className="portfolio-txt">
                                        <h5>Create collection</h5>
                                        <p>Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu
                                            ad litora torquent per conubia nostra, per inceptos himenaeos</p>
                                    </div>
                                </div>
                                <div data-aos="fade-right" data-aos-duration="2000" className="portfolio-card">
                                    <div className="step">
                                        <h6>step 4</h6>
                                    </div>
                                    <div className="img">
                                        <img src={icon4} alt />
                                    </div>
                                    <div className="portfolio-txt">
                                        <h5>Sell your NFT</h5>
                                        <p>Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu
                                            ad litora torquent per conubia nostra, per inceptos himenaeos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div data-aos="zoom-in" data-aos-duration="2000" className="portfolio-right">
                                <img src={portfolioImg} alt />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio