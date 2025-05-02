import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import PageTitles from '../components/PageTitles';
import { useMode } from '../context/ModeContext';
import profilP from '../assets/img/avt-01.png'
import "../assets/css/cart.css"

const Cart = () => {
    const [mode, toggleMode] = useMode();
    const {
        isEmpty,
        cartTotal,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if (isEmpty)
        return <><div className='container my-5'>
            <div className={`background-light2 ${mode}`} />
            <div className='row'>
                <div className='col-12'>
                    <div className="page-title">
                        <div className='page-title-body'>
                            <h4>Your cart is empty</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Cart</li>
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
        </>
            ;
    return (
        <div>
            <PageTitles />
            <div class="basket-card my-5">
                <div className="container ">
                    <div className='row d-flex flex-column align-items-center justify-content-center'>
                        <div className='cart-background d-flex flex-column align-items-center justify-content-center '>
                            {items.map((item, index) => (
                                <div key={index} className="col-12 my-2">
                                    <div className="cart">
                                        <button onClick={() => removeItem(item.id)} className="delete-btn btn btn-danger"><i className="fa-solid fa-trash" /></button>
                                        <div className="cart-body">
                                            <div className="row">
                                                <div className="col-sm-6 col-md-4">
                                                    <img src={item.img} alt={item.title} />
                                                </div>
                                                <div className="col-sm-6  col-md-8 d-flex align-items-center">
                                                    <div className="cart-txt w-100">
                                                        <h3>
                                                            {item.title}
                                                        </h3>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="owner">
                                                                <div className="img-pp">
                                                                    <img src={profilP} alt={item.auther} />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Owned by</span>
                                                                    <h6>{item.auther}</h6>
                                                                </div>
                                                            </div>
                                                            <div className="content mx-5">
                                                                <span>Price</span>
                                                                <h6>{item.price} ETH</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            ))}
                            <Link className="main-btn text-white p-2 mt-2" to="/checkout">Confirm Order</Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart