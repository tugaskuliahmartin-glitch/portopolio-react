import heroImage from "../assets/images/images.jpg";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-text">

        <p className="greeting">Halo, Saya</p>

        <h1>Martin I GL</h1>

        <h3>
          Mahasiswa Informatika <br />
          Frontend Developer <br />
          UI/UX Designer
        </h3>

        <p className="description">
          Saya memiliki minat dalam pengembangan website,
          desain UI/UX, serta pengembangan aplikasi menggunakan Java.
        </p>

        <div className="hero-button">
          <a href="#contact" className="btn-primary">
            Hubungi Saya
          </a>

          <a href="#projects" className="btn-secondary">
            Lihat Project
          </a>
        </div>

      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>

    </section>
  );
}

export default Hero;