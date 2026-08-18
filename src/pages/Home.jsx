import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  FaArrowRight,
  FaCode,
  FaMobileAlt,
  FaLaptopCode,
  FaGamepad,
  FaHospital,
  FaGraduationCap,
  FaShoppingCart,
  FaBuilding,
  FaUtensils,
  FaNewspaper,
  FaReact,
  FaNodeJs,
  FaGooglePlay,
  FaChevronDown,
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

import { translations } from "../locales";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: <FaCode />,
    key: "webDevelopment",
  },
  {
    icon: <FaMobileAlt />,
    key: "appDevelopment",
  },
  {
    icon: <FaLaptopCode />,
    key: "softwareDevelopment",
  },
  {
    icon: <FaGamepad />,
    key: "gameDevelopment",
  },
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
  {
    icon: <FaHospital />,
    key: "healthcare",
  },
  {
    icon: <FaGraduationCap />,
    key: "education",
  },
  {
    icon: <FaShoppingCart />,
    key: "ecommerce",
  },
  {
    icon: <FaBuilding />,
    key: "corporate",
  },
  {
    icon: <FaUtensils />,
    key: "restaurants",
  },
  {
    icon: <FaNewspaper />,
    key: "mediaNews",
  },
];

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  {
    icon: <FaReact />,
    title: "React",
  },
  {
    icon: <SiFlutter />,
    title: "Flutter",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
  },
  {
    icon: <SiFirebase />,
    title: "Firebase",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
  },
];

/* =========================================================
   LATEST APPS
========================================================= */

const latestApps = [
  {
    key: "fileConverter",
    image: "/projects/fileconverter.png",
    link:
      "https://play.google.com/store/apps/details?id=com.chtechgiant.everything_converter",
  },
  {
    key: "fileRenamer",
    image: "/projects/filerenamer.png",
    link:
      "https://play.google.com/store/apps/details?id=com.chtechgiant.file_name_cleaner",
  },
  {
    key: "webCodshop",
    image: "/projects/webcodshop.png",
    link:
      "https://play.google.com/store/apps/details?id=com.chtechgiant.webcodshop",
  },
];

/* =========================================================
   LANGUAGE LIST
========================================================= */

const languages = [
  {
    code: "en",
    path: "/",
    label: "🇺🇸 English",
    shortLabel: "English",
  },
  {
    code: "zh",
    path: "/zh",
    label: "🇨🇳 简体中文",
    shortLabel: "中文",
  },
  {
    code: "es",
    path: "/es",
    label: "🇪🇸 Español",
    shortLabel: "Español",
  },
  {
    code: "pt",
    path: "/pt",
    label: "🇧🇷 Português",
    shortLabel: "Português",
  },
  {
    code: "de",
    path: "/de",
    label: "🇩🇪 Deutsch",
    shortLabel: "Deutsch",
  },
  {
    code: "ko",
    path: "/ko",
    label: "🇰🇷 한국어",
    shortLabel: "한국어",
  },
  {
    code: "ja",
    path: "/ja",
    label: "🇯🇵 日本語",
    shortLabel: "日本語",
  },
];

/* =========================================================
   HOME COMPONENT
========================================================= */

