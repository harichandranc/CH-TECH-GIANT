import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";

import { translations } from "../locales";

const services = [
  {
    key: "appDevelopment",
    image: "/services/app.webp",
    link: "/app-development",
  },
  {
    key: "softwareDevelopment",
    image: "/services/software.jpg",
    link: "/software-development",
  },
  {
    key: "webDevelopment",
    image: "/services/web.jpg",
    link: "/web-development",
  },
  {
    key: "gameDevelopment",
    image: "/services/game.jpeg",
    link: "/game-development",
  },
  {
    key: "itConsulting",
    image: "/services/itconsult.jpg",
    link: "/it-consulting",
  },
  {
    key: "pamphletDesign",
    image: "/services/pamphlet.png",
    link: "/pamphlet-design",
  },
  {
    key: "invoiceDesign",
    image: "/services/invoice.png",
    link: "/invoice-design",
  },
];

const languages = [
  {
    code: "en",
    path: "/services",
    label: "🇺🇸 English",
  },
  {
    code: "zh",
    path: "/zh/services",
    label: "🇨🇳 简体中文",
  },
  {
    code: "es",
    path: "/es/services",
    label: "🇪🇸 Español",
  },
  {
    code: "pt",
    path: "/pt/services",
    label: "🇧🇷 Português",
  },
  {
    code: "de",
    path: "/de/services",
    label: "🇩🇪 Deutsch",
  },
  {
    code: "ko",
    path: "/ko/services",
    label: "🇰🇷 한국어",
  },
  {
    code: "ja",
    path: "/ja/services",
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

const Services = () => {
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

    const browserLanguage = navigator.language.toLowerCase();

    if (browserLanguage.startsWith("zh")) {
      navigate("/zh/services", { replace: true });
    } else if (browserLanguage.startsWith("es")) {
      navigate("/es/services", { replace: true });
    } else if (browserLanguage.startsWith("pt")) {
      navigate("/pt/services", { replace: true });
    } else if (browserLanguage.startsWith("de")) {
      navigate("/de/services", { replace: true });
    } else if (browserLanguage.startsWith("ko")) {
      navigate("/ko/services", { replace: true });
    } else if (browserLanguage.startsWith("ja")) {
      navigate("/ja/services", { replace: true });
    } else {
      navigate("/services", { replace: true });
    }
  }, [lang, navigate]);

  /* =====================================================
     LOCALIZED SERVICE PATH
  ===================================================== */

  const getLocalizedPath = (path) => {
    if (language === "en") {
      return path;
    }

    return `/${language}${path}`;
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* =================================================
            LANGUAGE SWITCHER
            Desktop = Buttons
            Mobile = Dropdown
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
            {t.ourServices}
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6">

            {t.whatWe}

            {" "}

            <span className="text-cyan-400">
              {t.provide}
            </span>

          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            {t.servicesDescription}
          </p>

        </motion.div>

        {/* =================================================
            SERVICES GRID
        ================================================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const serviceData =
              t.serviceData[service.key];

            return (
              <Link
                to={getLocalizedPath(service.link)}
                key={service.key}
                className="block"
              >

                <motion.div
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
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl cursor-pointer h-full"
                >

                  {/* IMAGE */}

                  <div className="relative h-72 overflow-hidden">

                    <img
                      src={service.image}
                      alt={serviceData.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* OVERLAY */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent">
                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="relative p-8 -mt-20 z-10">

                    <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-6">

                      <h2 className="text-3xl font-bold mb-4">
                        {serviceData.title}
                      </h2>

                      <p className="text-gray-400 leading-relaxed">
                        {serviceData.description}
                      </p>

                    </div>

                  </div>

                  {/* GLOW EFFECT */}

                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition duration-500">
                  </div>

                </motion.div>

              </Link>
            );
          })}

        </div>

      </div>

    </div>
  );
};

export default Services;