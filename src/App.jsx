import './App.css'
import profileImg from './assets/profile.jpg'

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">SA<span>.</span></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-btn">
          Let's Talk
        </a>
      </nav>

      {/* Hero */}
      <section id="home" className="hero-section">

        <div className="hero-content">

          <p className="available">
            ● AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1>
            Hi, I'm <span>Swapnil</span>
            <br />
            Anuse.
          </h1>

          <h2>Python Developer & Backend Developer</h2>

          <p className="hero-text">
            I build clean, scalable and user-focused applications
            using Python, backend technologies and modern web tools.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work →
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Swapnilanuse111"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="mailto:swapnilanuse111@gmail.com">
              Email
            </a>
          </div>

        </div>

        <div className="hero-visual">

          <div className="glow"></div>

          <div className="profile-card">

            <div className="profile-circle">
                   <img src={profileImg} alt="Swapnil Anuse" />
            </div>

            <h3>Swapnil Anuse</h3>

            <p>Python Developer</p>

            <div className="code-lines">
              <span>Python</span>
              <span>SQL</span>
              <span>Backend</span>
              <span>React</span>
            </div>

          </div>

        </div>

      </section>

      {/* About */}
      <section id="about" className="section">

        <p className="section-label">ABOUT ME</p>

        <h2 className="section-title">
          Building solutions with <span>code & creativity.</span>
        </h2>

        <div className="about-content">

          <p>
            I'm Swapnil Anuse, a Computer Science graduate and MCA student
            passionate about software development and backend engineering.
          </p>

          <p>
            I enjoy building practical applications, working with databases,
            solving programming problems and continuously improving my
            development skills.
          </p>

          <p>
            Currently, I'm focusing on Python development, backend
            technologies, SQL, APIs and modern web development.
          </p>

        </div>

      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">

        <p className="section-label">MY SKILLS</p>

        <h2 className="section-title">
          Technologies I <span>work with.</span>
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">🐍</div>
            <h3>Python</h3>
            <p>Core Python, OOP, DSA, File Handling</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">☕</div>
            <h3>Java</h3>
            <p>Core Java, JDBC, Servlets, JSP</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>Database</h3>
            <p>MySQL, SQLite, SQL, DBMS</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🌐</div>
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚙️</div>
            <h3>Backend</h3>
            <p>Python Backend, REST APIs, Authentication</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🔧</div>
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, Eclipse</p>
          </div>

        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="section">

        <p className="section-label">MY WORK</p>

        <h2 className="section-title">
          Featured <span>projects.</span>
        </h2>

        <div className="projects-grid">

          <div className="project-card">

            <div className="project-number">01</div>

            <h3>Farmkart</h3>

            <p>
              Full-stack agricultural e-commerce platform with product
              management, authentication, shopping cart, orders and payment
              functionality.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>JSP</span>
              <span>Servlet</span>
              <span>MySQL</span>
            </div>

            <a
              href="https://github.com/Swapnilanuse111/Farmkart"
              target="_blank"
              rel="noreferrer"
            >
              View Project →
            </a>

          </div>

          <div className="project-card">

            <div className="project-number">02</div>

            <h3>Python Database Application</h3>

            <p>
              Python application with SQLite database connectivity,
              registration, login authentication, password hashing and
              prepared SQL statements.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>SQLite</span>
              <span>SQL</span>
            </div>

            <a
              href="https://github.com/Swapnilanuse111/Python"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub →
            </a>

          </div>

          <div className="project-card">

            <div className="project-number">03</div>

            <h3>Web Development Projects</h3>

            <p>
              Collection of responsive HTML, CSS and JavaScript projects
              including navigation bars, layouts, grids and interactive UI
              components.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://github.com/Swapnilanuse111/WebDevelopment_A12"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub →
            </a>

          </div>

        </div>

      </section>

      {/* Education */}
      <section id="education" className="section">

        <p className="section-label">EDUCATION</p>

        <h2 className="section-title">
          My academic <span>journey.</span>
        </h2>

        <div className="education-list">

          <div className="education-card">
            <span>2025 — Present</span>
            <h3>Master of Computer Applications</h3>
            <p>Shivaji University, Kolhapur</p>
          </div>

          <div className="education-card">
            <span>2022 — 2025</span>
            <h3>B.Sc. Computer Science</h3>
            <p>Balwant College, Vita</p>
            <strong>CGPA: 8.49</strong>
          </div>

        </div>

      </section>

      {/* Certification */}
      <section className="section certification">

        <p className="section-label">CERTIFICATION</p>

        <div className="certificate-card">

          <div>
            <h2>Oracle Cloud Infrastructure</h2>
            <p>2025 AI Foundations Associate</p>
          </div>

          <div className="certificate-badge">
            AI
          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">

        <p className="section-label">CONTACT</p>

        <h2 className="section-title">
          Let's build something <span>great.</span>
        </h2>

        <p>
          I'm currently looking for opportunities where I can learn,
          contribute and grow as a software developer.
        </p>

        <a
          href="mailto:swapnilanuse111@gmail.com"
          className="primary-btn"
        >
          Get In Touch →
        </a>

      </section>

      {/* Footer */}
      <footer>

        <div className="logo">
          SA<span>.</span>
        </div>

        <p>
          © 2026 Swapnil Anuse. Built with React.
        </p>

        <div>
          <a
            href="https://github.com/Swapnilanuse111"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

      </footer>

    </div>
  )
}

export default App