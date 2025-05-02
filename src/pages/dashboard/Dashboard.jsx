import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { deleteProduct } from '../../tools/actions/productAction';

const Dashboard = () => {
    const data = useSelector((p) => p.product);
    const dispatch = useDispatch();
    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <div className='container my-5'>
                <div className="background-light2" />
                <div className='row'>
                    <div className='col-12'>
                        <div className="page-title">
                            <div className='page-title-body'>
                                <h4>Dashboard</h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/account">Account</Link></li>
                                    <li>Dashboard</li>
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
            </div>
            <div className="col-12 col-sm-12 col-md-5">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {data.map((item, i) => (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>
                                    <img src={item.img} width="70" alt={item.title} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Link
                                        to={`/dashboard/edit/${slugify(item.title, { lower: true })}`}
                                        className="btn btn-warning"
                                    >
                                        Edit
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            console.log(item.id);
                                            dispatch(deleteProduct(item.id));
                                        }}
                                        className="btn btn-danger"
                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='text-center'> <Link className="main-btn text-white p-2" to="/dashboard/add">
                    Add Product{" "}
                </Link></div>

            </div>
        </div>
    )
}

export default Dashboard