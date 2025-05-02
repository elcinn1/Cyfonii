import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useWishlist } from 'react-use-wishlist';
import slugify from 'slugify';
import profilP from '../assets/img/avt-01.png'
import PageTitles from './PageTitles';
import { useMode } from '../context/ModeContext';


const Wishlist = () => {
    const [mode, toggleMode] = useMode();
    const {
        isWishlistEmpty,
        items,
        removeWishlistItem,
        inWishlist,
        addWishlistItem
    } = useWishlist();
    console.log(items)
    const uniqueWishlistItems = [...new Map(items.map(item => [item.id, item])).values()];
    if (isWishlistEmpty) {
        return <><div className='container my-5'>
            <div className={`background-light2 ${mode}`} />
            <div className='row'>
                <div className='col-12'>
                    <div className="page-title">
                        <div className='page-title-body'>
                            <h4>Wishlist is empty</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Wishlist</li>
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
    }
    return (
        <div>
            <PageTitles />
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    {uniqueWishlistItems.map((item) => (
                        <div key={item.id} className='col-xl-3 col-md-6 my-3'>
                            <div className="nft-item">
                                <div className="image">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="nft-title">
                                    <h5><Link to={`/nfts/${slugify(item.title)}`}>{item.title}</Link></h5>
                                </div>
                                <div className="nft-info d-flex justify-content-between align-items-center">
                                    <div className="info-left">
                                        <div className="img">
                                            <img src={profilP} alt={item.title} />
                                        </div>
                                        <div className="content">
                                            <span>Owned by</span>
                                            <h6>{item.auther}</h6>
                                        </div>
                                    </div>
                                    <div className="info-right">
                                        <span className="wishlist-btn " onClick={() => {
                                            if (inWishlist(item.id)) {
                                                removeWishlistItem(item.id);  // Məhsul wishlistdən silinir
                                                alert('Item removed from wishlist');
                                            } else {
                                                addWishlistItem(item);  // Məhsul wishlistə əlavə edilir
                                            }
                                        }}>
                                            <i className={`fa-heart ${inWishlist(item.id) ? 'fa-solid text-danger' : 'fa-regular'}`} />
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
                                                <span>Current Bid</span>
                                                <h6>{item.price}</h6>
                                            </div>
                                        </div>
                                        <div className="price-right">
                                            <Link to={`/nfts/${slugify(item.title)}`} className="price-btn" href><span>Learn more</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}

export default Wishlist