import React from 'react'
import Images from './Images'
import hod from '../carousel_images/hod.jpg'
import '../styling/HOD.css'

const hod_image = {
    image : hod,
    alt : "photo",
    title : "HOD, CSE"
}

export default function HOD() {
  return (
    <div className='container-hod'>

      <div className='photo'>
        <Images image={hod_image}/>
      </div>

      <div className='data'>
        <h4>Mr. N. Satyanandaram</h4>
        <p>Mr. N.Satyanandaram, obtained MSIT degree from IIIT Hyderabad, 
                        and has joined the RGUKT RK VALLEY in 2011. He is having a total of 11 years of teaching experience in RK VALLEY. He is the IT infra 
                        coordinator along with the HOD of CSE department.</p>
      </div>
    </div>
  )
}
