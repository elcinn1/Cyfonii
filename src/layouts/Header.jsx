import React, { useEffect, useState } from 'react'
import logo from '../assets/img/download.png'
import { Link, NavLink } from 'react-router-dom'
import { useMode } from '../context/ModeContext'
import { IoIosSunny } from "react-icons/io";
import { useTranslation } from 'react-i18next'
import i18n from '../i18n/i18next';
import { IoIosMoon } from "react-icons/io";
import { IoIosCart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";



const Header = () => {
    const [activeUser, setActiveUser] = useState(null);
    const [mode, toggleMode] = useMode();
    const icon = mode === 'light' ? <IoIosMoon /> : <IoIosSunny />;
    const { t } = useTranslation();
    const [lang, setLang] = useState();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("activeUser"));
        setActiveUser(user);

        const savedLang = localStorage.getItem("lang") || 'en';
        changeLang(savedLang);
    }, []);

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
        setLang(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <div className={`header ${mode}`}>
            <nav className="navbar navbar-expand-lg mx-auto">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light font-weight-bold mx-3" to={"/"}>
                        <img src={logo} /></Link>

                    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls='offcanvasNavbar'>
                        <i className="fas fa-bars fa-xl text-white"></i>
                    </button>

                    <div className="sidebar offcanvas offcanvas-start " id="offcanvasNavbar" aria-labelledby='offcanvasNavbarLabel'>
                        <div className='offcanvas-header text-white border-bottom'>
                            <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                                Cyfonii
                            </h5>
                            <button type='button' className='btn-close btn-close-white shadow-none' data-bs-dismiss="offcanvas" aria-label='Close'></button>
                        </div>
                        <div className="offcanvas-body d-flex flex-lg-row flex-column justify-content-between align-items-center w-100">
                            <ul className="navbar-nav d-flex flex-lg-row flex-column justify-content-center align-items-center mx-auto">

                                <li className="nav-item mx-3">
                                    <NavLink className="nav-link" to={"/"}>{t("Navbar.0")}</NavLink>
                                </li>
                                <li className="nav-item mx-3">
                                    <NavLink className="nav-link" to={"/about"}>{t("Navbar.1")}</NavLink>
                                </li>
                                <li className="nav-item mx-3">
                                    <NavLink className="nav-link" to={"/nfts"}>{t("Navbar.2")}</NavLink>
                                </li>
                                <li className="nav-item mx-3">
                                    <NavLink className="nav-link" to={"/team"}>{t("Navbar.3")}</NavLink>
                                </li>
                                <li className="nav-item mx-3">
                                    <NavLink className="nav-link" to={"/contact"}>{t("Navbar.4")}</NavLink>
                                </li>
                            </ul>
                            <div className="d-flex  flex-lg-row justify-content-center align-items-center gap-3">
                                <select className='lang-select'
                                    value={lang}
                                    onChange={(e) => changeLang(e.target.value)}>
                                    <option value="en">EN</option>
                                    <option value="az">AZ</option>
                                </select>
                                <Link onClick={toggleMode} className='cart-icon'>{icon}</Link>
                                <Link className='cart-icon' to={"/wishlist"}> <IoIosHeartEmpty /></Link>
                                <Link className='cart-icon' to={"/cart"}> <IoIosCart /></Link>
                                {localStorage.getItem("login") === "true" ? (
                                    <Link className="main-btn" to="/account"><span>{activeUser && activeUser.fullname === "Admin" ? "Admin" : activeUser?.fullname}</span> </Link>)
                                    :
                                    (<Link className="main-btn" to="/login"><span>{t("Navbar.5")}</span></Link>)}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header