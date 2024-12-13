import '../styling/Facilities.css'
import hpc from '../carousel_images/hpc.jpg'
import mad from '../carousel_images/mad.jpg'
import seminar from '../carousel_images/seminar.jpg'

import React from 'react';

const facilitiesData = [
  {
    id: 1,
    name: 'MAD LAB',
    description: 'The Mobile Application Development (MAD) Laboratory provides resources for research in the areas of mobile application development, user interface design, and usability testing. The lab has advanced hardware and software for mobile application development on various platforms such as Android and iOS.',
    image: mad,
  },
  {
    id: 2,
    name: 'High Performance Computing LAB',
    description: 'The High Performance Computing (HPC) Laboratory provides resources for research in the areas of parallel and distributed computing, scientific computing, and computational science. The lab has a high-performance computing cluster with advanced processors and accelerators, and a variety of software for scientific computing and data analysis.',
    image: hpc,
  },
  {
    id: 3,
    name: 'Seminar Halls',
    description: 'The department has several seminar halls of various sizes and configurations for academic and research activities. These halls are equipped with audiovisual systems, projectors, and other equipment for presentations and discussions.',
    image: seminar,
  },
];

const Facilities = () => {
  return (
    <div className="facilities">
      <h2>FACILITIES OF DEPARTMENT</h2>
      <ul>
        {facilitiesData.map((facility) => (
          <li key={facility.id}>
            <h3>{facility.name}</h3>
            <img src={facility.image} alt={facility.name} />
            <p>{facility.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Facilities;
