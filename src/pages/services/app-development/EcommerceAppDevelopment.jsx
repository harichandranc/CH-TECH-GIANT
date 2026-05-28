import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  "Online Shopping Apps",
  "Secure Payment Integration",
  "Cart & Checkout Systems",
  "Order Management",
  "Admin Dashboard Integration",
  "Scalable E-Commerce Solutions",
];

const EcommerceAppDevelopment = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>

        <title>
          Ecommerce App Development Company | CH TECH GIANT
        </title>

        <meta
          name="description"
          content="CH TECH GIANT provides professional ecommerce app development services with secure payment systems, scalable architecture, and modern shopping experiences."
        />

        <meta
          name="keywords"
          content="Ecommerce app development, shopping app development, online store app, ecommerce mobile app company, Android ecommerce apps, iOS ecommerce apps"
        />

        <meta
          property="og:title"
          content="Ecommerce App Development | CH TECH GIANT"
        />

        <meta
          property="og:description"
          content="Professional ecommerce mobile application development services."
        />

        <meta
          property="og:image"
          content="https://chtechgiant.com/services/ecommerce-app.jpg"
        />

        <meta
          property="og:url"
          content="https://chtechgiant.com/app-development/ecommerce-app-development"
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
          content="Ecommerce App Development | CH TECH GIANT"
        />

        <meta
          name="twitter:description"
          content="Premium ecommerce app development services for modern online businesses."
        />

        <meta
          name="theme-color"
          content="#000000"
        />

        <link
          rel="canonical"
          href="https://chtechgiant.com/app-development/ecommerce-app-development"
        />

        {/* STRUCTURED DATA */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Ecommerce App Development",
              "provider": {
                "@type": "Organization",
                "name": "CH TECH GIANT",
                "url": "https://chtechgiant.com"
              },
              "areaServed": "India",
              "description": "Professional ecommerce app development services with secure shopping systems."
            }
          `}
        </script>

      </Helmet>

      <div className="min-h-screen bg-black text-white overflow-hidden">

        {/* HERO */}
        <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-500/10 blur-[160px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >

                <p className="uppercase tracking-[5px] text-pink-400 text-sm mb-5">
                  App Development
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-8">
                  Ecommerce App
                  <span className="text-pink-400">
                    {" "}Development
                  </span>
                </h1>

                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  CH TECH GIANT develops modern ecommerce
                  mobile applications with secure payment
                  systems, smooth shopping experiences,
                  scalable architecture, and premium UI.
                </p>

                <div className="flex flex-wrap gap-4">

                  <Link to="/contact">
                    <button className="px-8 py-4 rounded-2xl bg-pink-500 hover:bg-pink-400 transition font-semibold text-black">
                      Start Project
                    </button>
                  </Link>

                  <Link to="/services">
                    <button className="px-8 py-4 rounded-2xl border border-white/10 hover:border-pink-400 transition">
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
                  src="/services/ecommerce-app.jpg"
                  alt="Ecommerce App Development"
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

              <p className="uppercase tracking-[5px] text-pink-400 text-sm mb-4">
                Why Choose Us
              </p>

              <h2 className="text-4xl md:text-6xl font-black">
                Ecommerce App Services
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
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-pink-400/40 transition duration-500"
                >

                  <h3 className="text-2xl font-bold mb-4">
                    {feature}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Premium ecommerce app solutions
                    designed for scalability, security,
                    and modern shopping experiences.
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

export default EcommerceAppDevelopment;