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
         super(props)
          this.state ={
             image_style:{

                objectFit: "contain",
             }
          }
    }
     
    render() {  
        return (  
            <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} interval={2000}>  
                    {/* <img className='img-fluid'  src={Home_Page_Banner} />   */}
                    <Image    alt="banner1"    className='img-fluid'  src={Home_Page_Banner2} />  
                    <Image   alt="banner2" className='img-fluid'  src={Home_Page_Banner3} />  
            </Carousel>  
        );  
    }  
  }
  