import React from 'react'
import contact from '../Data/contact.json'
import github from '../Assets/github.svg'
import linkedIn from '../Assets/linkedIn.svg'
import facebook from '../Assets/facebook.svg'


export default function Contact() {
  return (
    <div className="contact" id="Contact">
        <div className="heading">
            <h2>Contact me</h2>
        </div>
        <div className="paragraph">
            <p>Here is my contact information if you are interested in starting a collaboration.</p>
        </div>
        <div className="content">
        <ul>
            {
                contact.map (contactData => {
                    return(
                        <div className="contaier" key={contactData.id}>
                            <li>
                                    <img src={contactData.icon} alt="contact icon" />
                                    <span>{contactData.detail}</span>
                            </li>
                        </div>
                    )
                })
            }
            </ul>
        </div>

            <footer>
                <div className="footer">
                    <div className="socialmedia">
                    <li><a href="https://github.com/rayya89"><img src={github} alt="github icon" /></a></li>
                    <li><a href="https://www.linkedin.com/in/raya-altarabulsi-043410116"><img src={linkedIn} alt="linkedin icon" /></a></li>
                    <li><a href="https://www.facebook.com/rio.tarab"><img src={facebook} alt="facebook icon" /></a></li>
                    </div>
                    <small> &copy; {new Date().getFullYear()} &bull; Raya Altarabulsi</small>
                </div>
            </footer>

    </div>
  )
}
