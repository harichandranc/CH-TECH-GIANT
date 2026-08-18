import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const supportedLanguages = ["zh", "es", "pt", "de", "ko", "ja"];

const languages = [
  {
    code: "en",
    path: "/about",
    label: "🇺🇸 English",
  },
  {
    code: "zh",
    path: "/zh/about",
    label: "🇨🇳 简体中文",
  },
  {
    code: "es",
    path: "/es/about",
    label: "🇪🇸 Español",
  },
  {
    code: "pt",
    path: "/pt/about",
    label: "🇧🇷 Português",
  },
  {
    code: "de",
    path: "/de/about",
    label: "🇩🇪 Deutsch",
  },
  {
    code: "ko",
    path: "/ko/about",
    label: "🇰🇷 한국어",
  },
  {
    code: "ja",
    path: "/ja/about",
    label: "🇯🇵 日本語",
  },
];

const features = [
  {
    title: "Modern Technologies",
    description:
      "React, Flutter, MERN Stack, Firebase, AI tools and modern scalable technologies.",
  },
  {
    title: "Premium UI/UX",
    description:
      "Clean futuristic interfaces with smooth responsive user experiences.",
  },
  {
    title: "Custom Solutions",
    description:
      "Tailored software, mobile apps, and websites designed for businesses and startups.",
  },
  {
    title: "Reliable Support",
    description:
      "Professional support and continuous improvements for long-term growth.",
  },
];

const technologies = [
  "React",
  "Flutter",
  "Node.js",
  "Firebase",
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
  "AI Tools",
];

const services = [
  "App Development",
  "Web Development",
  "Software Development",
  "Game Development",
  "UI/UX Design",
  "Business Solutions",
];

const process = [
  "Planning",
  "UI/UX Design",
  "Development",
  "Testing",
  "Deployment",
  "Support",
];

