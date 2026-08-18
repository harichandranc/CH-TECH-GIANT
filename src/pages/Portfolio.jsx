import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";

import { translations } from "../locales";

const projects = [
  {
    title: "Web Codshop",
    category: "app",
    description:
      "premium website templates, source codes, and college projects Marketplace app.",
    image: "/projects/webcodshop.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.webcodshop&pcampaignid=web_share",
  },
  {
    title: "CGPA SGPA Calculator",
    category: "app",
    description:
      "Smart CGPA & SGPA calculation mobile app.",
    image: "/projects/cgpacalculator.jpg",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.ch_cgpa_sgpa_calculator&pcampaignid=web_share",
  },
  {
    title: "File Converter",
    category: "app",
    description:
      "Advanced multi-format file conversion tool.",
    image: "/projects/fileconverter.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.everything_converter&pcampaignid=web_share",
  },
  {
    title: "World Clock App",
    category: "app",
    description:
      "Modern world timezone tracking application.",
    image: "/projects/worldclock.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.worldclock&pcampaignid=web_share",
  },
  {
    title: "File Renamer",
    category: "app",
    description:
      "Batch file renaming utility app.",
    image: "/projects/filerenamer.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.file_name_cleaner&pcampaignid=web_share",
  },
  {
    title: "School ERP System",
    category: "software",
    description:
      "Smartly manage students, staff, academics, attendance, and school operations in one centralized dashboard.",
    image: "/projects/schoolerp.png",
    link: "/software-development/school-erp-system",
  },
  {
    title: "Hospital Management System",
    category: "software",
    description:
      "A secure role-based Hospital Management System for managing departments, doctors, staff, patients, & hospital administration through a dashboard.",
    image: "/projects/hospitalmanagementsystem.webp",
    link: "/software-development/hospital-management-system",
  },
  {
    title: "Invoice Maker",
    category: "app",
    description:
      "Professional invoice generation app.",
    image: "/projects/invoicemaker.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.invoice_generator_app&pcampaignid=web_share",
  },
  {
    title: "PDF Converter",
    category: "web",
    description:
      "Convert images into high quality PDF files.",
    image: "/projects/pdfconverter.jpg",
    link: "https://pdfconverter.chtechgiant.com",
  },
  {
    title: "PDF Lock Unlock",
    category: "app",
    description:
      "Protect and Unlock PDF Files with Password.",
    image: "/projects/pdf_lock_unlock.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.pdf_lock_unlock",
  },
  {
    title: "Sample Files",
    category: "web",
    description:
      "Download Every types of sample files.",
    image: "/projects/samplefiles.png",
    link: "https://samplefiles.chtechgiant.com",
  },
  {
    title: "Image To PDF",
    category: "app",
    description:
      "Convert images into high quality PDF files.",
    image: "/projects/img2pdf copy.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.image_to_pdf_converter&pcampaignid=web_share",
  },
];

const filters = ["all", "web", "app", "software", "game"];

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

const Portfolio = () => {
  const { lang } = useParams();
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState("all");

  const language = supportedLanguages.includes(lang)
    ? lang
    : "en";

  const t = translations[language];

  /* =====================================================
     AUTO LANGUAGE DETECTION
  ===================================================== */

  useEffect(() => {
    if (lang) return;

    const browserLanguage = navigator.language.toLowerCase();

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
     LOCALIZED PATH
  ===================================================== */

  const getLocalizedPath = (path) => {
    if (language === "en") {
      return path;
    }

    return `/${language}${path}`;
  };

  /* =====================================================
     TRANSLATED PROJECT DATA
  ===================================================== */

  const portfolioProjects =
    t.portfolio?.projects || [];

  const getProjectText = (project, index) => {
    const translatedProject =
      portfolioProjects[index];

    return {
      title:
        translatedProject?.title ||
        project.title,

      description:
        translatedProject?.description ||
        project.description,
    };
  };

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
                      item.code ===
                      e.target.value
                  );

                if (selectedLanguage) {
                  navigate(
                    selectedLanguage.path
                  );
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
            {t.portfolio?.eyebrow ||
              "Our Portfolio"}
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-6">

            {t.portfolio?.title ||
              "Featured"}

            {" "}

            <span className="text-cyan-400">
              {t.portfolio?.titleHighlight ||
                "Projects"}
            </span>

          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {t.portfolio?.description ||
              "Explore premium websites, mobile apps, software, and game development projects crafted by CH TECH GIANT."}
          </p>

        </motion.div>

        {/* =================================================
            FILTERS
        ================================================= */}

        <div className="flex flex-wrap justify-center gap-4 mb-16">

          {filters.map((filter) => {

            const filterLabel =
              t.portfolio?.filters?.[filter] ||
              filter;

            return (
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
                {filterLabel}
              </button>
            );

          })}

        </div>

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map(
            (project, index) => {

              const isInternal =
                project.link.startsWith("/");

              const originalIndex =
                projects.findIndex(
                  (item) =>
                    item.title ===
                    project.title
                );

              const projectText =
                getProjectText(
                  project,
                  originalIndex
                );

              const buttonText =
                project.category === "app"
                  ? t.portfolio
                      ?.buttons
                      ?.installApp ||
                    "Install App"
                  : project.category ===
                    "software"
                  ? t.portfolio
                      ?.buttons
                      ?.viewSoftware ||
                    "View Software"
                  : t.portfolio
                      ?.buttons
                      ?.visitWebsite ||
                    "Visit Website";

              const CardContent = (
                <>
                  {/* IMAGE */}

                  <div className="h-48 md:h-64 overflow-hidden">

                    <img
                      src={project.image}
                      alt={projectText.title}
                      className="w-full h-full object-contain bg-black group-hover:scale-105 transition duration-700 p-2"
                    />

                  </div>

                  {/* CONTENT */}

                  <div className="p-6">

                    <div className="mb-4">

                      <span className="px-4 py-1 rounded-full text-xs uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {t.portfolio
                          ?.categories?.[
                          project.category
                        ] ||
                          project.category}
                      </span>

                    </div>

                    <h2 className="text-2xl font-bold mb-3">
                      {projectText.title}
                    </h2>

                    <p className="text-gray-400 leading-relaxed mb-5">
                      {projectText.description}
                    </p>

                    <div className="inline-flex items-center justify-center mt-4 px-5 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/30">
                      {buttonText}
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
                    key={project.title}
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
                  key={project.title}
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