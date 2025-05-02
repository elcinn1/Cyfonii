import React from 'react'
import profilP from '../assets/img/avt-01.png'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import '../assets/css/nfts.css'
import { useWishlist } from 'react-use-wishlist'

const SingleProduct = ({ allitems }) => {

    const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist();

    return (
        <div className='col-xl-3 col-md-6 my-3'>
            <div className="nft-item">
                <div className="image">
                    <img src={allitems.img} alt={allitems.title} />
                </div>
                <div className="nft-title">
                    <h5><Link to={`/nfts/${slugify(allitems.title)}`} >{allitems.title}</Link></h5>
                </div>
                <div className="nft-info d-flex justify-content-between align-items-center">
                    <div className="info-left">
                        <div className="img">
                            <img src={profilP} alt={allitems.title} />
                        </div>
                        <div className="content">
                            <span>Owned by</span>
                            <h6>{allitems.auther}</h6>
                        </div>
                    </div>
                    <div className="info-right">
                        <span className="wishlist-btn" onClick={() =>
                            inWishlist(allitems.id) ? removeWishlistItem(allitems.id) : addWishlistItem(allitems)
                        }>

                            <i className={`fa-heart ${inWishlist(allitems.id) ? 'fa-solid text-danger' : 'fa-regular'}`} />

                        </span>
                    </div>
                </div>
                <div className="nft-bottom">
                    <div className="nft-price d-flex justify-content-between align-items-center">
                        <div className="price-left">
                            <div className="icon">
                                <span>
                                    <i className="fa-brands fa-ethereum" />
                                </span>
                            </div>
                            <div className="content">
                                <span >Current Bid</span>
                                <h6>{allitems.price}</h6>
                            </div>
                        </div>
                        <div className="price-right">
                            <Link to={`/nfts/${slugify(allitems.title)}`} className="price-btn" ><span>Learn more</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct