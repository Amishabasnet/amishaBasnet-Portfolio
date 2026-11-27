import "./hero.css";
import profileImage from "../assets/profile.png";

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero-image">
                    <img src={profileImage} alt="Amisha Basnet" className="profile-img"/>
            </div>

            <div className="hero-content">

                <p className="hero-tag">
                    A FRONTEND DEVELOPER
                </p>

                <h1>
                    Hi, I'm <span>Amisha Basnet</span>
                    <br />
                    Frontend Developer
                </h1>

                <p className="hero-description">
                    I build modern, responsive and user-friendly
                    web applications using React and JavaScript.
                    I'm passionate about turning ideas into
                    beautiful digital experiences.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="primary-btn">
                        View My Projects
                    </a>

                    <a href="#contact" className="secondary-btn">
                        Contact Me
                    </a>
                </div>

                <div className="hero-socials">
                    <a
                        href="https://github.com/Amishabasnet"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>

            </div>

        </section>
    );
}

export default Hero;