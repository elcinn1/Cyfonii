import React from 'react'
import ethLogo from '../assets/img/download (2).png'
import '../assets/css/speciality.css'

const Speciality = () => {
    return (
        <div>
            <section className="speciality">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="speciality-txt">
                                <h6><span>Our Speciality
                                </span></h6>
                                <h3>Complete Solutions <br /> for your NFT
                                </h3>
                                <p>Cyfonii is the premier marketplace for nifties, which are digital items you can  truly own for yourself
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="speciality-card">
                                <div className="img">
                                    <img src={ethLogo} alt />
                                </div>
                                <h5>Huge Collection</h5>
                                <p>Explore a vast collection of unique and rare NFTs. Find your perfect digital collectible today!</p>
                                <h3>01</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="speciality-card">
                                <div className="img">
                                    <img src={ethLogo} alt />
                                </div>
                                <h5>High Quality</h5>
                                <p>Experience top-tier NFTs with stunning detail and originality. Quality you can trust! </p>
                                <h3>02</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="speciality-card">
                                <div className="img">
                                    <img src={ethLogo} alt />
                                </div>
                                <h5>Top Resource</h5>
                                <p>Your go-to source for premium and exclusive NFTs. Discover the best in digital art!</p>
                                <h3>03</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="speciality-card">
                                <div className="img">
                                    <img src={ethLogo} alt />
                                </div>
                                <h5>Big Community</h5>
                                <p>Join a thriving community of NFT enthusiasts and collectors. Connect, trade, and grow!</p>
                                <h3>04</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Speciality