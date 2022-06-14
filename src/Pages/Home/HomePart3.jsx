import React from 'react'
import  './HomeCss/Slider.css'


export const HomePart3 = () => {
    const imagesData = ["https://logan.nnnow.com/content/dam/nnnow-project/04-may-2022/se/Sephora_ContentP-story_Anti-AcneHeroes.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/04-may-2022/se/Sephora_ContentP-story_BrushUp.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/04-may-2022/se/Sephora_ContentP-story_FreshAF.jpg"]





  return (
    <div style={{textAlign:"Center"}}>
        <div><img width="82%" height="10%" src="https://logan.nnnow.com/content/dam/nnnow-project/22-march-2022/Loyalty_Strip_Desk.jpg" alt="" />
        <br />
        <br />
   
    <img width="82%" height="10%" src="https://logan.nnnow.com/content/dam/nnnow-project/13-april-2022/se/Sephora_HeaderStrip_ItsGettingHotInHeretext3310x240.jpg" alt="" />
        </div>
   
    <div id='divimageHome3' >
    {
    imagesData.map((e,i)=>
    (
      <div key={i}>
  <img src={e} alt="" width="93%" />
  </div>
    ))
  }

    </div>
<br />
<div><img width="83%" height="10%" src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_3_DESK.jpg" alt="" /></div>
    </div>
  )
}
