import "./About.css";

function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <p className="section-tag">GET TO KNOW ME</p>

                <h2>
                    About <span>Me</span>
                </h2>

                <div className="about-content">
                    <div className="about-intro">
                        <p className="about-greeting">
                            Hello! I'm <span>Amisha Basnet</span>
                        </p>

                        <h3>
                            I enjoy turning ideas into
                            <span> interactive web experiences.</span>
                        </h3>
                    </div>

                    <div className="about-description">
                        <p>
                            I'm a computing graduate and aspiring frontend developer
                            passionate about building clean, responsive and
                            user-friendly websites.
                        </p>

                        <p>
                            I work with HTML, CSS, JavaScript and React. Through
                            projects like ShopEase, I'm strengthening my skills in
                            component-based development, routing and building
                            practical user experiences.
                        </p>

                        <p>
                            I'm currently looking for an opportunity to grow as a
                            frontend developer, contribute to real projects and
                            learn from an experienced team.
                        </p>
                    </div>
                </div>

                <div className="about-highlights">
                    <div className="about-card">
                        <span className="about-card-number">01</span>
                        <h4>Frontend Development</h4>
                        <p>
                            Building responsive interfaces with React,
                            JavaScript, HTML and CSS.
                        </p>
                    </div>

                    <div className="about-card">
                        <span className="about-card-number">02</span>
                        <h4>Continuous Learning</h4>
                        <p>
                            Improving my skills through hands-on projects
                            and consistent practice.
                        </p>
                    </div>

                    <div className="about-card">
                        <span className="about-card-number">03</span>
                        <h4>Problem Solving</h4>
                        <p>
                            Enjoying the process of breaking down problems
                            and building useful solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;