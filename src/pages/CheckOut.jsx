import React, { useEffect, useState } from 'react'
import "../assets/css/checkOut.css"
import Collection from '../components/Collection'
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
const CheckOut = () => {
    const { setItems } = useCart();
    const navigate = useNavigate();

    const [paymentDetails, setPaymentDetails] = useState(false);
    const handleInputChange = () => {

        const userName = document.getElementById('userName').value;
        const userMail = document.getElementById('userMail').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvvCode = document.getElementById('cvvCode').value;
        const cardNumber = document.getElementById('cardNumber').value;
        if (userName && userMail && expiryDate && cvvCode && cardNumber) {
            setPaymentDetails(true);
        } else {
            setPaymentDetails(false);
        }
    };

    const completePayment = () => {
        if (!paymentDetails) {
            alert("Please fill in all payment details");
            return;
        }

        setItems([]);
        setTimeout(() => {
            navigate('/completedPayment');
        }, 500);
    };




    return (
        <div>
            <div className='container'>
                <div className='checkOut my-5'>
                    <div className="d-flex align-items-center justify-content-center">
                        <div className='col-xl-8 col-md-12 '>
                            <form action="#" >
                                <div className="row">
                                    <div className="col-xl-6 col-md-6 p-2">
                                        <label> Your name </label>
                                        <input type="text" class="form-control" id='userName' onChange={handleInputChange} />
                                    </div>
                                    <div className="col-xl-6 col-md-6 p-2">
                                        <label>
                                            Your email </label>
                                        <input type="email" class="form-control" id='userMail' onChange={handleInputChange} />
                                    </div>
                                    <div className="col-xl-12 col-md-6 p-2">
                                        <label> Card Number </label>
                                        <input type="text" class="form-control" id='cardNumber' onChange={handleInputChange} />
                                    </div>
                                    <div className="col-xl-6 col-md-6 p-2">
                                        <label> Expiry Date </label>
                                        <input type="text" className="form-control" id='expiryDate' placeholder="MM/YY" onChange={handleInputChange} />
                                    </div>
                                    <div className="col-xl-6 col-md-6 p-2">
                                        <label> Card Code (CVV) </label>
                                        <input type="text" class="form-control" id='cvvCode' onChange={handleInputChange} />
                                    </div>
                                </div>
                                <a className="main-btn mt-3" onClick={completePayment}>
                                    <span>Check Out</span>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
                <Collection />
            </div>
        </div>
    )
}

export default CheckOut