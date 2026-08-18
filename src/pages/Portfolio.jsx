import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";

import { translations } from "../locales";

const projects = [
  {
    key: "webCodshop",
    category: "app",
    image: "/projects/webcodshop.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.webcodshop&pcampaignid=web_share",
  },
  {
    key: "cgpaSgpaCalculator",
    category: "app",
    image: "/projects/cgpacalculator.jpg",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.ch_cgpa_sgpa_calculator&pcampaignid=web_share",
  },
  {
    key: "fileConverter",
    category: "app",
    image: "/projects/fileconverter.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.everything_converter&pcampaignid=web_share",
  },
  {
    key: "worldClock",
    category: "app",
    image: "/projects/worldclock.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.worldclock&pcampaignid=web_share",
  },
  {
    key: "fileRenamer",
    category: "app",
    image: "/projects/filerenamer.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.file_name_cleaner&pcampaignid=web_share",
  },
  {
    key: "schoolErp",
    category: "software",
    image: "/projects/schoolerp.png",
    link: "/software-development/school-erp-system",
  },
  {
    key: "hospitalManagementSystem",
    category: "software",
    image: "/projects/hospitalmanagementsystem.webp",
    link: "/software-development/hospital-management-system",
  },
  {
    key: "invoiceMaker",
    category: "app",
    image: "/projects/invoicemaker.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.invoice_generator_app&pcampaignid=web_share",
  },
  {
    key: "pdfConverter",
    category: "web",
    image: "/projects/pdfconverter.jpg",
    link: "https://pdfconverter.chtechgiant.com",
  },
  {
    key: "pdfLockUnlock",
    category: "app",
    image: "/projects/pdf_lock_unlock.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.pdf_lock_unlock",
  },
  {
    key: "sampleFiles",
    category: "web",
    image: "/projects/samplefiles.png",
    link: "https://samplefiles.chtechgiant.com",
  },
  {
    key: "imageToPdf",
    category: "app",
    image: "/projects/img2pdf copy.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.image_to_pdf_converter&pcampaignid=web_share",
  },
];

