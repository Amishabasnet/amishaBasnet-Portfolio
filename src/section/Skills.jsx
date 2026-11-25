import "./Skills.css";

function Skills() {
    const skills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "React Router",
        "Responsive Design",
        "Git",
        "GitHub",
        "UI/UX Design",
        "Wireframing"
    ];

    return (
        <section className="skills" id="skills">
            <div className="skills-container">
                <p className="section-tag">WHAT I WORK WITH</p>

                <h2>
                    My <span>Skills</span>
                </h2>

                <p className="skills-description">
                    The technologies and tools I use to build responsive,
                    user-friendly web experiences.
                </p>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={skill}>
                            <span className="skill-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3>{skill}</h3>

                            <span className="skill-accent"></span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;