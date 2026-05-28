import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  "Cross Platform App Development",
  "Android & iOS Support",
  "Premium UI/UX Design",
  "Firebase Integration",
  "REST API Integration",
  "Play Store Deployment",
];

const FlutterDevelopment = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>

        <title>
          Flutter App Development Company in India | CH TECH GIANT
        </title>

        <meta
          name="description"
          content="CH TECH GIANT provides professional Flutter app development services in India. We build premium Android and iOS applications with modern UI, high performance, and scalable architecture."
        />

        <meta
          name="keywords"
          content="Flutter app development, Flutter developer India, Android app development company, iOS app development, Flutter company Davanagere, cross platform app development"
        />

        <meta
          property="og:title"
          content="Flutter App Development | CH TECH GIANT"
        />

        <meta
          property="og:description"
          content="Premium Flutter app development services for Android and iOS applications."
        />

        <meta
          property="og:image"
          content="https://chtechgiant.com/services/flutter.jpg"
        />

        <meta
          property="og:url"
          content="https://chtechgiant.com/app-development/flutter-development"
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
          content="Flutter App Development | CH TECH GIANT"
        />

        <meta
          name="twitter:description"
          content="Professional Flutter app development company for Android and iOS applications."
        />

        <meta
          name="theme-color"
          content="#000000"
        />

        <link
          rel="canonical"
          href="https://chtechgiant.com/app-development/flutter-development"
        />

        {/* STRUCTURED DATA */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Flutter App Development",
              "provider": {
                "@type": "Organization",
                "name": "CH TECH GIANT",
                "url": "https://chtechgiant.com"
              },
              "areaServed": "India",
              "description": "Professional Flutter app development services for Android and iOS applications."
            }
          `}
        </script>

      </Helmet>

      <div className="min-h-screen bg-black text-white overflow-hidden">

        {/* HERO */}
        <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >

                <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-5">
                  App Development
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-8">
                  Flutter App
                  <span className="text-cyan-400">
                    {" "}Development
                  </span>
                </h1>

                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  CH TECH GIANT provides premium Flutter app
                  development services for startups,
                  businesses, and enterprises. We create
                  high-performance Android and iOS
                  applications using a single scalable
                  Flutter codebase.
                </p>

                <div className="flex flex-wrap gap-4">

                  <Link to="/contact">
                    <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black">
                      Start Project
                    </button>
                  </Link>

                  <Link to="/services">
                    <button className="px-8 py-4 rounded-2xl border border-white/10 hover:border-cyan-400 transition">
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
                  src="/services/flutter.jpg"
                  alt="Flutter App Development"
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

              <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-4">
                Why Choose Us
              </p>

              <h2 className="text-4xl md:text-6xl font-black">
                Flutter Development Services
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
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/40 transition duration-500"
                >

                  <h3 className="text-2xl font-bold mb-4">
                    {feature}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Premium Flutter app development
                    solutions with modern technology
                    and scalable architecture.
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
              Professional Flutter App Development Company
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              Flutter is one of the most powerful frameworks
              for cross-platform mobile app development.
              CH TECH GIANT develops premium Flutter
              applications that deliver native-like
              performance, beautiful UI, and faster
              development cycles.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              Our Flutter developers create scalable mobile
              applications for startups, enterprises,
              e-commerce businesses, healthcare platforms,
              educational apps, and custom business systems.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              We focus on modern design, optimized
              performance, clean architecture, and
              long-term scalability to ensure your
              application grows successfully.
            </p>

          </div>

        </section>

      </div>
    </>
  );
};

export default FlutterDevelopment;