const Home = () => {
  const { lang } = useParams();
  const navigate = useNavigate();

  /* =======================================================
     LANGUAGE
  ======================================================= */

  const supportedLanguages = [
    "zh",
    "es",
    "pt",
    "de",
    "ko",
    "ja",
  ];

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
      navigate("/zh", { replace: true });
    } else if (browserLanguage.startsWith("es")) {
      navigate("/es", { replace: true });
    } else if (browserLanguage.startsWith("pt")) {
      navigate("/pt", { replace: true });
    } else if (browserLanguage.startsWith("de")) {
      navigate("/de", { replace: true });
    } else if (browserLanguage.startsWith("ko")) {
      navigate("/ko", { replace: true });
    } else if (browserLanguage.startsWith("ja")) {
      navigate("/ja", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [lang, navigate]);

  /* =======================================================
     SEO URL
  ======================================================= */

  const pageUrl =
    language === "zh"
      ? "https://chtechgiant.com/zh"
      : language === "es"
      ? "https://chtechgiant.com/es"
      : language === "pt"
      ? "https://chtechgiant.com/pt"
      : language === "de"
      ? "https://chtechgiant.com/de"
      : language === "ko"
      ? "https://chtechgiant.com/ko"
      : language === "ja"
      ? "https://chtechgiant.com/ja"
      : "https://chtechgiant.com";

  /* =======================================================
     SEO TITLE
  ======================================================= */

  const pageTitle =
    language === "zh"
      ? "CH TECH GIANT | 应用开发、网站开发、软件开发和游戏开发"
      : language === "es"
      ? "CH TECH GIANT | Desarrollo de aplicaciones, sitios web, software y juegos"
      : language === "pt"
      ? "CH TECH GIANT | Desenvolvimento de aplicativos, sites, software e jogos"
      : language === "de"
      ? "CH TECH GIANT | App-, Web-, Software- und Spieleentwicklung"
      : language === "ko"
      ? "CH TECH GIANT | 앱 개발, 웹 개발, 소프트웨어 및 게임 개발"
      : language === "ja"
      ? "CH TECH GIANT | アプリ・Web・ソフトウェア・ゲーム開発"
      : "CH TECH GIANT | App Development, Web Development, Game Development & Software Solutions";

  /* =======================================================
     SEO DESCRIPTION
  ======================================================= */

  const pageDescription =
    language === "zh"
      ? "CH TECH GIANT 为初创企业、企业和组织提供高品质的应用开发、网站开发、软件开发和游戏开发服务。"
      : language === "es"
      ? "CH TECH GIANT ofrece desarrollo profesional de aplicaciones, sitios web, software y juegos para startups, empresas y organizaciones."
      : language === "pt"
      ? "A CH TECH GIANT oferece desenvolvimento profissional de aplicativos, sites, software e jogos para startups, empresas e organizações."
      : language === "de"
      ? "CH TECH GIANT bietet professionelle Entwicklung von Apps, Websites, Software und Spielen für Startups, Unternehmen und Organisationen."
      : language === "ko"
      ? "CH TECH GIANT은 스타트업, 기업 및 조직을 위한 전문적인 앱, 웹사이트, 소프트웨어 및 게임 개발 서비스를 제공합니다."
      : language === "ja"
      ? "CH TECH GIANTは、スタートアップ、企業、組織向けに高品質なアプリ、Webサイト、ソフトウェア、ゲーム開発サービスを提供しています。"
      : "CH TECH GIANT provides premium app development, web development, software development and game development services for startups, businesses, and enterprises.";

  /* =======================================================
     SEO KEYWORDS
  ======================================================= */

  const keywords =
    language === "zh"
      ? "应用开发, 网站开发, 软件开发, 游戏开发, Flutter开发, Android应用, CH TECH GIANT"
      : language === "es"
      ? "desarrollo de aplicaciones, desarrollo web, desarrollo de software, desarrollo de juegos, Flutter, Android, CH TECH GIANT"
      : language === "pt"
      ? "desenvolvimento de aplicativos, desenvolvimento web, desenvolvimento de software, desenvolvimento de jogos, Flutter, Android, CH TECH GIANT"
      : language === "de"
      ? "App Entwicklung, Webentwicklung, Softwareentwicklung, Spieleentwicklung, Flutter, Android, CH TECH GIANT"
      : language === "ko"
      ? "앱 개발, 웹 개발, 소프트웨어 개발, 게임 개발, Flutter, Android 앱, CH TECH GIANT"
      : language === "ja"
      ? "アプリ開発, Web開発, ソフトウェア開発, ゲーム開発, Flutter, Androidアプリ, CH TECH GIANT"
      : "app development, web development, software development, game development, Flutter app development, Android apps, CH TECH GIANT";

  /* =======================================================
     OG LOCALE
  ======================================================= */

  const ogLocale =
    language === "zh"
      ? "zh_CN"
      : language === "es"
      ? "es_ES"
      : language === "pt"
      ? "pt_BR"
      : language === "de"
      ? "de_DE"
      : language === "ko"
      ? "ko_KR"
      : language === "ja"
      ? "ja_JP"
      : "en_US";

  /* =======================================================
     SCHEMA LANGUAGE
  ======================================================= */

  const schemaLanguage =
    language === "zh"
      ? "zh-CN"
      : language === "es"
      ? "es"
      : language === "pt"
      ? "pt-BR"
      : language === "de"
      ? "de"
      : language === "ko"
      ? "ko-KR"
      : language === "ja"
      ? "ja-JP"
      : "en";

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
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>
        <html lang={language} />

        <title>{pageTitle}</title>

        <meta
          name="description"
          content={pageDescription}
        />

        <meta
          name="keywords"
          content={keywords}
        />

        <meta
          name="author"
          content="CH TECH GIANT"
        />

        <link
          rel="canonical"
          href={pageUrl}
        />

        {/* HREFLANG */}

        <link
          rel="alternate"
          hrefLang="en"
          href="https://chtechgiant.com"
        />

        <link
          rel="alternate"
          hrefLang="zh-CN"
          href="https://chtechgiant.com/zh"
        />

        <link
          rel="alternate"
          hrefLang="es"
          href="https://chtechgiant.com/es"
        />

        <link
          rel="alternate"
          hrefLang="pt-BR"
          href="https://chtechgiant.com/pt"
        />

        <link
          rel="alternate"
          hrefLang="de"
          href="https://chtechgiant.com/de"
        />

        <link
          rel="alternate"
          hrefLang="ko-KR"
          href="https://chtechgiant.com/ko"
        />

        <link
          rel="alternate"
          hrefLang="ja-JP"
          href="https://chtechgiant.com/ja"
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://chtechgiant.com"
        />

        <meta
          property="og:locale"
          content={ogLocale}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content={pageTitle}
        />

        <meta
          property="og:description"
          content={pageDescription}
        />

        <meta
          property="og:image"
          content="https://chtechgiant.com/preview.png"
        />

        <meta
          property="og:url"
          content={pageUrl}
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={pageTitle}
        />

        <meta
          name="twitter:description"
          content={pageDescription}
        />

        <meta
          name="twitter:image"
          content="https://chtechgiant.com/preview.png"
        />

        <meta
          name="theme-color"
          content="#050816"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "CH TECH GIANT",
            url: pageUrl,
            description: pageDescription,
            inLanguage: schemaLanguage,
            publisher: {
              "@type": "Organization",
              name: "CH TECH GIANT (OPC) PRIVATE LIMITED",
            },
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white overflow-x-hidden">

        {/* ===================================================
            HEADER / LANGUAGE SWITCHER
        =================================================== */}

        <section className="relative px-4 pt-0 sm:pt-0">

          {/* MOBILE + DESKTOP LANGUAGE DROPDOWN */}

          <div className="flex justify-end w-full relative z-50">

            <div className="relative">

              <select
                value={language}
                onChange={handleLanguageChange}
                aria-label="Select language"
                className="appearance-none bg-black/80 backdrop-blur-xl border border-white/20 hover:border-cyan-400 text-white text-xs sm:text-sm font-medium rounded-xl pl-3 pr-9 py-2.5 outline-none cursor-pointer shadow-lg transition"
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

              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-400 text-xs" />

            </div>

          </div>

        </section>

        {/* ===================================================
            VIDEO SECTION
        =================================================== */}

        <section className="relative w-full h-[40vh] sm:h-[55vh] md:h-[100vh] overflow-hidden mt-8">

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/video-thumbnail.jpg"
            className="w-full h-full object-cover"
          >
            <source
              src="/videos/hero-video.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-black/30" />

        </section>

        {/* ===================================================
            HERO CONTENT
        =================================================== */}

        <section className="relative px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-14 sm:py-20 md:py-28 overflow-hidden">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-cyan-500/10 blur-[140px] rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto">

            <div className="max-w-4xl">

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="uppercase tracking-[4px] md:tracking-[6px] text-cyan-400 text-xs md:text-sm mb-5"
              >
                CH TECH GIANT (OPC) PRIVATE LIMITED
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight"
              >
                {t.homeHeroTitle1}

                <span className="text-cyan-400">
                  {" "}
                  {t.homeHeroTitle2}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.7,
                }}
                className="text-gray-400 text-base md:text-lg leading-relaxed mt-6 md:mt-8 max-w-2xl"
              >
                {t.homeHeroDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                }}
                className="flex flex-col sm:flex-row gap-4 md:gap-5 mt-8 md:mt-10"
              >

                <Link to={language === "en" ? "/services" : `/${language}/services`}>
                  <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black">
                    {t.exploreServices}
                  </button>
                </Link>

                <Link to="/contact">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 transition flex items-center justify-center gap-2 backdrop-blur-xl bg-white/5">
                    {t.contactUs}
                    <FaArrowRight />
                  </button>
                </Link>

              </motion.div>

            </div>

          </div>

        </section>

        {/* ===================================================
            SERVICES
        =================================================== */}

        <section className="px-6 md:px-12 lg:px-20 py-20 md:py-24">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >

            <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-4">
              {t.ourExpertise}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              {t.servicesWeProvide}
            </h2>

          </motion.div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mt-14 md:mt-16">

            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-lg hover:border-cyan-400/40 transition duration-500"
              >

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-2xl text-cyan-400 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  {t.services[service.key].title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {t.services[service.key].description}
                </p>

              </motion.div>
            ))}

          </div>

        </section>

        {/* ===================================================
            INDUSTRIES
        =================================================== */}

        <section className="px-6 md:px-12 lg:px-20 py-20 md:py-24">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-4">
              {t.industries}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              {t.industriesWeServe}
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-14">

            {industries.map((industry, index) => (
              <motion.div
                key={industry.key}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg text-center hover:border-cyan-400/40 transition duration-500"
              >

                <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl text-cyan-400 mb-5">
                  {industry.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-200">
                  {t.industriesList[industry.key]}
                </h3>

              </motion.div>
            ))}

          </div>

        </section>

        {/* ===================================================
            TECHNOLOGIES
        =================================================== */}

        <section className="px-6 md:px-12 lg:px-20 py-20 md:py-24">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-4">
              {t.technologies}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              {t.technologiesWeUse}
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-14">

            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg text-center hover:border-cyan-400/40 transition duration-500"
              >

                <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl text-cyan-400 mb-5">
                  {tech.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-200">
                  {tech.title}
                </h3>

              </motion.div>
            ))}

          </div>

        </section>

        {/* ===================================================
            LATEST APPS
        =================================================== */}

        <section className="px-6 md:px-12 lg:px-20 py-20 md:py-24">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-4">
              {t.latestApps}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              {t.publishedPlayStoreApps}
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

            {latestApps.map((app, index) => (
              <motion.a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                key={app.key}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg hover:border-cyan-400/40 transition duration-500"
              >

                <img
                  src={app.image}
                  alt={t.latestAppsData[app.key].title}
                  loading="lazy"
                  className="w-full h-[240px] object-cover"
                />

                <div className="p-6">

                  <div className="flex items-center gap-2 text-cyan-400 mb-4">

                    <FaGooglePlay />

                    <span className="text-sm">
                      {t.googlePlayStore}
                    </span>

                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {t.latestAppsData[app.key].title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {t.latestAppsData[app.key].description}
                  </p>

                </div>

              </motion.a>
            ))}

          </div>

        </section>

      </div>
    </>
  );
};

export default Home;