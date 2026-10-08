import { useEffect } from "react";

import { Helmet } from "react-helmet-async";

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

  FaBootstrap,

  FaChevronDown,

  FaMoneyBillWave,

  FaHome,

  FaPlane,

  FaTruck,

  FaStore,

  FaFilm,

} from "react-icons/fa";


import {

  SiFlutter,

  SiFirebase,

  SiMongodb,

  SiTailwindcss,

  SiNextdotjs,

  SiTypescript,

  SiJavascript,

  SiReact,

  SiExpress,

  SiPython,

  SiMysql,

  SiPostgresql,

  SiDocker,

  SiUnity,

  SiGit,

} from "react-icons/si";


import { translations } from "../locales";


/* =========================================================

   SERVICES

========================================================= */


const services = [

  {

    icon: <FaCode className="text-blue-400" />,

    key: "webDevelopment",

  },

  {

    icon: <FaMobileAlt className="text-green-400" />,

    key: "appDevelopment",

  },

  {

    icon: <FaLaptopCode className="text-purple-400" />,

    key: "softwareDevelopment",

  },

  {

    icon: <FaGamepad className="text-orange-400" />,

    key: "gameDevelopment",

  },

];


/* =========================================================

   INDUSTRIES

========================================================= */


const industries = [

  {

    icon: "🏥",

    key: "healthcare",

  },

  {

    icon: "🎓",

    key: "education",

  },

  {

    icon: "🛒",

    key: "ecommerce",

  },

  {


    icon: "🏢",

    key: "corporate",

  },

  {

    icon: "🍽️",

    key: "restaurants",

  },

  {

    icon: "📰",

    key: "mediaNews",

  },

  {

    icon: "💳",

    key: "finance",

  },

  {

    icon: "🏠",

    key: "realEstate",

  },

  {

    icon: "✈️",

    key: "travel",

  },

  {

    icon: "🚚",

    key: "logistics",

  },

  {

    icon: "🛍️",

    key: "retail",

  },

  {

    icon: "🎬",

    key: "entertainment",

  },

];


/* =========================================================

   TECHNOLOGIES

========================================================= */


const technologies = [

  {

    icon: <FaReact className="text-[#61DAFB]" />,

    title: "React",

  },

  {

    icon: <SiNextdotjs className="text-white" />,

    title: "Next.js",

  },

  {

    icon: <SiTypescript className="text-[#3178C6]" />,

    title: "TypeScript",

  },

  {

    icon: <SiJavascript className="text-[#F7DF1E]" />,

    title: "JavaScript",

  },

  {

    icon: <SiFlutter className="text-[#54C5F8]" />,

    title: "Flutter",

  },

  {

    icon: <SiReact className="text-[#61DAFB]" />,

    title: "React Native",

  },

  {

    icon: <FaNodeJs className="text-[#68A063]" />,

    title: "Node.js",

  },

  {

    icon: <SiExpress className="text-white" />,

    title: "Express.js",

  },

  {

    icon: <SiPython className="text-[#3776AB]" />,

    title: "Python",

  },

  {

    icon: <SiMongodb className="text-[#47A248]" />,

    title: "MongoDB",

  },

  {

    icon: <SiMysql className="text-[#4479A1]" />,

    title: "MySQL",

  },

  {

    icon: <SiPostgresql className="text-[#4169E1]" />,

    title: "PostgreSQL",

  },

  {

    icon: <SiFirebase className="text-[#FFCA28]" />,

    title: "Firebase",

  },

  {

    icon: <SiTailwindcss className="text-[#06B6D4]" />,

    title: "Tailwind CSS",

  },

  {

    icon: <FaBootstrap className="text-[#7952B3]" />,

    title: "Bootstrap",

  },

  {

    icon: <SiDocker className="text-[#2496ED]" />,

    title: "Docker",

  },

  {

    icon: <SiUnity className="text-white" />,

    title: "Unity",

  },

];


