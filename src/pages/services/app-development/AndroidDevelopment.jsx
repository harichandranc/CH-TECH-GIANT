import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  "Native Android App Development",
  "Modern Material UI Design",
  "Firebase Integration",
  "REST API Integration",
  "Play Store Deployment",
  "High Performance Applications",
];

const AndroidDevelopment = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>

        <title>
          Android App Development Company in India | CH TECH GIANT
        </title>

        <meta
          name="description"
          content="CH TECH GIANT provides professional Android app development services in India. We build high-performance Android applications with modern UI, scalable architecture, and premium user experience."
        />

        <meta
          name="keywords"
          content="Android app development, Android app developer India, Android development company, mobile app development company, Kotlin app development, Java Android apps"
        />

        <meta
          property="og:title"
          content="Android App Development | CH TECH GIANT"
        />

        <meta
          property="og:description"
          content="Premium Android app development services with modern UI and scalable architecture."
        />

        <meta
          property="og:image"
          content="https://chtechgiant.com/services/android.jpg"
        />

        <meta
          property="og:url"
          content="https://chtechgiant.com/app-development/android-development"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Android App Development | CH TECH GIANT"
        />

        <meta
          name="twitter:description"
          content="Professional Android app development company for startups and businesses."
        />

        <meta
          name="theme-color"
          content="#000000"
        />

        <link
          rel="canonical"
          href="https://chtechgiant.com/app-development/android-development"
        />

        {/* STRUCTURED DATA */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Android App Development",
              "provider": {
                "@type": "Organization",
                "name": "CH TECH GIANT",
                "url": "https://chtechgiant.com"
              },
              "areaServed": "India",
              "description": "Professional Android app development services with scalable architecture and modern UI."
            }
          `}
        </script>

      </Helmet>

      <div className="min-h-screen bg-black text-white overflow-hidden">

        {/* HERO */}
        <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[160px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >

                <p className="uppercase tracking-[5px] text-green-400 text-sm mb-5">
                  App Development
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-8">
                  Android App
                  <span className="text-green-400">
                    {" "}Development
                  </span>
                </h1>

                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  CH TECH GIANT provides premium Android
                  app development services for startups,
                  businesses, and enterprises. We create
                  fast, scalable, and secure Android
                  applications with modern UI and smooth
                  performance.
                </p>

                <div className="flex flex-wrap gap-4">

                  <Link to="/contact">
                    <button className="px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 transition font-semibold text-black">
                      Start Project
                    </button>
                  </Link>

                  <Link to="/services">
                    <button className="px-8 py-4 rounded-2xl border border-white/10 hover:border-green-400 transition">
                      Explore Services
                    </button>
                  </Link>

                </div>

              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >

                <img
                  src="/services/android.jpg"
                  alt="Android App Development"
                  className="rounded-3xl border border-white/10 shadow-2xl"
                />

              </motion.div>

            </div>

          </div>

        </section>

        {/* FEATURES */}
        <section className="px-6 md:px-12 lg:px-20 py-20">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">

              <p className="uppercase tracking-[5px] text-green-400 text-sm mb-4">
                Why Choose Us
              </p>

              <h2 className="text-4xl md:text-6xl font-black">
                Android Development Services
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-green-400/40 transition duration-500"
                >

                  <h3 className="text-2xl font-bold mb-4">
                    {feature}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Professional Android development
                    solutions built with modern
                    technologies and scalable architecture.
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </section>

        {/* CONTENT SECTION */}
        <section className="px-6 md:px-12 lg:px-20 py-20">

          <div className="max-w-5xl mx-auto">

            <h2 className="text-4xl font-black mb-8">
              Professional Android App Development Company
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              Android is one of the largest mobile platforms
              in the world. CH TECH GIANT develops premium
              Android applications with modern UI,
              optimized performance, and enterprise-grade
              scalability.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              Our Android app developers build scalable
              applications for startups, healthcare,
              education, e-commerce, business automation,
              and enterprise solutions.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              We focus on performance optimization,
              security, modern architecture, responsive UI,
              and long-term maintainability to help your
              application succeed in the competitive mobile
              market.
            </p>

          </div>

        </section>

      </div>
    </>
  );
};

export default AndroidDevelopment;