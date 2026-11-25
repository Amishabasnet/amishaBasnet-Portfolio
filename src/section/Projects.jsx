import "./Projects.css";

function Projects() {
    const projects = [
        {
            id: 1,
            title: "ShopEase",
            category: "E-commerce Website",
            description:
                "A responsive e-commerce application built with React. Users can browse products, search and filter items, manage their shopping cart, add products to a wishlist, and complete checkout.",
            technologies: [
                "React",
                "JavaScript",
                "CSS",
                "React Router",
                "Local Storage"
            ],
            github: "https://github.com/Amishabasnet/shopease-frontend",
            demo: "" // Add your deployed project URL here
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
                    Here are some projects I've built while learning
                    and improving my frontend development skills.
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project.id}>
                            <div className="project-image">
                                <span className="project-number">01</span>
                                <span className="project-preview-title">
                                    ShopEase
                                </span>
                                <span className="project-preview-subtitle">
                                    E-commerce Website
                                </span>
                            </div>

                            <div className="project-info">
                                <p className="project-category">
                                    {project.category}
                                </p>

                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <div className="project-tech">
                                    {project.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View Code <span>↗</span>
                                    </a>

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Live Demo <span>↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;