/* =========================================================

   LATEST APPS

========================================================= */


const latestApps = [

  {

    key: "fileConverter",

    image: "/projects/fileconverter.webp",

    link:

      "https://play.google.com/store/apps/details?id=com.chtechgiant.everything_converter",

  },

  {

    key: "fileRenamer",

    image: "/projects/filerenamer.webp",

    link:

      "https://play.google.com/store/apps/details?id=com.chtechgiant.file_name_cleaner",

  },

  {

    key: "webCodshop",

    image: "/projects/webcodshop.webp",

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
    FUTURISTIC HERO
=================================================== */}

<section className="relative min-h-[760px] w-full overflow-hidden bg-[#020611] sm:min-h-[800px] lg:min-h-[calc(100vh-72px)]">

  {/* ===================================================
      HERO IMAGE
  =================================================== */}

  <img
    src="/images/home/hero-tech.png"
    alt="CH TECH GIANT futuristic technology workspace"
    className="absolute inset-0 z-0 h-full w-full object-cover object-center"
  />

  {/* ===================================================
      CINEMATIC OVERLAY
  =================================================== */}

  {/* Strong dark area behind the text */}
  <div
    className="
      absolute
      inset-0
      z-[1]
      bg-[linear-gradient(90deg,
        rgba(2,6,17,0.98)_0%,
        rgba(2,6,17,0.94)_18%,
        rgba(2,6,17,0.78)_38%,
        rgba(2,6,17,0.40)_58%,
        rgba(2,6,17,0.08)_82%,
        rgba(2,6,17,0)_100%
      )]
    "
  />

  {/* Top cinematic shadow */}
  <div
    className="
      absolute
      inset-x-0
      top-0
      z-[2]
      h-40
      bg-gradient-to-b
      from-[#020611]/80
      to-transparent
      pointer-events-none
    "
  />

  {/* Bottom cinematic shadow */}
  <div
    className="
      absolute
      inset-x-0
      bottom-0
      z-[2]
      h-44
      bg-gradient-to-t
      from-[#020611]
      via-[#020611]/70
      to-transparent
      pointer-events-none
    "
  />

  {/* ===================================================
      FUTURISTIC GLOW
  =================================================== */}

  <div
    className="
      absolute
      left-[-120px]
      top-[28%]
      z-[2]
      h-[420px]
      w-[420px]
      rounded-full
      bg-cyan-400/10
      blur-[140px]
      animate-pulse
      pointer-events-none
    "
  />

  <div
    className="
      absolute
      right-[-100px]
      bottom-[-100px]
      z-[2]
      h-[500px]
      w-[500px]
      rounded-full
      bg-blue-500/10
      blur-[160px]
      pointer-events-none
    "
  />

  {/* ===================================================
      FUTURISTIC GRID
  =================================================== */}

  <div
    className="absolute inset-0 z-[2] pointer-events-none opacity-[0.10]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(34,211,238,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.35) 1px, transparent 1px)",
      backgroundSize: "72px 72px",
      maskImage:
        "linear-gradient(to right, black 0%, black 35%, transparent 78%)",
      WebkitMaskImage:
        "linear-gradient(to right, black 0%, black 35%, transparent 78%)",
    }}
  />

  {/* ===================================================
      HERO CONTENT
  =================================================== */}

  <div
    className="
      relative
      z-10
      mx-auto
      flex
      min-h-[760px]
      w-full
      max-w-7xl
      items-center
      px-5
      py-24
      sm:min-h-[800px]
      sm:px-8
      md:px-12
      lg:min-h-[calc(100vh-72px)]
      lg:px-16
      xl:px-20
    "
  >

    <div className="w-full max-w-[760px]">

      {/* ===================================================
          COMPANY BADGE
      =================================================== */}

      <div
        className="
          mb-6
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-cyan-400/30
          bg-black/35
          px-4
          py-2.5
          backdrop-blur-xl
          shadow-[0_0_35px_rgba(34,211,238,0.10)]
        "
      >

        <span className="relative flex h-2.5 w-2.5">

          <span
            className="
              absolute
              inline-flex
              h-full
              w-full
              animate-ping
              rounded-full
              bg-cyan-400
              opacity-60
            "
          />

          <span
            className="
              relative
              inline-flex
              h-2.5
              w-2.5
              rounded-full
              bg-cyan-400
              shadow-[0_0_16px_rgba(34,211,238,0.95)]
            "
          />

        </span>

        <span
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[2.5px]
            text-cyan-300
            sm:text-xs
            sm:tracking-[3.5px]
          "
        >
          CH TECH GIANT (OPC) PRIVATE LIMITED
        </span>

      </div>

      {/* ===================================================
          MAIN HEADLINE
      =================================================== */}

      <h1
        className="
          max-w-[760px]
          text-4xl
          font-black
          leading-[0.98]
          tracking-[-0.035em]
          text-white
          sm:text-5xl
          md:text-6xl
          lg:text-[4.5rem]
          xl:text-[5rem]
        "
      >

        <span className="block">
          {t.homeHeroTitle1}
        </span>

        <span
          className="
            mt-1
            block
            bg-gradient-to-r
            from-cyan-300
            via-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_35px_rgba(34,211,238,0.20)]
          "
        >
          {t.homeHeroTitle2}
        </span>

      </h1>

      {/* ===================================================
          DESCRIPTION
      =================================================== */}

      <p
        className="
          mt-7
          max-w-[650px]
          text-sm
          font-medium
          leading-7
          text-gray-300/90
          sm:text-base
          md:text-lg
          md:leading-8
        "
      >
        {t.homeHeroDescription}
      </p>

      {/* ===================================================
          CTA BUTTONS
      =================================================== */}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">

        <Link
          to={
            language === "en"
              ? "/services"
              : `/${language}/services`
          }
          className="
            group
            inline-flex
            w-full
            sm:w-auto
          "
        >

          <button
            className="
              relative
              w-full
              overflow-hidden
              rounded-2xl
              bg-cyan-400
              px-7
              py-4
              font-bold
              text-black
              shadow-[0_0_35px_rgba(34,211,238,0.30)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-cyan-300
              hover:shadow-[0_0_55px_rgba(34,211,238,0.50)]
              sm:w-auto
            "
          >

            <span
              className="
                relative
                z-10
                flex
                items-center
                justify-center
                gap-2
              "
            >
              {t.exploreServices}

              <FaArrowRight
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </span>

            {/* Button shine */}
            <span
              className="
                absolute
                inset-y-0
                -left-full
                w-1/2
                rotate-12
                bg-white/30
                blur-md
                transition-all
                duration-700
                group-hover:left-[130%]
              "
            />

          </button>

        </Link>

        <Link
          to="/contact"
          className="
            group
            inline-flex
            w-full
            sm:w-auto
          "
        >

          <button
            className="
              w-full
              rounded-2xl
              border
              border-white/20
              bg-white/5
              px-7
              py-4
              font-semibold
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/60
              hover:bg-cyan-400/10
              hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
              sm:w-auto
            "
          >

            <span className="flex items-center justify-center gap-2">

              {t.contactUs}

              <FaArrowRight
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </span>

          </button>

        </Link>

      </div>

      {/* ===================================================
          SERVICE CARDS
      =================================================== */}

      <div
        className="
          mt-10
          grid
          max-w-[700px]
          grid-cols-2
          gap-3
          sm:mt-12
          sm:grid-cols-4
        "
      >

        {services.map((service, index) => (

          <div
            key={service.key}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-black/35
              p-3
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-cyan-400/40
              hover:bg-cyan-400/10
              hover:shadow-[0_15px_45px_rgba(34,211,238,0.10)]
              sm:p-4
            "
            style={{
              animationDelay: `${index * 120}ms`,
            }}
          >

            {/* Card glow */}
            <div
              className="
                absolute
                -right-8
                -top-8
                h-20
                w-20
                rounded-full
                bg-cyan-400/10
                blur-2xl
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Icon */}
            <div
              className="
                relative
                mb-3
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/5
                text-lg
                transition-all
                duration-300
                group-hover:border-cyan-400/30
                group-hover:bg-cyan-400/10
                sm:h-11
                sm:w-11
              "
            >
              {service.icon}
            </div>

            {/* Title */}
            <p
              className="
                relative
                text-xs
                font-bold
                leading-5
                text-white
                sm:text-sm
              "
            >
              {t.services[service.key].title}
            </p>

            {/* Description */}
            <p
              className="
                relative
                mt-1
                hidden
                text-[10px]
                leading-4
                text-gray-400
                sm:block
              "
            >
              {t.services[service.key].description}
            </p>

          </div>

        ))}

      </div>

    </div>

  </div>

  {/* ===================================================
      RIGHT SIDE IMAGE GLOW
  =================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      right-[8%]
      top-1/2
      z-[3]
      hidden
      h-2
      w-2
      -translate-y-1/2
      rounded-full
      bg-cyan-300
      shadow-[0_0_30px_10px_rgba(34,211,238,0.35)]
      lg:block
      animate-pulse
    "
  />

  {/* ===================================================
      BOTTOM FADE
  =================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      inset-x-0
      bottom-0
      z-[5]
      h-24
      bg-gradient-to-t
      from-black
      to-transparent
    "
  />

  {/* ===================================================
      SCROLL INDICATOR
  =================================================== */}

  <div
    className="
      absolute
      bottom-7
      left-1/2
      z-10
      hidden
      -translate-x-1/2
      flex-col
      items-center
      gap-2
      text-[9px]
      uppercase
      tracking-[4px]
      text-cyan-300/60
      sm:flex
    "
  >

    <span>Explore</span>

    <span
      className="
        h-8
        w-px
        bg-gradient-to-b
        from-cyan-400
        to-transparent
      "
    />

  </div>

</section>


        {/* ===================================================

            SERVICES

        =================================================== */}


        <section className="px-6 md:px-12 lg:px-20 py-20 md:py-24">


          <div className="text-center max-w-3xl mx-auto">


            <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-4">

              {t.ourExpertise}

            </p>


            <h2 className="text-3xl md:text-5xl font-bold">

              {t.servicesWeProvide}

            </h2>


          </div>


          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mt-14 md:mt-16">


            {services.map((service) => (

              <div

                key={service.key}

                className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-lg hover:border-cyan-400/40 transition duration-500"

              >


                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center text-2xl mb-6">

                  {service.icon}

                </div>


                <h3 className="text-xl md:text-2xl font-semibold mb-4">

                  {t.services[service.key].title}

                </h3>


                <p className="text-gray-400 leading-relaxed text-sm md:text-base">

                  {t.services[service.key].description}

                </p>


              </div>

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


            {industries.map((industry) => (

              <div

                key={industry.key}

                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg text-center hover:border-cyan-400/40 transition duration-500"

              >


                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-5">

                  {industry.icon}

                </div>


                <h3 className="text-lg font-semibold text-gray-200">

                  {t.industriesList[industry.key]}

                </h3>


              </div>

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

              <div

                key={index}

                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg text-center hover:border-cyan-400/40 transition duration-500"

              >


               <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-5">

                {tech.icon}

              </div>


                <h3 className="text-lg font-semibold text-gray-200">

                  {tech.title}

                </h3>


              </div>

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


            {latestApps.map((app) => (

              <a

                href={app.link}

                target="_blank"

                rel="noopener noreferrer"

                key={app.key}

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


              </a>

            ))}


          </div>


        </section>


      </div>

    </>

  );

};


export default Home;