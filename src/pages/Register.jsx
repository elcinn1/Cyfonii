import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/register.css'
import PageTitles from '../components/PageTitles';
const Register = () => {
    const [user, setUser] = useState({
        fullname: '',
        email: '',
        password: '',
        againPassword: ''
    });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const registerSubmit = (e) => {
        e.preventDefault();
        if (!user.fullname || !user.email || !user.password || !user.againPassword) {
            alert('Please fill in all fields');
        } else {
            if (user.password === user.againPassword) {
                const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
                const existingUsers = registeredUsers.find((u) => u.email === user.email);
                if (existingUsers) {
                    alert('');
                } else {
                    registeredUsers.push(user);
                    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
                    alert('successful registration');
                    setTimeout(() => {
                        window.location.assign("/login");
                    }, 2000);
                }
            } else {
                alert("Passwords do not match");
            }
        }
    }
    return (
        <div>
            <PageTitles />
            <section className='register' data-aos="zoom-in " data-aos-duration="1000">
                <div className='container'>
                    <form action="" onSubmit={registerSubmit} >
                        <div className="row">
                            <div className='col-12 d-flex justify-content-center flex-column align-items-center'>
                                <div className="col-xl-6 col-md-6 col-12 p-2">
                                    <label> Your Name </label>
                                    <input type="text" class="form-control" name="fullname" onChange={handleChange} />
                                </div>
                                <div className="col-xl-6 col-md-6 col-12 p-2">
                                    <label>Your Email </label>
                                    <input type="email" class="form-control" name="email" onChange={handleChange} />
                                </div>
                                <div className="col-xl-6 col-md-6 col-12 p-2">
                                    <label> Your Password </label>
                                    <input type="password" class="form-control" name="password" onChange={handleChange} />
                                </div>
                                <div className="col-xl-6 col-md-6 col-12 p-2">
                                    <label> Enter Your Password again</label>
                                    <input type="password" class="form-control" name="againPassword" onChange={handleChange} />
                                </div>
                                <div className="col-xl-6 col-md-6 col-12 p-2">
                                    <Link to="/login" >Already have an account?</Link>
                                </div>
                                <div className="col-xl-6 col-md-6 col-12 p-2">
                                    <button type="submit" className='submit'>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section></div>
    )
}

export default Register