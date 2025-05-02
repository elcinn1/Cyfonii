import React from 'react'
import Form from "./Form";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import slugify from 'slugify';
import { editProduct } from '../../tools/actions/productAction';

const EditProduct = () => {
    const { slug } = useParams();
    const data = useSelector((p) => p.product);
    const dispatch = useDispatch();
    const filteredData = data.find(
        (p) => slugify(p.title, { lower: true }) === slug
    );
    return (
        <div>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-12'>
                        <div className="page-title">
                            <div className='page-title-body'>
                                <h4>Edit Product</h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li>Edit Product</li>
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
                    editData={filteredData}
                    comingData={(item) => {
                        dispatch(editProduct(filteredData.id, item));
                    }}
                />
            </div>
        </div>
    )
}

export default EditProduct