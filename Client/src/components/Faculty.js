import React from 'react';
import '../styling/Faculty.css'
import hod from '../carousel_images/hod.jpg'
import chandu from '../faculty/chandu.jpg'
import harinadha from '../faculty/harinadha.jpg'
import ratna from '../faculty/ratna.jpg'
import ravi from '../faculty/ravi.jpg'
import sandeep from '../faculty/sandeep.jpg'
import vinod from '../faculty/vinod.jpg'
import santhosh from '../faculty/santhosh.jpg'
const Faculty = () => {

  const facultyList = [
    {image:hod,name: 'Mr. N. Satyanandaram', joinDate: '04 Aug 2011', designation: 'PGDIT, MSIT', email: 'satyanandaram@rguktrkv.ac.in', experience: '12 years'},
    {image:harinadha,name: 'Mr. P. Harinadha', joinDate: '06 July 2014', designation: 'M.Tech (University of Hyderabad)', email: 'pharinadha@rguktrkv.ac.in', experience: '9 years'},
    {image:sandeep,name: 'Mr. T. Sandeep Kumar Reddy', joinDate: '07 July 2014', designation: 'M.Tech(JNTU-A)', email: 'tsandeepkumarreddy@rguktrkv.ac.in', experience: '9 years'},
    {image:chandu,name: 'Mr. N. Chandra Shekar', joinDate: '2 Feb 2011', designation: 'M.Tech(University of Hyderabad)', email: 'chandrashekar@rguktrkv.ac.in', experience: '12 years'},
    {image:ratna,name: 'Mrs. Ratna Kumari.Ch', joinDate: '13 March 2010', designation: 'M.Tech(University of Hyderabad)', email: 'ratnakumarich@rguktrkv.ac.in', experience: '13 years'},
    {image:ravi,name: 'Mr. Penugonda Ravi Kumar', joinDate: '17 September 2011', designation: 'M.E.(IISc Bangalore)', email: 'raviua138@rguktrkv.ac.in', experience: '12 years'},
    {image:vinod,name: 'Mr. K Vinod Kumar', joinDate: '16 June 2014', designation: 'M.Tech (JNTU ATP)', email: 'kvinodkumar@rguktrkv.ac.in', experience: '9 years'},
    {image:santhosh,name: 'Mr. P. Santhosh Kumar', joinDate: '16 June 2014', designation: 'M.Tech', email: 'psanthoshkumar223@rguktrkv.ac.in', experience: '9 years'}
    
  ];

  return (
    <div className="faculty-details">
      <h2>FACULTY - Department of CSE</h2>
      {facultyList.map((faculty, index) => (
        <div key={index} className="faculty-card">
          <div className='image'> 
            <img src={faculty.image} alt='faculty'/>
          </div>

          <div className='info'> 
          <h3>{faculty.name}</h3>
          <p className='information'><h5>Education: </h5>{faculty.designation}</p>
          <p className='information'><h5>Email: </h5>{faculty.email}</p>
          <p className='information'><h5>Join Date: </h5>{faculty.joinDate}</p>
          <p className='information'><h5>Experience:</h5> {faculty.experience}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Faculty;
