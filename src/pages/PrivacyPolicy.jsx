import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import PageBanner from "../components/PageBanner";
import SectionWrapper from "../components/SectionWrapper";

import { translations } from "../locales";

const languages = [
  {
    code: "en",
    path: "/privacy-policy",
    label: "🇺🇸 English",
  },
  {
    code: "zh",
    path: "/zh/privacy-policy",
    label: "🇨🇳 简体中文",
  },
  {
    code: "es",
    path: "/es/privacy-policy",
    label: "🇪🇸 Español",
  },
  {
    code: "pt",
    path: "/pt/privacy-policy",
    label: "🇧🇷 Português",
  },
  {
    code: "de",
    path: "/de/privacy-policy",
    label: "🇩🇪 Deutsch",
  },
  {
    code: "ko",
    path: "/ko/privacy-policy",
    label: "🇰🇷 한국어",
  },
  {
    code: "ja",
    path: "/ja/privacy-policy",
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

function PrivacyPolicy() {
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
      navigate("/zh/privacy-policy", { replace: true });
    } else if (browserLanguage.startsWith("es")) {
      navigate("/es/privacy-policy", { replace: true });
    } else if (browserLanguage.startsWith("pt")) {
      navigate("/pt/privacy-policy", { replace: true });
    } else if (browserLanguage.startsWith("de")) {
      navigate("/de/privacy-policy", { replace: true });
    } else if (browserLanguage.startsWith("ko")) {
      navigate("/ko/privacy-policy", { replace: true });
    } else if (browserLanguage.startsWith("ja")) {
      navigate("/ja/privacy-policy", { replace: true });
    } else {
      navigate("/privacy-policy", { replace: true });
    }
  }, [lang, navigate]);

  return (
    <div className="bg-black text-white min-h-screen">

      {/* =================================================
          LANGUAGE SWITCHER
      ================================================= */}

      <div className="max-w-7xl mx-auto px-6">

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

      </div>

      {/* =================================================
          PAGE BANNER
      ================================================= */}

      <PageBanner
  title={t.privacyPolicy.title}
  subtitle={t.privacyPolicy.subtitle}
/>

      {/* =================================================
          PRIVACY POLICY CONTENT
      ================================================= */}

      <SectionWrapper>

        <div className="max-w-5xl mx-auto">

          {/* LAST UPDATED */}

          <div className="text-center mb-8">

            <p className="text-gray-500 text-sm tracking-wide uppercase">
              {t.privacyPolicy.lastUpdated}
            </p>

          </div>

          {/* SECTIONS */}

          <div className="space-y-5">

            {t.privacyPolicy.sections.map((section) => (
              <div
                key={section.title}
                className="
                  rounded-2xl
                  border border-zinc-800
                  bg-zinc-900/70
                  p-6 md:p-8
                  transition duration-300
                  hover:border-cyan-500/30
                "
              >

                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                  {section.title}
                </h2>

                <p className="text-gray-300 leading-7 whitespace-pre-line">
                  {section.content}
                </p>

              </div>
            ))}

          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div
            className="
              mt-8
              rounded-2xl
              border border-cyan-500/20
              bg-cyan-500/5
              p-8
              text-center
            "
          >

            <h2 className="text-3xl font-bold mb-5 text-white">
              {t.privacyPolicy.contact.title}
            </h2>

            <div className="space-y-2 text-gray-300">

              <p>
                {t.privacyPolicy.contact.company}
              </p>

              <p>
                {t.privacyPolicy.contact.address}
              </p>

              <p>
                {t.privacyPolicy.contact.phone}
              </p>

              <p>
                {t.privacyPolicy.contact.email}
              </p>

            </div>

          </div>

        </div>

      </SectionWrapper>

    </div>
  );
}

export default PrivacyPolicy;