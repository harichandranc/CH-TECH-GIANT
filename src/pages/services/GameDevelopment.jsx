import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

import PageBanner from "../../components/PageBanner";
import SectionWrapper from "../../components/SectionWrapper";
import { translations } from "../../locales";

/* =========================================================
   LANGUAGE LIST
========================================================= */

const languages = [
  {
    code: "en",
    path: "/game-development",
    label: "🇺🇸 English",
    shortLabel: "English",
  },
  {
    code: "zh",
    path: "/zh/game-development",
    label: "🇨🇳 简体中文",
    shortLabel: "中文",
  },
  {
    code: "es",
    path: "/es/game-development",
    label: "🇪🇸 Español",
    shortLabel: "Español",
  },
  {
    code: "pt",
    path: "/pt/game-development",
    label: "🇧🇷 Português",
    shortLabel: "Português",
  },
  {
    code: "de",
    path: "/de/game-development",
    label: "🇩🇪 Deutsch",
    shortLabel: "Deutsch",
  },
  {
    code: "ko",
    path: "/ko/game-development",
    label: "🇰🇷 한국어",
    shortLabel: "한국어",
  },
  {
    code: "ja",
    path: "/ja/game-development",
    label: "🇯🇵 日本語",
    shortLabel: "日本語",
  },
];

/* =========================================================
   SUPPORTED LANGUAGES
========================================================= */

const supportedLanguages = [
  "zh",
  "es",
  "pt",
  "de",
  "ko",
  "ja",
];

/* =========================================================
   GAME DEVELOPMENT COMPONENT
========================================================= */

