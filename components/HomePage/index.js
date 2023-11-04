import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import React, { useEffect, useRef, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";

import marker_pen from "public/assets/marker.png";
import { Tween } from "react-gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// import { TweenMax, Power3 } from 'gsap';
import { gsap } from "gsap";
// import Image from 'public/assets/homeBanner.jpg'

import worldMap from "public/assets/map.png";
import Image1 from "public/assets/Products School.png";
import Image2 from "public/assets/Products Art.png";
import Image3 from "public/assets/Products Offc.png";
import Image4 from "public/assets/World Map.png";
import Image5 from "public/assets/Luxor Journey.jpg";
import Image6 from "public/assets/enviro-rrr.png";
import Carasol from "components/carasoul";
import ArtGallery from "public/assets/images/Art Gallery.jpg";
import ImageContainer from "components/ImageContainer";
import I1 from "public/assets/images/Look Book 1.jpg";
import I2 from "public/assets/images/Look Book 2.jpg";
import I3 from "public/assets/images/Look Book 3.jpg";
import Client from "public/assets/client.png";
import Imag11 from "public/assets/ugc-img.png";
import Imag12 from "public/assets/ugc-heart.webp";
import Imag13 from "public/assets/ugc-pen.jpg";
import Image14 from "public/assets/org11.png";
import Image15 from "public/assets/org12.png";
import Image16 from "public/assets/org3.png";
import Image17 from "public/assets/images/Did you Know.png";
import Image18 from "public/assets/images/Partner.png";
import Image19 from "public/assets/certi1.png";
import Image20 from "public/assets/certi2.png";
import Image21 from "public/assets/certi3.png";
import Image22 from "public/assets/certi4.png";
import Image23 from "public/assets/award1.png";
import Image24 from "public/assets/award2.png";
import Image25 from "public/assets/award3.png";
import Image26 from "public/assets/Lineart.png";
import Image27 from "public/assets/pennib.png";
import Link from "next/link";
import { useRouter } from "next/router";

import Header from "@components/header";

gsap.registerPlugin(ScrollTrigger);

function App(props) {
  const [all_prdcts, set_all_prdcts] = useState(props.all_prdcts);
  let router = useRouter();
  let prd_pen = useRef();

  useEffect(() => {
    let text_div = document.querySelectorAll(".home-text");
    let sections = document.querySelectorAll(".home1-img img");
    let new_launch = document.querySelectorAll("new_launch");

    gsap.to(sections, {
      duration: 2,
      x: -150,
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: sections,
        toggleActions: "restart pause resume reset",

        onToggle: (self) => console.log("toggled, isActive:", self.isActive),
        start: "top 70%",
        end: "bottom 50%",
      },
    });

    gsap.from(text_div, {
      x: -150,
      stagger: 0.2, // 0.1 seconds between when each ".box" element starts animating
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: text_div,
        onToggle: (self) => console.log("toggled, isActive:", self.isActive),
        start: "top 70%",
        end: "bottom 50%",
      },
    });

    gsap.to(text_div, {
      x: 70,
      opacity: 1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: text_div,
        onToggle: (self) => console.log("toggled, isActive:", self.isActive),
        start: "top 70%",
        end: "bottom 50%",
      },
    });

    productBackGround();
    newLaumch();
  }, []);

  function productBackGround() {
    let prd_bc = document.querySelectorAll(".product-box");

    let tl = gsap.timeline({
      paused: true,

      scrollTrigger: {
        trigger: prd_bc,
        toggleActions: "restart pause resume reset",
        onToggle: (self) => console.log("toggled, isActive:", self.isActive),
        start: "top 80%",
        end: "bottom 20%",
      },
    });

    tl.to(prd_bc, {
      duration: 1,
      opacity: 1,
      ease: "expo.inOut",
    });

    tl.from(
      prd_bc,
      {
        duration: 1,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.inOut",
      },
      "-=0.5"
    );

    tl.reverse();

    // tl.from(links, {
    //   duration: 1,
    //   opacity: 0,
    //   y: 20,
    //   stagger: 0.1,
    //   ease: 'expo.inOut',
    // }, "-=0.5");

    // tl.reverse();

    // ham.addEventListener('click', () => {
    //   tl.reversed(!tl.reversed());
    // });

    // gsap.to(prd_bc ,
    //      {
    //                 x:-220 ,
    //             duration:2,
    //             width:0,
    //             opacity:5,
    //      } ,

    //       {
    //         x:200,

    //      opacity: 1,
    //     duration:2,
    //     scrollTrigger: {
    //         trigger: prd_bc,
    //         toggleActions:"restart pause resume reset",
    //         onToggle: self => console.log("toggled, isActive:", self.isActive),
    //         start: "top 70%",
    //         end: "top 30%",
    //         markers:true
    //       },

    //    })
  }

  function newLaumch() {
    let new_launch = document.querySelectorAll(".new_launch");
    let pen_marker_line = document.querySelectorAll(".pen_marker_line");

    let marker_marks = document.querySelectorAll(".new_launch_marker img");

    gsap.to(marker_marks, {
      duration: 2,
      x: 400,
      scrollTrigger: {
        trigger: marker_marks,
        toggleActions: "restart pause resume reset",
        onToggle: (self) => console.log("toggled, isActive:", self.isActive),
        start: "top 70%",
        end: "bottom 20%",
      },
    });

    gsap.fromTo(
      pen_marker_line,
      {
        duration: 2,
        width: 0,
        opacity: 5,
      },

      {
        duration: 2,
        width: 400,
        height: "100%",
        opacity: 0,
        borderRadius: "  0 0 50% 50% ",
        height: "fit-content",
        backgroundColor: "rgba(99, 97, 7, 0.8)",
        zIndex: -2,
        scrollTrigger: {
          trigger: pen_marker_line,
          toggleActions: "restart pause resume restart",

          onToggle: (self) => console.log("toggled, isActive:", self.isActive),
          start: "top 70%",
          end: "bottom 50%",
        },
      }
    );
  }

  function drawPen(pen_div, pen_image_div, pen_draw_div, pen_colour) {
    let penDiv = document.querySelectorAll(pen_div);
    let Image = document.querySelectorAll(pen_image_div);
    let marker_line = document.querySelectorAll(pen_draw_div);

    gsap.to(penDiv, {
      //  backgroundColor:"red",
      width: 300,
      scale: 1,
      dirat1ion: 2,
    });

    gsap.to(Image, {
      //  backgroundColor:"red",
      x: 100,
      width: 300,
      height: "86%",
      scale: 1,
      dirat1ion: 2,
    });

    gsap.to(marker_line, {
      //  backgroundColor:"red",
      borderTop: `8px solid ${pen_colour}`,
      width: 100,
      scale: 1,
      dirat1ion: 2,
    });
  }

  function removeDrawPen(pen_div, pen_image_div, pen_draw_div, pen_colour) {
    let penDiv = document.querySelectorAll(pen_div);
    let Image = document.querySelectorAll(pen_image_div);
    let marker_line = document.querySelectorAll(pen_draw_div);

    gsap.to(penDiv, {
      backgroundColor: "white",
      scale: 1,
      diration: 0,
      width: 245,
    });

    gsap.to(Image, {
      //  backgroundColor:"red",
      x: 0,
      width: 245,
      height: "86%",
      scale: 1,
      dirat1ion: 2,
      yoyo: true,
    });

    gsap.to(marker_line, {
      //  backgroundColor:"red",
      borderTop: `8px solid ${pen_colour}`,
      x: 0,
      width: 0,
      scale: 1,
      dirat1ion: 2,
    });
  }

  function visibleProduct(cl_name, prd_image, current_div_class) {
    let prd_img_hover = document.querySelectorAll(cl_name);

    gsap.to(prd_image, {
      zIndex: 20,
      opacity: 1,
      scale: 1,
      diration: 2,
      display: "flex",
      top: "100%",
    });

    gsap.to(`${prd_image} img`, {
      scale: 1,
      scale: 1,
      height: "90px",
      width: "100%",
    });
  }

  function HiddenVisibleProduct(cl_name, prd_image, current_div_class) {
    let prd_img_hover = document.querySelectorAll(cl_name);

    gsap.to(prd_image, {
      scale: 1,
      diration: 2,
      opacity: 0,
      top: "50%",
      display: "none",
    });
  }

  return (
    <>
      <Carasol />

      <section className="py-5 overflow-hidden">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-6 mb-3 home-text">
              <div className="home-text-head">
                <h1>Luxor All</h1>
                <h1>Around The World</h1>
              </div>

              <div className="home-text-patra">
                <p>
                  Luxor is a pioneer and a brand leader in the writing
                  instrument industry with a significant presence in the
                  international market. Luxor is exporting products to more than
                  106 countries across the globe including USA, Australia,
                  Russia, UK, Europe, UAE and many other markets. Our range of
                  products include - Kids Markers, Highlighters, Eco-friendly
                  Stationeries, O‹ce & Personal Stationeries.
                </p>
              </div>

              <div>
                <a href="#" className="btn-bg">
                  Explore
                </a>
              </div>
            </div>
            <div className="col-md-6 mb-3 home1-img ">
              <Image src={worldMap} className="img-fluid ms-md-5" alt="Map" />
            </div>
          </div>
        </div>
      </section>

      <section className="launch">
        <div class="heading">
          <div
            style={{
              display: "flex",
              width: "100vw",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              className="new_launch_marker"
              style={{
                position: "relative",
                width: "100px",
                zIndex: "1",
              }}
            >
              <div className="pen_marker_line"></div>
            </span>

            <h3 className="fs-40 fw-700 text_black  ">New Launches</h3>
          </div>
        </div>

        <div className="carouselItem">
          <div
            className="posterBlock1"
            ref={prd_pen}
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock1",
                ".posterBlock1 img",
                ".marker_line1",
                "red"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock1",
                ".posterBlock1 img",
                ".marker_line1",
                "white"
              )
            }
          >
            <LazyLoadImage
              src={"https://luxorpen.com/images/bp/xonox-bp/black-m.jpg"}
              id="img1"
              alt="Image Alt"
            />
            {/* <Image height={1000} width={1000} src="https://luxorpen.com/images/bp/xonox-bp/black-m.jpg" /> */}
            <div className="textBlock">
              <div className="marker_line1"> </div>
              <span className="title">Ball / Gell Pens</span>
            </div>
          </div>

          <div
            className="posterBlock2"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock2",
                ".posterBlock2 img",
                ".marker_line2",
                "green"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock2",
                ".posterBlock2 img",
                ".marker_line2",
                "white"
              )
            }
          >
            <Image
              height={1000}
              width={1000}
              alt="homepage"
              src="https://luxorpen.com/images/hl/textliter-hl/text-li-green-m.jpg"
            />
            <div className="textBlock">
              <div className="marker_line2"> </div>
              <span className="title">Highliter</span>
            </div>
          </div>
          <div
            className="posterBlock3"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock3",
                ".posterBlock3 img",
                ".marker_line3",
                "blue"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock3",
                ".posterBlock3 img",
                ".marker_line3",
                "white"
              )
            }
          >
            <Image
              height={1000}
              width={1000}
              alt="homepage"
              src="https://luxorpen.com/images/wb/wb-450/wb450-blue.jpg"
            />
            <div className="textBlock">
              <div className="marker_line3"> </div>
              <span className="title">White Board Markers</span>
            </div>
          </div>
          <div
            className="posterBlock4"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock4",
                ".posterBlock4 img",
                ".marker_line4",
                "black"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock4",
                ".posterBlock4 img",
                ".marker_line4",
                "white"
              )
            }
          >
            <Image
              height={1000}
              width={1000}
              alt="homepage"
              src="https://luxorpen.com/images/pm/pm-1222/pm1222-blue.jpg"
            />
            <div className="textBlock">
              <div className="marker_line4"> </div>
              <span className="title">Permanent Markers</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="products">
          <div className="prodBackground">
            <div class="">
              <h2 className="fs-40 fw-600 text-center mt-4 mt-md-5 text-white">
                Products
              </h2>
            </div>
          </div>

          {/* <div class="product-container">
             

             <div className="prd_container"  >
                {all_prdcts.length>0 && all_prdcts.map(ele =>{
                    return <React.Fragment>
                    <div className ="product-box  prd_card " onClick={()=> router.push("product/"+ele._id ) } >
                    <h3>{ ele._doc?ele._doc.name:ele.name }</h3>
                    <div className="product-img" >
                        <Image  src={Image1} alt={ele.name} />
                    </div>

                </div>

                    </React.Fragment>
                    })}
            </div>


              

          </div> */}

          <section className="py-5">
            <div className="products_list">
              <div className="row flex-nowrap overflow-auto px-4 ">
                {all_prdcts.length > 0 &&
                  all_prdcts.map((ele) => {
                    let image_file = ele._doc
                      ? process.env.NEXT_PUBLIC_BASE_URL +
                        "/" +
                        ele._doc.master_folder_name +
                        "/" +
                        ele._doc.file_name
                      : process.env.NEXT_PUBLIC_BASE_URL +
                        "/" +
                        ele.master_folder_name +
                        "/" +
                        ele.file_name;
                    return (
                      <React.Fragment>
                        <div
                          className="col-12 col-sm-6 mt-4 mt-md-0 col-md-4 col-lg-3 mb-3 "
                          onClick={() => router.push("product/" + ele._id)}
                        >
                          <div className="card h-100 shadow border-0 cards_hover">
                            <div className="card-body">
                              <h3 className="fs-20 text-center">
                                {ele._doc ? ele._doc.name : ele.name}
                              </h3>
                              <div className="text-center">
                                <Image
                                  className="banner_img"
                                  src={image_file}
                                  width={300}
                                  height={200}
                                  alt={ele.name}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>
          </section>

          {/* <div className="product-btn">
            <a href="#" className="btn-box">
              All Products
            </a>
          </div> */}
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="mt-4 text-center fs-40 fw-700">
            Exported To Over 106+ Countries
          </h2>
          <div className=" mt-5 mb-4">
            <Image
              style={{ width: "100", height: "100" }}
              className=" img-fluid h-100"
              src={Image4}
              alt="Map"
            />
          </div>
        </div>
      </section>

      <section className="py-5">
        <div class="container-fluid p-0">
          <h2 className="mt-4 text-center fs-40 fw-700">Luxor’s Journey</h2>
          <div className="mt-5">
            <Image
              className="img-fluid w-100"
              src={Image5}
              alt="Luxor Journey"
            />
          </div>
        </div>
      </section>

      <section className="py-5">
        <div class="container">
          <h2 className="fs-40 fw-600 text-center my-5 text_green">
            Let's save the <br /> environment with Luxor
          </h2>

          <p className="text_grey  fs-20 text_justify">
            Evolution of humans has done nothing but harm to our planet, the
            number of non-biodegradable dumps we have made is turning our planet
            hostile and non-biodegradable & plastic products are the prime
            reasons behind our planet's vulnerability. Acknowledging the harm we
            have caused to our planet has made everyone quite aware & active
            about following ways to endure a life without causing loss to our
            surroundings and therefore the demand for eco-friendly products is
            on rise, especially in the international market.
            <br />
            Luxor International takes a step ahead with an e‘ort & aim to help
            our planet breathe well, by adding stationeries that are made of
            recycled materials to our range of drawing and writing instruments
          </p>
          <div className="">
            <Image className="img-fluid w-100" src={Image6} alt="Re Use" />
          </div>
        </div>
      </section>
      <section className="py-5 position-relative">
        <div className="container-fluid p-0">
          <Image className="img-fluid" src={ArtGallery} alt="Art Gallery" />
          <button className="btn Art_gallery_button text-white fs-16">
            Art Gallery
          </button>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="fs-40 text_lightred fw-600 text-center">Look Book</h2>

          {/* <div className=""> */}

          <div className="row mt-4">
            <div className="col-md-4 mb-3 col-lg-4 position-relative">
              <Image className="img-fluid rounded" src={I1} alt="look Book" />
              <div className="text_lookbook">
                <p className="fs-20 text-white fw-600">
                  Up Your Presentation Game
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3 col-lg-4 position-relative">
              <Image src={I2} className="img-fluid rounded" alt="look Book" />
              <div className="text_lookbook">
                <p className="fs-20 text-white fw-600 ">
                  Spark your creativity with Luxor pens
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3 col-lg-4 position-relative">
              <Image className="img-fluid rounded" alt="look Book" src={I3} />
              <div className="text_lookbook">
                <p className="fs-20 text-white fw-600 ">
                  How to choose the best highlighter pen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row flex-nowrap overflow-auto my-4">
            <div className="col-sm-6 col-md-4 mb-3 ">
              <Image
                className="img-fluid rounded p-4"
                src={Imag11}
                alt="homepage"
              />
            </div>

            <div className="col-sm-6  col-md-4 mb-3 ">
              <Image
                className="img-fluid rounded p-4"
                src={Imag12}
                alt="homepage"
              />
            </div>

            <div className="col-sm-6 col-md-4 mb-3 ">
              <Image
                className="img-fluid rounded p-4"
                src={Imag13}
                alt="homepage"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------organisation container---------------------------------------------- */}

      <section className="py-5">
        <div className="container">
          <h2 className="fs-40 text-center mb-4 fw-600 text_lightred">
            A Woman-Led Organization
          </h2>
          <div className="d-flex justify-content-center mb-2">
            <button className="btn btn_secondary me-3 mb-2 fs-16 fw-600 text-white">
              Photos
            </button>
            <button className="btn btn_secondary-outline me-3 mb-2 fs-16 fw-600 tetx_lightred ">
              Videos
            </button>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 mb-2">
              <Image className="img-fluid" src={Image14} alt="homepage" />
            </div>

            <div className="col-md-4 mb-2">
              <Image className="img-fluid" src={Image15} alt="homepage" />
            </div>

            <div className="col-md-4 mb-2">
              <Image className="img-fluid" src={Image16} alt="homepage" />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------about luxor-------------------------------------- */}

      <section className="py-5 mb-4 bg_lightred">
        <div className="container">
          <h2 className="fs-40 text-white text-center mb-4 fw-600">
            What People Say About Luxor
          </h2>
          <div className="row mt-5">
          <div className="col-md-2 col-lg-3"></div>
            <div className="col-md-8 col-lg-6 mb-3">
              <div className="card  border-0 shadow-light">
                <div className="card-body p-4">
                  <p className="fs-20 mb-4 text_justify">
                    With 20 fit and dexterous pens ready and raring to work in
                    your favor impelling you into writing magical albeit gelled
                    ink-less lines on page after treasured page in an
                    increasingly digital-writing driven world, what more can you
                    ask for?
                  </p>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Image
                        className="img-fluid rounded-pill"
                        src={Client}
                        alt="homepage"
                      />
                    </div>
                    <div className="align-self-center">
                      <p className="fs-20 mt-4  mb-2 text-end fw-600">John</p>
                      <p className="fs-16 mt-2 text-end fw-600">
                        -Director, GH Coms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-3"></div>
           
          </div>
        </div>
      </section>

      {/* ------------------------------------did you know section-------------------------------------- */}

      {/* <section className="dyk-container">
        <div className="dyk-banner">
          <div className="dyk-banner1">
            <Image height={450} width={1000} src={Image17} alt="homepage" />
          </div>
        </div>
        
        <div className="dyk-scroll">
          <h4>
            Luxor products have a presence across more than 106 countries.
          </h4>

          <div className="arrow-btn-left">
            <button></button>
          </div>

          <div className="arrow-btn-left">
            <button></button>
          </div>
        </div>
      </section> */}

      {/* ----------------------------------------footer section------------------------------------------- */}

      <section className="footer">
        <div className="footer-heading1">
          <h2>Be Our Partner/Reseller</h2>
        </div>

        <div className="partner-cont">
          <Image height={450} width={1000} src={Image18} alt="homepage" />
        </div>

        <div className="footer-btn">
          <div className="footer-btn1">
            <button>Know More</button>
          </div>
          <div className="footer-btn2">
            <button>Register</button>
          </div>
        </div>

        {/* --------------------------------- */}

        <div className="certi-heading">
          <h2>Certificates</h2>
        </div>

        <div className="background">
          <div className="back-img">
            <Image height={450} width={1000} src={Image26} alt="homepage" />
          </div>
          <div className="certi-img-cont">
            <div className="certi-img-card">
              <Image height={450} width={1000} src={Image19} alt="homepage" />
            </div>

            <div className="certi-img-card">
              <Image height={450} width={1000} src={Image20} alt="homepage" />
            </div>

            <div className="certi-img-card">
              <Image height={450} width={1000} src={Image21} alt="homepage" />
            </div>

            <div className="certi-img-card">
              <Image height={450} width={1000} src={Image22} alt="homepage" />
            </div>
          </div>

          {/* ----------------------------------- */}

          <div className="award-heading">
            <h2>Awards & Recognitions</h2>
          </div>

          <div className="award-img-cont">
            <div className="pen-pointer">
              <Image src={Image27} alt="homepage" />
            </div>

            <div className="award-img">
              <Image src={Image23} alt="homepage" />
            </div>

            <div className="award-img">
              <Image src={Image24} alt="homepage" />
            </div>

            <div className="award-img">
              <Image src={Image25} alt="homepage" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
