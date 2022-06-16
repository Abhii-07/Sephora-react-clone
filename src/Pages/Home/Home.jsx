import React from 'react'
// import { Footer } from '../Footer/Footer'
// import { Header } from '../Header/Header'
// import { Navbar } from '../Navbar/Navbar'
import  './HomeCss/Slider2.css'
import { HomePart3 } from './HomePart3'
import { HomePart4 } from './HomePart4'



import { Slider1 } from './Slider1'
import { Slider2 } from './Slider2'
import { Slider3 } from './Slider3'




export const Home = () => {
  return (
   <>
 {/* <Header/> */}
 {/* <Navbar/> */}

<Slider1/>
 <Slider2></Slider2>
 <br /> <br />
 <HomePart3></HomePart3>
 <br />
 <Slider3></Slider3>
 <br />
 <HomePart4></HomePart4>
 <br />
 <br />
 {/* <ScrollButton></ScrollButton> */}
 
 
 


   {/* <Footer/> */}
   </>
  )
}
