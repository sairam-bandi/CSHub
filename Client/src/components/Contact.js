import React from "react";
import '../styling/Contact.css'
import ContactSingle from "./ContactSingle";
const ContactUs = () => {

  const contact = {
    designation : "Head of the Department",
    name : "Mr. Satyanandaram N",
    email : "satyanandaram@rguktrkv.ac.in",
    contact : "9490348741"
  }

  const it = {
    designation : "Coordinator for IT Infra",
    name : "Mr. Satyanandaram N",
    email : "satyanandaram@rguktrkv.ac.in",
    contact : "9490348741"
  }

  const placement_coordinator ={
    designation : "Associate Departmental Placement Incharge",
    name : "Mr. K. Vinod Kumar",
    email : "kvinodkumar@rguktrkv.ac.in",
    contact : "9182724318"
  }

  const lab_incharge ={
    designation : "Lab In-Charge",
    name : "Mr. T. Sandeep Kumar Reddy",
    email : "tsandeepkumarreddy@rguktrkv.ac.in",
    contact : "7934724387"
  }

  const exam_incharge = {
    designation : "Departmental Examination In-Charge",
    name : "Mr. P. Harinadha",
    email : "pharinadha@rguktrkv.ac.in",
    contact : "8934725412"
  }
  return (
    <div className="contacts">
      <h3>CONTACT DETAILS</h3>
      <div className="contact-box">
        <ContactSingle data={contact}/>
      </div>
      <div className="contact-box">
        <ContactSingle data={placement_coordinator}/>
      </div>
      <div className="contact-box">
        <ContactSingle data={it}/>
      </div>
      <div className="contact-box">
        <ContactSingle data={exam_incharge}/>
      </div>
      <div className="contact-box">
        <ContactSingle data={lab_incharge}/>
      </div>
      
    </div>
  );
};

export default ContactUs;
