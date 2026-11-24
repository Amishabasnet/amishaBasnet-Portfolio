import "./About.css";

function About() {
    return(
        <section className="about" id="about">
            <div className="about-content">
                <p className="section-tag">GET TO KNOW ME</p>

                <h2>About <span>Me</span></h2>

                <p className="about-description">
                    I'm a Computing graduate and an aspiring Frontend Developer passionate about building modern and user-friendly web applications.

                    I enjoy working with HTML, CSS, JavaScript and React to turn ideas into interactive digital experiences.
                </p>

                <p className="about-description">
                    Currently, I'm improving my React skills by building practical projects and exploring real-world frontend development.
                </p>

                <a href="#contact" className="about-btn">Let's Work Together</a>
            </div>
        </section>
    )
}
export default About;