const languages = [
  {
    code: "en",
    path: "/portfolio",
    label: "🇺🇸 English",
  },
  {
    code: "zh",
    path: "/zh/portfolio",
    label: "🇨🇳 简体中文",
  },
  {
    code: "es",
    path: "/es/portfolio",
    label: "🇪🇸 Español",
  },
  {
    code: "pt",
    path: "/pt/portfolio",
    label: "🇧🇷 Português",
  },
  {
    code: "de",
    path: "/de/portfolio",
    label: "🇩🇪 Deutsch",
  },
  {
    code: "ko",
    path: "/ko/portfolio",
    label: "🇰🇷 한국어",
  },
  {
    code: "ja",
    path: "/ja/portfolio",
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

const filters = [
  "all",
  "web",
  "app",
  "software",
  "game",
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const { lang } = useParams();
  const navigate = useNavigate();

  const language = supportedLanguages.includes(lang)
    ? lang
    : "en";

  const t = translations[language];

  /* =====================================================
     AUTO LANGUAGE DETECTION
  ===================================================== */

  useEffect(() => {
    if (lang) return;

    const browserLanguage =
      navigator.language.toLowerCase();

    if (browserLanguage.startsWith("zh")) {
      navigate("/zh/portfolio", { replace: true });
    } else if (browserLanguage.startsWith("es")) {
      navigate("/es/portfolio", { replace: true });
    } else if (browserLanguage.startsWith("pt")) {
      navigate("/pt/portfolio", { replace: true });
    } else if (browserLanguage.startsWith("de")) {
      navigate("/de/portfolio", { replace: true });
    } else if (browserLanguage.startsWith("ko")) {
      navigate("/ko/portfolio", { replace: true });
    } else if (browserLanguage.startsWith("ja")) {
      navigate("/ja/portfolio", { replace: true });
    } else {
      navigate("/portfolio", { replace: true });
    }
  }, [lang, navigate]);

  /* =====================================================
     LOCALIZED PROJECT PATH
  ===================================================== */

  const getLocalizedPath = (path) => {
    if (language === "en") {
      return path;
    }

    return `/${language}${path}`;
  };

  /* =====================================================
     FILTER PROJECTS
  ===================================================== */

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter
        );

  return (
    <div className="min-h-screen bg-[#050816] text-white px-6 py-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* =================================================
            LANGUAGE SWITCHER
        ================================================= */}

        <div className="flex justify-center mb-2 md:mb-16">

          {/* MOBILE LANGUAGE DROPDOWN */}

          <div className="md:hidden flex justify-end w-full relative z-50 mb-8">

            <select
              id="mobile-language"
              value={language}
              onChange={(e) => {
                const selectedLanguage =
                  languages.find(
                    (item) =>
                      item.code === e.target.value
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
              <Link
                key={item.code}
                to={item.path}
                className={`px-5 py-2 rounded-full border transition ${
                  language === item.code
                    ? "bg-cyan-500 text-black border-cyan-500"
                    : "border-white/20 hover:border-cyan-500"
                }`}
              >
                {item.label}
              </Link>
            ))}

          </div>

        </div>

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center mb-16"
        >

          <p className="text-cyan-400 uppercase tracking-[4px] mb-3">
            {t.portfolio.eyebrow}
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-6">

            {t.portfolio.title}

            {" "}

            <span className="text-cyan-400">
              {t.portfolio.titleHighlight}
            </span>

          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {t.portfolio.description}
          </p>

        </motion.div>

        {/* =================================================
            FILTERS
        ================================================= */}

        <div className="flex flex-wrap justify-center gap-4 mb-16">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() =>
                setActiveFilter(filter)
              }
              className={`px-6 py-3 rounded-full capitalize font-semibold transition-all duration-300 border ${
                activeFilter === filter
                  ? "bg-cyan-500 text-black border-cyan-400 shadow-lg shadow-cyan-500/30"
                  : "bg-white/5 border-white/10 text-gray-300 hover:border-cyan-400"
              }`}
            >
              {t.portfolio.filters[filter]}
            </button>

          ))}

        </div>

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map(
            (project, index) => {

              const projectData =
                t.portfolio.projects[
                  project.key
                ];

              const categoryLabel =
                t.portfolio.categories[
                  project.category
                ];

              const isInternal =
                project.link.startsWith("/");

              const actionText =
                project.category === "app"
                  ? t.portfolio.actions.installApp
                  : project.category === "software"
                  ? t.portfolio.actions.viewSoftware
                  : t.portfolio.actions.visitWebsite;

              const CardContent = (
                <>
                  {/* IMAGE */}

                  <div className="h-48 md:h-64 overflow-hidden">

                    <img
                      src={project.image}
                      alt={projectData.title}
                      className="w-full h-full object-contain bg-black group-hover:scale-105 transition duration-700 p-2"
                    />

                  </div>

                  {/* CONTENT */}

                  <div className="p-6">

                    <div className="mb-4">

                      <span className="px-4 py-1 rounded-full text-xs uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">

                        {categoryLabel}

                      </span>

                    </div>

                    <h2 className="text-2xl font-bold mb-3">

                      {projectData.title}

                    </h2>

                    <p className="text-gray-400 leading-relaxed mb-5">

                      {projectData.description}

                    </p>

                    <div className="inline-flex items-center justify-center mt-4 px-5 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/30">

                      {actionText}

                    </div>

                  </div>

                  {/* GLOW */}

                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition duration-500">
                  </div>
                </>
              );

              /* =================================================
                 INTERNAL PROJECT
              ================================================= */

              if (isInternal) {

                return (
                  <motion.div
                    key={project.key}
                    initial={{
                      opacity: 0,
                      y: 60,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -10,
                    }}
                  >

                    <Link
                      to={getLocalizedPath(
                        project.link
                      )}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl block cursor-pointer"
                    >

                      {CardContent}

                    </Link>

                  </motion.div>
                );
              }

              /* =================================================
                 EXTERNAL PROJECT
              ================================================= */

              return (
                <motion.a
                  key={project.key}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl block cursor-pointer"
                >

                  {CardContent}

                </motion.a>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
};

export default Portfolio;