import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | GC Constructions Pvt Ltd",
  description: "View our portfolio of successful construction and structural reinforcement projects.",
};

export default function ProjectsPage() {
  return (
    <main>
      {/* Inner Hero Section */}
      <section className="inner-hero" style={{ backgroundImage: "url('/assets/hero-bg.png')" }}>
        <div className="container inner-hero-content animate-on-scroll">
          <h1 className="inner-hero-title">Our Projects</h1>
          <p className="inner-hero-subtitle">Explore our portfolio of completed projects across various sectors.</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="gallery-grid">
            {/* Project 1 */}
            <div className="gallery-item animate-on-scroll">
              <img
                src="/assets/gallery-1.png"
                alt="GC Constructions Commercial Building Reinforcement Hyderabad"
                loading="lazy"
              />
              <div className="gallery-overlay" style={{ flexDirection: "column", textAlign: "center", padding: "20px" }}>
                <span style={{ fontSize: "1.4rem", marginBottom: "10px" }}>Hyderabad Metro</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 400, marginBottom: "5px" }}>
                  <i className="fas fa-map-marker-alt"></i> Hyderabad, TS
                </span>
                <span style={{ fontSize: "0.8rem", fontWeight: 300 }}>Extensive structural strengthening and guniting.</span>
              </div>
            </div>
            {/* Project 2 */}
            <div className="gallery-item animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <img src="/assets/gallery-2.png" alt="GC Constructions Highway Tunnel Guniting Pune" loading="lazy" />
              <div className="gallery-overlay" style={{ flexDirection: "column", textAlign: "center", padding: "20px" }}>
                <span style={{ fontSize: "1.4rem", marginBottom: "10px" }}>Highway Tunnel</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 400, marginBottom: "5px" }}>
                  <i className="fas fa-map-marker-alt"></i> Pune, MH
                </span>
                <span style={{ fontSize: "0.8rem", fontWeight: 300 }}>High-pressure shotcrete application for tunnel stability.</span>
              </div>
            </div>
            {/* Project 3 */}
            <div className="gallery-item animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <img
                src="/assets/gallery-1.png"
                alt="GC Constructions Retaining Wall Stabilization Visakhapatnam"
                loading="lazy"
              />
              <div className="gallery-overlay" style={{ flexDirection: "column", textAlign: "center", padding: "20px" }}>
                <span style={{ fontSize: "1.4rem", marginBottom: "10px" }}>Hillside Retaining Wall</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 400, marginBottom: "5px" }}>
                  <i className="fas fa-map-marker-alt"></i> Visakhapatnam, AP
                </span>
                <span style={{ fontSize: "0.8rem", fontWeight: 300 }}>Soil anchoring and slope stabilization.</span>
              </div>
            </div>
            {/* Project 4 */}
            <div className="gallery-item animate-on-scroll" style={{ animationDelay: "0.3s" }}>
              <img src="/assets/gallery-2.png" alt="GC Constructions Industrial Furnace Repair Bellary" loading="lazy" />
              <div className="gallery-overlay" style={{ flexDirection: "column", textAlign: "center", padding: "20px" }}>
                <span style={{ fontSize: "1.4rem", marginBottom: "10px" }}>Steel Plant Furnace</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 400, marginBottom: "5px" }}>
                  <i className="fas fa-map-marker-alt"></i> Bellary, KA
                </span>
                <span style={{ fontSize: "0.8rem", fontWeight: 300 }}>
                  Specialized refractory work and heat-resistant reinforcement.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
