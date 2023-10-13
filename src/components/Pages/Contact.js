import React from 'react';
import './Contact.css'
import NavBar from '../NavBar';
const Contact = () => {
  return (<>
    <NavBar />
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, please feel free to reach out to us through the following contact methods:</p>

      <div className="contact-details">
        <div className="contact-method">
          <h3>Email:</h3>
          <p>Wise@ECS.com</p>
        </div>

        <div className="contact-method">
          <h3>Phone:</h3>
          <p>+923-1234123</p>
        </div>
      </div>

      <p>We are here to help you with any inquiries you may have.</p>

      <h2>Terms and Policies</h2>
      <p>Before contacting us, please review our Terms of Service and Privacy Policy for information on our terms and policies.</p>
    </div>
  </>
  );
};

export default Contact;