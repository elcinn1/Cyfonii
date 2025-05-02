import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useMode } from '../context/ModeContext';
import '../assets/css/pageTitles.css'

const PageTitles = () => {
    const location = useLocation();
    const titles = {
        "/about": "About Us",
        "/contact": "Contact",
        "/nfts": "NFTs",
        "/team": "Our Team",
        "/login": "Login",
        "/cart": "Shopping Cart",
        "/register": "Sign Up",
        "/account": "My Account",
        "/wishlist": "My Wishlist",
        "/dashboard": "Dashboard",
        "/dashboard/add": "Add New Product",
    };


    const [mode, toggleMode] = useMode();
    const pageTitle = titles[location.pathname] || " ";


    return (
        <>
            <div className='container my-5'>
                <div className={`background-light ${mode}`} />
                <div className={`background-light2 ${mode}`} />
                <div className='row'>
                    <div className='col-12'>
                        <div className='page-title'>
                            <div className='page-title-body'>
                                <h4>{pageTitle}</h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>{pageTitle}</li>
                                </ul>
                                <div className='bottom'>
                                    <p>Share this page</p>
                                    <div className='icons'>
                                        <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                                        <a href=""><i className="fa-brands fa-youtube"></i></a>
                                        <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageTitles