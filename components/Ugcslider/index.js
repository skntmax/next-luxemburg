import Imag11 from "public/assets/ugc-cup.png";
import Imag12 from "public/assets/ugc-heart.webp";
import Imag13 from "public/assets/ugc-pen.jpg";
import React, { Component, createRef, useRef } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';
import style from './style.module.css'

export default class Carasol extends Component {
   constructor(props){
     
    super(props)
    const ref= createRef();
   }
   
  render() {
    return (
      <div className={style.body}>
          <h1 className={style.htext}>UGC</h1>
        <div className={style.imgcontainer}>
          <div className={style.slideContainer} ref={this.ref}>
            <div className={style.slideImage}>
              <img className={style.img} src={Imag11.src} />
            </div>
            <div className={style.slideImage}>
              <img className={style.img} src={Imag12.src} />
            </div>
            <div className={style.slideImage}>
              <img className={style.img} src={Imag13.src} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
