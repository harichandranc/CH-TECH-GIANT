
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
    image: "/services/software.webp",
    link: "/software-development",
  },
  {
    key: "webDevelopment",
    image: "/services/web.webp",
    link: "/web-development",
  },
  {
    key: "gameDevelopment",
    image: "/services/game.webp",
    link: "/game-development",
  },
  {
    key: "itConsulting",
    image: "/services/itconsult.webp",
    link: "/it-consulting",
  },
  {
    key: "pamphletDesign",
    image: "/services/pamphlet.webp",
    link: "/pamphlet-design",
  },
  {
    key: "invoiceDesign",
    image: "/services/invoice.webp",
    link: "/invoice-design",
  },
];

const languages = [
  { code: "en", path: "/services", label: "🇺🇸 English" },
  { code: "zh", path: "/zh/services", label: "🇨🇳 简体中文" },
  { code: "es", path: "/es/services", label: "🇪🇸 Español" },
  { code: "pt", path: "/pt/services", label: "🇧🇷 Português" },
  { code: "de", path: "/de/services", label: "🇩🇪 Deutsch" },
  { code: "ko", path: "/ko/services", label: "🇰🇷 한국어" },
  { code: "ja", path: "/ja/services", label: "🇯🇵 日本語" },
];

const supportedLanguages = ["zh", "es", "pt", "de", "ko", "ja"];

const Services = () => {
  const { lang } = useParams();
  const navigate = useNavigate();

  const language = supportedLanguages.includes(lang) ? lang : "en";
  const t = translations[language];

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

  const getLocalizedPath = (path) => {
    return language === "en" ? path : `/${language}${path}`;
  };

  return (
    <div className="min-h-screen overflow-hidden bg-black px-4 py-6 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* LANGUAGE SWITCHER */}
        <div className="mb-8 flex justify-center md:mb-16">
          <div className="relative z-50 flex w-full justify-end md:hidden">
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
              className="h-10 w-36 cursor-pointer rounded-xl border border-white/20 bg-[#050816] px-3 text-sm text-white outline-none transition focus:border-cyan-400"
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

          <div className="hidden flex-wrap justify-center gap-3 pt-20 md:flex">
            {languages.map((item) => (
              <Link
                key={item.code}
                to={item.path}
                className={`rounded-full border px-5 py-2 transition ${
                  language === item.code
                    ? "border-cyan-500 bg-cyan-500 text-black"
                    : "border-white/20 hover:border-cyan-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* PAGE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center md:mb-20"
        >
          <p className="mb-4 uppercase tracking-[4px] text-cyan-400">
            {t.ourServices}
          </p>

          <h1 className="mb-6 text-4xl font-black sm:text-5xl md:text-7xl">
            {t.whatWe}{" "}
            <span className="text-cyan-400">{t.provide}</span>
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg">
            {t.servicesDescription}
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const serviceData = t.serviceData[service.key];

            return (
              <Link
                to={getLocalizedPath(service.link)}
                key={service.key}
                className="block min-w-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] transition-colors duration-300 hover:border-cyan-500/40"
                >
                  {/* FULL THUMBNAIL — NO CROPPING OR ZOOM */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#080b12]">
                    <img
                      src={service.image}
                      alt={serviceData.title}
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding="async"
                      className="block h-full w-full object-contain object-center transition-transform duration-500"
                    />
                  </div>

                  {/* SERVICE INFORMATION */}
                  <div className="relative p-5 sm:p-6">
                    <h2 className="mb-3 text-2xl font-bold leading-tight transition-colors duration-300 group-hover:text-cyan-400 sm:text-3xl">
                      {serviceData.title}
                    </h2>

                    <p className="leading-relaxed text-gray-400">
                      {serviceData.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-400">
                      <span>Explore Service</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>

                  {/* SUBTLE HOVER GLOW */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 transition duration-300 group-hover:ring-cyan-400/20" />
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