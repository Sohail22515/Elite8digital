import React from 'react';
import './contact.css'; 
import Swal from 'sweetalert2';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d7f301c9-912b-4f92-b63e-e810ad626ffd");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          Swal.fire({
            title: "Message Sent Successfully!",
            icon: "success",
            draggable: true
          });
          event.target.reset();
        } else {
          Swal.fire({
            title: "Message Failed to Send",
            icon: "error",
            draggable: true
          });
        }
    };

    return (
        <div className="contact">
        <h1 className="contactTitle">Contact Us</h1>
        <p className="contactSubtitle">
            If you have any questions or feedback, feel free to reach out to us!
        </p>
        <form onSubmit={onSubmit} className="contactForm">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required />

            <button type="submit">Submit</button>
        </form>
        </div>
    );
};

export default Contact;
