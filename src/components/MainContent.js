import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Skills from "./Skills"

function MainContent() {
    return (
        <section className="main-content">
            <About />
            <Skills />
            <Projects />
            <Contact />
        </section>
    )
}

export default MainContent