import emailjs from "@emailjs/browser";
import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    };

    
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: form.name,
                email: form.email,
                subject: form.subject,
                message: form.message
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        console.log("Email sent:", response);

        alert("Message sent successfully!");

        setForm({
            name: "",
            email: "",
            subject: "",
            message: ""
        });

    } catch (error) {
        console.error("EmailJS status:", error.status);
        console.error("EmailJS message:", error.text);
        alert(`Failed to send: ${error.text || "Check console"}`);
    }
};


    return (
        <section className="contact" id="contact">
            <div className="contact-container">

                <p className="section-tag">GET IN TOUCH</p>

                <h2>Contact <span>Me</span></h2>

                <p className="contact-description">
                    Have a project in mind or an opportunity?
                    Feel free to reach out. I'd love to hear from you.
                </p>

                <div className="contact-content">

                    <div className="contact-info">
                        <h3>Let's Connect</h3>

                        <p>
                            I'm open to frontend development
                            internships and exciting opportunities.
                        </p>

                        <div className="contact-item">
                            <span>Email</span>
                            <a href="mailto:amishabasnet005@gmail.com">
                                amishabasnet005@gmail.com
                            </a>
                        </div>

                        <div className="contact-item">
                            <span>GitHub</span>
                            <a href="https://github.com/Amishabasnet"
                                target="_blank" rel="noreferrer">
                                GitHub Profile
                            </a>
                        </div>

                        <div className="contact-item">
                            <span>LinkedIn</span>
                            <a href="https://linkedin.com/"
                                target="_blank" rel="noreferrer">
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h3>SEND ME A MESSAGE</h3>

                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@gmail.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />

                        <label>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="How can I help?"
                            value={form.subject}
                            onChange={handleChange}
                            required
                        />

                        <label>Message</label>
                        <textarea
                            name="message"
                            placeholder="Your message"
                            rows="5"
                            value={form.message}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">
                            SEND MESSAGE
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default Contact;
