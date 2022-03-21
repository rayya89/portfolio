import React from "react";
import contact from "../Data/contact.json";
import "../Styles/Contact.css";

// Component is too long -1
export default function Contact() {
  return (
      <div className="contact" id="Contact">
          <h2>Contact me</h2>
        <div className="layout-2">
          <div className="paragraph">
            <p>
              Here is my contact information if you are interested in starting a
              collaboration.
            </p>
          </div>
          <div className="content">
            <ul className="contact-list">
              {/* Nesting -1 */}
              {/* Put the code outside the return to make it easy to read */}
              {contact.map((contactData) => {
                return (
                  <div key={contactData.id}>
                    <li className="contact-item">
                      <img
                        className="contact-icon"
                        src={contactData.icon}
                        alt="contact icon"
                      />
                      <span className="contact-info">{contactData.detail}</span>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
  );
}
