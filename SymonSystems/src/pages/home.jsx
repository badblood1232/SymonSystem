const benefits = [
  'Professional and experienced team',
  'Reliable IT and business solutions',
  'Customer-focused approach',
  'Innovative technology services',
  'Quality-driven support',
  'Affordable and scalable solutions',
]

const values = [
  'Integrity',
  'Innovation',
  'Excellence',
  'Commitment',
  'Collaboration',
  'Customer Satisfaction',
  'Continuous Improvement',
]

const itServices = [
  'IT Consulting',
  'Systems Integration',
  'Business Process Automation',
  'Network Solutions',
  'Technical Support',
  'Software Implementation',
  'POS System Solutions',
  'System Maintenance',
  'IT Infrastructure Support',
]

const consultingServices = [
  'Business Process Improvement',
  'Operations Management',
  'Organizational Development',
  'Digital Transformation',
  'Technology Planning',
  'Project Consultation',
]

const supportServices = [
  'Troubleshooting',
  'Hardware Support',
  'Software Support',
  'Preventive Maintenance',
  'Remote Assistance',
  'On-site Technical Support',
]

const differences = [
  'Customized business solutions',
  'Experienced professionals',
  'Responsive customer support',
  'Modern technologies',
  'Reliable project delivery',
  'Long-term client partnerships',
  'Continuous innovation',
]

function List({ items }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function Home() {
  return (
    <>
      <header className="site-header">
        <a className="logo" href="#home">Symon Systems</a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#why-us">Why Choose Us</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">Information Technology and Business Consulting</p>
            <h1>Welcome to Symon Systems and Allied Services</h1>
            <p>
              Your trusted partner in driving efficiency and innovation. We deliver
              comprehensive IT solutions and professional consulting services tailored to
              businesses across different industries.
            </p>
            <div className="button-row">
              <a className="button primary" href="#services">Learn More</a>
              <a className="button secondary" href="#contact">Contact Us</a>
            </div>
          </div>
        </section>

        <section className="section two-column">
          <div>
            <p className="eyebrow">Why Choose Us?</p>
            <h2>Practical Solutions for Better Business Operations</h2>
            <p>
              Our commitment to excellence, customer satisfaction, and continuous
              innovation allows us to provide practical solutions that help organizations
              improve operations, maximize productivity, and embrace digital transformation.
            </p>
            <p>
              Whether you're a startup, small business, or established enterprise, we are
              ready to become your reliable technology partner.
            </p>
          </div>
          <List items={benefits} />
        </section>

        <section className="section muted" id="about">
          <p className="eyebrow">About Us</p>
          <h2>Who We Are</h2>
          <p>
            Symon Systems and Allied Services is an Information Technology and Business
            Consulting company dedicated to delivering innovative, efficient, and
            cost-effective solutions to organizations throughout the Philippines.
          </p>
          <p>
            We combine technical expertise with strategic business knowledge to help
            clients overcome challenges, optimize operations, and improve overall
            performance.
          </p>
          <p>
            Our goal is to become a long-term technology partner by providing dependable
            services, quality support, and continuous innovation.
          </p>

          <div className="card-grid two-cards">
            <article className="card">
              <h3>Mission</h3>
              <p>
                To provide innovative, reliable, and high-quality technology and business
                solutions that empower organizations to improve efficiency, increase
                productivity, and achieve sustainable growth while maintaining the highest
                standards of professionalism and customer satisfaction.
              </p>
            </article>
            <article className="card">
              <h3>Vision</h3>
              <p>
                To become one of the country's leading providers of IT solutions and
                business consulting services, recognized for innovation, excellence,
                integrity, and commitment to helping businesses succeed in the digital age.
              </p>
            </article>
          </div>

          <h3>Core Values</h3>
          <List items={values} />
        </section>

        <section className="section" id="services">
          <p className="eyebrow">Our Services</p>
          <h2>Technology and Consulting Services</h2>
          <div className="card-grid">
            <article className="card">
              <h3>Information Technology Solutions</h3>
              <p>
                Modern IT solutions designed to support business operations through
                technology and innovation.
              </p>
              <List items={itServices} />
            </article>
            <article className="card">
              <h3>Business Consulting</h3>
              <p>
                Helping organizations improve business performance through strategic
                planning and professional consulting.
              </p>
              <List items={consultingServices} />
            </article>
            <article className="card">
              <h3>Technical Support</h3>
              <p>
                Reliable technical assistance to help ensure smooth business operations.
              </p>
              <List items={supportServices} />
            </article>
          </div>
        </section>

        <section className="section muted two-column" id="why-us">
          <div>
            <p className="eyebrow">Why Work With Us</p>
            <h2>We Deliver Value Through Technology</h2>
            <p>
              At Symon Systems and Allied Services, we believe technology should simplify
              business, not complicate it.
            </p>
          </div>
          <div>
            <h3>What Makes Us Different</h3>
            <List items={differences} />
          </div>
        </section>

        <section className="section contact" id="contact">
          <div>
            <p className="eyebrow">Contact Us</p>
            <h2>Get in Touch</h2>
            <p>
              Whether you need IT support, business consulting, or technology solutions,
              our team is ready to assist.
            </p>
          </div>
          <div className="contact-card">
            <h3>Company Information</h3>
            <p><strong>Symon Systems and Allied Services</strong></p>
            <p>Location: Mandaue City, Cebu, Philippines</p>
            <p>Email: info@symonsystems.com</p>
         {/*	 <p>Phone: Insert company contact number</p */}
            <p><strong>Business Hours</strong></p>
            <p>Monday - Friday, 8:00 AM - 5:00 PM</p>
          </div>
        </section>

        <section className="section cta">
          <p className="eyebrow">Call to Action</p>
          <h2>Let's Build Better Business Solutions Together</h2>
          <p>
            Partner with Symon Systems and Allied Services and discover how innovative
            technology and expert consulting can help your organization achieve greater
            efficiency, productivity, and long-term success.
          </p>
          <a className="button primary" href="#contact">Contact Us Today</a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Symon Systems and Allied Services. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Home
