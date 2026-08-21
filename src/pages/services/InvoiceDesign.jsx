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
    path: "/invoice-design",
    label: "🇺🇸 English",
    shortLabel: "English",
  },
  {
    code: "zh",
    path: "/zh/invoice-design",
    label: "🇨🇳 简体中文",
    shortLabel: "中文",
  },
  {
    code: "es",
    path: "/es/invoice-design",
    label: "🇪🇸 Español",
    shortLabel: "Español",
  },
  {
    code: "pt",
    path: "/pt/invoice-design",
    label: "🇧🇷 Português",
    shortLabel: "Português",
  },
  {
    code: "de",
    path: "/de/invoice-design",
    label: "🇩🇪 Deutsch",
    shortLabel: "Deutsch",
  },
  {
    code: "ko",
    path: "/ko/invoice-design",
    label: "🇰🇷 한국어",
    shortLabel: "한국어",
  },
  {
    code: "ja",
    path: "/ja/invoice-design",
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
   INVOICE GALLERY
========================================================= */

const invoiceGallery = [
  {
    image: "/images/invoices/invoice-1.png",
    size: "large",
  },
  {
    image: "/images/invoices/invoice-2.png",
    size: "normal",
  },
  {
    image: "/images/invoices/invoice-3.png",
    size: "normal",
  },
  {
    image: "/images/invoices/invoice-4.png",
    size: "normal",
  },
  {
    image: "/images/invoices/invoice-5.png",
    size: "large",
  },
  {
    image: "/images/invoices/invoice-6.png",
    size: "normal",
  },
  {
    image: "/images/invoices/invoice-7.png",
    size: "normal",
  },
  {
    image: "/images/invoices/invoice-8.png",
    size: "normal",
  },
  {
    image: "/images/invoices/invoice-9.png",
    size: "large",
  },
];

/* =========================================================
   INVOICE DESIGN COMPONENT
========================================================= */

const InvoiceDesign = () => {
  const { lang } = useParams();
  const navigate = useNavigate();

  /* =======================================================
     LANGUAGE
  ======================================================= */

  const language = supportedLanguages.includes(lang)
    ? lang
    : "en";

  /*
   * Same translation system used by Home.jsx
   */
  const t = translations[language];

  /*
   * Invoice translations
   *
   * Expected structure:
   *
   * translations[language].invoiceDesign
   */
  const invoice = t.invoiceDesign;

  /* =======================================================
     CURRENT LANGUAGE
  ======================================================= */

  const currentLanguage =
    languages.find((item) => item.code === language) ||
    languages[0];

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

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden">

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
        title={invoice.bannerTitle}
        subtitle={invoice.bannerSubtitle}
      />

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <SectionWrapper>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4">
              {invoice.introBadge}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {invoice.introTitle}
            </h2>

            <p className="text-gray-400 leading-relaxed mb-5">
              {invoice.introParagraph1}
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              {invoice.introParagraph2}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">

              {invoice.services.map((service, index) => (
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
              ))}

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
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
              {invoice.whyTitle}
            </h3>

            <p className="text-gray-400 leading-relaxed mb-7">
              {invoice.whyDescription}
            </p>

            <div className="space-y-5">

              {invoice.benefits.map((benefit, index) => (
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
              ))}

            </div>

          </motion.div>

        </div>

      </SectionWrapper>

      {/* =====================================================
          INVOICE GALLERY
      ====================================================== */}

      <SectionWrapper>

        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            {invoice.galleryBadge}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
            {invoice.galleryTitle}
          </h2>

          <p className="text-gray-400 leading-relaxed">
            {invoice.galleryDescription}
          </p>

        </div>

        {/* =================================================
            3 × 3 DIAGONAL GALLERY
        ================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

          {invoiceGallery.map((item, index) => {

            const isLarge = item.size === "large";

            let columnClass = "";

            /*
              Row 1:
              Large 1 | Normal 2 | Normal 3

              Row 2:
              Normal 4 | Large 5 | Normal 6

              Row 3:
              Normal 7 | Normal 8 | Large 9
            */

            if (index === 0) {
              columnClass = "lg:col-span-6";
            } else if (index === 1 || index === 2) {
              columnClass = "lg:col-span-3";
            } else if (index === 3) {
              columnClass = "lg:col-span-3";
            } else if (index === 4) {
              columnClass = "lg:col-span-6";
            } else if (index === 5) {
              columnClass = "lg:col-span-3";
            } else if (index === 6 || index === 7) {
              columnClass = "lg:col-span-3";
            } else if (index === 8) {
              columnClass = "lg:col-span-6";
            }

            return (
              <motion.div
                key={item.image}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                className={`group relative ${columnClass}`}
              >

                <div
                  className={`
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    bg-white/[0.025]
                    border
                    border-white/10
                    p-3
                    transition-all
                    duration-500
                    group-hover:border-cyan-400/40
                    group-hover:bg-cyan-400/[0.025]
                    group-hover:-translate-y-2
                    ${
                      isLarge
                        ? "h-[620px]"
                        : "h-[460px]"
                    }
                  `}
                >

                  {/* Glow */}

                  <div
                    className="
                      absolute
                      -inset-1
                      bg-cyan-400/10
                      blur-3xl
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-700
                      pointer-events-none
                    "
                  />

                  {/* Invoice */}

                  <div
                    className="
                      relative
                      z-10
                      w-full
                      h-full
                      rounded-[1.5rem]
                      overflow-hidden
                      bg-[#0a0f1f]
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <img
                      src={item.image}
                      alt={invoice.galleryAlt}
                      loading="lazy"
                      className="
                        w-full
                        h-full
                        object-contain
                        transition-all
                        duration-700
                        ease-out
                        group-hover:scale-[1.035]
                      "
                    />

                    {/* Shine */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-tr
                        from-transparent
                        via-white/10
                        to-transparent
                        -translate-x-full
                        group-hover:translate-x-full
                        transition-transform
                        duration-1000
                        pointer-events-none
                      "
                    />

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </SectionWrapper>

      {/* =====================================================
          DESIGN FEATURES
      ====================================================== */}

      <SectionWrapper>

        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            {invoice.featuresBadge}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
            {invoice.featuresTitle}
          </h2>

          <p className="text-gray-400 leading-relaxed">
            {invoice.featuresDescription}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {invoice.features.map((feature, index) => (
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
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="
                bg-white/5
                border
                border-cyan-500/10
                rounded-3xl
                p-7
                hover:border-cyan-400/30
                transition
              "
            >

              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-cyan-400/10
                  border
                  border-cyan-400/20
                  flex
                  items-center
                  justify-center
                  mb-5
                "
              >

                <span className="text-cyan-400 font-bold">
                  0{index + 1}
                </span>

              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

            </motion.div>
          ))}

        </div>

      </SectionWrapper>

      {/* =====================================================
          DESIGN PROCESS
      ====================================================== */}

      <SectionWrapper>

        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            {invoice.processBadge}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
            {invoice.processTitle}
          </h2>

          <p className="text-gray-400 leading-relaxed">
            {invoice.processDescription}
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {invoice.process.map((step, index) => (
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
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="
                relative
                bg-white/5
                border
                border-cyan-500/10
                rounded-3xl
                p-7
                hover:border-cyan-400/30
                transition
              "
            >

              <span className="text-4xl font-bold text-cyan-400/30">
                {step.number}
              </span>

              <h3 className="text-xl font-semibold mt-5 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>

            </motion.div>
          ))}

        </div>

      </SectionWrapper>

      {/* =====================================================
          CTA
      ====================================================== */}

      <SectionWrapper>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-cyan-500/20
            bg-gradient-to-br
            from-cyan-400/10
            via-white/5
            to-transparent
            p-10
            md:p-14
            text-center
          "
        >

          <div
            className="
              absolute
              -top-20
              -right-20
              w-60
              h-60
              bg-cyan-400/10
              blur-3xl
              rounded-full
            "
          />

          <div className="relative z-10 max-w-3xl mx-auto">

            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
              {invoice.ctaBadge}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
              {invoice.ctaTitle}
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              {invoice.ctaDescription}
            </p>

            <button
              onClick={() =>
                navigate(
                  language === "en"
                    ? "/contact"
                    : `/${language}/contact`
                )
              }
              className="
                inline-flex
                items-center
                justify-center
                px-7
                py-3
                rounded-full
                bg-cyan-400
                text-black
                font-semibold
                hover:bg-cyan-300
                transition
              "
            >
              {invoice.ctaButton}
            </button>

          </div>

        </motion.div>

      </SectionWrapper>

    </div>
  );
};

export default InvoiceDesign;