import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useWishlist } from 'react-use-wishlist';
import slugify from 'slugify';
import '../assets/css/nftDetails.css'
import { useCart } from 'react-use-cart';
import { useMode } from '../context/ModeContext';

const ProductDetails = () => {
  const data = useSelector(p => p.product);
  const { slug } = useParams();
  const findByProductTitle = data.find(p => slugify(p.title) === slug);
  const {
    isWishlistEmpty,
    items,
    removeWishlistItem,
    inWishlist,
    addWishlistItem
  } = useWishlist();
  const { addItem } = useCart();
  const [mode, toggleMode] = useMode();
  return (

    <div>
      <div className='container my-5'>
        <div className={`background-light2 ${mode}`} />
        <div className='row'>
          <div className='col-12'>
            <div className="page-title">
              <div className='page-title-body'>
                <h4>NFTs Details</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/nfts">NFTs </Link></li>
                  <li>NFT Details</li>
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
      <section className="nft-details mt-5">
        <div className="container">
          <div className='nft-details-body'>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="img">
                  <img src={findByProductTitle.img} alt={findByProductTitle.title} />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="details-right">
                  <div className="top  ">
                    <h5>{findByProductTitle.title} </h5>
                    <p>{findByProductTitle.desc}</p>
                  </div>
                  <div className="bot ">
                    <div className="d-flex align-items-center justify-content-between">
                      <h6>Price: <span> {findByProductTitle.price} ETH</span></h6>
                      <span className="wishlist-btn" onClick={() =>
                        inWishlist(findByProductTitle.id) ? removeWishlistItem(findByProductTitle.id) : addWishlistItem(findByProductTitle)
                      } >
                        <i className={`fa-heart ${inWishlist(findByProductTitle.id) ? 'fa-solid text-danger' : 'fa-regular'}`} />
                      </span>
                    </div>
                    <a onClick={() => { addItem(findByProductTitle) }} className="main-btn p-3 text-white"><span><i className="fa-solid fa-bag-shopping" /> add to cart</span> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ProductDetails