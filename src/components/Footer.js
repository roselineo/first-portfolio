import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-contact">
                <span><FaEnvelope /> 123 Ago Palace Way, Okota, Lagos.</span>
                <span><FaPhoneAlt /> +234 80123456789</span>
            </div>
            <div className="footer-social">
                <span><FaLinkedin /></span>
                <span><FaGithub /></span>
                <span><FaInstagram /></span>
                <span><FaFacebook /></span>
                <span><FaXTwitter /></span>
                <span><FaTiktok /></span>
            </div>
        </div>
    )
}

export default Footer