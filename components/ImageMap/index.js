import React , {useState } from 'react'

import Image5 from "public/assets/journey/road_journey.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

// or all tools are exported from the "all" file (excluding members-only plugins):
import { MotionPathPlugin } from "gsap/all";
import Image from 'next/image';

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 


function index() {
 
    

    const Visible =(boxid , bannerImage)=>{
         
        let img1 = document.getElementById(boxid) 
         img1.style.cursor="pointer"
        let image_visible = document.getElementById(bannerImage)
        image_visible.innerHTML="Setting a line-height the same value ."
        gsap.to(image_visible , {
         cursor:"pointer",
         duration: 1,
         width: bannerImage=='jr_circle3'?80:
         bannerImage=='jr_circle4'?60 :
         bannerImage=='jr_circle5'?90:
         160 ,

          
         height: bannerImage=='jr_circle3'?80:bannerImage=='jr_circle4'?60:
         bannerImage=='jr_circle5'?90:
         160,          
         top: 20,
         
         scale:2,
        opacity:1,
        textAlign: "center",
        fontSize:"10px",
        verticalSlign: "middle",
        display: "flex",
        alignItems:"center",
        justifyContent: "center"
         }) 
         
        }
 
 
        const Unhide = (boxid , bannerImage)=>{
         let image_visible = document.getElementById(bannerImage)
         gsap.to(image_visible , {
          duration: 1,
          width: 0,
          height: 0,
          top: 150,
          scale:2,
          opacity:0,
         }) 
        }
 
         
        
     return (
   
         <div style={{
         position:"relative",
       
     }}>
 
      <div  style={{
         position:"absolute",
         zIndex:1,
         width:800,
          height:600,
     }}>
 
 
     <div id="jr_img1" onMouseEnter={()=> Visible('jr_img1' , "jr_circle")}   onMouseLeave={()=> Unhide('jr_img1' , "jr_circle")}   >
     <div id='jr_circle' > </div>  </div>
 
 
     <div id="jr_img2" onMouseEnter={ ()=> Visible("jr_img2" ,"jr_circle2")}   onMouseLeave={()=> Unhide('jr_img2' , "jr_circle2")}     >
     <div id='jr_circle2' > </div>  </div>
 
 
 
     <div id="jr_img3" onMouseEnter={ ()=> Visible("jr_img3" ,"jr_circle3")}   onMouseLeave={()=> Unhide('jr_img3' , "jr_circle3")}     >
     <div id='jr_circle3' > </div>  </div>
 
 
     <div id="jr_img4" onMouseEnter={ ()=> Visible( "jr_img4" ,"jr_circle4" )}   onMouseLeave={()=> Unhide('jr_ig4' , "jr_circle4")}     >
     <div id='jr_circle4' > </div>  </div>



     <div id="jr_img5" onMouseEnter={ ()=> Visible( "jr_img5" ,"jr_circle5" )}   onMouseLeave={()=> Unhide('jr_ig5' , "jr_circle5")}     >
     <div id='jr_circle5' > </div>  </div>
  
  
       </div>
    //  <Image src={Image5}
     style={{
         position:"absolute"
     }}
      
     />  
     </div>
   )

}

export default index
