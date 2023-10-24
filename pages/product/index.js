import React from 'react'
// import './../assets/'
// import './.assets./css./hp.css'
import { AiOutlineSearch } from 'react-icons/ai'
import Image from 'next/image'
import productimg1 from 'public/assets/product1.png'
import marker from 'public/assets/marker_heighlighter-removebg-preview.png'
import popular1 from 'public/assets/popular1.png'
import popular2 from 'public/assets/popular2.png'
// import Marker1 from 'public/assets/1'
// import Marker2 from 'public/assets/10.png'
import MarkerW from 'public/assets/Washable.png'
import Marker4 from 'public/assets/6.png'
import Marker5 from 'public/assets/8.png'
import MarkerT from 'public/assets/Non Toxic.png'
import Marker6 from 'public/assets/6.png'
import Marker7 from 'public/assets/0.png'
import Background from 'public/assets/Lineart.png'
import Dyn from 'public/assets/didYN.png'

// import Products from './Products'

const ProductPage = () => {
    return (
        <>
           

            <section className=''>
                <div className='productItem-img'>
                    <Image  className='img-fluid' alt='img-fluid' src={productimg1} />
                </div>
            </section>
            {/* <Products /> */}


            {/* -----------------------------------broadline marker--------------------------------------- */}

            <section className='main-broad-container py-5'>

                {/* ---------------------------------------container 1st---------- */}

                <div className=''>
                    <Image  className='img-fluid' src={marker} alt='' style={{

                    }} />
                </div>


                {/* -------------------------container 2nd------------------------ */}
                <div className='marker-container'>

                    {/* ----------------part 1----- */}

                    <div className='broad-section'>

                        <h2>BROADLINE MARKER</h2>

                        <p>Kids love Luxor Broadline Markers because they are durable, sturdy, and delightful
                            to color with. They come in 12 lovely colors, are washable, non-toxic and don't bleed
                            through most paper. </p>

                    </div>

                    {/* ----------------part 2----- */}
                    <div className='color-cont'>
                        <div className='color-heading'>
                            <h3>Available Colors</h3>
                        </div>

                        <div className='color-section'>
                            <div className='color-shade'>
                                <div className='color-shade1'></div>
                                <div className='color-shade2'></div>
                                <div className='color-shade3'></div>
                                <div className='color-shade4'></div>
                                <div className='color-shade5'></div>
                                <div className='color-shade6'></div>
                            </div>
                            <div className='para-shade'>
                                <p>+5 Shades</p>
                            </div>
                        </div>

                    </div>
                    {/* ----------------part 3----- */}
                    <div className='row mt-4'>
                        <div className='col-md-4 mb-3'>
                            <div className="card h-100 border-0 shadow-sm bg-transaparent">
                                <div className="card-body">
                                    <Image  className='img-fluid' src={MarkerW} alt='' />
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 mb-3'>
                            <div className="card h-100 border-0 shadow-sm bg-transaparent">
                            <div className="card-body">
                                
                                <Image  className='img-fluid' src={MarkerT} alt='' />
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* ----------------part 4----- */}
                    <div className='broadline-cont'>
                        <div className='broadline-card'>
                            <Image  src={Marker4} alt='' />
                            <p>Broadline
                                Marker SRP</p>
                        </div>
                        <div className='broadline-card'>
                            <Image  className='img-fluid' src={Marker5} alt='' />
                            <p>Broadline
                                Marker</p>
                        </div>
                        <div className='broadline-card'>
                            <Image  className='img-fluid' src={Marker7} alt='' />
                        </div>
                    </div>
                    {/* ----------------part 5-----  */}
                    <div className='dyn-cont'>
                        <div className='dyn-img'>
                            <Image  src={Dyn} alt='' />
                        </div>
                        <div className='dyn-para'>
                            <p>The colours of the rainbow always go in the same colour:
                                red, orange, yellow, green, blue, indigo and violet.</p>
                        </div>
                    </div>

                </div>

            </section>

            {/* ---------------------------------------------------------------------------- */}

            <section>
                <div className='products'>
                    {/* <div className='bakground-image'>
                        <Image  src={Background} alt='' />
                    </div> */}
                    <div className='prodBackground'>
                        <div class="heading1">
                            <h2>Popular Picks</h2>
                        </div>
                    </div>
                    <div class="product-container">
                        <div class="product-box">

                            <div className='product-img'>
                                <Image  src={popular1} alt='' />
                            </div>

                        </div>
                        <div class="product-box">

                            <div className='product-img'>
                                <Image  src={popular1} alt='' />
                            </div>
                        </div>
                        <div class="product-box">

                            <div className='product-img'>
                                <Image  src={popular2} alt='' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='footer-copyright'>
                    <div className='copyright-para'>
                        <p>© Copyright Luxor 2023 | All rights reserved</p>
                    </div>

                    <div className='footer-icon'>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div> */}
                
            </section>



        </>
    )
}

export default ProductPage