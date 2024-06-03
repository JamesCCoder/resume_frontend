import React,{useState} from "react";
import "./Contact.scss";

import Header from "./Header";

import emailjs from 'emailjs-com';

import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../../emailjs.config';

const Contact = () =>{

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

      const handleSubmit = (event) => {
        event.preventDefault();

        if (firstname && lastname && email && message) {
            const templateParams = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                message: message,
            };

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setResponseMessage('Thank you for your message!');
            }, (err) => {
                console.error('FAILED...', err);
                setResponseMessage('Failed to send the message. Please try again later.');
            });
        } else {
            setResponseMessage('Please fill in all fields.');
        }
    };
  return(
      <>
        <Header />
           <div className="potfolio_contact">
               <div className="potfolio_contact_message">
                    <div className="potfolio_contact_message_heading">Let's work together</div>
                    <form className="potfolio_contact_message_form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder="Your Firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />

               
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Your Lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />

                     
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message here"
                            required
                        ></textarea>

                        <button className="potfolio_contact_message_button" type="submit">Submit</button>
                    </form>
                 <div id="response-message" style={{ color: responseMessage.includes('Thank') ? 'green' : 'red' }}>
                {responseMessage}
            </div>
               </div>
           </div>
    </>
  )
}

export default Contact;