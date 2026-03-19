import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About GC Constructions | Guniting & Infrastructure",
  description:
    "GC Constructions Pvt Ltd is a platform connecting contractors, guniting machine owners, and construction workers. Instantly find available machines and skilled workers for construction projects.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Inner Hero Section */}
      <section className="inner-hero" style={{ backgroundImage: "url('/assets/hero-bg.png')" }}>
        <div className="container inner-hero-content animate-on-scroll">
          <h1 className="inner-hero-title">About GC Constructions Pvt Ltd</h1>
          <p className="inner-hero-subtitle">
            Specialists in structural reinforcement, soil anchoring, and professional guniting services across India.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section bg-light">
        <div className="container">
          <div className="about-content animate-on-scroll" style={{ marginBottom: "60px" }}>
            <div className="about-text-card">
              <h2>Company Overview</h2>
              <p>
                We are a premier construction and infrastructure company specializing in{" "}
                <strong>Shot Creting, Soil Anchoring, Refractory Work, and Sand Blasting & Painting of M.S. Structures</strong>.
                With a strong foundation built on trust and high-quality workmanship, we deliver durable
                structural solutions for residential, commercial, and industrial projects.
              </p>
            </div>
            <div className="about-text-card">
              <h2>Our Vision</h2>
              <p>
                To be recognized as the foremost leader in specialized construction
                services, driving innovation and setting benchmarks for structural reliability and continuous
                growth.
              </p>
            </div>
            <div className="about-text-card">
              <h2>Our Mission</h2>
              <p>
                To execute projects with uncompromising commitment to quality,
                safety, and reliability. We aim to build enduring partnerships with our clients by consistently
                exceeding their expectations.
              </p>
            </div>
          </div>

          <div className="section-header animate-on-scroll">
            <h2>Why Choose Us</h2>
            <div className="divider"></div>
          </div>
          <div className="about-features">
            <div className="feature-item animate-on-scroll">
              <i className="fas fa-users feature-icon"></i>
              <h4>Experienced Team</h4>
              <p>Skilled professionals</p>
            </div>
            <div className="feature-item animate-on-scroll">
              <i className="fas fa-tractor feature-icon"></i>
              <h4>Reliable Machinery</h4>
              <p>Modern equipment</p>
            </div>
            <div className="feature-item animate-on-scroll">
              <i className="fas fa-shipping-fast feature-icon"></i>
              <h4>Fast Service</h4>
              <p>Timely completion</p>
            </div>
            <div className="feature-item animate-on-scroll">
              <i className="fas fa-award feature-icon"></i>
              <h4>Quality Construction</h4>
              <p>Premium standards</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
