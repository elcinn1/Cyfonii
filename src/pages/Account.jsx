import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/account.css'
import PageTitles from '../components/PageTitles';
const Account = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullname: '',
    email: '',
  });


  useEffect(() => {
    const isLoggedIn = localStorage.getItem('login');
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      const activeUser = JSON.parse(localStorage.getItem('activeUser'));
      if (activeUser) {
        setUser(activeUser);
      }
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Çıxış etmək istədiyinizə əminsiniz?");
    if (confirmLogout) {
      localStorage.removeItem('login');
      localStorage.removeItem('activeUser');
      setUser({ fullname: '', email: '' });
      window.location.reload();
      navigate('/login');
    }
  };

  const isAdmin = user.email === "elcin@gmail.com";


  return (
    <div>
      <PageTitles />
      <div className="account">
        <div className='container'>
          <div className="d-flex align-items-center justify-content-center flex-column">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 form-container my-5">
              <form>
                <div className='account-info text-center'>
                  <div className="mb-3">
                    <span><i className="fa-regular fa-user"></i> {user.fullname}</span>
                  </div>
                  <div className="mb-3">
                    <span><i className="fa-regular fa-envelope"></i> {user.email}</span>
                  </div>
                  <hr className='text-white' />
                  <div className='d-flex  justify-content-center'>
                    <Link onClick={handleLogout} className='dashboard-btn me-3' to="/ ">
                      Log out
                    </Link>

                    {isAdmin && (
                      <Link className='dashboard-btn' to="/dashboard">
                        Go to Dashboard
                      </Link>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account