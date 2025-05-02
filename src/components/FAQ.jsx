import React, { useEffect } from 'react'
import faqImg from '../assets/img/img-faq.png'
import Aos from 'aos';
import faqData from '../data/faqData';
import "aos/dist/aos.css";
import '../assets/css/faq.css'

const FAQ = () => {
    useEffect(() => {
        Aos.init({
            once: false
        });
    }, []);
    return (
        <div>
            <section className="faq my-5">

                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className='faq-txt'>
                                <h6><span>FAQs</span></h6>
                                <h3>Frequently <br /> Aksed Questions</h3>
                                <p>Below is a list of frequently asked questions and answers from partners and 3D artist. Please check this FAQ first before contacting us.</p>
                                <div className="accordion accordion-flush my-5" id="accordionFlushExample">
                                    {faqData.map((item, index) => (
                                        <div data-aos="fade-up"
                                            data-aos-duration="2000" className="accordion-item" key={index}>
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target={"#" + item.name} aria-expanded="false" aria-controls={item.name}>
                                                    {item.title}
                                                </button>
                                            </h2>
                                            <div id={item.name} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div data-aos="zoom-in" data-aos-duration="2000" className="images d-flex justify-content-center align-items-center">
                                <img src={faqImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FAQ