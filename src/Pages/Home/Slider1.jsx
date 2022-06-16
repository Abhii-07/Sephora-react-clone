import React from 'react'
import './HomeCss/Slider.css'
import { Carousel } from "react-bootstrap";

export const Slider1 = () => {
  const slideShowdata = [
    "https://logan.nnnow.com/content/dam/nnnow-project/11-april-2022/SC_Homepage_Beautypowerforall_Desktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_Topbanner_Newatsephoradesktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/04-may-2022/se/BenefitPlaytintTopBanner-Desktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/22-april-2022/ABH_TopBanner_ABHMattelipstickslaunchDESKTOP.gif",
    "https://logan.nnnow.com/content/dam/nnnow-project/04-may-2022/se/HD-Top-Banner-Desktop-1125x500px-Sephora.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/04-may-2022/se/Sephora_TopbannerDesktop_GildedGlam.jpg",
  ]
  const divImage = [
    "https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q1.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q2.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q3.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/10-may-2021/25MAR21_SEPHORA_BP_DESK_Q4.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q5.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/08-may-2021/7MAY21_SEPHORA_BP_Q6.jpg"
  ]
  const div2Image = [
    "https://logan.nnnow.com/content/dam/nnnow-project/20-april-2022/Clarins_BrandStoreTile1.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/20-april-2022/Clarins_BrandStoreTile3.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/20-april-2022/Clarins_BrandStoreTile2.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/20-april-2022/Clarins_BrandStoreTile4.jpg"
  ]


  return (
    <div >
      {/* <Carousel infinite={false}>
        {slideShowdata.map((e, i) =>
        (
          <Carousel.Item key={i} interval={3000} >
            <img
              // className="d-block w-100"
              src={e}
              alt="First slide"
              style={{ height: "80vh", width: "100%" }}
            />
          </Carousel.Item>
        ))}
      </Carousel> */}
      <div id="demo" class="carousel slide" data-ride="carousel">

        {/* <!-- Indicators --> */}
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        {/* <!-- The slideshow --> */}
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://logan.nnnow.com/content/dam/nnnow-project/11-april-2022/SC_Homepage_Beautypowerforall_Desktop.jpg" alt="Los Angeles" width="1100" height="500" />
          </div>
          <div class="carousel-item">
            <img src="https://logan.nnnow.com/content/dam/nnnow-project/11-april-2022/SC_Homepage_Beautypowerforall_Desktop.jpg" alt="Chicago" width="1100" height="500" />
          </div>
          <div class="carousel-item">
            <img src="https://logan.nnnow.com/content/dam/nnnow-project/11-april-2022/SC_Homepage_Beautypowerforall_Desktop.jpg" alt="New York" width="1100" height="500" />
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next" >
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>

  )
}
