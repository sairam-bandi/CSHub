import React from 'react'
import '../styling/Home.css'
import image1 from '../carousel_images/1.jpg';
import image2 from '../carousel_images/2.jpg';
import image3 from '../carousel_images/3.jpg';
import image4 from '../carousel_images/4.jpg';
import image5 from '../carousel_images/5.jpg';
import chancellor from '../carousel_images/chancellor.jpg';
import vc from '../carousel_images/vc.jpg';
import director from '../carousel_images/director.jpg';

import ImageCarousel from './ImageCarousel';
import UpdateTicker from './UpdateTicker';
import Images from './Images';
import HOD from './HOD';

/** Images for carousel */
const images = [image1, image2, image3, image4, image5]

/** Authorities images with title */
const image = [
  {
    image : chancellor,
    alt : "Image ",
    title : "CHANCELLOR"
  },
  {
    image : vc,
    alt : "Image 1",
    title : "VC"
  },
  {
    image : director,
    alt : "Image ",
    title : "DIRECTOR"
  }
]

export default function Home() {
  return (

    /** Image Carousel component */
    <div className='container'>

       {/* Left part of body which contains image slider and HOD information  */}
      <div className='left-body'>

        <div className='carousel'>
          <ImageCarousel images={images} />  
        </div>

        <div className='hod-container'>
          <HOD/>
        </div>

      </div>

       {/* Right part of body which contains higher authorities and scrolling updates  */}
      <div className='right-body'>

        <div className='authorities'>
          <Images image={image[0]}/>
          <Images image={image[1]}/>
          <Images image={image[2]}/>
        </div>

        <div className='update-box'>
          <UpdateTicker/>
        </div>
      </div>
      
    </div>
  )
}
