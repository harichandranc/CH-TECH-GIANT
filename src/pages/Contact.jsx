import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiCheckCircle,
  FiArrowUpRight,
} from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";

import { translations } from "../locales";

const languages = [
  {
    code: "en",
    path: "/contact",
    label: "🇺🇸 English",
  },
  {
    code: "zh",
    path: "/zh/contact",
    label: "🇨🇳 简体中文",
  },
  {
    code: "es",
    path: "/es/contact",
    label: "🇪🇸 Español",
  },
  {
    code: "pt",
    path: "/pt/contact",
    label: "🇧🇷 Português",
  },
  {
    code: "de",
    path: "/de/contact",
    label: "🇩🇪 Deutsch",
  },
  {
    code: "ko",
    path: "/ko/contact",
    label: "🇰🇷 한국어",
  },
  {
    code: "ja",
    path: "/ja/contact",
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

const Contact = () => {
  const form = useRef();

  const { lang } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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
      navigate("/zh/contact", { replace: true });
    } else if (browserLanguage.startsWith("es")) {
      navigate("/es/contact", { replace: true });
    } else if (browserLanguage.startsWith("pt")) {
      navigate("/pt/contact", { replace: true });
    } else if (browserLanguage.startsWith("de")) {
      navigate("/de/contact", { replace: true });
    } else if (browserLanguage.startsWith("ko")) {
      navigate("/ko/contact", { replace: true });
    } else if (browserLanguage.startsWith("ja")) {
      navigate("/ja/contact", { replace: true });
    } else {
      navigate("/contact", { replace: true });
    }
  }, [lang, navigate]);

  /* =====================================================
     SEND EMAIL
  ===================================================== */

  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);

      form.current.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);

      setError(true);

      setTimeout(() => {
        setError(false);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] text-white px-4 sm:px-6 py-6">

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[130px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      </div>

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >

        {/* =================================================
            LANGUAGE SWITCHER
        ================================================= */}

        <div className="flex justify-center mb-2 md:mb-16">

          {/* MOBILE */}

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

          {/* DESKTOP */}

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

        <div className="text-center mb-12 sm:mb-16">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            {t.contact.badge}

          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">

            {t.contact.title}

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-purple-500 bg-clip-text text-transparent">

              {t.contact.titleHighlight}

            </span>

          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-base sm:text-lg leading-relaxed">

            {t.contact.description}

          </p>

        </div>

        {/* =================================================
            MAIN CARD
        ================================================= */}

        <div className="relative">

          <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-cyan-500/30 via-transparent to-purple-500/30 opacity-70 blur-sm" />

          <div className="relative grid lg:grid-cols-[0.8fr_1.2fr] gap-0 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-2xl shadow-2xl">

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div className="relative p-7 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">

              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/10 blur-[80px]" />

              <div className="relative">

                <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                  {t.contact.contact}
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mb-5">
                  {t.contact.conversationTitle}
                </h2>

                <p className="text-gray-400 leading-relaxed mb-10">
                  {t.contact.conversationDescription}
                </p>

                {/* EMAIL */}

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                    <FiMail size={19} />
                  </div>

                  <div>

                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {t.contact.email}
                    </p>

                    <p className="text-sm sm:text-base text-gray-200">
                      info@chtechgiant.com
                    </p>

                  </div>

                </div>

                {/* RESPONSE */}

                <div className="flex items-center gap-4 mt-5">

                  <div className="w-11 h-11 rounded-xl border border-purple-400/20 bg-purple-400/10 flex items-center justify-center text-purple-400">
                    <FiMessageSquare size={19} />
                  </div>

                  <div>

                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {t.contact.response}
                    </p>

                    <p className="text-sm sm:text-base text-gray-200">
                      {t.contact.responseTime}
                    </p>

                  </div>

                </div>

                {/* PROJECT */}

                <div className="mt-12 pt-7 border-t border-white/10">

                  <div className="flex items-center justify-between text-sm">

                    <span className="text-gray-500">
                      {t.contact.projectQuestion}
                    </span>

                    <FiArrowUpRight className="text-cyan-400" />

                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <div className="p-7 sm:p-10 lg:p-12">

              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-5"
              >

                {/* NAME */}

                <div>

                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.contact.nameLabel}
                  </label>

                  <div className="relative group">

                    <FiUser
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors"
                      size={18}
                    />

                    <input
                      type="text"
                      name="user_name"
                      placeholder={t.contact.namePlaceholder}
                      required
                      disabled={loading}
                      className="w-full h-14 bg-white/[0.035] border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-cyan-400/60 focus:bg-cyan-400/[0.03] focus:ring-4 focus:ring-cyan-400/5 disabled:opacity-50"
                    />

                  </div>

                </div>

                {/* EMAIL */}

                <div>

                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.contact.emailLabel}
                  </label>

                  <div className="relative group">

                    <FiMail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors"
                      size={18}
                    />

                    <input
                      type="email"
                      name="user_email"
                      placeholder={t.contact.emailPlaceholder}
                      required
                      disabled={loading}
                      className="w-full h-14 bg-white/[0.035] border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-cyan-400/60 focus:bg-cyan-400/[0.03] focus:ring-4 focus:ring-cyan-400/5 disabled:opacity-50"
                    />

                  </div>

                </div>

                {/* SUBJECT */}

                <div>

                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.contact.subjectLabel}
                  </label>

                  <div className="relative group">

                    <FiMessageSquare
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors"
                      size={18}
                    />

                    <input
                      type="text"
                      name="subject"
                      placeholder={t.contact.subjectPlaceholder}
                      required
                      disabled={loading}
                      className="w-full h-14 bg-white/[0.035] border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-cyan-400/60 focus:bg-cyan-400/[0.03] focus:ring-4 focus:ring-cyan-400/5 disabled:opacity-50"
                    />

                  </div>

                </div>

                {/* MESSAGE */}

                <div>

                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.contact.messageLabel}
                  </label>

                  <div className="relative group">

                    <FiMessageSquare
                      className="absolute left-4 top-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors"
                      size={18}
                    />

                    <textarea
                      name="message"
                      rows="6"
                      placeholder={t.contact.messagePlaceholder}
                      required
                      disabled={loading}
                      className="w-full min-h-[150px] bg-white/[0.035] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-600 outline-none resize-none transition-all duration-300 focus:border-cyan-400/60 focus:bg-cyan-400/[0.03] focus:ring-4 focus:ring-cyan-400/5 disabled:opacity-50"
                    />

                  </div>

                </div>

                {/* BUTTON */}

                <motion.button
                  whileHover={!loading ? { scale: 1.015 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={loading}
                  className="relative overflow-hidden w-full h-14 rounded-xl font-bold text-base bg-gradient-to-r from-cyan-500 via-cyan-400 to-purple-600 text-black shadow-lg shadow-cyan-500/10 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
                >

                  <span className="relative z-10 flex items-center justify-center gap-2">

                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />

                        {t.contact.sendingMessage}
                      </>
                    ) : (
                      <>
                        {t.contact.sendMessage}

                        <FiSend size={18} />
                      </>
                    )}

                  </span>

                  {!loading && (
                    <motion.span
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0 bg-white/20 skew-x-12"
                    />
                  )}

                </motion.button>

                {/* STATUS */}

                <AnimatePresence mode="wait">

                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-2 rounded-xl border border-green-400/20 bg-green-400/5 px-4 py-3 text-sm text-green-400"
                    >

                      <FiCheckCircle size={18} />

                      {t.contact.successMessage}

                    </motion.div>
                  )}

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-center text-sm text-red-400"
                    >
                      {t.contact.errorMessage}
                    </motion.div>
                  )}

                </AnimatePresence>

                <p className="text-center text-xs text-gray-600">
                  {t.contact.agreement}
                </p>

              </form>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default Contact;