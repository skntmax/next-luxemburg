// import React from 'react'
import frame from 'public/assets/journey_imgs/jr-frame.jpg'
import jr_one_old from 'public/assets/journey_imgs/jr_one_old.png'
import jr_one from 'public/assets/journey_imgs/jr_one.png'
import jr__three from 'public/assets/journey_imgs/jr__three.png'
import jr__five from 'public/assets/journey_imgs/jr_five.png'
import jr__four from 'public/assets/journey_imgs/jr_four.png'
import B1 from 'public/assets/journey_imgs/B1.jpg'
import B2 from 'public/assets/journey_imgs/B2.jpg'
import B3 from 'public/assets/journey_imgs/B3.jpg'
import style from './style.module.css'
import p1 from 'public/assets/journey_imgs/p1.png'
import p2 from 'public/assets/journey_imgs/p2.png'
import p3 from 'public/assets/journey_imgs/p3.png'
// import p4 from 'public/assets/journey_imgs/p4.png'

// // import jr_one from 'public/assets/journey_images/jr_one_old.png'
// // import jr_two from 'public/assets/journey_images/jr_two.png'
// // import jr_three from 'public/assets/journey_images/jr__three.png'
// // import jr_four from 'public/assets/journey_images/jr_four.jpg'
// // import jr_five from 'public/assets/journey_images/jr_five.jpg'


// import gsap from "gsap";

// // get other plugins:
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Flip from "gsap/Flip";
// import Draggable from "gsap/Draggable";

// // or all tools are exported from the "all" file (excluding members-only plugins):
// import {MotionPathPlugin } from "gsap/all";

// // don't forget to register plugins
// gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 

// function TimeLine(){

//    return (
//         <React.Fragment>
//         <div className='position-relative'>
//         <div className='l1'>
//            <img className='' src={jr_one_old.src} style={{width:"100%" , height:'100%' , }} />
//         </div>
//         <div className='l2'>
//           <img className='' src={jr_one.src} style={{width:"100%" , height:'100%'}} />
//         </div>
//         <div className='l3'>
//          <img className='' src={jr__three.src} style={{width:"100%" , height:'100%'}} />
//         </div>
//         <div className='l4'>
//           <img className='' src={jr__five.src} style={{width:"100%" , height:'100%'}} />
//         </div>
//         <div className='l5'>
//           <img className='' src={jr__four.src} style={{width:"100%" , height:'100%'}} />
//         </div>
//         <div className=''>
//           <img src={frame.src} style={{width:"100vw" , height:'100vh'}}/>
//         </div>
//         </div>
//         </React.Fragment>
//       )
// }
// export default TimeLine;





import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';
import Home_Page_Banner from 'public/assets/Home Page Main Banner/Home Page Banner.jpg'
import Home_Page_Banner2 from 'public/assets/Home Page Main Banner/Home page BAanner 1.jpg'
import Home_Page_Banner3 from 'public/assets/Home Page Main Banner/Home page baner 2 .jpg'
import Image from 'next/image';

export default class Carasol extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageStyle: {
        width: '100%',
      }
    };

  }

  render() {
    return (
      <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} interval={2000}>
        {/* <img className='img-fluid'  src={Home_Page_Banner} />   */}
        <div className='carousel_banner' style={this.state.imageStyle}>
          {/* <Image    alt="banner1"    className='img-fluid'  src={Home_Page_Banner2} /> */}
          <div className='position-relative'>
            <div className={style.l1}>
              <img className='' src={jr_one_old.src} style={{ width: "100%", height: '100%', border: "5px solid #CC454C", borderRadius: "50%"}} />
            </div>
            <div className={style.l2}>
              <img className='' src={jr_one.src} style={{ width: "100%", height: '100%', border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className={style.l3}>
              <img className='' src={jr__three.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className={style.l4}>
              <img className='' src={jr__five.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>,
            <div className={style.l5}>
              <img className='' src={jr__four.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className=''>
              <img src={B1.src} style={{ width: "100vw", height: '100vh', }} />
            </div>
          </div>
        </div>
        <div className='carousel_banner' style={this.state.imageStyle}>
          {/* <Image   alt="banner2" className='img-fluid'  src={Home_Page_Banner3} />   */}
          <div className='position-relative'>
            <div className={style.l1}>
              <img className='' src={p1.src} style={{ width: "100%", height: '100%', border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className={style.l2}>
              <img className='' src={p3.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%"  }} />
            </div>
            <div className={style.l3}>
              <img className='' src={p2.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%"  }} />
            </div>
            <div className={style.l4}>
              <img className='' src={p3.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%"  }} />
            </div>
            <div className={style.l5}>
              <img className='' src={jr__four.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%"  }} />
            </div>
            <div className=''>
              <img src={B2.src} style={{ width: "100vw", height: '100vh'  }} />
            </div>
          </div>
        </div>
        <div className='carousel_banner' style={this.state.imageStyle}>
          {/* <Image   alt="banner2" className='img-fluid'  src={Home_Page_Banner3} />   */}
          <div className='position-relative'>
            <div className={style.l1}>
              <img className='' src={jr_one_old.src} style={{ width: "100%", height: '100%', border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className={style.l2}>
              <img className='' src={jr_one.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%"  }} />
            </div>
            <div className={style.l3}>
              <img className='' src={jr__three.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%"  }} />
            </div>
            <div className={style.l4}>
              <img className='' src={jr__five.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%"  }} />
            </div>
            <div className={style.l5}>
              <img className='' src={jr__four.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%"  }} />
            </div>
            <div className=''>
              <img src={B3.src} style={{ width: "100vw", height: '100vh' }} />
            </div>
          </div>
        </div>
      </Carousel>
    );
  }
}
