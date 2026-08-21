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
    path: "/it-consulting",
    label: "🇺🇸 English",
    shortLabel: "English",
  },
  {
    code: "zh",
    path: "/zh/it-consulting",
    label: "🇨🇳 简体中文",
    shortLabel: "中文",
  },
  {
    code: "es",
    path: "/es/it-consulting",
    label: "🇪🇸 Español",
    shortLabel: "Español",
  },
  {
    code: "pt",
    path: "/pt/it-consulting",
    label: "🇧🇷 Português",
    shortLabel: "Português",
  },
  {
    code: "de",
    path: "/de/it-consulting",
    label: "🇩🇪 Deutsch",
    shortLabel: "Deutsch",
  },
  {
    code: "ko",
    path: "/ko/it-consulting",
    label: "🇰🇷 한국어",
    shortLabel: "한국어",
  },
  {
    code: "ja",
    path: "/ja/it-consulting",
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
   IT CONSULTING COMPONENT
========================================================= */

const ITConsulting = () => {
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
      navigate("/zh/it-consulting", { replace: true });
    } else if (browserLanguage.startsWith("es")) {
      navigate("/es/it-consulting", { replace: true });
    } else if (browserLanguage.startsWith("pt")) {
      navigate("/pt/it-consulting", { replace: true });
    } else if (browserLanguage.startsWith("de")) {
      navigate("/de/it-consulting", { replace: true });
    } else if (browserLanguage.startsWith("ko")) {
      navigate("/ko/it-consulting", { replace: true });
    } else if (browserLanguage.startsWith("ja")) {
      navigate("/ja/it-consulting", { replace: true });
    } else {
      navigate("/it-consulting", { replace: true });
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
        title={t.itConsulting.bannerTitle}
        subtitle={t.itConsulting.bannerSubtitle}
      />

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <SectionWrapper>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4">
              {t.itConsulting.introBadge}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.itConsulting.introTitle}
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              {t.itConsulting.introDescription}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">

              {t.itConsulting.services.map(
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

          {/* Right */}

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
              {t.itConsulting.benefitsTitle}
            </h3>

            <div className="space-y-5">

              {t.itConsulting.benefits.map(
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

    </div>
  );
};

export default ITConsulting;