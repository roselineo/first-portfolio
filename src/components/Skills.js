import "./Skills.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import htmlImage from "../images/html.png"
import cssImage from "../images/css.png"
import jsImage from "../images/javascript.png"
import otherImage from "../images/oil.jpg"

function Skills() {
    let settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <section className="skills" id="skills">
            <Slider {...settings}>
                <div className="slide-item">
                    <img src={htmlImage} className="slide-image" alt="skill" />
                </div>
                <div className="slide-item">
                    <img src={cssImage} className="slide-image" alt="skill" />
                </div>
                <div className="slide-item">
                    <img src={jsImage} className="slide-image" alt="skill" />
                </div>
                <div className="slide-item">
                    <img src={otherImage} className="slide-image" alt="skill" />
                </div>
            </Slider>
        </section>
    )
}

export default Skills