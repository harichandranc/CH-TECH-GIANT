import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  HiShieldCheck,
  HiServer,
  HiShoppingBag,
  HiDeviceMobile,
  HiGlobeAlt,
  HiExternalLink,
  HiArrowLeft,
  HiLockClosed,
  HiLightningBolt,
} from "react-icons/hi";

const supportedLanguages = ["zh", "es", "pt", "de", "ko", "ja"];

const dashboardGroups = [
  {
    title: "Business Dashboards",
    description: "Manage your CH TECH GIANT applications and business systems.",
    icon: HiShieldCheck,
    dashboards: [
      {
        name: "WEB CODSHOP",
        description: "Manage products, orders, customers, coupons and analytics.",
        icon: HiShoppingBag,
        url: "https://admin.webcodshop.chtechgiant.com",
        status: "Live",
        enabled: true,
      },
      {
        name: "Sri Muthu Mariamman Temple",
        description: "Manage temple content, donations, sevas, gallery and website.",
        icon: HiShieldCheck,
        url: "https://admin.srimuthumariamman.com",
        status: "Coming Soon",
        enabled: false,
      },
      {
        name: "School ERP",
        description: "Manage students, teachers, academics and school operations.",
        icon: HiDeviceMobile,
        url: "",
        status: "Coming Soon",
        enabled: false,
      },
    ],
  },

  {
    title: "Infrastructure",
    description: "Access your server and infrastructure management systems.",
    icon: HiServer,
    dashboards: [
      {
        name: "VPS / Server Panel",
        description: "Manage VPS services, websites, databases and server applications.",
        icon: HiServer,
        url: "https://147.93.110.58:40498/59d18750",
        status: "Live",
        enabled: true,
      },
    ],
  },

  {
    title: "Moneization & Analytics",
    description: "Access your server and infrastructure management systems.",
    icon: HiLightningBolt,
    dashboards: [
      {
        name: "Start io Analytics",
        description: "Manage advertising, monetization and performance platforms",
        icon: HiLightningBolt,
        url: "https://portal.start.io/#/pub/reports/analytics",
        status: "Live",
        enabled: true,
      },
    ],
  },

  {
    title: "Developer Platforms",
    description: "Quick access to your application publishing and developer platforms.",
    icon: HiGlobeAlt,
    dashboards: [
      {
        name: "Google Play Console",
        description: "Manage Android applications, releases, testing and store listings.",
        icon: HiDeviceMobile,
        url: "https://play.google.com/console/",
        status: "Live",
        enabled: true,
      },
      {
        name: "Huawei Developer",
        description: "Manage Huawei applications and AppGallery distribution.",
        icon: HiDeviceMobile,
        url: "https://developer.huawei.com/consumer/en/console",
        status: "Live",
        enabled: true,
      },
      {
        name: "Xiaomi Developer",
        description: "Manage applications distributed through Xiaomi services.",
        icon: HiDeviceMobile,
        url: "https://global.developer.mi.com/distribute/app/list",
        status: "Live",
        enabled: true,
      },
      {
        name: "Uptodown",
        description: "Manage application distribution through Uptodown.",
        icon: HiGlobeAlt,
        url: "https://www.uptodown.dev/",
        status: "Live",
        enabled: true,
      },
      {
      name: "APKPure Console",
      description: "Manage Android applications and distribution through APKPure.",
      icon: HiDeviceMobile,
      url: "https://developer.apkpure.com/console",
      status: "Live",
      enabled: true,
    },
    ],
  },
];

