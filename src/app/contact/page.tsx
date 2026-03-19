import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact GC Constructions Pvt Ltd",
  description:
    "GC Constructions Pvt Ltd is a platform connecting contractors, guniting machine owners, and construction workers. Instantly find available machines and skilled workers for construction projects.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Inner Hero Section */}
      <section className="inner-hero" style={{ backgroundImage: "url('/assets/hero-bg.png')" }}>
        <div className="container inner-hero-content animate-on-scroll">
          <h1 className="inner-hero-title">Contact Us</h1>
          <p className="inner-hero-subtitle">Get in touch with our team of professionals.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section bg-light">
        <div className="container">
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
