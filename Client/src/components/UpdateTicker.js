import React, { useState, useEffect } from 'react';
import '../styling/UpdateTicker.css'
import axios from 'axios'

const UpdateTicker = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:5000/hod/updates')
      .then(response => {
        const newUpdates = response.data;
        setUpdates(newUpdates);
      })
      .catch(error => {
        console.log("Error fetching details", error)
      })

    // setUpdates(newUpdates); 
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate the updates so that the first one becomes the last one.
      setUpdates((prevUpdates) => {
        const newUpdates = [...prevUpdates];
        newUpdates.push(newUpdates.shift());
        return newUpdates;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [updates]);

  return (
    <div>
        <div className="update-ticker">
        <h4 className='heading'>UPDATES</h4>
        {updates.map((update) => (
            <div key={update.id} className="update-ticker__item">
            {update.text}
            </div>
        ))}
        </div>
    </div>
    
  );
};

export default UpdateTicker;