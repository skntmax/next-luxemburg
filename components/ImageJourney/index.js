import React from 'react'
import frame from 'public/assets/journey_imgs/jr-frame.jpg'
import jr_one_old from 'public/assets/journey_imgs/jr_one_old.png'
import jr_one from 'public/assets/journey_imgs/jr_one.png'
import jr__three from 'public/assets/journey_imgs/jr__three.png'
import jr__five from 'public/assets/journey_imgs/jr_five.png'
import jr__four from 'public/assets/journey_imgs/jr_four.png'


// import jr_one from 'public/assets/journey_images/jr_one_old.png'
// import jr_two from 'public/assets/journey_images/jr_two.png'
// import jr_three from 'public/assets/journey_images/jr__three.png'
// import jr_four from 'public/assets/journey_images/jr_four.jpg'
// import jr_five from 'public/assets/journey_images/jr_five.jpg'


import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

// or all tools are exported from the "all" file (excluding members-only plugins):
import {MotionPathPlugin } from "gsap/all";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 

function TimeLine(){
   
   return (
        <React.Fragment>
        <div className='position-relative'>
        <div className='l1'>
       
           <img className='' src={jr_one_old.src} style={{width:"100%" , height:'100%' , }} />

        </div>
        <div className='l2'>
          <img className='' src={jr_one.src} style={{width:"100%" , height:'100%'}} />
        </div>
        <div className='l3'>
         <img className='' src={jr__three.src} style={{width:"100%" , height:'100%'}} />
        </div>
        <div className='l4'>
          <img className='' src={jr__five.src} style={{width:"100%" , height:'100%'}} />
        </div>
        <div className='l5'>
          <img className='' src={jr__four.src} style={{width:"100%" , height:'100%'}} />
        </div>
        <div className=''>
          <img src={frame.src} style={{width:"100vw" , height:'100vh'}}/>
        </div>
        </div>
        </React.Fragment>
      )
}
export default TimeLine;
