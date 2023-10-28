import React, { useState } from "react";
// import './../assets/'
// import './.assets./css./hp.css'
import { AiOutlineSearch } from "react-icons/ai";
import Image1 from "public/assets/Products School.png";

import Image from "next/image";
import productimg1 from "public/assets/product1.png";
import marker from "public/assets/marker_heighlighter-removebg-preview.png";
import popular1 from "public/assets/popular1.png";
import popular2 from "public/assets/popular2.png";
// import Marker1 from 'public/assets/1'
// import Marker2 from 'public/assets/10.png'
import Mark from "public/assets/mark-wash.webp";
import Marker4 from "public/assets/6.png";
import Marker5 from "public/assets/8.png";
import MarkerT from "public/assets/Non Toxic.png";
import Toxic from "public/assets/Non Toxic.webp";

import Marker6 from "public/assets/6.png";
import Marker7 from "public/assets/0.png";
import Background from "public/assets/Lineart.png";
import Didyouknow from "public/assets/did you know.webp";
import { getCategoryWiseProducts } from "../../Actions/action";

// import Products from './Products'

const ProductPage = (props) => {
 
     const [cat_prdcts , setPrd ]  = useState(props.cat_prd)

  return (
    <>
      <section className="">
        <div className="productItem-img">
          <Image className="img-fluid" alt="img-fluid" src={productimg1} />
        </div>
      </section>



      <div className="prd_container"  >
                {cat_prdcts.length>0 && cat_prdcts.map(ele =>{
                    return <React.Fragment>
                    <div className ="product-box  prd_card " onClick={()=> router.push("product/"+ele._id ) } >
                    <h3>{ele.name}</h3>
                    <div className="product-img" >
                        <Image  src={Image1} alt={ele.name} />
                    </div>

                </div>

                    </React.Fragment>
                    })}
            </div>



      {/* <Products /> */}

      {/* -----------------------------------broadline marker--------------------------------------- */}

      <section className="main-broad-container py-5">
        {/* ---------------------------------------container 1st---------- */}
        <div className="container-fluid">
       <div className="row">
        <div className="col-md-3">
          <Image className="img-fluid" src={marker} alt="homepage" style={{}} />
        </div>
        
        {/* -------------------------container 2nd------------------------ */}
        <div className="col-md-9 ">
          {/* ----------------part 1----- */}
          <div className="border-2 rounded shadow p-4">
            <div className="">
              <h2 className="fs-30">BROADLINE MARKER</h2>

              <p className="fs-18 text_justify">{`Kids love Luxor Broadline Markers because they are durable, sturdy, and delightful
                            to color with. They come in 12 lovely colors, are washable, non-toxic and don't bleed
                            through most paper. `}</p>
            </div>

            {/* ----------------part 2----- */}
            <div className="color-cont">
              <div className="color-heading">
                <h3>Available Colors</h3>
              </div>

              <div className="color-section">
                <div className="color-shade">
                  <div className="color-shade1"></div>
                  <div className="color-shade2"></div>
                  <div className="color-shade3"></div>
                  <div className="color-shade4"></div>
                  <div className="color-shade5"></div>
                  <div className="color-shade6"></div>
                </div>
                <div className="para-shade">
                  <p>+5 Shades</p>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------part 3----- */}
          <div className="row mt-4">
            <div className="col-md-4 mb-3">
              <div className="card h-100 border-0 shadow-sm bg-transaparent">
                <div className="card-body mx-auto">
                  <Image className="img-fluid" src={Mark} alt="homepage" />
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card h-100 border-0 shadow-sm bg-transaparent">
                <div className="card-body mx-auto">
                  <Image className="img-fluid " src={Toxic} alt="homepage" />
                </div>
              </div>
            </div>
          </div>
          {/* ----------------part 4----- */}
          <div className="broadline-cont flex-column flex-md-row">
            <div className="broadline-card mb-4 ">
              <Image src={Marker4} alt="homepage" />
              <p>Broadline Marker SRP</p>
            </div>
            <div className="broadline-card mb-4">
              <Image className="img-fluid" src={Marker5} alt="homepage" />
              <p>Broadline Marker</p>
            </div>
            <div className="broadline-card mb-4">
              <Image className="img-fluid" src={Marker7} alt="homepage" />
            </div>
          </div>
          {/* ----------------part 5-----  */}
          <div className="dyn-cont flex-column flex-sm-row gap-3">
            <div className="">
              <Image className="img-fluid" src={Didyouknow} alt="homepage" />
            </div>
            <div className="">
              <p className="fs-16 text_justify">
                The colours of the rainbow always go in the same colour: red,
                orange, yellow, green, blue, indigo and violet.
              </p>
            </div>
          </div>
        </div>
        </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------- */}

      {/* <section>
        <div className="products">
          <div className="prodBackground">
            <div class="heading1">
              <h2>Popular Picks</h2>
            </div>
          </div>
          <div class="product-container">
            <div class="product-box">
              <div className="product-img">
                <Image src={popular1} alt="homepage" />
              </div>
            </div>
            <div class="product-box">
              <div className="product-img">
                <Image src={popular1} alt="homepage" />
              </div>
            </div>
            <div class="product-box">
              <div className="product-img">
                <Image src={popular2} alt="homepage" />
              </div>
            </div>
          </div>
        </div>

       
      </section> */}
      <section className="">
        <div className="">
          <div className="prodBackground d-none d-md-block mb-md-5">
            <div class="heading1">
              <h2 className="text-white">Popular Picks</h2>
            </div>
          </div>
          <div className="color_red py-5 mb-5 mb-md-0 py-md-0">
            <div className="container">
              <h2 className="text-white mb-5 text-center d-md-none">
                Popular Picks
              </h2>

              <div className="popular_picks mb-5">
                <div className="card p-2 border-0">
                  <div className="card-body">
                    <div className="product-img">
                      <Image
                        className="img-fluid"
                        src={popular1}
                        alt="homepage"
                      />
                    </div>
                  </div>
                </div>
                <div className="card p-2 border-0">
                  <div className="card-body">
                    <div className="product-img">
                      <Image
                        className="img-fluid"
                        src={popular1}
                        alt="homepage"
                      />
                    </div>
                  </div>
                </div>
                <div className="card p-2 border-0">
                  <div className="card-body">
                    <div className="product-img">
                      <Image
                        className="img-fluid"
                        src={popular2}
                        alt="homepage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};




export async function getServerSideProps(context) {
    let {query , params:{index:_id} } = context

    // except pen , heighligher and  marker 
     
    let {result , status } = await getCategoryWiseProducts(_id)

    if(status && result.length>0){
        return {
            props: {
                cat_prd:result
            }
          }
    }else{
        return {
            redirect: {
                destination: "/",
                permanent: false,
              },
            };
        
    }
  



    
    
  }
  



export default ProductPage;
