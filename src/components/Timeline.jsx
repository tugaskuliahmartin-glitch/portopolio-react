import { motion } from "framer-motion";
import "../styles/timeline.css";

const pendidikan = [
    {
        jenjang: "T K",
        sekolah: "Gaby Kids",
        tahun: "2012 - 2013",
        posisi: "left",
    },
    {
        jenjang: "S D",
        sekolah: "YAPERI",
        tahun: "2013 - 2019",
        posisi: "right",
    },
    {
        jenjang: "S M P",
        sekolah: "Era Utama",
        tahun: "2019 - 2022",
        posisi: "left",
    },
    {
        jenjang: "S M K",
        sekolah: "Bersama",
        tahun: "2022 - 2025",
        posisi: "right",
    },
    {
        jenjang: "S 1",
        sekolah: "Universitas Satya Terra Bhinneka",
        tahun: "2025 - Sekarang",
        posisi: "left",
    },
];

function Timeline() {
    return (
        <section className="timeline-section">

            <h2>Riwayat Pendidikan</h2>

            <div className="timeline">

                <div className="timeline-line"></div>

                {pendidikan.map((item, index) => (

                    <motion.div
                        className={`timeline-item ${item.posisi}`}
                        key={index}
                        initial={{
                            opacity: 0,
                            x: item.posisi === "left" ? -80 : 80,
                            scale: .9,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                        }}
                        transition={{
                            duration: .8,
                            type: "spring",
                            stiffness: 70,
                            delay: index * 0.2
                        }}
                        viewport={{ once: true }}
                    >

                        <div className="timeline-dot"></div>

                        <div className="timeline-card">

                            <h3>{item.jenjang}</h3>

                            <h4>{item.sekolah}</h4>

                            <span>{item.tahun}</span>

                        </div>

                    </motion.div>

                ))}

            </div>

        </section>
    );
}

export default Timeline;