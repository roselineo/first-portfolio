import "./Contact.css"
import contactImage from "../images/oil.jpg"

function Contact() {
    return (
        <section className="contact">
            <h1>Contact Me</h1>
            <div className="contact-details">
                <div className="contact-image">
                    <img src={contactImage} alt="contact" />
                </div>
                <div className="contact-form">
                    <form>
                        <div className="input-div">
                            {/* <label for="name">Name</label> */}
                            <input type="text" id="name" name="name" className="input-item" placeholder="Name" />
                        </div>
                        <div className="input-div">
                            {/* <label for="email">Email</label> */}
                            <input type="email" id="email" name="email" className="input-item" placeholder="Email" />
                        </div>
                        <div className="input-div">
                            {/* <label for="subject">Subject</label> */}
                            <input type="text" id="subject" name="subject" className="input-item" placeholder="Subject" />
                        </div>
                        <div className="input-div">
                            {/* <label for="message">Message</label> */}
                            <textarea id="message" name="message" className="input-item" placeholder="Message" rows="10"></textarea>
                        </div>
                        <div className="input-btn">
                            <input type="submit" value="Send" className="send" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact