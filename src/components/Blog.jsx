import React from 'react'
import blog1 from '../assets/img/blog-01.png'
import blog2 from '../assets/img/blog-02.png'
import blog3 from '../assets/img/blog-03.png'
import '../assets/css/blog.css'
const Blog = () => {
    return (
        <div>
            <section className='blog my-5'>
                
                <div className="container">
                    <div className="row">

                        <div className="col-12 text-center">
                            <div className="portfolio-txt">
                                <h6><span>From Our Blog
                                </span></h6>
                                <h3>Read Our Recent <br /> News & Articles
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='blog-card'>
                                <div className='image'>
                                    <img src={blog1} alt="" />
                                </div>
                                <div className='blog-txt text-center'>
                                    <p><i className="fa-regular fa-calendar"></i> February 18, 2022</p>
                                    <a >
                                        5 CELEBRITY-BACKED NFT PROJECTS THAT TURNED OUT TO BE SCAMS
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className='blog-card'>
                                <div className='image'>
                                    <img src={blog2} alt="" />
                                </div>
                                <div className='blog-txt text-center'>
                                    <p><i className="fa-regular fa-calendar"></i> February 18, 2022</p>
                                    <a >
                                        5 CELEBRITY-BACKED NFT PROJECTS THAT TURNED OUT TO BE SCAMS
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='blog-card'>
                                <div className='image'>
                                    <img src={blog3} alt="" />
                                </div>
                                <div className='blog-txt text-center'>
                                    <p><i className="fa-regular fa-calendar"></i> February 18, 2022</p>
                                    <a >
                                        5 CELEBRITY-BACKED NFT PROJECTS THAT TURNED OUT TO BE SCAMS
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog