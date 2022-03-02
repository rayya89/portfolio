import React from 'react'
import contact from '../Data/contact.json'
import '../Styles/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import { faFacebook } from '@fortawesome/free-brands-svg-icons' 


export default function Contact() {
  return (
      <div>
    <div className="contact" id="Contact">
        <div className="heading">
            <h2>Contact me</h2>
        </div>
        <div className="paragraph">
            <p>Here is my contact information if you are interested in starting a collaboration.</p>
        </div>
        <div className="content">
        <ul className="contact-list">
            {
                contact.map (contactData => {
                    return(
                        <div key={contactData.id}>
                            <li className="contact-item">
                                    <img className="contact-icon" src={contactData.icon} alt="contact icon" />
                                    <span className="contact-info">{contactData.detail}</span>
                            </li>
                        </div>
                    )
                })
            }
            </ul>
        </div>
        </div>
            <footer>
                <div className="footer-content">
                    <ul className="socialmedia">
                        <li><a href="https://github.com/rayya89"><FontAwesomeIcon className="social-icon" icon={faGithub}/></a></li>
                        <li><a href="https://www.linkedin.com/in/raya-altarabulsi-043410116"><FontAwesomeIcon className="social-icon" icon={faLinkedin}/></a></li>
                        <li><a href="https://www.facebook.com/rio.tarab"><FontAwesomeIcon className="social-icon" icon={faFacebook}/></a></li>
                    </ul>

                    <small> &copy; {new Date().getFullYear()} &bull; Raya Altarabulsi</small>
                    </div>
            </footer>


</div>
  )
}
