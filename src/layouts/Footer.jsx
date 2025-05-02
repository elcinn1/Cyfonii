import React from 'react'
import logo from '../assets/img/download.png'
import { NavLink } from 'react-router-dom'
import '../assets/css/footer.css'
import { useMode } from '../context/ModeContext'

const Footer = () => {
    const [mode, toggleMode] = useMode();
    return (
        <footer className='mt-5'>

            <div className='footer-top d-flex flex-column justify-content-center align-items-center'>

                <div className='container'>
                    <div className={`background-light ${mode}`} />
                    <h3>Get Newsletter</h3>
                    <p>Get udpated with news, tips & tricks</p>
                    <form>
                        <div className="form-group d-flex justify-content-center mt-5 mb-3">
                            <input type="email" placeholder='Your email' />
                        </div>
                        <div className='d-flex justify-content-center mb-5'>
                            <a className="main-btn"><span>Subscribe</span></a>
                        </div>
                    </form>

                </div>
            </div>
            <div className="container d-flex flex-lg-row justify-content-center flex-column align-items-center my-5">

                <a className="navbar-brand text-light font-weight-bold" href="#">
                    <img src={logo} alt />
                </a>
                <div className="mx-auto">
                    <div className="footer-links">
                        <ul class="nav d-flex justify-content-center align-items-center">
                            <li className="nav-item ">
                                <NavLink className="nav-link" to={"/"}>Home</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link">NFTs</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link">Team</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link">Contact</NavLink>
                            </li>
                        </ul>

                    </div>

                </div>
                <div className='footer-icons'>
                    <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                    <a href=""><i className="fa-brands fa-youtube"></i></a>
                    <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                </div>

            </div>
            <p>Copyright © 2025, Cyfonii. Designed by h0st3d</p>
        </footer>

    )
}

export default Footer