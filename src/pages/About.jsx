import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { translations } from "../locales";

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

const supportedLanguages = [
  "zh",
  "es",
  "pt",
  "de",
  "ko",
  "ja",
];

const About = () => {
  const { lang } = useParams();
  const navigate = useNavigate();

  const language = supportedLanguages.includes(lang)
    ? lang
    : "en";

  const t = translations[language] || translations.en;
  const aboutT = t.about || translations.en.about;

  /* =====================================================
     AUTO LANGUAGE DETECTION
  ===================================================== */

  useEffect(() => {
    if (lang) return;

    const browserLanguage = navigator.language.toLowerCase();

    if (browserLanguage.startsWith("zh")) {
      navigate("/zh/about", { replace: true });
    } else if (browserLanguage.startsWith("es")) {
      navigate("/es/about", { replace: true });
    } else if (browserLanguage.startsWith("pt")) {
      navigate("/pt/about", { replace: true });
    } else if (browserLanguage.startsWith("de")) {
      navigate("/de/about", { replace: true });
    } else if (browserLanguage.startsWith("ko")) {
      navigate("/ko/about", { replace: true });
    } else if (browserLanguage.startsWith("ja")) {
      navigate("/ja/about", { replace: true });
    } else {
      navigate("/about", { replace: true });
    }
  }, [lang, navigate]);

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>
        <title>{aboutT.seo.title}</title>

        <meta
          name="description"
          content={aboutT.seo.description}
        />

        <meta
          name="keywords"
          content={aboutT.seo.keywords}
        />

        <meta
          name="author"
          content={aboutT.seo.author}
        />

        <meta
          property="og:title"
          content={aboutT.seo.ogTitle}
        />

        <meta
          property="og:description"
          content={aboutT.seo.ogDescription}
        />

        <meta
          property="og:image"
          content="https://chtechgiant.com/about-preview.png"
        />

        <meta
          property="og:url"
          content={`https://chtechgiant.com${
            language === "en"
              ? "/about"
              : `/${language}/about`
          }`}
        />

        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <link
          rel="canonical"
          href={`https://chtechgiant.com${
            language === "en"
              ? "/about"
              : `/${language}/about`
          }`}
        />

        <meta
          name="theme-color"
          content="#050816"
        />

        {/* =====================================================
            STRUCTURED DATA
        ===================================================== */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "CH TECH GIANT (OPC) PRIVATE LIMITED",
            legalName:
              "CH TECH GIANT (OPC) PRIVATE LIMITED",
            url: "https://chtechgiant.com",
            logo: "https://chtechgiant.com/logo.png",
            description:
              "Premium software development company offering app development, web development, software solutions, and digital services.",
            telephone: "+91-9980785020",
            email: "info@chtechgiant.com",
            identifier: {
              "@type": "PropertyValue",
              propertyID: "CIN",
              value: "U62012KA2025OPC203976",
            },
            foundingDate: "2025-06-10",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "1135/1, Behind BDO Office, Betur Road, Imam Nagara, Barline Road-Davanagere",
              addressLocality: "Davanagere",
              addressRegion: "Karnataka",
              postalCode: "577001",
              addressCountry: "IN",
            },
          })}
        </script>
      </Helmet>

      {/* =====================================================
          PAGE
      ===================================================== */}

      <div className="min-h-screen bg-[#050816] text-white px-6 overflow-hidden">

        <div className="max-w-7xl mx-auto">

          {/* =================================================
    LANGUAGE SWITCHER
    Same positioning as Services page
================================================= */}

<div className="flex justify-center mb-2 md:mb-16">

  {/* MOBILE LANGUAGE DROPDOWN */}

  <div className="md:hidden flex justify-end w-full relative z-50 mb-8">
    <select
      id="mobile-language"
      value={language}
      onChange={(e) => {
        const selectedLanguage = languages.find(
          (item) => item.code === e.target.value
        );

        if (selectedLanguage) {
          navigate(selectedLanguage.path);
        }
      }}
      className="h-10 w-32 rounded-xl border border-white/20 bg-[#050816] px-3 text-sm text-white outline-none backdrop-blur-xl focus:border-cyan-400 transition cursor-pointer"
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
  </div>

  {/* DESKTOP LANGUAGE BUTTONS */}

  <div className="hidden md:flex justify-center gap-3 flex-wrap pt-20">
    {languages.map((item) => (
      <button
        key={item.code}
        type="button"
        onClick={() => navigate(item.path)}
        className={`px-5 py-2 rounded-full border transition ${
          language === item.code
            ? "bg-cyan-500 text-black border-cyan-500"
            : "border-white/20 hover:border-cyan-500"
        }`}
      >
        {item.label}
      </button>
    ))}
  </div>

