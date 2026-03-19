import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at GC Constructions Pvt Ltd",
  description:
    "GC Constructions Pvt Ltd is a platform connecting contractors, guniting machine owners, and construction workers. Instantly find available machines and skilled workers for construction projects.",
};

export default function CareersPage() {
  return (
    <main>
      {/* Inner Hero Section */}
      <section className="inner-hero" style={{ backgroundImage: "url('/assets/hero-bg.png')" }}>
        <div className="container inner-hero-content animate-on-scroll">
          <h1 className="inner-hero-title">Careers</h1>
          <p className="inner-hero-subtitle">Build your future with a leading structural reinforcement company.</p>
        </div>
      </section>

      {/* Careers Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="careers-content">
            <div className="section-header animate-on-scroll">
              <h2>Join Our Team</h2>
              <div className="divider"></div>
              <p style={{ maxWidth: "800px", margin: "0 auto" }}>
                We are constantly looking for dedicated and skilled individuals to join our growing team. If you have
                experience in construction, structural repair, or heavy machinery operations, we want to hear from you.
              </p>
            </div>

            <div className="career-roles animate-on-scroll">
              <div className="career-role-card">
                <h3>Machine Operator</h3>
                <p>Experience in operating shotcrete and guniting machinery.</p>
              </div>
              <div className="career-role-card">
                <h3>Nozzle Man</h3>
                <p>Skilled in high-pressure concrete spraying applications.</p>
              </div>
              <div className="career-role-card">
                <h3>Construction Helper</h3>
                <p>Assisting site operations, material handling, and setup.</p>
              </div>
              <div className="career-role-card">
                <h3>Site Supervisor</h3>
                <p>Managing site safety, quality control, and schedule.</p>
              </div>
            </div>

            <div className="contact-form animate-on-scroll" style={{ maxWidth: "600px", margin: "0 auto", width: "100%" }}>
              <h3 style={{ textAlign: "center", marginBottom: "20px", color: "var(--primary-dark)" }}>Apply Now</h3>
              <form action="#" method="POST" id="careerForm">
                <div className="form-group">
                  <input type="text" id="career-name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="tel" id="career-mobile" placeholder="Your Phone Number" required />
                </div>
                <div className="form-group">
                  <select
                    id="career-role"
                    required
                    style={{
                      width: "100%",
                      padding: "15px",
                      border: "1px solid var(--border-color)",
                      borderRadius: "8px",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1rem",
                      backgroundColor: "var(--bg-light)",
                      color: "var(--text-muted)",
                      cursor: "pointer",
                    }}
                  >
                    <option value="" disabled selected>
                      Role applying for...
                    </option>
                    <option value="Machine Operator">Machine Operator</option>
                    <option value="Nozzle Man">Nozzle Man</option>
                    <option value="Construction Helper">Construction Helper</option>
                    <option value="Site Supervisor">Site Supervisor</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Submit Application <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
