import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import SingleProduct from '../components/SingleProduct';
import '../assets/css/nfts.css'
import PageTitles from '../components/PageTitles';

const NFTs = () => {
    const data = useSelector(p => p.product);
    const [searchItem, setSearchItem] = useState("");
    const filteredProducts = data.filter((data) =>
        data.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    return (
        <div>
            <PageTitles />
            <section className='nfts' >
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className="col-12 my-5 d-flex justify-content-center">
                            <input type="text" value={searchItem}
                                onChange={(e) => setSearchItem(e.target.value)} placeholder='search' />
                        </div>
                        {filteredProducts.map((item, index) => (
                            <SingleProduct key={index} allitems={item} />
                        ))}
                        {filteredProducts.length === 0 && (
                            <p className="">No results found.</p>
                        )}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default NFTs