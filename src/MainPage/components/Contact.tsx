import React, { useState, FormEvent } from "react";
import "./Contact.scss";
import Header from "./Header";
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
    const [successSend, setSuccessSend] = useState<boolean>(false);
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [responseMessage, setResponseMessage] = useState<string>('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (firstname && lastname && email && message) {
            const templateParams = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                message: message,
            };

            emailjs.send(
                "service_a40ar9a", 
                "template_28rsulm", 
                templateParams, 
                "9gMJST79sud6gFby3"
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setResponseMessage('Thank you for your message!');
                setSuccessSend(true);
            }, (err) => {
                console.error('FAILED...', err);
                setResponseMessage('Failed to send the message. Please try again later.');
                setSuccessSend(false);
            });
        } else {
            setResponseMessage('Please fill in all fields.');
            setSuccessSend(false);
        }
    };

    return (
        successSend ? (
           <div className="potfolio_contact_wrap">
               <Header />
                <div className="potfolio_contact">
                <div className="potfolio_contact_message">
                    <div className="potfolio_contact_message_heading">Thanks for the message!</div>
                    <div className="potfolio_contact_message_content">I will contact you soon!</div>
                </div>
               </div>
           </div>
            ) : (
            <div className="potfolio_contact_wrap">
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
                                rows={5}
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
            </div>
        )
    );
}

export default Contact;
