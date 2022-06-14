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
      <Carousel infinite={false}>
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
      </Carousel>


      {/* <br />
      <div id='divimage'>
        {
          divImage.map((e, i) =>
          (
            <div key={i}>
              <img src={e} alt="" width="88%" height="100%" />
            </div>
          ))
        }
      </div>
      <br /> <br />
      <div>
        <img width="85%" height="10%" src="https://logan.nnnow.com/content/dam/nnnow-project/10-feb-2022/SephoraBrandoftheweektext3310x240.jpg" alt="" />
      </div>
      <br />
      <div>
        <img width="81%" src="https://logan.nnnow.com/content/dam/nnnow-project/21-april-2022/HPBanner-Desktop.jpg" alt="" />
      </div>
      <br />
      <div id='div2Image'>
        {div2Image.map((e, i) =>
        (
          <div key={i}>
            <img src={e} alt="" width="93%" />
          </div>
        ))}
      </div>
      <br />
      <div>
        <img width="85%" height="10%" src="https://logan.nnnow.com/content/dam/nnnow-project/16-march-2022/justlanded.jpg" alt="" />
      </div> */}
    </div>

  )
}
