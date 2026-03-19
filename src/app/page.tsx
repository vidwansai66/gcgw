import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        id="home"
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20, 20, 20, 0.85), rgba(20, 20, 20, 0.85)), url('/assets/hero-bg.png')",
        }}
      >
        <div className="container hero-content animate-on-scroll">
          <h1 className="hero-title corporate-title" style={{ marginBottom: "20px" }}>
            GC Constructions Pvt Ltd
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              maxWidth: "800px",
              margin: "0 auto 40px auto",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Specialists in structural reinforcement, soil anchoring, and professional guniting services across Hyderabad.
          </p>
          <div className="hero-cta corporate-cta">
            <a href="tel:9398577232" className="btn btn-primary btn-large">
              Call Now <i className="fas fa-phone"></i>
            </a>
            <div className="hero-contact-info">
              <a href="tel:9398577232">
                <i className="fas fa-phone-alt"></i> +91 939857 7232
              </a>
              <span className="separator">|</span>
              <a href="mailto:gnchavan75@gmail.com">
                <i className="fas fa-envelope"></i> gnchavan75@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>About Us</h2>
            <div className="divider"></div>
          </div>
          <div className="about-content animate-on-scroll">
            <div className="about-text-card">
              <p>
                We specialize in <strong>Shot Creting, Soil Anchoring, Refractory Work, and
                  Sand Blasting &amp; Painting of M.S. Structures</strong> with
                high-quality workmanship and safety standards. With years of
                experience in the construction industry, we deliver durable
                structural solutions for residential, commercial, and industrial
                projects across Hyderabad.
              </p>
            </div>
            <div className="about-features">
              <div className="feature-item">
                <i className="fas fa-hard-hat feature-icon"></i>
                <h4>Experienced Construction Team</h4>
                <p>Skilled industry professionals</p>
              </div>
              <div className="feature-item">
                <i className="fas fa-shield-alt feature-icon"></i>
                <h4>Quality Workmanship</h4>
                <p>Strict safety and building protocols</p>
              </div>
              <div className="feature-item">
                <i className="fas fa-tractor feature-icon"></i>
                <h4>Reliable Machinery</h4>
                <p>Advanced construction equipment</p>
              </div>
              <div className="feature-item">
                <i className="fas fa-handshake feature-icon"></i>
                <h4>Trusted by Contractors</h4>
                <p>Enduring industry partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section bg-light">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>Our Services</h2>
            <div className="divider"></div>
          </div>
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card animate-on-scroll">
              <div className="service-icon-wrapper">
                <i className="fas fa-tools service-icon"></i>
              </div>
              <h3>Guniting</h3>
              <p>
                High-pressure concrete spraying for slope stabilization, retaining
                walls, and tunnel reinforcement.
              </p>
            </div>
            {/* Service 2 */}
            <div className="service-card animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="service-icon-wrapper">
                <i className="fas fa-spray-can service-icon"></i>
              </div>
              <h3>Shot Creting</h3>
              <p>
                Versatile concrete spraying for complex surfaces with high-density
                concrete application.
              </p>
            </div>
            {/* Service 3 */}
            <div className="service-card animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="service-icon-wrapper">
                <i className="fas fa-anchor service-icon"></i>
              </div>
              <h3>Soil Anchoring</h3>
              <p>
                Stabilizing soil and rock formations to prevent collapse and
                secure deep excavations effectively.
              </p>
            </div>
            {/* Service 4 */}
            <div className="service-card animate-on-scroll">
              <div className="service-icon-wrapper">
                <i className="fas fa-hammer service-icon"></i>
              </div>
              <h3>Concrete Repair</h3>
              <p>
                Professional restoration of spalled or damaged concrete surfaces
                using advanced binding techniques.
              </p>
            </div>
            {/* Service 5 */}
            <div className="service-card animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="service-icon-wrapper">
                <i className="fas fa-industry service-icon"></i>
              </div>
              <h3>Industrial Construction Work</h3>
              <p>
                Broad-scale civil infrastructure services tailored specifically for
                heavy industrial sectors.
              </p>
            </div>
            {/* Service 6 */}
            <div className="service-card animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="service-icon-wrapper">
                <i className="fas fa-paint-roller service-icon"></i>
              </div>
              <h3>Sand Blasting &amp; Painting</h3>
              <p>
                Thorough surface preparation and industrial-grade protective
                coatings for Mild Steel (M.S.) structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section gallery-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>Our Projects</h2>
            <div className="divider"></div>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item animate-on-scroll">
              <img src="/assets/gallery-1.png" alt="GC Constructions guniting machine construction work" loading="lazy" />
              <div className="gallery-overlay">
                <span>Shot Creting Work</span>
              </div>
            </div>
            <div className="gallery-item animate-on-scroll">
              <img src="/assets/gallery-2.png" alt="GC Constructions soil anchoring services" loading="lazy" />
              <div className="gallery-overlay">
                <span>Soil Anchoring</span>
              </div>
            </div>
            <div className="gallery-item animate-on-scroll">
              <img src="/assets/gallery-1.png" alt="GC Constructions shotcrete reinforcement construction" loading="lazy" />
              <div className="gallery-overlay">
                <span>Structural Reinforcement</span>
              </div>
            </div>
            <div className="gallery-item animate-on-scroll">
              <img src="/assets/gallery-2.png" alt="GC Constructions sand blasting and painting" loading="lazy" />
              <div className="gallery-overlay">
                <span>Surface Preparation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section bg-light">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>Contact Us</h2>
            <div className="divider"></div>
            <p>Get in touch with us for professional guniting and structural services.</p>
          </div>
          <div className="contact-content">
            <div className="contact-info animate-on-scroll">
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>
                    <a href="tel:9398577232">+91 939857 7232</a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>
                    <a href="mailto:gnchavan75@gmail.com">gnchavan75@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>
                    H.No. 8-3-228/678/1009/272,
                    <br />
                    Om Nagar, Shivam Papi Reddy Hills,
                    <br />
                    Yousufguda, Hyderabad - 500045
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-form animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <form action="#" method="POST" id="contactForm">
                <div className="form-group">
                  <input type="text" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="tel" id="mobile" placeholder="Your Mobile Number" required />
                </div>
                <div className="form-group">
                  <textarea id="message" rows={4} placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Send Message <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
