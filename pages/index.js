import dynamic from 'next/dynamic';
import React from 'react';

const HomePage  =  dynamic(()=> import('components/HomePage') ,{ssr:false })

function App() {
   
 return  <HomePage />    

}

export default App;
