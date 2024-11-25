import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.png'
import location_icon from '../../assets/location_icon.png'
import phone_icon from '../../assets/phone_icon.png'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Contact Me</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Get In Touch</h1>
                <p>My Contact Information:</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>liam7ford@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone_icon} alt="" /> <p>(415)306-6674</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Boulder, Colorado</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact