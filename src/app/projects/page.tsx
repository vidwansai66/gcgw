import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Gopal Chavan Guniting Works Pvt Ltd",
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
          <div className="section-header animate-on-scroll" style={{ marginTop: 0, marginBottom: "40px" }}>
            <h2>Completed Projects</h2>
            <div className="divider"></div>
          </div>
          <div className="gallery-grid" style={{ marginBottom: "60px" }}>
            {/* Project 1 */}
            <div className="gallery-item animate-on-scroll">
              <img src="/assets/project-1.jpg" alt="Gopal Chavan Guniting Works Structural Work Mumbai 2100 sq meters" loading="lazy" />
              <div className="gallery-overlay" style={{ flexDirection: "column", textAlign: "center", padding: "20px" }}>
                <span style={{ fontSize: "1.4rem", marginBottom: "10px" }}>Structural Work</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 400, marginBottom: "5px" }}>
                  <i className="fas fa-map-marker-alt"></i> Mumbai
                </span>
                <span style={{ fontSize: "0.8rem", fontWeight: 300 }}>Area: 2100 sq meters</span>
              </div>
            </div>
            {/* Project 2 */}
            <div className="gallery-item animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <img src="/assets/project-2.jpg" alt="Gopal Chavan Guniting Works Wall Work Odisha 800 sq meters" loading="lazy" />
              <div className="gallery-overlay" style={{ flexDirection: "column", textAlign: "center", padding: "20px" }}>
                <span style={{ fontSize: "1.4rem", marginBottom: "10px" }}>Wall Work</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 400, marginBottom: "5px" }}>
                  <i className="fas fa-map-marker-alt"></i> Odisha
                </span>
                <span style={{ fontSize: "0.8rem", fontWeight: 300 }}>Area: 800 sq meters</span>
              </div>
            </div>
            {/* Project 3 */}
            <div className="gallery-item animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <img src="/assets/project-3.jpg" alt="Gopal Chavan Guniting Works Structural Work Mumbai 950 sq meters" loading="lazy" />
              <div className="gallery-overlay" style={{ flexDirection: "column", textAlign: "center", padding: "20px" }}>
                <span style={{ fontSize: "1.4rem", marginBottom: "10px" }}>Structural Work</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 400, marginBottom: "5px" }}>
                  <i className="fas fa-map-marker-alt"></i> Mumbai
                </span>
                <span style={{ fontSize: "0.8rem", fontWeight: 300 }}>Area: 950 sq meters</span>
              </div>
            </div>
            {/* Project 4 */}
            <div className="gallery-item animate-on-scroll" style={{ animationDelay: "0.3s" }}>
              <img src="/assets/project-4.jpg" alt="Gopal Chavan Guniting Works Structural Work Indore 650 sq meters" loading="lazy" />
              <div className="gallery-overlay" style={{ flexDirection: "column", textAlign: "center", padding: "20px" }}>
                <span style={{ fontSize: "1.4rem", marginBottom: "10px" }}>Structural Work</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 400, marginBottom: "5px" }}>
                  <i className="fas fa-map-marker-alt"></i> Indore
                </span>
                <span style={{ fontSize: "0.8rem", fontWeight: 300 }}>Area: 650 sq m</span>
              </div>
            </div>
            {/* Project 5 */}
            <div className="gallery-item animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <img src="/assets/project-5.jpg" alt="Gopal Chavan Guniting Works Structural Work Indore 400 sq meters" loading="lazy" />
              <div className="gallery-overlay" style={{ flexDirection: "column", textAlign: "center", padding: "20px" }}>
                <span style={{ fontSize: "1.4rem", marginBottom: "10px" }}>Structural Work</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 400, marginBottom: "5px" }}>
                  <i className="fas fa-map-marker-alt"></i> Indore
                </span>
                <span style={{ fontSize: "0.8rem", fontWeight: 300 }}>Area: 400 sq m</span>
              </div>
            </div>
            {/* Project 6 */}
            <div className="gallery-item animate-on-scroll" style={{ animationDelay: "0.5s" }}>
              <img src="/assets/project-6.png" alt="Gopal Chavan Guniting Works Wall Work Mumbai 400 sq meters" loading="lazy" />
              <div className="gallery-overlay" style={{ flexDirection: "column", textAlign: "center", padding: "20px" }}>
                <span style={{ fontSize: "1.4rem", marginBottom: "10px" }}>Wall Work</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 400, marginBottom: "5px" }}>
                  <i className="fas fa-map-marker-alt"></i> Mumbai
                </span>
                <span style={{ fontSize: "0.8rem", fontWeight: 300 }}>Area: 400 sq meters</span>
              </div>
            </div>
          </div>

          <div className="section-header animate-on-scroll" style={{ marginTop: "40px", marginBottom: "40px" }}>
            <h2>Ongoing Works</h2>
            <div className="divider"></div>
          </div>
          <div className="gallery-grid">
            {/* Ongoing Project 1 */}
            <div className="gallery-item animate-on-scroll">
              <img src="/assets/ongoing-1.jpg" alt="Gopal Chavan Guniting Works Ongoing Structural Work Pune" loading="lazy" />
              <div className="gallery-overlay" style={{ flexDirection: "column", textAlign: "center", padding: "20px" }}>
                <span style={{ fontSize: "1.4rem", marginBottom: "10px" }}>Structural Work</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 400, marginBottom: "5px" }}>
                  <i className="fas fa-map-marker-alt"></i> Pune
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
