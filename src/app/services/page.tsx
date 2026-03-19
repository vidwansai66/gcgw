import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Services | GC Constructions Pvt Ltd",
  description:
    "GC Constructions Pvt Ltd is a platform connecting contractors, guniting machine owners, and construction workers. Instantly find available machines and skilled workers for construction projects.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Inner Hero Section */}
      <section className="inner-hero" style={{ backgroundImage: "url('/assets/hero-bg.png')" }}>
        <div className="container inner-hero-content animate-on-scroll">
          <h1 className="inner-hero-title">Our Services</h1>
          <p className="inner-hero-subtitle">Comprehensive construction and structural reinforcement solutions.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section bg-light">
        <div className="container">
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card animate-on-scroll">
              <div className="service-icon-wrapper">
                <i className="fas fa-building service-icon"></i>
              </div>
              <h3>Structural Reinforcement</h3>
              <p>Comprehensive strengthening of existing structures to enhance durability, load capacity, and lifespan.</p>
            </div>
            {/* Service 2 */}
            <div className="service-card animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="service-icon-wrapper">
                <i className="fas fa-spray-can service-icon"></i>
              </div>
              <h3>Shotcreting / Guniting</h3>
              <p>High-pressure concrete spraying for slope stabilization, retaining walls, and tunnel reinforcement.</p>
            </div>
            {/* Service 3 */}
            <div className="service-card animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="service-icon-wrapper">
                <i className="fas fa-anchor service-icon"></i>
              </div>
              <h3>Soil Anchoring</h3>
              <p>Stabilizing soil and rock formations to prevent collapse and secure deep excavations effectively.</p>
            </div>
            {/* Service 4 */}
            <div className="service-card animate-on-scroll">
              <div className="service-icon-wrapper">
                <i className="fas fa-tools service-icon"></i>
              </div>
              <h3>Concrete Repair</h3>
              <p>Professional restoration of spalled or damaged concrete surfaces using advanced binding techniques.</p>
            </div>
            {/* Service 5 */}
            <div className="service-card animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="service-icon-wrapper">
                <i className="fas fa-industry service-icon"></i>
              </div>
              <h3>Industrial Construction Work</h3>
              <p>Broad-scale civil infrastructure services tailored specifically for heavy industrial sectors.</p>
            </div>
            {/* Service 6 */}
            <div className="service-card animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="service-icon-wrapper">
                <i className="fas fa-paint-roller service-icon"></i>
              </div>
              <h3>Sand Blasting &amp; Painting</h3>
              <p>Thorough surface preparation and industrial-grade protective coatings for Mild Steel (M.S.) structures.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
