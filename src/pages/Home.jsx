import { Helmet } from "react-helmet-async";
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
  FaReact,
  FaNodeJs,
  FaGooglePlay,
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

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

const technologies = [
  {
    icon: <FaReact />,
    title: "React",
  },

  {
    icon: <SiFlutter />,
    title: "Flutter",
  },

  {
    icon: <FaNodeJs />,
    title: "Node.js",
  },

  {
    icon: <SiFirebase />,
    title: "Firebase",
  },

  {
    icon: <SiMongodb />,
    title: "MongoDB",
  },

  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
  },
];

const latestApps = [
  {
    title: "File Converter",
    description:
      "All-in-one file conversion toolkit with PDF, image, audio, video, and text tools.",
    image: "/projects/fileconverter.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.everything_converter",
  },

  {
    title: "File Renamer",
    description:
      "Bulk file renaming and file cleaning utility with modern automation tools.",
    image: "/projects/filerenamer.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.file_name_cleaner",
  },

  {
    title: "Web Codshop",
    description:
      "premium website templates, source codes, and college projects with reports Marketplace app.",
    image: "/projects/webcodshop.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.webcodshop",
  },

];

const Home = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          CH TECH GIANT | App Development, Web Development, Game Development &
          Software Solutions
        </title>

        <meta
          name="description"
          content="CH TECH GIANT provides premium app development, web development, software development and game development services for startups, businesses, and enterprises."
        />

        <meta
          name="keywords"
          content="app development company, web development company, software development company, flutter app development, game development company, CH TECH GIANT, Davanagere, Karanataka, India"
        />

        <meta name="author" content="CH TECH GIANT" />

        <meta
          property="og:title"
          content="CH TECH GIANT | Premium Digital Solutions"
        />

        <meta
          property="og:description"
          content="Modern app development, websites, software systems, and scalable digital solutions."
        />

        <meta
          property="og:image"
          content="https://chtechgiant.com/preview.png"
        />

        <meta
          property="og:url"
          content="https://chtechgiant.com"
        />

        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="CH TECH GIANT"
        />

        <meta
          name="twitter:description"
          content="Premium digital development solutions."
        />

        <meta
          name="theme-color"
          content="#050816"
        />

        <link
          rel="canonical"
          href="https://chtechgiant.com"
        />
      </Helmet>

      <div className="bg-black text-white overflow-x-hidden">

        {/* VIDEO SECTION */}
        <section className="relative w-full h-[40vh] sm:h-[55vh] md:h-[100vh] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/video-thumbnail.jpg"
            className="w-full h-full object-cover"
          >
            <source
              src="/videos/hero-video.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-black/30"></div>
        </section>

        {/* HERO CONTENT */}
        <section className="relative px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-14 sm:py-20 md:py-28 overflow-hidden">

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
                className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight"
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
                transition={{
                  delay: 0.2,
                  duration: 0.7,
                }}
                className="text-gray-400 text-base md:text-lg leading-relaxed mt-6 md:mt-8 max-w-2xl"
              >
                We build premium websites, mobile apps,
                software systems, creative designs, and
                scalable digital solutions for startups,
                businesses, and enterprises.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                }}
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

          </motion.div>

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

        {/* TECHNOLOGIES */}
        <section className="px-6 md:px-12 lg:px-20 py-20 md:py-24">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-4">
              Technologies
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Technologies We Use
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-14">

            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg text-center"
              >

                <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl text-cyan-400 mb-5">
                  {tech.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-200">
                  {tech.title}
                </h3>

              </div>
            ))}

          </div>

        </section>

        {/* LATEST APPS */}
        <section className="px-6 md:px-12 lg:px-20 py-20 md:py-24">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-4">
              Latest Apps
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Published Play Store Apps
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

            {latestApps.map((app, index) => (
              <motion.a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg hover:border-cyan-400/40 transition duration-500"
              >

                <img
                  src={app.image}
                  alt={app.title}
                  loading="lazy"
                  className="w-full h-[240px] object-cover"
                />

                <div className="p-6">

                  <div className="flex items-center gap-2 text-cyan-400 mb-4">
                    <FaGooglePlay />
                    <span className="text-sm">
                      Google Play Store
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {app.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {app.description}
                  </p>

                </div>

              </motion.a>
            ))}

          </div>

        </section>

      </div>
    </>
  );
};

export default Home;