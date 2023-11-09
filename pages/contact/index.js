import React from 'react'
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai'
import mail_us from 'public/assets/images/aboutpage/mail_us.jpg';
import Image from 'next/image';
import ContactUsBanner from 'public/assets/images/contact-us-banner.jpg';

const index = () => {

    return (
        <>
            <section>
                <div>
                    <Image  src={ContactUsBanner} alt="banner" className='w-100 img-fluid' />
                </div>
            </section>
            <section className="py-4 py-md-5">
                <div className="container">
                    <div className="contact-section">
                        <div className="contact-form">
                            <h1 className='fs-30 fw-700'>CONTACT US</h1>
                            <hr></hr>
                            <form action="">
                                <div className="mb-3 d-flex justify-content-between gap-4">
                                    <span htmlFor="" className="form-label fs-16 text_width fw-700">Name*</span>
                                    <input type="text" className="form-control rounded-0 shadow-none fs-14 input_field"
                                           id="" placeholder="Your Name"/>
                                </div>
                                <div className="mb-3 d-flex justify-content-between gap-4">
                                    <span htmlFor="" className="form-label fs-16 text_width fw-700">Email*</span>
                                    <input type="email" className="form-control rounded-0 shadow-none fs-14 input_field"
                                           id="" placeholder="Your Email Id"/>
                                </div>
                                <div className="mb-3 d-flex justify-content-between gap-4">
                                    <span htmlFor="" className="form-label fs-16 text_width fw-700">Mobile No*</span>
                                    <input type="number"
                                           className="form-control rounded-0 shadow-none fs-14 input_field" id=""
                                           placeholder="Your Contact No"/>
                                </div>
                                <div className="mb-3 d-flex justify-content-between gap-4">
                                    <span htmlFor="" className="form-label fs-16 text_width fw-700">Company Name*</span>
                                    <input type="text" className="form-control rounded-0 shadow-none fs-14 input_field"
                                           id="" placeholder="Your Company Name"/>
                                </div>
                                <div className="mb-3 ">
                                    <span htmlFor=""
                                          className="form-label fs-16 fw-700">Describe your Requirements *</span>
                                    <textarea className="form-control mt-2 rounded-0" id="" placeholder="Say something!"
                                              rows="3"></textarea>
                                </div>
                                <div className='text-end mt-3'>
                                    <button className='btn text-white  btn_submit rounded-0 fs-16 fw-500'>Submit
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
            <section className='py-5'>
                <div className="container">
                    <div>
                        <iframe className='rounded' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14020.220201174292!2d77.4146083!3d28.538065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8c9aaaaaaab%3A0xf5d2ee4d223e6ebd!2sLuxor%20International%20Private%20Limited!5e0!3m2!1sen!2sin!4v1697965682496!5m2!1sen!2sin" style={{
                            width: '100%',
                            height: '450px',
                            border: '0',
                        }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}
export default index