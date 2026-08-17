import { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { translations, categoryTranslations } from "../locales";
import { motion } from "framer-motion";
import { FaGooglePlay, FaDownload, FaSearch } from "react-icons/fa";

import apps from "../data/appsData";

const rawCategories = [
  "All",
  ...new Set(apps.map((app) => app.category)),
];

const languages = [
  {
    code: "en",
    path: "/apps",
    label: "🇺🇸 English",
  },
  {
    code: "zh",
    path: "/zh/apps",
    label: "🇨🇳 简体中文",
  },
  {
    code: "es",
    path: "/es/apps",
    label: "🇪🇸 Español",
  },
  {
    code: "pt",
    path: "/pt/apps",
    label: "🇧🇷 Português",
  },
  {
    code: "de",
    path: "/de/apps",
    label: "🇩🇪 Deutsch",
  },
  {
    code: "ko",
    path: "/ko/apps",
    label: "🇰🇷 한국어",
  },
  {
    code: "ja",
    path: "/ja/apps",
    label: "🇯🇵 日本語",
  },
];

const Apps = () => {
  const { lang } = useParams();

  const language =
    lang === "zh" ||
    lang === "es" ||
    lang === "pt" ||
    lang === "de" ||
    lang === "ko" ||
    lang === "ja"
      ? lang
      : "en";

  const t = translations[language];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    if (lang) return;

    const browserLanguage = navigator.language.toLowerCase();

    if (browserLanguage.startsWith("zh")) {
      navigate("/zh/apps", {
        replace: true,
      });
    } else if (browserLanguage.startsWith("es")) {
      navigate("/es/apps", {
        replace: true,
      });
    } else if (browserLanguage.startsWith("pt")) {
      navigate("/pt/apps", {
        replace: true,
      });
    } else if (browserLanguage.startsWith("de")) {
      navigate("/de/apps", {
        replace: true,
      });
    } else if (browserLanguage.startsWith("ko")) {
      navigate("/ko/apps", {
        replace: true,
      });
    } else if (browserLanguage.startsWith("ja")) {
      navigate("/ja/apps", {
        replace: true,
      });
    } else {
      navigate("/apps", {
        replace: true,
      });
    }
  }, [lang, navigate]);

  const filteredApps = useMemo(() => {
    return apps.filter((app) => {
      const matchesCategory =
        category === "All" || app.category === category;

      const title =
        typeof app.title === "object"
          ? app.title[language] || app.title.en
          : app.title;

      const description =
        typeof app.description === "object"
          ? app.description[language] || app.description.en
          : app.description;

      const matchesSearch =
        title.toLowerCase().includes(search.toLowerCase()) ||
        description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category, language]);

  const pageUrl =
    language === "zh"
      ? "https://chtechgiant.com/zh/apps"
      : language === "es"
      ? "https://chtechgiant.com/es/apps"
      : language === "pt"
      ? "https://chtechgiant.com/pt/apps"
      : language === "de"
      ? "https://chtechgiant.com/de/apps"
      : language === "ko"
      ? "https://chtechgiant.com/ko/apps"
      : language === "ja"
      ? "https://chtechgiant.com/ja/apps"
      : "https://chtechgiant.com/apps";

  const pageTitle =
    language === "zh"
      ? "CH TECH GIANT 官方 Android 应用下载"
      : language === "es"
      ? "Descargar aplicaciones Android oficiales de CH TECH GIANT"
      : language === "pt"
      ? "Baixar aplicativos Android oficiais da CH TECH GIANT"
      : language === "de"
      ? "Offizielle Android-Apps von CH TECH GIANT herunterladen"
      : language === "ko"
      ? "CH TECH GIANT 공식 Android 앱 다운로드"
      : language === "ja"
      ? "CH TECH GIANT 公式Androidアプリをダウンロード"
      : "CH TECH GIANT Android Apps";

  const pageDescription =
    language === "zh"
      ? "下载 CH TECH GIANT 官方 Android 应用，包括 PDF 工具、文件转换器、办公软件、教育应用和更多免费 Android 应用。"
      : language === "es"
      ? "Descarga las aplicaciones Android oficiales de CH TECH GIANT, incluyendo herramientas PDF, convertidores de archivos, aplicaciones de productividad y mucho más."
      : language === "pt"
      ? "Baixe os aplicativos Android oficiais da CH TECH GIANT, incluindo ferramentas PDF, conversores de arquivos, aplicativos de produtividade e muito mais."
      : language === "de"
      ? "Laden Sie die offiziellen Android-Apps von CH TECH GIANT herunter, darunter PDF-Tools, Dateikonverter, Produktivitäts-Apps und vieles mehr."
      : language === "ko"
      ? "PDF 도구, 파일 변환기, 생산성 앱 등을 포함한 CH TECH GIANT의 공식 Android 앱을 다운로드하세요."
      : language === "ja"
      ? "PDFツール、ファイルコンバーター、生産性向上アプリなど、CH TECH GIANTの公式Androidアプリをダウンロードできます。"
      : "Download official Android apps from CH TECH GIANT including PDF tools, file converters, invoice maker, productivity apps and more.";

  const keywords =
    language === "zh"
      ? "Android应用, PDF工具, PDF转换器, 文件转换器, 免费应用"
      : language === "es"
      ? "aplicaciones Android, herramientas PDF, convertidor PDF, convertidor de archivos, aplicaciones gratuitas"
      : language === "pt"
      ? "aplicativos Android, ferramentas PDF, conversor PDF, conversor de arquivos, aplicativos gratuitos"
      : language === "de"
      ? "Android Apps, PDF Tools, PDF Konverter, Dateikonverter, kostenlose Apps"
      : language === "ko"
      ? "Android 앱, PDF 도구, PDF 변환기, 파일 변환기, 무료 앱, 생산성 앱"
      : language === "ja"
      ? "Androidアプリ, PDFツール, PDF変換, ファイルコンバーター, 無料アプリ, 生産性アプリ"
      : "Android Apps, PDF Converter, File Converter, Invoice Maker, Productivity Apps";

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

  const currentLanguage =
    languages.find((item) => item.code === language) || languages[0];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

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

        <link
          rel="canonical"
          href={pageUrl}
        />

        {/* English */}
        <link
          rel="alternate"
          hrefLang="en"
          href="https://chtechgiant.com/apps"
        />

        {/* Chinese */}
        <link
          rel="alternate"
          hrefLang="zh-CN"
          href="https://chtechgiant.com/zh/apps"
        />

        {/* Spanish */}
        <link
          rel="alternate"
          hrefLang="es"
          href="https://chtechgiant.com/es/apps"
        />

        {/* Portuguese */}
        <link
          rel="alternate"
          hrefLang="pt-BR"
          href="https://chtechgiant.com/pt/apps"
        />

        {/* German */}
        <link
          rel="alternate"
          hrefLang="de"
          href="https://chtechgiant.com/de/apps"
        />

        {/* Korean */}
        <link
          rel="alternate"
          hrefLang="ko-KR"
          href="https://chtechgiant.com/ko/apps"
        />

        {/* Japanese */}
        <link
          rel="alternate"
          hrefLang="ja-JP"
          href="https://chtechgiant.com/ja/apps"
        />

        {/* Default */}
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://chtechgiant.com/apps"
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

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: pageTitle,
            description: pageDescription,
            inLanguage: schemaLanguage,
            url: pageUrl,
            publisher: {
              "@type": "Organization",
              name: "CH TECH GIANT",
            },
          })}
        </script>

      </Helmet>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative py-24 px-6">

        <div className="max-w-7xl mx-auto">

          {/* =================================================
              LANGUAGE SWITCHER
              Desktop = Buttons
              Mobile = Dropdown
          ================================================= */}

          <div className="flex justify-center mt-8">

            {/* MOBILE LANGUAGE DROPDOWN */}
            <div className="absolute top-4 right-4 z-30 md:hidden">
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
                className="h-10 w-32 rounded-xl border border-white/20 bg-[#050816]/90 px-3 text-sm text-white outline-none backdrop-blur-xl focus:border-cyan-400 transition cursor-pointer"
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
            <div className="hidden md:flex justify-center gap-3 flex-wrap">

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
              HERO CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-2 md:mt-6"
          >

            <span className="inline-block px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-semibold mb-6">
              {t.officialApps}
            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">

              {t.heroTitle1}

              <span className="text-cyan-400">
                {" "}
                {t.heroTitle2}
              </span>

            </h1>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8">

              {t.heroDescription}{" "}

              <span className="text-cyan-400">
                CH TECH GIANT (OPC) PRIVATE LIMITED
              </span>.

            </p>

          </motion.div>

          {/* =================================================
              STATS
          ================================================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16"
          >

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">

              <h2 className="text-4xl font-black text-cyan-400">
                {apps.length}
              </h2>

              <p className="text-gray-400 mt-2">
                {t.applications}
              </p>

            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">

              <h2 className="text-4xl font-black text-cyan-400">
                100%
              </h2>

              <p className="text-gray-400 mt-2">
                {t.freeDownload}
              </p>

            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">

              <h2 className="text-4xl font-black text-cyan-400">
                Android
              </h2>

              <p className="text-gray-400 mt-2">
                {t.supported}
              </p>

            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">

              <h2 className="text-4xl font-black text-cyan-400">
                24×7
              </h2>

              <p className="text-gray-400 mt-2">
                {t.updates}
              </p>

            </div>

          </motion.div>

          {/* =================================================
              SEARCH
          ================================================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-14 max-w-3xl mx-auto relative"
          >

            <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

            <input
              type="text"
              placeholder={t.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl h-16 pl-16 pr-6 outline-none focus:border-cyan-400 transition text-white placeholder:text-gray-500"
            />

          </motion.div>

          {/* =================================================
              CATEGORY
          ================================================= */}

          <div className="flex flex-wrap justify-center gap-4 mt-12">

            {rawCategories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-6 py-3 rounded-full transition font-semibold border ${
                  category === item
                    ? "bg-cyan-500 text-black border-cyan-400 shadow-lg shadow-cyan-500/30"
                    : "bg-white/5 border-white/10 hover:border-cyan-400"
                }`}
              >
                {categoryTranslations[language][item] || item}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          APPS GRID
      ===================================================== */}

      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
              {t.ourApps}
            </h2>

            <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
              {t.ourAppsDesc}
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredApps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl group"
              >

                {/* FEATURED */}

                {app.featured && (
                  <div className="absolute top-4 left-4 z-20">

                    <span className="px-3 py-1 rounded-full bg-cyan-500 text-black text-xs font-bold">
                      {t.featured}
                    </span>

                  </div>
                )}

                {/* IMAGE */}

                <div className="h-60 bg-black flex items-center justify-center p-6 overflow-hidden">

                  <img
                    src={app.image}
                    alt={
                      typeof app.title === "object"
                        ? app.title[language] || app.title.en
                        : app.title
                    }
                    className="h-full object-contain transition duration-500 group-hover:scale-105"
                  />

                </div>

                {/* CONTENT */}

                <div className="p-6">

                  <div className="flex justify-between items-center mb-4">

                    <span className="text-cyan-400 text-sm font-semibold">
                      {categoryTranslations[language][app.category] ||
                        app.category}
                    </span>

                    <span className="text-gray-500 text-xs">
                      {app.updated}
                    </span>

                  </div>

                  <h3 className="text-2xl font-bold mb-3">

                    {typeof app.title === "object"
                      ? app.title[language] || app.title.en
                      : app.title}

                  </h3>

                  <p className="text-gray-400 leading-7 mb-6">

                    {typeof app.description === "object"
                      ? app.description[language] || app.description.en
                      : app.description}

                  </p>

                  <div className="flex justify-between items-center">

                    <div>

                      <p className="text-gray-500">
                        {t.size}
                      </p>

                      <p className="font-semibold text-white">
                        {app.size}
                      </p>

                    </div>

                  </div>

                  {/* ACTION BUTTONS */}

                  <div
                    className={`grid ${
                      app.apk
                        ? "grid-cols-2"
                        : "grid-cols-1"
                    } gap-4 mt-8`}
                  >

                    <a
                      href={app.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold h-12 transition duration-300 shadow-lg shadow-cyan-500/30"
                    >

                      <FaGooglePlay />

                      {t.googlePlay}

                    </a>

                    {app.apk && (
                      <a
                        href={app.apk}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold h-12 transition duration-300"
                      >

                        <FaDownload />

                        {t.apk}

                      </a>
                    )}

                  </div>

                </div>

                {/* HOVER GLOW */}

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition duration-500" />

              </motion.div>
            ))}

          </div>

          {/* EMPTY STATE */}

          {filteredApps.length === 0 && (
            <div className="text-center py-24">

              <h2 className="text-3xl font-bold mb-4">
                {t.noApps}
              </h2>

              <p className="text-gray-400">
                {t.noAppsDesc}
              </p>

            </div>
          )}

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-28"
          >

            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl p-12 text-center">

              <h2 className="text-4xl font-black mb-5">
                {t.moreApps}
              </h2>

              <p className="text-gray-300 max-w-3xl mx-auto leading-8">
                {t.moreAppsDesc}
              </p>

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default Apps;