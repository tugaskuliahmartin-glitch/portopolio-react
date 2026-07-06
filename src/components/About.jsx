import { motion } from "framer-motion";
import Timeline from "./Timeline";

function About() {
  return (
    <section id="about" className="about">

      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>

        <p>
          Saya adalah salah satu mahasiswa ST Bhinneka yang memiliki minat pada
          pengembangan website modern, UI/UX Design serta Java Programming.
          Saya percaya bahwa sebuah aplikasi yang baik tidak hanya bekerja
          dengan benar, tetapi juga memberikan pengalaman penggunaan yang
          nyaman, cepat, dan menarik bagi penggunanya.
        </p>
      </motion.div>

      <motion.div
        className="biodata"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <h3>Biodata</h3>

        <div className="bio-grid">

          <div><strong>Nama Lengkap</strong></div>
          <div>Martin Iman GL</div>

          <div><strong>Tempat, Tanggal Lahir</strong></div>
          <div>Medan, 2 Februari 2002</div>

          <div><strong>Alamat</strong></div>
          <div>Pancur Batu, Medan, Sumatera Utara</div>

          <div><strong>Email</strong></div>
          <div>tugaskuliahmartin@email.com</div>

          <div><strong>No. HP</strong></div>
          <div>081234567890</div>

          <div><strong>Pekerjaan</strong></div>
          <div>Mahasiswa</div>

          <div><strong>Pendidikan</strong></div>
          <div>Universitas Satya Terra Bhinneka</div>

          <div><strong> </strong></div>
          <div>Teknologi & Ilmu Komputer</div>

          <div><strong> </strong></div>
          <div>Informatika</div>

          <div><strong> </strong></div>
          <div>Semester II</div>

          <div><strong>Fokus</strong></div>
          <div>
            Frontend Development, UI/UX Design,
            Pemodelan Basis Data
          </div>

        </div>

      </motion.div>

      <motion.div
        className="reason"
        initial={{ opacity:0,y:30 }}
        whileInView={{ opacity:1,y:0 }}
        transition={{ duration:.8 }}
        viewport={{ once:true }}
      >
        <h3>Mengapa Memilih Informatika?</h3>

        <p>
          Saya memilih Program Studi Informatika karena memiliki ketertarikan
          pada dunia teknologi dan pengembangan perangkat lunak. Bagi saya,
          teknologi bukan hanya alat untuk menyelesaikan masalah, tetapi juga
          media untuk menciptakan solusi yang bermanfaat. Saya menikmati proses
          belajar, mulai dari memahami logika pemrograman hingga merancang
          antarmuka yang nyaman digunakan oleh pengguna.
        </p>

      </motion.div>

      <Timeline />

    </section>
  );
}

export default About;