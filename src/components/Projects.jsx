function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>Website Donasi</h3>
          <p>
            Website donasi menggunakan HTML, CSS dan JavaScript.
          </p>
          <button>Lihat Project</button>
        </div>

        <div className="project-card">
          <h3>Pemesanan Tiket Kereta</h3>
          <p>
            Aplikasi Java berbasis Object Oriented Programming.
          </p>
          <button>Lihat Project</button>
        </div>

        <div className="project-card">
          <h3>Portfolio React</h3>
          <p>
            Website portfolio pribadi menggunakan React.
          </p>
          <button>Lihat Project</button>
        </div>

      </div>
    </section>
  );
}

export default Projects;