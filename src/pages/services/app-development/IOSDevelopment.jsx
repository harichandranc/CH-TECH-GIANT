import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  "Native iOS App Development",
  "Modern Apple UI Design",
  "Firebase Integration",
  "REST API Integration",
  "App Store Deployment",
  "Secure & Optimized Applications",
];

const IOSDevelopment = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>

        <title>
          iOS App Development Company in India | CH TECH GIANT
        </title>

        <meta
          name="description"
          content="CH TECH GIANT provides premium iOS app development services in India. We create secure, scalable, and high-performance iPhone and iPad applications with modern UI."
        />

        <meta
          name="keywords"
          content="iOS app development, iPhone app development, iOS developer India, Apple app development company, iPad app development, Swift app development"
        />

        <meta
          property="og:title"
          content="iOS App Development | CH TECH GIANT"
        />

        <meta
          property="og:description"
          content="Professional iOS app development services for startups and businesses."
        />

        <meta
          property="og:image"
          content="https://chtechgiant.com/services/ios.jpg"
        />

        <meta
          property="og:url"
          content="https://chtechgiant.com/app-development/ios-development"
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
          content="iOS App Development | CH TECH GIANT"
        />

        <meta
          name="twitter:description"
          content="Premium iOS app development services with modern UI and scalable architecture."
        />

        <meta
          name="theme-color"
          content="#000000"
        />

        <link
          rel="canonical"
          href="https://chtechgiant.com/app-development/ios-development"
        />

        {/* STRUCTURED DATA */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "iOS App Development",
              "provider": {
                "@type": "Organization",
                "name": "CH TECH GIANT",
                "url": "https://chtechgiant.com"
              },
              "areaServed": "India",
              "description": "Professional iOS app development services for iPhone and iPad applications."
            }
          `}
        </script>

      </Helmet>

      <div className="min-h-screen bg-black text-white overflow-hidden">

        {/* HERO */}
        <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >

                <p className="uppercase tracking-[5px] text-blue-400 text-sm mb-5">
                  App Development
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-8">
                  iOS App
                  <span className="text-blue-400">
                    {" "}Development
                  </span>
                </h1>

                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  CH TECH GIANT builds premium iOS
                  applications with modern UI,
                  smooth performance, and scalable
                  architecture for iPhone and iPad users.
                </p>

                <div className="flex flex-wrap gap-4">

                  <Link to="/contact">
                    <button className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition font-semibold text-black">
                      Start Project
                    </button>
                  </Link>

                  <Link to="/services">
                    <button className="px-8 py-4 rounded-2xl border border-white/10 hover:border-blue-400 transition">
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
              >

                <img
                  src="/services/ios.jpg"
                  alt="iOS App Development"
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

              <p className="uppercase tracking-[5px] text-blue-400 text-sm mb-4">
                Why Choose Us
              </p>

              <h2 className="text-4xl md:text-6xl font-black">
                iOS Development Services
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
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-blue-400/40 transition duration-500"
                >

                  <h3 className="text-2xl font-bold mb-4">
                    {feature}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Premium iOS app development solutions
                    with scalable architecture and modern UI.
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </section>

      </div>
    </>
  );
};

export default IOSDevelopment;