import React, { useEffect } from 'react'
import paymentImg from '../assets/img/9245020.png'
import '../assets/css/payment.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
const SuccesPayment = () => {
    useEffect(() => {
        Aos.init({
        });
    }, []);
    return (
        <div className='payment d-flex align-items-center ' data-aos="fade-up" data-aos-duration="2000">
            <div className='container d-flex justify-content-center flex-column align-items-center'>
                <img src={paymentImg} />
                <h3>Payment Successfull</h3>
                <p>Your payment has been completed</p>
                <Link className='main-btn text-white p-2' to={"/"}>
                    Finish
                </Link>
            </div>
        </div>
    )
}

export default SuccesPayment