import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
  LayoutDashboard,
  Monitor,
  Palette,
  Rocket,
  Search,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  Users,
  Briefcase,
  Laptop,
  FileCode2,
  Layers3,
  ShieldCheck,
  Zap,
  HelpCircle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const categories = [
  {
    icon: Code2,
    title: "HTML Templates",
    description: "Ready-to-use HTML website templates for different projects and use cases.",
  },
  {
    icon: Palette,
    title: "CSS & JavaScript",
    description: "Frontend projects, UI elements and JavaScript-based web resources.",
  },
  {
    icon: Layers3,
    title: "React.js Projects",
    description: "Modern React.js projects and reusable website source code.",
  },
  {
    icon: Monitor,
    title: "Next.js Projects",
    description: "Next.js projects for modern web application development.",
  },
  {
    icon: ServerIcon,
    title: "Node.js Applications",
    description: "Node.js applications and backend-oriented web projects.",
  },
  {
    icon: Layers3,
    title: "MERN Stack",
    description: "Full-stack MERN projects combining modern web technologies.",
  },
  {
    icon: FileCode2,
    title: "PHP Scripts",
    description: "PHP-based scripts and website projects for web development.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description: "Dashboard interfaces and admin panel source code.",
  },
  {
    icon: Monitor,
    title: "Landing Pages",
    description: "Professional landing page templates for websites and campaigns.",
  },
  {
    icon: Briefcase,
    title: "Portfolio Websites",
    description: "Portfolio website projects for professionals and creators.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "E-commerce website templates and online store projects.",
  },
  {
    icon: Store,
    title: "Business Websites",
    description: "Website templates designed for businesses and organizations.",
  },
];

function ServerIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

const audiences = [
  {
    icon: Code2,
    title: "Developers",
    description:
      "Explore source code and projects that can help speed up web development.",
  },
  {
    icon: Laptop,
    title: "Freelancers",
    description:
      "Find ready-to-use website projects that can help accelerate client work.",
  },
  {
    icon: Rocket,
    title: "Startups",
    description:
      "Discover website resources for building and launching digital products.",
  },
  {
    icon: Users,
    title: "Agencies",
    description:
      "Browse web projects and templates for different client requirements.",
  },
  {
    icon: Briefcase,
    title: "Business Owners",
    description:
      "Explore website templates and digital resources for business websites.",
  },
];

const benefits = [
  "Browse website source code and templates in one place.",
  "Explore projects across multiple web technologies.",
  "Find resources for personal, academic, freelance and business projects.",
  "Save development time by starting with existing project resources.",
  "Request custom solutions when you cannot find what you need.",
  "Access the marketplace from anywhere through the mobile app.",
];

const faqs = [
  {
    question: "What is WEB CODSHOP?",
    answer:
      "WEB CODSHOP is a marketplace focused on website source code, web templates and professional web development resources.",
  },
  {
    question: "Who can use WEB CODSHOP?",
    answer:
      "WEB CODSHOP is designed for developers, freelancers, startups, agencies, business owners and others looking for website development resources.",
  },
  {
    question: "What types of projects are available?",
    answer:
      "The marketplace includes HTML templates, CSS and JavaScript projects, React.js projects, Next.js projects, Node.js applications, MERN stack projects, PHP scripts, admin dashboards, landing pages, portfolio websites, e-commerce templates, business websites and UI resources.",
  },
  {
    question: "Does WEB CODSHOP support different web technologies?",
    answer:
      "Yes. The marketplace includes resources across technologies such as HTML, CSS, JavaScript, React.js, Next.js, Node.js, MERN Stack and PHP.",
  },
  {
    question: "Can I request a project if I cannot find what I need?",
    answer:
      "Yes. WEB CODSHOP provides a custom request option for users who cannot find the resource or project they are looking for.",
  },
  {
    question: "Where can I download WEB CODSHOP?",
    answer:
      "WEB CODSHOP can be downloaded through supported app stores and a direct APK download option.",
  },
];

function StoreButton({
  icon: Icon,
  title,
  subtitle,
  href,
  external = true,
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/40 hover:bg-white/[0.1]"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
        <Icon size={22} />
      </div>

      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-slate-400">
          {subtitle}
        </div>
        <div className="truncate text-sm font-semibold text-white">
          {title}
        </div>
      </div>

      <ExternalLink
        size={16}
        className="ml-auto text-slate-500 transition group-hover:text-red-400"
      />
    </a>
  );
}

