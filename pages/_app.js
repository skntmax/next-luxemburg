import '../styles/globals.css'
import '../public/assets/css/hp.css'
import '../public/assets/css/prd.css'
import '../public/assets/css/product_animation.css'
import  '../styles/journeyandmap.css'
import React from 'react'
import Header from '@components/header'


function MyApp({ Component, pageProps , all_prd }) {
  
  
  return  <React.Fragment>
         <Header />
         
            <Component {...pageProps} /> 
  
      </React.Fragment>
  
}


export default MyApp
