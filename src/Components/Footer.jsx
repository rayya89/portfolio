import "../Styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div><footer>
    <div className="footer-content">
      <ul className="socialmedia">
        {/* Duplicated code, this can be extracted into a component to make it easy to maintain */}
        <li>
          <a href="https://github.com/rayya89">
            <FontAwesomeIcon className="social-icon" icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/raya-altarabulsi-043410116">
            <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/rio.tarab">
            <FontAwesomeIcon className="social-icon" icon={faFacebook} />
          </a>
        </li>
      </ul>

      <small>
        &copy;{new Date().getFullYear()}&bull;Raya Altarabulsi
      </small>
    </div>
  </footer></div>
  )
}
