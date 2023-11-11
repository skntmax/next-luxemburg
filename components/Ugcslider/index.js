import Imag11 from "public/assets/ugc-img.png";
import Imag12 from "public/assets/ugc-heart.webp";
import Imag13 from "public/assets/ugc-pen.jpg";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';
import style from './style.module.css'

export default class Carasol extends Component {
  render() {
    return (
      <div className={style.body}>
        <div className={style.container}>
          <div className={style.slideContainer}>
            <div className={style.slideImage}>
              <img className={style.img} src={Imag11.src} />
            </div>
            <div className={style.slideImage}>
              <img className={style.img} src={Imag11.src} />
            </div>
            <div className={style.slideImage}>
              <img className={style.img} src={Imag12.src} />
            </div>
            <div className={style.slideImage}>
              <img src={Imag13.src} />
            </div>
            <div className={style.slideImage}>
              <img src={Imag11.src} />
            </div>
            <div className={style.slideImage}>
              <img src={Imag12.src} />
            </div>
            <div className={style.slideImage}>
              <img src={Imag13.src} />
            </div>
            <div className={style.slideImage}>
              <img className="" src={Imag11.src} />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
