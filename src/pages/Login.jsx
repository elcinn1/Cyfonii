import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageTitles from '../components/PageTitles';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const adminData = {
        fullname: "elcin",
        email: "elcin@gmail.com",
        password: "123",
        phone: "+000-000-00-00",
        role: "admin"
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('login');
        if (isLoggedIn) {
            navigate('/account');
        }
    }, [navigate]);

    const loginSubmit = (e) => {
        e.preventDefault();
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        if (email === adminData.email && password === adminData.password) {
            localStorage.setItem("login", "true");
            localStorage.setItem("activeUser", JSON.stringify(adminData));
            navigate("/account");
            window.location.reload();
            return;
        }
        const user = registeredUsers.find((u) => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem("login", "true");
            localStorage.setItem("activeUser", JSON.stringify(user));
            navigate("/account");
            window.location.reload();
        } else if (!email || !password) {
            alert("Please enter both email and password");
        } else {
            alert("Invalid email or password");
        }
    };


    return (
        <div>
            <PageTitles />
            <section className='register'>
                <div className='container'>
                    <div className="row">
                        <form onSubmit={loginSubmit}>
                            <div className='col-12 d-flex justify-content-center flex-column align-items-center'>
                                <div className="col-xl-6 col-md-6 p-2">
                                    <label> Your Mail </label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" />
                                </div>
                                <div className="col-xl-6 col-md-6 p-2">
                                    <label> Your Password </label>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" />
                                </div>
                                <div className="col-xl-6 col-md-6 p-2">
                                    <Link to={"/register"}>you dont have account?</Link>
                                </div>
                                <div className="col-xl-6 col-md-6 p-2">
                                    <button to={"/"} className='submit'>Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Login