export default function WebCodshop() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate px-6 pb-20 pt-28 sm:px-10 lg:px-16 lg:pb-28 lg:pt-36">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-red-500/10 blur-[120px]" />
          <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[140px]" />
          <div className="absolute bottom-[-15%] left-[35%] h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[130px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm font-medium text-red-300">
                  <Sparkles size={15} />
                  Premium Web Development Resources
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl"
              >
                Discover
                <span className="block bg-gradient-to-r from-red-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                  Website Source Code
                </span>
                & Web Projects
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                WEB CODSHOP is a premium marketplace dedicated to website
                source code, web templates, and professional web development
                resources. Discover projects that can help save development
                time and accelerate project delivery.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.chtechgiant.webcodshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-red-500/20 transition-all hover:-translate-y-1 hover:bg-red-400"
                >
                  <Download size={18} />
                  Download App
                </a>

                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3.5 font-semibold text-slate-200 transition-all hover:-translate-y-1 hover:bg-white/[0.1]"
                >
                  Explore Features
                  <ArrowRight size={18} />
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400"
              >
                <span className="flex items-center gap-2">
                  <Check size={16} className="text-red-400" />
                  Website Templates
                </span>

                <span className="flex items-center gap-2">
                  <Check size={16} className="text-red-400" />
                  Source Code
                </span>

                <span className="flex items-center gap-2">
                  <Check size={16} className="text-red-400" />
                  Web Projects
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-[3rem] bg-red-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/40">
                <img
                  src="/assets/web-codshop/banner.png"
                  alt="WEB CODSHOP website source code and web development marketplace"
                  className="h-auto w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-white/10 bg-[#0b1020]/95 p-4 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                    <Code2 size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Web Development
                    </p>
                    <p className="text-xs text-slate-400">
                      Templates & Source Code
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DOWNLOAD
      ========================================================== */}
      <section
        id="download"
        className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-10 rounded-full bg-red-500/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white p-6 shadow-2xl">
                  <img
                    src="/assets/images/webcodshop-logo.png"
                    alt="WEB CODSHOP logo"
                    className="h-52 w-52 object-contain sm:h-64 sm:w-64"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Get WEB CODSHOP
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Explore web development resources wherever you are
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                Download WEB CODSHOP through your preferred platform and
                explore website source code, templates and professional web
                development resources.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <StoreButton
                  icon={Download}
                  title="Google Play"
                  subtitle="Download from"
                  href="https://play.google.com/store/apps/details?id=com.chtechgiant.webcodshop"
                />

                <StoreButton
                  icon={Globe}
                  title="Huawei AppGallery"
                  subtitle="Available on"
                  href="https://appgallery.huawei.com/app/CPLACEHOLDER"
                />

                <StoreButton
                  icon={Smartphone}
                  title="Xiaomi GetApps"
                  subtitle="Available on"
                  href="https://global.app.mi.com/details?appId=com.chtechgiant.webcodshop"
                />

                <StoreButton
                  icon={Download}
                  title="Direct APK"
                  subtitle="Download"
                  href="https://chtechgiant.com/downloads/web-codshop.apk"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              About WEB CODSHOP
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A marketplace for website source code and web resources
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              WEB CODSHOP helps developers, freelancers, startups, agencies
              and business owners discover high-quality website projects and
              development resources. Instead of starting every project from
              scratch, users can explore existing source code, templates and
              web projects to help accelerate development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FEATURES / CATEGORIES
      ========================================================== */}
      <section
        id="features"
        className="border-y border-white/5 bg-white/[0.015] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Explore Categories
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Web projects for different technologies and needs
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
                Browse a growing collection of website templates, source code,
                applications and professional web development resources.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-white/8 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/20 hover:bg-white/[0.06]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400 transition group-hover:bg-red-500/15">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {category.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          AUDIENCE
      ========================================================== */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Built for different users
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Resources for your next web project
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-400">
                Whether you're building a client website, working on a
                startup, developing a personal project or exploring web
                development resources, WEB CODSHOP brings different project
                categories together in one marketplace.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="grid gap-4 sm:grid-cols-2"
            >
              {audiences.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="rounded-2xl border border-white/8 bg-white/[0.035] p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h3 className="font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY WEB CODSHOP
      ========================================================== */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-red-500/10 bg-gradient-to-br from-red-500/[0.08] via-white/[0.025] to-transparent">
            <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                  Why WEB CODSHOP?
                </span>

                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Start with resources that fit your project
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-400">
                  WEB CODSHOP brings together website source code, templates
                  and web development resources across multiple technologies
                  and project categories.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="space-y-4"
              >
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                      <Check size={14} />
                    </div>

                    <p className="text-sm leading-7 text-slate-300">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================== */}
      <section className="border-y border-white/5 bg-white/[0.015] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              How it works
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Find resources for your project
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: Search,
                title: "Explore",
                description:
                  "Browse website templates, source code and web development resources.",
              },
              {
                number: "02",
                icon: Layers3,
                title: "Choose",
                description:
                  "Explore available project categories and find resources relevant to your needs.",
              },
              {
                number: "03",
                icon: Rocket,
                title: "Build Faster",
                description:
                  "Use suitable project resources as a starting point for development.",
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  className="relative rounded-2xl border border-white/8 bg-white/[0.035] p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                      <Icon size={22} />
                    </div>

                    <span className="text-sm font-bold text-white/20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROMOTIONAL IMAGE
      ========================================================== */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/30"
          >
            <img
              src="/assets/images/webcodshop-banner.png"
              alt="WEB CODSHOP premium templates and source codes"
              className="w-full rounded-[1.5rem]"
            />
          </motion.div>
        </div>
      </section>

      

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section className="border-t border-white/5 bg-white/[0.015] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              FAQ
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="group rounded-2xl border border-white/8 bg-white/[0.035] p-6"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 text-base font-semibold text-white">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                    <HelpCircle size={18} />
                  </div>

                  <span className="flex-1">{faq.question}</span>

                  <span className="text-xl text-slate-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 pl-13 text-sm leading-7 text-slate-400">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PRIVACY + FINAL CTA
      ========================================================== */}
      <section className="px-6 pb-24 pt-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-red-500/15 bg-gradient-to-br from-red-500/10 to-transparent p-8 text-center sm:p-12"
          >
            <ShieldCheck
              size={36}
              className="mx-auto text-red-400"
            />

            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
              Learn more about WEB CODSHOP
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Read the WEB CODSHOP privacy policy to learn more about how the
              app handles information and third-party services.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="https://chtechgiant.com/apps/web-codshop/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 font-semibold text-white transition hover:bg-white/[0.1]"
              >
                Privacy Policy
                <ExternalLink size={16} />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.chtechgiant.webcodshop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-400"
              >
                Get the App
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <footer className="border-t border-white/5 px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-semibold text-white">WEB CODSHOP</p>
            <p className="mt-1 text-xs text-slate-500">
              Premium website source code and web development resources.
            </p>
          </div>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CH TECH GIANT. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}