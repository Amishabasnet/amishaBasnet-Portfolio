import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p>
                © {new Date().getFullYear()} Amisha Basnet. All rights reserved.
            </p>

            <a href="#home">Back to top</a>
        </footer>
    )
}
export default Footer;