function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  /*
   * Detect current language from URL.
   */
  const pathParts = location.pathname.split("/").filter(Boolean);

  const currentLang = supportedLanguages.includes(pathParts[0])
    ? pathParts[0]
    : "en";

  /*
   * Localized home path.
   */
  const localizedPath = (path) => {
    if (currentLang === "en") {
      return path;
    }

    return `/${currentLang}${path}`;
  };

  /*
   * Open external dashboard.
   */
  const openDashboard = (url) => {
    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />

      </div>

      <div className="relative z-10">

        {/* =========================================
            TOP BAR
        ========================================== */}
        <div className="border-b border-white/10 bg-black/20 backdrop-blur-xl">

          <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="flex items-center justify-between h-20">

              {/* Brand */}
              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl border border-cyan-400/30 bg-cyan-500/10 flex items-center justify-center">

                  <HiShieldCheck className="text-2xl text-cyan-400" />

                </div>

                <div>

                  <p className="font-bold tracking-wide">
                    CH TECH GIANT
                  </p>

                  <p className="text-xs text-gray-500">
                    Admin Center
                  </p>

                </div>

              </div>

              {/* Back */}
              <button
                onClick={() => navigate(localizedPath("/"))}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-gray-300 hover:text-cyan-300 hover:border-cyan-400/30 hover:bg-white/5 transition-all duration-300"
              >
                <HiArrowLeft />

                <span className="text-sm">
                  Back to Website
                </span>
              </button>

            </div>

          </div>

        </div>

        {/* =========================================
            HERO
        ========================================== */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12">

          <div className="max-w-3xl">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 mb-6">

              <HiLightningBolt className="text-cyan-400" />

              <span className="text-sm text-cyan-300">
                Secure Administration Portal
              </span>

            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">

              Admin
              <span className="text-cyan-400">
                {" "}Center
              </span>

            </h1>

            <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
              One secure place to access and manage your CH TECH GIANT
              dashboards, applications, infrastructure and developer
              platforms.
            </p>

          </div>

        </section>

        {/* =========================================
            DASHBOARD GROUPS
        ========================================== */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">

          <div className="space-y-16">

            {dashboardGroups.map((group) => {

              const GroupIcon = group.icon;

              return (
                <div key={group.title}>

                  {/* Group Heading */}
                  <div className="flex items-start gap-4 mb-7">

                    <div className="w-12 h-12 shrink-0 rounded-xl border border-cyan-400/20 bg-cyan-500/10 flex items-center justify-center">

                      <GroupIcon className="text-2xl text-cyan-400" />

                    </div>

                    <div>

                      <h2 className="text-2xl font-bold">
                        {group.title}
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">
                        {group.description}
                      </p>

                    </div>

                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {group.dashboards.map((dashboard) => {

                      const DashboardIcon = dashboard.icon;

                      return (
                        <div
                          key={dashboard.name}
                          className={`group relative rounded-2xl border bg-white/[0.02] backdrop-blur-xl p-6 transition-all duration-300 ${
                            dashboard.enabled
                              ? "border-white/10 hover:border-cyan-400/30 hover:bg-cyan-500/[0.03] hover:-translate-y-1"
                              : "border-white/5 opacity-70"
                          }`}
                        >

                          {/* Status */}
                          <div className="absolute top-5 right-5">

                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium ${
                                dashboard.enabled
                                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                  : "bg-white/5 text-gray-500 border border-white/10"
                              }`}
                            >

                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  dashboard.enabled
                                    ? "bg-emerald-400"
                                    : "bg-gray-500"
                                }`}
                              />

                              {dashboard.status}

                            </span>

                          </div>

                          {/* Icon */}
                          <div
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${
                              dashboard.enabled
                                ? "bg-cyan-500/10 border-cyan-400/20"
                                : "bg-white/5 border-white/10"
                            }`}
                          >

                            <DashboardIcon
                              className={`text-2xl ${
                                dashboard.enabled
                                  ? "text-cyan-400"
                                  : "text-gray-500"
                              }`}
                            />

                          </div>

                          {/* Content */}
                          <h3 className="text-lg font-semibold">
                            {dashboard.name}
                          </h3>

                          <p className="text-sm text-gray-500 leading-relaxed mt-3 min-h-[48px]">
                            {dashboard.description}
                          </p>

                          {/* Button */}
                          <button
                            disabled={!dashboard.enabled}
                            onClick={() =>
                              openDashboard(dashboard.url)
                            }
                            className={`w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                              dashboard.enabled
                                ? "bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/40"
                                : "bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"
                            }`}
                          >

                            {dashboard.enabled ? (
                              <>
                                <span>
                                  Open Dashboard
                                </span>

                                <HiExternalLink className="text-lg" />
                              </>
                            ) : (
                              <>
                                <HiLockClosed />

                                <span>
                                  Coming Soon
                                </span>
                              </>
                            )}

                          </button>

                        </div>
                      );

                    })}

                  </div>

                </div>
              );

            })}

          </div>

        </section>

        {/* =========================================
            FOOTER
        ========================================== */}
        <footer className="border-t border-white/10 bg-black/20">

          <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">

              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} CH TECH GIANT. All rights reserved.
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-600">

                <HiLockClosed />

                <span>
                  Authorized access only
                </span>

              </div>

            </div>

          </div>

        </footer>

      </div>

    </main>
  );
}
export default AdminDashboard;