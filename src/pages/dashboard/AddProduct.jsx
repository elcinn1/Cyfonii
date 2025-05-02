import React from 'react'
import { addProduct } from '../../tools/actions/productAction'
import { useDispatch } from 'react-redux';
import Form from "./Form";
import { Link } from 'react-router-dom';
const AddProduct = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container ">
        <div className='row my-5'>
          <div className='col-12'>
            <div className="page-title">
              <div className='page-title-body'>
                <h4>Add Product</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li>Add Product</li>
                </ul>
                <div className='bottom'>
                  <p>Share this page</p>
                  <div className='icons'>
                    <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="" ><i className="fa-brands fa-youtube" /></a>
                    <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Form
          comingData={(item) => {
            dispatch(addProduct(item))
          }}
        />
      </div>
    </div>
  )
}

export default AddProduct