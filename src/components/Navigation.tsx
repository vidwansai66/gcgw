"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on navigation
    useEffect(() => {
        setIsMenuActive(false);
    }, [pathname]);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="container nav-container layout-centered">
                <Link href="/" className="brand-link logo-left">
                    <div className="logo">
                        <img
                            src="/assets/logo.png"
                            alt="Gopal Chavan Guniting Works Logo"
                            className="corporate-logo"
                        />
                        <div className="logo-text">
                            <span className="company-name">Gopal Chavan Guniting Works</span>
                            <span className="tagline">Construction & Infrastructure</span>
                        </div>
                    </div>
                </Link>
                <nav className="nav-menu">
                    <ul className={`nav-list ${isMenuActive ? "active" : ""}`}>
                        <li>
                            <Link href="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="nav-link">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="nav-link">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="nav-link">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/careers" className="nav-link">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={toggleMenu}>
                    <i className={`fas ${isMenuActive ? "fa-times" : "fa-bars"}`}></i>
                </div>
            </div>
        </header>
    );
}
