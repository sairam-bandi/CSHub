import React from 'react'
import '../styling/ContactSingle.css'

export default function ContactSingle({data}) {
  return (
    <div className='Contact'>
      <h4 >{data.designation}</h4>
      <ul>
        <li> <strong>Name : </strong>{data.name}</li>
        <li> <strong>Email : </strong> {data.email}</li>
        <li> <strong>Contact : </strong> {data.contact}</li>
      </ul>
    </div>
  )
}
