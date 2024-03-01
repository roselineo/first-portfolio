import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"

function MainContent() {
    return (
        <section className="main-content">
            <About />
            <Skills />
            <Projects />
        </section>
    )
}

export default MainContent