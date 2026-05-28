import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  "Android App Development",
  "iOS App Development",
  "Cross Platform Applications",
  "Modern Mobile UI/UX",
  "Cloud & Firebase Integration",
  "Scalable Mobile Solutions",
];

const MobileAppDevelopment = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>

        <title>
          Mobile App Development Company | CH TECH GIANT
        </title>

        <meta
          name="description"
          content="CH TECH GIANT provides professional mobile app development services for Android and iOS applications with modern UI, scalable architecture, and premium performance."
        />

        <meta
          name="keywords"
          content="Mobile app development company, Android app development, iOS app development, mobile application development India, app developers India"
        />

        <meta
          property="og:title"
          content="Mobile App Development | CH TECH GIANT"
        />

        <meta
          property="og:description"
          content="Premium mobile app development services for startups and businesses."
        />

        <meta
          property="og:image"
          content="https://chtechgiant.com/services/mobile-app.jpg"
        />

        <meta
          property="og:url"
          content="https://chtechgiant.com/app-development/mobile-app-development"
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
          content="Mobile App Development | CH TECH GIANT"
        />

        <meta
          name="twitter:description"
          content="Professional mobile app development company with scalable solutions."
        />

        <meta
          name="theme-color"
          content="#000000"
        />

        <link
          rel="canonical"
          href="https://chtechgiant.com/app-development/mobile-app-development"
        />

        {/* STRUCTURED DATA */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Mobile App Development",
              "provider": {
                "@type": "Organization",
                "name": "CH TECH GIANT",
                "url": "https://chtechgiant.com"
              },
              "areaServed": "India",
              "description": "Professional mobile app development services for Android and iOS applications."
            }
          `}
        </script>

      </Helmet>

      <div className="min-h-screen bg-black text-white overflow-hidden">

        {/* HERO */}
        <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[160px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >

                <p className="uppercase tracking-[5px] text-orange-400 text-sm mb-5">
                  App Development
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-8">
                  Mobile App
                  <span className="text-orange-400">
                    {" "}Development
                  </span>
                </h1>

                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  CH TECH GIANT develops high-performance
                  mobile applications for startups,
                  enterprises, and businesses with modern
                  UI, scalable architecture, and premium
                  user experience.
                </p>

                <div className="flex flex-wrap gap-4">

                  <Link to="/contact">
                    <button className="px-8 py-4 rounded-2xl bg-orange-500 hover:bg-orange-400 transition font-semibold text-black">
                      Start Project
                    </button>
                  </Link>

                  <Link to="/services">
                    <button className="px-8 py-4 rounded-2xl border border-white/10 hover:border-orange-400 transition">
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
                  src="/services/mobile-app.jpg"
                  alt="Mobile App Development"
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

              <p className="uppercase tracking-[5px] text-orange-400 text-sm mb-4">
                Why Choose Us
              </p>

              <h2 className="text-4xl md:text-6xl font-black">
                Mobile App Services
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
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-orange-400/40 transition duration-500"
                >

                  <h3 className="text-2xl font-bold mb-4">
                    {feature}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Professional mobile app development
                    solutions with scalable architecture
                    and modern technology.
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

export default MobileAppDevelopment;