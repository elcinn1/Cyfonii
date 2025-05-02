import React from 'react'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import contactImg from "../assets/img/touch.png"
import FAQ from '../components/FAQ';
import '../assets/css/contact.css'
import PageTitles from '../components/PageTitles';
const Contact = () => {
    return (
        <div>
            <PageTitles />
            <section className='contact'>
                <div className='container'>
                    <div className="title">
                        <h6><span>Get in Touch!
                        </span></h6>
                        <h3>Let’s Start Working
                            <br /> Together
                        </h3>
                    </div>
                    <div className='contact-body'>
                        <div className="row">
                            <div className='col-xl-4 col-md-12'>
                                <div className="contact-info">
                                    <h5>Contact information</h5>
                                    <ul className="list">
                                        <li><IoLocationOutline /> 20, Backway Road, New York, US AB42 </li>
                                        <li><FiPhone /> +000-000-000-000</li>
                                        <li><FiMail /> support@gmail.com </li>
                                    </ul>
                                    <div className='image'>
                                        <img src={contactImg} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-8 col-md-12 '>
                                <form action="#" >
                                    <div className="row">
                                        <div className="col-xl-6 col-md-6 p-2">
                                            <label> Your name </label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div className="col-xl-6 col-md-6 p-2">
                                            <label>
                                                Your email </label>
                                            <input type="email" class="form-control" />
                                        </div>
                                        <div className="col-xl-6 col-md-6 p-2">
                                            <label> Your phone </label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div className="col-xl-6 col-md-6 p-2">
                                            <label> Subject </label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div className="col-xl-12 col-md-12 p-2">
                                            <label> Message </label>
                                            <textarea class="form-control" />
                                        </div>
                                    </div>
                                    <a className="main-btn mt-3" href>
                                        <span>Send now</span>
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                    <iframe className='my-5 rounded-5 w-100' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10300.622262347159!2d48.0686893639973!3d39.86542685968077!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2saz!4v1742235791879!5m2!1str!2saz" height={550} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </section>


            <FAQ />
        </div>
    )
}

export default Contact