import React, { useEffect, useState } from 'react'
import './HomeSlider.css'
export const Carousel = ({banner}) => {
  console.log('banner length is', banner.length)
  console.log( 'banner length minus is', banner.length - 1)
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  let timeOut = null;

  useEffect(()=>{
   
    timeOut = autoplay && setTimeout(()=>{
      slideRight();
    }, 2500)
  })
  
  const slideLeft  =()=>{
    setCurrent( current === 0 ? banner.length - 1: current - 1);
  }
  const slideRight = ()=>{
    setCurrent( current === banner.length - 1 ?  0 : current + 1);
    console.log(current)
  }
  console.log('carousel Image:', banner)
  return (
    <>
<section className='main-slider'>
<div className="carousel" onMouseEnter={()=>{setAutoplay(false); clearTimeout(timeOut)}} onMouseLeave={()=>{setAutoplay(true)}}>
   <div className="carousel_wrapper">
   {banner.map((image, index)=>{
      console.log('index:', index)
        return <div key={index} className={index === current ? "carousel_card carousel_card-active" :"carousel_card"}>
          <img className="class_image" src={image.image} alt='' />
           <div className="card_overlay">
             <h2 className="card_title">{image.title}</h2>
           </div>
         </div>
     
         
    })}
    <div className="carousel-arrow-left" onClick={slideLeft}>&lsaquo;</div>
    <div className="carousel-arrow-right" onClick={slideRight}>&rsaquo;</div>
    <div className="carousel_pagination">
      {banner.map((_,index)=>{
        return <div key={index} className={index === current ? "pagination_dot pagination_dot-active" :"pagination_dot"} onClick={()=>{
          setCurrent(index)
        }}>
           </div>
      })}
    </div>
   </div>
   </div>
    </section>
    </>
    
   
  )
}
export default Carousel;