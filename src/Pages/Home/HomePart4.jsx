import React from 'react'
import  './HomeCss/Slider2.css'
export const HomePart4 = () => {
    const ImagesUrl = ["https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/scdsk.jpeg",
"https://logan.nnnow.com/content/dam/nnnow-project/11-oct-2021-/12OCT21-TILE-MUFE(1).jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/bendsk.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/05-jan-2022/TF_Logo(1).jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/03-jan-2022/se/Lancome_Logo(1).jpeg",
"https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/HDdesk.jpg"]

const ImagesUrl2 =["https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_BigByDefinitionMascara.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_OutrageousPlumpLipgloss.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/01-april-2022/Kayali_NOTB.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/18-april-2022/se/HudaBeauty_NOTB_GLOWISHrange.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/05-april-2022/MarcJacobs_NOTB.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/19-april-2022/Clarins_NOTB.jpg"
]

const ImagesUrl3 = [
    {
        image:"https://logan.nnnow.com/content/dam/nnnow-project/23-march-2022/se-blog/Sephora_MakingaLook_BlogCoverTileOption02.jpg",
        h4Tag:"MAKING A LOOK",
        ptag:"With Anaita Shroff Adajania"
    },
    {
        image:"https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG3.jpg",
        h4Tag:"7 MASKS amazing deals",
        ptag:"that'll save your skin from damage"
    },
    {
        image:"https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG4.jpg",
        h4Tag:"LONG LASTING MAKEUP? ",
        ptag:"Here's how we can help to heal skin!"
    }
]


  return (
    <div style={{textAlign:"Center"}}>
<div>
  <img width="83%" src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_4_DESK.jpg" alt="" />
  </div>
  <div id='div2ImageHome4'>
      {ImagesUrl.map((e,i)=>
      (
        <div key={i}  >
          <img src={e} alt="" width="85%" id='shadow' />
        </div>
      ))}
    </div>
    <br />
    <div>
  <img width="83%" src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_5_DESK.jpg" alt="" />
  </div>
<br />
  <div id='SixDiv'>
  {ImagesUrl2.map((e,i)=>
      (
        <div key={i}  >
          <img src={e} alt="" width="94%"  />
        </div>
      ))}

  </div>
  <br />
  <div>
  <img width="85%" src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_7_DESK.jpg" alt="" />
  </div>
  <br />
  <div className='lastDiv'>
     
      {ImagesUrl3.map((e,i)=>
      (
        <div key={i} style={{marginLeft:"2%"}} >
          <img src={e.image} alt="" width="94%" />
          <div id='lastText'>
          <h4 >{e.h4Tag}</h4>
         
           
         <p >{e.ptag}</p>
          </div>
           
          
    
        </div>

      ))}
     
    </div>
   </div>
  )
}