const GameDevelopment = () => {
  const { lang } = useParams();
  const navigate = useNavigate();

  /* =======================================================
     LANGUAGE
  ======================================================= */

  const language = supportedLanguages.includes(lang)
    ? lang
    : "en";

  const t = translations[language];

  const currentLanguage =
    languages.find((item) => item.code === language) ||
    languages[0];

  /* =======================================================
     AUTO LANGUAGE DETECTION
  ======================================================= */

  useEffect(() => {
    if (lang) return;

    const browserLanguage =
      navigator.language.toLowerCase();

    if (browserLanguage.startsWith("zh")) {
      navigate("/zh/game-development", { replace: true });
    } else if (browserLanguage.startsWith("es")) {
      navigate("/es/game-development", { replace: true });
    } else if (browserLanguage.startsWith("pt")) {
      navigate("/pt/game-development", { replace: true });
    } else if (browserLanguage.startsWith("de")) {
      navigate("/de/game-development", { replace: true });
    } else if (browserLanguage.startsWith("ko")) {
      navigate("/ko/game-development", { replace: true });
    } else if (browserLanguage.startsWith("ja")) {
      navigate("/ja/game-development", { replace: true });
    } else {
      navigate("/game-development", { replace: true });
    }
  }, [lang, navigate]);

  /* =======================================================
     CHANGE LANGUAGE
  ======================================================= */

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;

    const selected = languages.find(
      (item) => item.code === selectedLanguage
    );

    if (selected) {
      navigate(selected.path);
    }
  };

  return (
    <div className="bg-[#050816] text-white">

      {/* =====================================================
          LANGUAGE DROPDOWN
      ====================================================== */}

      <section className="relative px-4 pt-0 sm:pt-0">

        <div className="flex justify-end w-full relative z-50">

          <div className="relative">

            <select
              value={language}
              onChange={handleLanguageChange}
              aria-label="Select language"
              className="
                appearance-none
                bg-black/80
                backdrop-blur-xl
                border
                border-white/20
                hover:border-cyan-400
                text-white
                text-xs
                sm:text-sm
                font-medium
                rounded-xl
                pl-3
                pr-9
                py-2.5
                outline-none
                cursor-pointer
                shadow-lg
                transition
              "
            >
              {languages.map((item) => (
                <option
                  key={item.code}
                  value={item.code}
                  className="bg-black text-white"
                >
                  {item.label}
                </option>
              ))}
            </select>

            <FaChevronDown
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                pointer-events-none
                text-cyan-400
                text-xs
              "
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          PAGE BANNER
      ====================================================== */}

      <PageBanner
        title={t.gameDevelopment.bannerTitle}
        subtitle={t.gameDevelopment.bannerSubtitle}
      />

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <SectionWrapper>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4">
              {t.gameDevelopment.introBadge}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.gameDevelopment.introTitle}
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              {t.gameDevelopment.introDescription}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">

              {t.gameDevelopment.services.map(
                (service, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      bg-white/5
                      border
                      border-cyan-500/10
                      rounded-2xl
                      p-4
                      backdrop-blur-xl
                      hover:border-cyan-400/30
                      hover:bg-cyan-400/5
                      transition
                    "
                  >
                    <p className="text-gray-300">
                      {service}
                    </p>
                  </motion.div>
                )
              )}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              bg-white/5
              border
              border-cyan-500/10
              rounded-3xl
              p-8
              backdrop-blur-xl
            "
          >

            <h3 className="text-2xl font-semibold mb-6">
              {t.gameDevelopment.benefitsTitle}
            </h3>

            <div className="space-y-5">

              {t.gameDevelopment.benefits.map(
                (benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="flex items-center gap-3"
                  >

                    <span className="text-cyan-400 text-lg">
                      ✓
                    </span>

                    <p className="text-gray-400">
                      {benefit}
                    </p>

                  </motion.div>
                )
              )}

            </div>

          </motion.div>

        </div>

      </SectionWrapper>

      {/* =====================================================
          GAME DEVELOPMENT SERVICES
      ====================================================== */}

      <SectionWrapper>

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold mb-4">
            {t.gameDevelopment.servicesTitle}
          </h2>

          <p className="text-gray-400 max-w-4xl mx-auto">
            {t.gameDevelopment.servicesDescription}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {t.gameDevelopment.serviceDetails.map(
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
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  bg-white/5
                  rounded-3xl
                  p-8
                  border
                  border-cyan-500/10
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/5
                  transition
                "
              >

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

              </motion.div>
            )
          )}

        </div>

      </SectionWrapper>

      {/* =====================================================
          DEVELOPMENT PROCESS
      ====================================================== */}

      <SectionWrapper>

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold mb-4">
            {t.gameDevelopment.processTitle}
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            {t.gameDevelopment.processDescription}
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {t.gameDevelopment.process.map(
            (item, index) => (
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
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  bg-white/5
                  border
                  border-cyan-500/10
                  rounded-3xl
                  p-6
                  text-center
                  hover:border-cyan-400/30
                  transition
                "
              >

                <div className="text-cyan-400 text-3xl font-bold mb-4">
                  0{index + 1}
                </div>

                <h3 className="font-semibold">
                  {item}
                </h3>

              </motion.div>
            )
          )}

        </div>

      </SectionWrapper>

      {/* =====================================================
          PLATFORMS
      ====================================================== */}

      <SectionWrapper>

        <h2 className="text-4xl font-bold text-center mb-12">
          {t.gameDevelopment.platformsTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          {t.gameDevelopment.platforms.map(
            (platform, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  bg-white/5
                  rounded-2xl
                  p-5
                  border
                  border-cyan-500/10
                  text-center
                  hover:border-cyan-400/30
                  transition
                "
              >
                {platform}
              </motion.div>
            )
          )}

        </div>

      </SectionWrapper>

      {/* =====================================================
          TECHNOLOGIES
      ====================================================== */}

      <SectionWrapper>

        <h2 className="text-4xl font-bold text-center mb-12">
          {t.gameDevelopment.technologiesTitle}
        </h2>

        <div className="grid md:grid-cols-4 gap-5">

          {t.gameDevelopment.technologies.map(
            (technology, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  bg-white/5
                  rounded-2xl
                  p-5
                  border
                  border-cyan-500/10
                  text-center
                  hover:border-cyan-400/30
                  transition
                "
              >
                {technology}
              </motion.div>
            )
          )}

        </div>

      </SectionWrapper>

      {/* =====================================================
          SEO CONTENT
      ====================================================== */}

      <SectionWrapper>

        <div className="
          bg-white/5
          border
          border-cyan-500/10
          rounded-3xl
          p-10
        ">

          <h2 className="text-4xl font-bold mb-6">
            {t.gameDevelopment.seoTitle}
          </h2>

          <div className="space-y-6 text-gray-400 leading-relaxed">

            {t.gameDevelopment.seoContent.map(
              (paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              )
            )}

          </div>

        </div>

      </SectionWrapper>

      {/* =====================================================
          CTA
      ====================================================== */}

      <SectionWrapper>

        <div className="
          text-center
          bg-gradient-to-r
          from-cyan-500/10
          to-blue-500/10
          border
          border-cyan-500/20
          rounded-3xl
          p-12
        ">

          <h2 className="text-4xl font-bold mb-4">
            {t.gameDevelopment.ctaTitle}
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mb-8">
            {t.gameDevelopment.ctaDescription}
          </p>

          <button
            className="
              px-8
              py-3
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-600
              transition
              font-semibold
            "
          >
            {t.gameDevelopment.ctaButton}
          </button>

        </div>

      </SectionWrapper>

    </div>
  );
};

export default GameDevelopment;