import Head from 'next/head';
import { FaGithub, FaLinkedin, FaJava, FaReact, FaDocker } from 'react-icons/fa';
import { SiSpring, SiPostgresql, SiMongodb, SiKubernetes, SiGooglecloud, SiTailwindcss, SiApachekafka } from 'react-icons/si';
import { TbSql } from "react-icons/tb";

import { motion } from 'framer-motion';

// Section animation
const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

// Project card animation
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Vaibhav Singh – Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-950 text-white px-6 py-20 font-sans overflow-hidden">

        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute w-72 h-72 bg-cyan-500 opacity-20 rounded-full filter blur-3xl animate-pulse top-10 left-1/4"></div>
          <div className="absolute w-96 h-96 bg-purple-600 opacity-20 rounded-full filter blur-3xl animate-pulse bottom-0 right-1/4"></div>
        </div>

        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionFade}
          className="text-center"
        >
          <p className="text-xl text-cyan-400 mb-2 tracking-wide">Hi, I&apos;m</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-lg">
            Vaibhav Singh
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 mt-3 font-medium">
            Senior Software Engineer · Backend & Cloud
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-gray-300 text-md leading-relaxed">
            I build scalable, high-performance backend systems with Java, Spring Boot, Kafka, and GCP — passionate about clean architecture and cloud-native design.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/vaibhav-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition transform hover:scale-105 shadow-md"
            >
              📄 View Resume
            </a>
            <a
              href="https://github.com/max3no"
              className="flex items-center gap-2 border border-gray-600 hover:border-cyan-500 px-6 py-2 rounded-full transition transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/vaibhavsingh-/"
              className="flex items-center gap-2 border border-gray-600 hover:border-cyan-500 px-6 py-2 rounded-full transition transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="mt-32 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={sectionFade}
          custom={1.5}
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Skills</h2>
          <div className="flex flex-wrap justify-center gap-8 text-cyan-300">
            <div className="flex flex-col items-center text-sm">
              <FaJava className="text-4xl mb-1" /> Java
            </div>
            <div className="flex flex-col items-center text-sm">
              <SiSpring className="text-4xl mb-1" /> Spring Boot
            </div>
            <div className="flex flex-col items-center text-sm">
              <FaReact className="text-4xl mb-1" /> React
            </div>
            <div className="flex flex-col items-center text-sm">
              <SiApachekafka className="text-4xl mb-1" /> Kafka
            </div>
            <div className="flex flex-col items-center text-sm">
              <SiPostgresql className="text-4xl mb-1" /> PostgreSQL
            </div>
            <div className="flex flex-col items-center text-sm">
              <SiMongodb className="text-4xl mb-1" /> MongoDB
            </div>
            <div className="flex flex-col items-center text-sm">
              <FaDocker className="text-4xl mb-1" /> Docker
            </div>
            <div className="flex flex-col items-center text-sm">
              <SiKubernetes className="text-4xl mb-1" /> Kubernetes
            </div>
            <div className="flex flex-col items-center text-sm">
              <SiGooglecloud className="text-4xl mb-1" /> GCP
            </div>
            <div className="flex flex-col items-center text-sm">
              <SiTailwindcss className="text-4xl mb-1" /> Tailwind CSS
            </div>
            <div className="flex flex-col items-center text-sm">
              <TbSql className="text-4xl mb-1"/> SQL
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          className="mt-32 max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={sectionFade}
          custom={2}
        >
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">About Me</h2>
          <p className="text-gray-300">
            With 8+ years of experience, I specialize in backend systems, distributed architectures, cloud-native platforms, and building highly maintainable codebases. I've worked across fintech and SaaS domains, leading teams and delivering critical systems at scale.
          </p>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="mt-32 max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={sectionFade}
          custom={3}
        >
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[{
              title: "Sealog Logging",
              desc: "Tamper-proof Spring Boot logging framework using blockchain-inspired chaining. Ensures log integrity and traceability.",
            }, {
              title: "Wikipedia Trending Analyzer",
              desc: "Real-time analytics app built on GCP using Pub/Sub + Cloud Functions to monitor trending articles.",
            }].map((proj, i) => (
              <motion.div
                key={proj.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={cardVariants}
                className="border border-gray-700 rounded-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
                <p className="text-gray-400 text-sm">{proj.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="mt-32 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={sectionFade}
          custom={4}
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Get In Touch</h2>
          <p className="text-gray-300 mb-6">
            I&apos;m always open to interesting opportunities or collaborations. Feel free to connect with me on LinkedIn or drop an email.
          </p>
          <a
            href="mailto:vaibhavsingh.contact@gmail.com"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-full transition transform hover:scale-105 shadow"
          >
            📩 Email Me
          </a>
        </motion.section>
      </main>
    </>
  );
}
