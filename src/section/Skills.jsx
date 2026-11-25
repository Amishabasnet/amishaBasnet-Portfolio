import "./Skills.css";
function Skills(){

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
    ]

    return (
        <section className="skills" id="skills">
            <div className="skills-container">

                <p className="section-tag">MY TECHNICAL SKILLS</p>

                <h2>
                    Technologies I <span>Work With</span>
                </h2>

                <p className="skills-description">
                    Here are some of the technologies and tools I use to build modern and responsive web applications.
                </p>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <span>{skill}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )

}
export default Skills;