</div>

          {/* =================================================
              HEADER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="text-center mb-24 pt-12"
          >

            <p className="text-gray-400 uppercase tracking-[5px] mb-4">
              {aboutT.hero.eyebrow}
            </p>

            <h1 className="text-4xl md:text-7xl font-black leading-tight mb-8">

              {aboutT.hero.title}

              <span className="block text-white/80">
                {aboutT.hero.titleHighlight}
              </span>

            </h1>

            <p className="max-w-4xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
              {aboutT.hero.description}
            </p>

          </motion.div>

          {/* =================================================
              MAIN SECTION
          ================================================= */}

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">

            {/* IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
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
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8">
                {aboutT.main.title}
              </h2>

              {aboutT.main.paragraphs.map(
                (paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 last:mb-0"
                  >
                    {paragraph}
                  </p>
                )
              )}

            </motion.div>

          </div>

          {/* =================================================
              COMPANY INFORMATION
          ================================================= */}

          <section className="mb-24">

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-16"
            >

              <p className="text-gray-400 uppercase tracking-[5px] mb-4">
                {aboutT.company.eyebrow}
              </p>

              <h2 className="text-3xl md:text-5xl font-black">

                {aboutT.company.title}

                <span className="text-cyan-400">
                  {" "}
                  {aboutT.company.titleHighlight}
                </span>

              </h2>

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-xl"
            >

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">

                {/* LEGAL NAME */}

                <div>

                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    {aboutT.company.legalNameLabel}
                  </p>

                  <p className="text-white text-lg font-semibold">
                    {aboutT.company.legalName}
                  </p>

                </div>

                {/* CIN */}

                <div>

                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    {aboutT.company.cinLabel}
                  </p>

                  <p className="text-cyan-400 text-lg font-semibold break-all">
                    {aboutT.company.cin}
                  </p>

                </div>

                {/* ENTITY TYPE */}

                <div>

                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    {aboutT.company.entityTypeLabel}
                  </p>

                  <p className="text-white text-lg font-semibold">
                    {aboutT.company.entityType}
                  </p>

                </div>

                {/* INCORPORATION */}

                <div>

                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    {aboutT.company.incorporationLabel}
                  </p>

                  <p className="text-white text-lg font-semibold">
                    {aboutT.company.incorporation}
                  </p>

                </div>

                {/* ROC */}

                <div>

                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    {aboutT.company.rocLabel}
                  </p>

                  <p className="text-white text-lg font-semibold">
                    {aboutT.company.roc}
                  </p>

                </div>

                {/* DIRECTOR */}

                <div>

                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    {aboutT.company.directorLabel}
                  </p>

                  <p className="text-white text-lg font-semibold">
                    {aboutT.company.director}
                  </p>

                </div>

                {/* APPOINTMENT DATE */}

                <div>

                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    {aboutT.company.appointmentLabel}
                  </p>

                  <p className="text-white text-lg font-semibold">
                    {aboutT.company.appointmentDate}
                  </p>

                </div>

                {/* REGISTERED ADDRESS */}

                <div className="md:col-span-2">

                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    {aboutT.company.addressLabel}
                  </p>

                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {aboutT.company.address}
                  </p>

                </div>

              </div>

            </motion.div>

          </section>

          {/* =================================================
              SERVICES
          ================================================= */}

          <section className="mb-24">

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-16"
            >

              <p className="text-gray-400 uppercase tracking-[5px] mb-4">
                {aboutT.services.eyebrow}
              </p>

              <h2 className="text-3xl md:text-5xl font-black">

                {aboutT.services.title}

                <span className="text-cyan-400">
                  {" "}
                  {aboutT.services.titleHighlight}
                </span>

              </h2>

            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

              {aboutT.services.items.map(
                (service, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-xl hover:border-cyan-400/30 transition"
                  >

                    <p className="text-gray-300 font-medium">
                      {service}
                    </p>

                  </motion.div>
                )
              )}

            </div>

          </section>

          {/* =================================================
              FEATURES
          ================================================= */}

          <div className="mb-24">

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-16"
            >

              <p className="text-gray-400 uppercase tracking-[5px] mb-4">
                {aboutT.features.eyebrow}
              </p>

              <h2 className="text-3xl md:text-5xl font-black">

                {aboutT.features.title}

                <span className="text-cyan-400">
                  {" "}
                  {aboutT.features.titleHighlight}
                </span>

              </h2>

            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {aboutT.features.items.map(
                (feature, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
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
                )
              )}

            </div>

          </div>

          {/* =================================================
              TECHNOLOGIES
          ================================================= */}

          <section className="mb-24">

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-16"
            >

              <p className="text-gray-400 uppercase tracking-[5px] mb-4">
                {aboutT.technologies.eyebrow}
              </p>

              <h2 className="text-3xl md:text-5xl font-black">

                {aboutT.technologies.title}

                <span className="text-cyan-400">
                  {" "}
                  {aboutT.technologies.titleHighlight}
                </span>

              </h2>

            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">

              {aboutT.technologies.items.map(
                (tech, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 backdrop-blur-xl hover:border-cyan-400/30 transition"
                  >
                    {tech}
                  </motion.div>
                )
              )}

            </div>

          </section>

          {/* =================================================
              PROCESS
          ================================================= */}

          <section className="mb-24">

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-16"
            >

              <p className="text-gray-400 uppercase tracking-[5px] mb-4">
                {aboutT.process.eyebrow}
              </p>

              <h2 className="text-3xl md:text-5xl font-black">

                {aboutT.process.title}

                <span className="text-cyan-400">
                  {" "}
                  {aboutT.process.titleHighlight}
                </span>

              </h2>

            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

              {aboutT.process.items.map(
                (step, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-xl hover:border-cyan-400/30 transition"
                  >

                    <div className="text-cyan-400 text-2xl font-black mb-3">
                      0{index + 1}
                    </div>

                    <p className="text-gray-300">
                      {step}
                    </p>

                  </motion.div>
                )
              )}

            </div>

          </section>

          {/* =================================================
              MISSION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="bg-gradient-to-r from-cyan-500/10 to-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 text-center mb-24"
          >

            <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
              {aboutT.mission.eyebrow}
            </p>

            <h2 className="text-3xl md:text-6xl font-black leading-tight mb-8">

              {aboutT.mission.title}

              <span className="text-cyan-400">
                {" "}
                {aboutT.mission.titleHighlight}
              </span>

            </h2>

            <p className="max-w-4xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
              {aboutT.mission.description}
            </p>

          </motion.div>

        </div>
      </div>
    </>
  );
};

export default About;