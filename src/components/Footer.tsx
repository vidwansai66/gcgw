import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-brand">
                        <Link href="/" className="footer-logo">
                            <span>GOPAL CHAVAN GUNITING WORKS</span>
                        </Link>
                        <p>
                            Specialists in structural reinforcement, soil anchoring, and
                            professional guniting services across Hyderabad.
                        </p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services">Services</Link>
                            </li>
                            <li>
                                <Link href="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link href="/careers">Careers</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <p>Yousufguda, Hyderabad - 500045</p>
                        <p>Phone: +91 939857 7232</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Gopal Chavan Guniting Work. All Rights Reserved.</p>
                </div>
            </footer>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/919398577232?text=Hello%20Gopal%20Chavan%20Guniting%20Works,%20I%20have%20an%20inquiry."
                className="whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
        </>
    );
}