const About = () => {
  const { lang } = useParams();
  const navigate = useNavigate();

  const language = supportedLanguages.includes(lang) ? lang : "en";

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;

    const selected = languages.find(
      (item) => item.code === selectedLanguage
    );

    if (selected) {
      navigate(selected.path);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>About Us | CH TECH GIANT</title>

        <meta
          name="description"
          content="Learn about CH TECH GIANT (OPC) PRIVATE LIMITED, a modern software company specializing in app development, web development, software solutions, and futuristic digital experiences."
        />

        <meta
          name="keywords"
          content="about CH TECH GIANT, CH TECH GIANT OPC PRIVATE LIMITED, CIN U62012KA2025OPC203976, app development company, web development company, software company in Davanagere, Flutter development, MERN stack development, software solutions"
        />

        <meta name="author" content="CH TECH GIANT" />

        <meta property="og:title" content="About CH TECH GIANT" />

        <meta
          property="og:description"
          content="Modern software company delivering premium websites, mobile applications, and digital solutions."
        />

        <meta
          property="og:image"
          content="https://chtechgiant.com/about-preview.png"
        />

        <meta
          property="og:url"
          content="https://chtechgiant.com/about"
        />

        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <link
          rel="canonical"
          href="https://chtechgiant.com/about"
        />

        <meta name="theme-color" content="#050816" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CH TECH GIANT (OPC) PRIVATE LIMITED",
            "legalName": "CH TECH GIANT (OPC) PRIVATE LIMITED",
            "url": "https://chtechgiant.com",
            "logo": "https://chtechgiant.com/logo.png",
            "description": "Premium software development company offering app development, web development, software solutions, and digital services.",
            "telephone": "+91-9980785020",
            "email": "info@chtechgiant.com",
            "identifier": {
              "@type": "PropertyValue",
              "propertyID": "CIN",
              "value": "U62012KA2025OPC203976"
            },
            "foundingDate": "2025-06-10",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1135/1, Behind BDO Office, Betur Road, Imam Nagara, Barline Road-Davanagere",
              "addressLocality": "Davanagere",
              "addressRegion": "Karnataka",
              "postalCode": "577001",
              "addressCountry": "IN"
            }
          }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#050816] text-white px-6 overflow-hidden">

        {/* =====================================================
            LANGUAGE SELECTOR
            DIRECTLY BELOW NAVBAR
        ===================================================== */}
        <div className="relative z-50">
          <div className="max-w-7xl mx-auto flex justify-end">
            <div className="relative">
              <select
                value={language}
                onChange={handleLanguageChange}
                aria-label="Select language"
                className="appearance-none h-10 w-40 bg-black/80 backdrop-blur-xl border border-white/20 hover:border-cyan-400 text-white text-sm font-medium rounded-xl pl-3 pr-10 outline-none cursor-pointer shadow-lg transition duration-300 focus:border-cyan-400"
              >
                {languages.map((item) => (
                  <option
                    key={item.code}
                    value={item.code}
                    className="bg-[#050816] text-white"
                  >
                    {item.label}
                  </option>
                ))}
              </select>

              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-400 text-xs" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-24"
          >
            <p className="text-gray-400 uppercase tracking-[5px] mb-4">
              About Us
            </p>

            <h1 className="text-4xl md:text-7xl font-black leading-tight mb-8">
              Building Modern
              <span className="block text-white/80">
                Digital Solutions
              </span>
            </h1>

            <p className="max-w-4xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
              CH TECH GIANT (OPC) PRIVATE LIMITED is a modern software company
              focused on developing premium websites, mobile applications,
              software systems, and futuristic digital experiences for
              businesses and startups.
            </p>
          </motion.div>

          {/* MAIN SECTION */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/about/about.jpg"
                alt="About CH TECH GIANT"
                loading="lazy"
                className="rounded-3xl border border-white/10 shadow-2xl object-cover w-full"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8">
                Premium Software Solutions
                For Modern Businesses
              </h2>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                We specialize in creating high-performance websites,
                mobile applications, business software, and scalable
                digital systems using modern technologies and clean UI design.
              </p>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                Our company focuses on delivering visually modern,
                performance-optimized, and user-friendly digital products
                tailored to client requirements and future scalability.
              </p>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Our goal is to help businesses establish a strong digital
                presence with premium technology solutions that combine
                performance, aesthetics, and user experience.
              </p>
            </motion.div>
          </div>

          {/* COMPANY INFORMATION */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-gray-400 uppercase tracking-[5px] mb-4">
                Company Information
              </p>

              <h2 className="text-3xl md:text-5xl font-black">
                Official
                <span className="text-cyan-400">
                  {" "}
                  Company Details
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-xl"
            >
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">

                {/* COMPANY NAME */}
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    Legal Name
                  </p>

                  <p className="text-white text-lg font-semibold">
                    CH TECH GIANT (OPC) PRIVATE LIMITED
                  </p>
                </div>

                {/* CIN */}
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    Corporate Identification Number (CIN)
                  </p>

                  <p className="text-cyan-400 text-lg font-semibold break-all">
                    U62012KA2025OPC203976
                  </p>
                </div>

                {/* ENTITY TYPE */}
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    Entity Type
                  </p>

                  <p className="text-white text-lg font-semibold">
                    Private Limited Company
                  </p>
                </div>

                {/* INCORPORATION */}
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    Date of Incorporation
                  </p>

                  <p className="text-white text-lg font-semibold">
                    June 10, 2025
                  </p>
                </div>

                {/* ROC */}
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    Registrar of Companies
                  </p>

                  <p className="text-white text-lg font-semibold">
                    ROC – Bangalore
                  </p>
                </div>

                {/* DIRECTOR */}
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    Managing Director
                  </p>

                  <p className="text-white text-lg font-semibold">
                    Chandrashekar Harichandran
                  </p>
                </div>

                {/* APPOINTMENT DATE */}
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    Director Appointment Date
                  </p>

                  <p className="text-white text-lg font-semibold">
                    June 10, 2025
                  </p>
                </div>

                {/* REGISTERED ADDRESS */}
                <div className="md:col-span-2">
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    Registered Office
                  </p>

                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    1135/1, Behind BDO Office, Betur Road, Imam Nagara,
                    Barline Road-Davanagere, Davangere, Davanagere,
                    Karnataka, India – 577001
                  </p>
                </div>

              </div>
            </motion.div>
          </section>

          {/* SERVICES */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-gray-400 uppercase tracking-[5px] mb-4">
                Our Services
              </p>

              <h2 className="text-3xl md:text-5xl font-black">
                Digital Services
                <span className="text-cyan-400">
                  {" "}
                  We Provide
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-xl hover:border-cyan-400/30 transition"
                >
                  <p className="text-gray-300 font-medium">
                    {service}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FEATURES */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-gray-400 uppercase tracking-[5px] mb-4">
                Why Choose Us
              </p>

              <h2 className="text-3xl md:text-5xl font-black">
                Innovative Technology
                <span className="text-cyan-400">
                  {" "}
                  & Premium Design
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/30 transition"
                >
                  <h3 className="text-2xl font-bold mb-5">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* TECHNOLOGIES */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-gray-400 uppercase tracking-[5px] mb-4">
                Technologies
              </p>

              <h2 className="text-3xl md:text-5xl font-black">
                Technologies
                <span className="text-cyan-400">
                  {" "}
                  We Use
                </span>
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 backdrop-blur-xl hover:border-cyan-400/30 transition"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </section>

          {/* PROCESS */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-gray-400 uppercase tracking-[5px] mb-4">
                Development Process
              </p>

              <h2 className="text-3xl md:text-5xl font-black">
                Our Working
                <span className="text-cyan-400">
                  {" "}
                  Process
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-xl hover:border-cyan-400/30 transition"
                >
                  <div className="text-cyan-400 text-2xl font-black mb-3">
                    0{index + 1}
                  </div>

                  <p className="text-gray-300">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 text-center"
          >
            <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
              Our Mission
            </p>

            <h2 className="text-3xl md:text-6xl font-black leading-tight mb-8">
              Creating Scalable
              <span className="text-cyan-400">
                {" "}
                Digital Innovation
              </span>
            </h2>

            <p className="max-w-4xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
              Our mission is to empower startups, businesses, and organizations
              with innovative technology solutions that drive growth,
              improve digital presence, and create long-term business value
              through modern development standards and exceptional user
              experiences.
            </p>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default About;