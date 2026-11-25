
import "./Projects.css";

function Projects() {
    const projects = [
        {
            id: 1,
            title: "ShopEase - E-commerce Website",
            description:
                "A responsive e-commerce application built with React. Users can browse products, search and filter items, manage their shopping cart, add products to wishlist, and complete checkout.",
            technologies: [
                "React",
                "JavaScript",
                "CSS",
                "React Router",
                "Local Storage"
            ],
            github: "https://github.com/Amishabasnet/shopease-frontend",
            demo: "#"
        }
    ];

    return (
        <section className="projects" id="projects">
            <div className="projects-container">

                <p className="section-tag">MY RECENT WORK</p>

                <h2>
                    Featured <span>Projects</span>
                </h2>

                <p className="projects-description">
                    Here are some projects I've built while
                    learning and improving my frontend
                    development skills.
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>

                            <div className="project-image">
                                <span>ShopEase</span>
                            </div>

                            <div className="project-info">
                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <div className="project-tech">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index}>{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Projects;
