import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';


const Form = ({ comingData, editData }) => {
    const imgRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const descRef = useRef();
    const wishlistCount = 0;
    const auther = "Roger Herwitz";
    const dispatch = useDispatch();

    const formSubmit = (e) => {
        e.preventDefault();
        comingData({
            img: imgRef.current.value,
            title: titleRef.current.value,
            price: priceRef.current.value,
            desc: descRef.current.value,
            auther: auther
        })
        imgRef.current.value =  '';
    };
    return (

        <div>
            <div className="d-flex align-items-center justify-content-center">
                <div className='col-sm-12 col-md-5'>
                    <div className='dashboard-form'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Img url</label>
                                <input
                                    defaultValue={!editData ? "" : editData.img}
                                    ref={imgRef}
                                    type="text"
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input
                                    defaultValue={!editData ? "" : editData.title}
                                    ref={titleRef}
                                    type="text"
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <input
                                    defaultValue={!editData ? "" : editData.price}
                                    ref={priceRef}
                                    type="text"
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <input
                                    defaultValue={!editData ? "" : editData.desc}
                                    ref={descRef}
                                    type="text"
                                    className="form-control"
                                />
                            </div>

                            <button type="submit" className="main-btn">
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form