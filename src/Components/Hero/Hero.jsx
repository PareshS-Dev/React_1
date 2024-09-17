import './Hero.css'
import amazon from '../../assets/amazon.png'
import flipkart from '../../assets/flipkart.png'
import hero  from '../../assets/hero-image.png'

const Hero = () => {
  return (
   <>
<div className="main">
<div className="mleft">
   <div className="main-text">
    <h1>YOUR FEET <br /> DESERVE <br /> THE BEST</h1>
   </div>
   <div className="main-pa">
<p>your feet deserve the best and we're here to <br /> help you with our shoe's , we make best the shoe's  <br /> in the world. </p>
   </div>
   <div className="button">
    <button className='Shop'>Shop Now</button>
    <button className='Category'>Category</button>
   </div>
   <div className="Ava">
    <p>Also Available On</p>
   </div>
   <div className="partner">
    <img src={flipkart} alt="" />
    <img src={amazon} alt=""  className='amazon'/>
    
   </div>
   </div>
   <div className="mright">
<div className="img">
<img src={hero} alt="" />
</div>
   </div>
</div>
   </>
  )
}

export default Hero