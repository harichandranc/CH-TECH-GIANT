import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCode,
  FaMobileAlt,
  FaLaptopCode,
  FaGamepad,
  FaHospital,
  FaGraduationCap,
  FaShoppingCart,
  FaBuilding,
  FaUtensils,
  FaNewspaper,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Modern responsive websites and scalable web applications.",
  },

  {
    icon: <FaMobileAlt />,
    title: "App Development",
    description:
      "Premium Android & iOS mobile app solutions for businesses.",
  },

  {
    icon: <FaLaptopCode />,
    title: "Software Development",
    description:
      "Custom software systems and enterprise-grade solutions.",
  },

  {
    icon: <FaGamepad />,
    title: "Game Development",
    description:
      "Interactive 2D & 3D game development experiences.",
  },
];

const industries = [
  {
    icon: <FaHospital />,
    title: "Healthcare",
  },

  {
    icon: <FaGraduationCap />,
    title: "Education",
  },

  {
    icon: <FaShoppingCart />,
    title: "E-Commerce",
  },

  {
    icon: <FaBuilding />,
    title: "Corporate",
  },

  {
    icon: <FaUtensils />,
    title: "Restaurants",
  },

  {
    icon: <FaNewspaper />,
    title: "Media & News",
  },
];

const Home = () => {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">
      {/* VIDEO SECTION */}
      <section className="relative w-full h-[75vh] md:h-[100vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/hero-video.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* HERO CONTENT */}
      <section className="relative px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[4px] md:tracking-[6px] text-cyan-400 text-xs md:text-sm mb-5"
            >
              CH TECH GIANT (OPC) PRIVATE LIMITED
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
            >
              Building Premium
              <span className="text-cyan-400">
                {" "}
                Digital Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed mt-6 md:mt-8 max-w-2xl"
            >
              We build premium websites, mobile apps,
              software systems, creative designs, and
              scalable digital solutions for startups,
              businesses, and enterprises.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-5 mt-8 md:mt-10"
            >
              <Link to="/services">
                <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black">
                  Explore Services
                </button>
              </Link>

              <Link to="/contact">
                <button className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 transition flex items-center justify-center gap-2 backdrop-blur-xl bg-white/5">
                  Contact Us
                  <FaArrowRight />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-4">
            Our Expertise
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Services We Provide
          </h2>

          <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed">
            We deliver high-quality modern digital
            solutions for startups, businesses, and
            enterprises.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mt-14 md:mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-lg hover:border-cyan-400/40 transition duration-500"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-2xl text-cyan-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-4">
            Industries
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Industries We Work With
          </h2>

          <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed">
            We provide scalable digital solutions for
            multiple industries and business sectors.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-14">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg hover:border-cyan-400/40 transition duration-500 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl text-cyan-400 mb-5">
                {industry.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-200">
                {industry.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-14 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/about/about.jpg"
              alt="About CH TECH GIANT"
              className="rounded-[32px] border border-white/10 w-full"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-4">
              About Company
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Building Digital Experiences
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-6 md:mt-8">
              CH TECH GIANT (OPC) PRIVATE LIMITED is
              focused on delivering scalable technology
              solutions with premium design aesthetics
              and modern development standards.
            </p>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-6">
              We help businesses establish strong digital
              presence through modern web technologies,
              software systems, and creative branding.
            </p>

            <Link to="/about">
              <button className="mt-8 md:mt-10 px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/10 to-white/5 border border-white/10 rounded-[32px] md:rounded-[40px] p-8 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-6xl font-bold leading-tight">
            Ready To Build Your
            <span className="text-cyan-400">
              {" "}
              Next Project?
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 md:mt-8 text-base md:text-lg leading-relaxed">
            Let's transform your ideas into premium
            digital products with modern technologies and
            exceptional user experiences.
          </p>

          <Link to="/contact">
            <button className="mt-8 md:mt-10 px-10 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black text-lg">
              Start Now
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;