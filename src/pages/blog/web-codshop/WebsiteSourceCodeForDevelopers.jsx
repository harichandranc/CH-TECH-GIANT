import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  FileCode2,
  FolderCode,
  Globe2,
  Layers3,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Terminal,
  Wrench,
} from "lucide-react";

const APP_URL = "https://chtechgiant.com/apps/web-codshop";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.chtechgiant.webcodshop";
const PRIVACY_URL =
  "https://chtechgiant.com/apps/web-codshop/privacy-policy";

const ARTICLE_URL =
  "https://chtechgiant.com/blog/web-codshop/website-source-code-for-developers/";
const ARTICLE_ZH_URL =
  "https://chtechgiant.com/blog/web-codshop/zh/website-source-code-for-developers/";

const ARTICLE_ONE_URL =
  "https://chtechgiant.com/blog/web-codshop/where-to-find-website-source-code/";
const ARTICLE_TWO_URL =
  "https://chtechgiant.com/blog/web-codshop/best-html-website-templates/";

const faqItems = [
  {
    question: "What is website source code?",
    answer:
      "Website source code is the collection of files used to create and run a website or web application. Depending on the project, it can include HTML, CSS, JavaScript, React, Next.js, Node.js, PHP, configuration files, assets, and other project files.",
  },
  {
    question: "Why do developers use ready-made website source code?",
    answer:
      "Ready-made source code can provide an existing project structure that developers can study, customize, extend, or use as a starting point. It can be useful when a developer does not want to create every part of a project from an empty folder.",
  },
  {
    question: "What should I check before using website source code?",
    answer:
      "Check the technology stack, folder structure, dependencies, setup instructions, documentation, responsive behavior, customization options, security considerations, and the applicable license or usage terms.",
  },
  {
    question: "Can website source code be customized?",
    answer:
      "Yes. Source code is generally intended to be modified according to the project's structure and applicable license. Developers can customize layouts, styles, content, functionality, integrations, and other supported parts of a project.",
  },
  {
    question: "What types of website source code can developers find?",
    answer:
      "Common categories include HTML, CSS and JavaScript projects, React.js projects, Next.js projects, Node.js applications, MERN stack projects, PHP scripts, admin dashboards, landing pages, portfolios, business websites, and e-commerce projects.",
  },
];

const categories = [
  {
    icon: FileCode2,
    title: "HTML, CSS & JavaScript",
    description:
      "Useful for traditional websites, landing pages, portfolios, business websites, and front-end projects.",
  },
  {
    icon: Layers3,
    title: "React.js Projects",
    description:
      "Component-based projects that can provide a starting structure for modern interactive web interfaces.",
  },
  {
    icon: Rocket,
    title: "Next.js Projects",
    description:
      "Projects built around the Next.js ecosystem for developers working with modern React applications.",
  },
  {
    icon: Terminal,
    title: "Node.js Applications",
    description:
      "Backend and full-stack projects that can help developers work with APIs, services, and server-side functionality.",
  },
  {
    icon: Code2,
    title: "MERN Stack Projects",
    description:
      "Projects combining MongoDB, Express, React, and Node.js for full-stack web development.",
  },
  {
    icon: FolderCode,
    title: "PHP Projects",
    description:
      "Server-side website projects and scripts for developers working with PHP-based applications.",
  },
  {
    icon: Wrench,
    title: "Admin Dashboards",
    description:
      "Dashboard interfaces that can serve as a starting point for managing application data and workflows.",
  },
  {
    icon: Globe2,
    title: "Business & Portfolio Websites",
    description:
      "Ready-made website structures for companies, freelancers, agencies, creators, and professional portfolios.",
  },
];

const checklist = [
  "Confirm that the technology stack matches your project requirements.",
  "Review the folder and file structure before making major changes.",
  "Check package dependencies and required software versions.",
  "Read the setup and installation instructions carefully.",
  "Test the project locally before deploying it.",
  "Check responsive behavior across desktop and mobile screen sizes.",
  "Review security-sensitive code before using it in production.",
  "Check the license and usage rights before publishing or redistributing the project.",
  "Confirm that the source code can be customized for your intended use.",
  "Keep dependencies and project configuration maintained over time.",
];

function setMetaTag(name, content, property = false) {
  if (!content) return;

  const attribute = property ? "property" : "name";

  let tag = document.head.querySelector(
    `meta[${attribute}="${name}"]`
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

function setAlternateLinks() {
  document.head
    .querySelectorAll('link[data-webcodshop-language]')
    .forEach((link) => link.remove());

  const links = [
    {
      hrefLang: "en",
      href: ARTICLE_URL,
    },
    {
      hrefLang: "zh-CN",
      href: ARTICLE_ZH_URL,
    },
    {
      hrefLang: "x-default",
      href: ARTICLE_URL,
    },
  ];

  links.forEach(({ hrefLang, href }) => {
    const link = document.createElement("link");

    link.rel = "alternate";
    link.hrefLang = hrefLang;
    link.href = href;
    link.dataset.webcodshopLanguage = "true";

    document.head.appendChild(link);
  });
}

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
        <Code2 size={16} />
        {eyebrow}
      </div>

      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function WebCodshopCta() {
  return (
    <section className="border-y border-white/10 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a1022] p-8 shadow-2xl sm:p-12">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
                <Rocket size={16} />
                WEB CODSHOP
              </div>

              <h2 className="max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                Find website source code for your next web project
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                Explore website projects, templates, source code, dashboards,
                landing pages, and development resources through WEB CODSHOP.
              </p>
            </div>

            <a
              href={APP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-6 py-4 font-bold text-white shadow-lg shadow-red-500/20 transition hover:scale-[1.02]"
            >
              Explore WEB CODSHOP
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WebsiteSourceCodeForDevelopers() {
  useEffect(() => {
    const title =
      "Website Source Code for Developers: What to Look For and Where to Start";

    const description =
      "Learn what website source code includes, what developers should check before using source code, and how HTML, React, Next.js, Node.js, MERN, PHP, and ready-made web projects can fit different development needs.";

    const keywords = [
      "website source code for developers",
      "website source code",
      "web development source code",
      "website source code download",
      "HTML website source code",
      "CSS JavaScript source code",
      "web projects for developers",
      "ready-made website source code",
      "source code for web developers",
      "website projects",
      "HTML source code",
      "React website source code",
      "Next.js website projects",
      "Node.js source code",
      "MERN stack projects",
    ].join(", ");

    document.title = title;
    document.documentElement.lang = "en";

    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag("robots", "index, follow, max-image-preview:large");

    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", "article", true);
    setMetaTag("og:url", ARTICLE_URL, true);
    setMetaTag(
      "og:image",
      "https://chtechgiant.com/assets/images/webcodshop-banner.png",
      true
    );
    setMetaTag("og:site_name", "CH TECH GIANT", true);
    setMetaTag("og:locale", "en_US", true);

    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag(
      "twitter:image",
      "https://chtechgiant.com/assets/images/webcodshop-banner.png"
    );

    setCanonical(ARTICLE_URL);
    setAlternateLinks();

    const existingSchemas = document.head.querySelectorAll(
      'script[data-webcodshop-schema="true"]'
    );

    existingSchemas.forEach((script) => script.remove());

    return () => {
      document.documentElement.lang = "en";

      document.head
        .querySelectorAll('script[data-webcodshop-schema="true"]')
        .forEach((script) => script.remove());
    };
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Website Source Code for Developers: What to Look For and Where to Start",
    description:
      "A practical guide to website source code for developers, including source code types, project evaluation, setup, customization, licensing, and development workflows.",
    url: ARTICLE_URL,
    image: "https://chtechgiant.com/assets/images/webcodshop-banner.png",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": ARTICLE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "CH TECH GIANT",
      url: "https://chtechgiant.com",
    },
    about: [
      "Website source code",
      "Web development",
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "MERN Stack",
      "PHP",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://chtechgiant.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://chtechgiant.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "WEB CODSHOP",
        item: APP_URL,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Website Source Code for Developers",
        item: ARTICLE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.14),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.10),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <Link
              to="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              to="/blog"
              className="transition hover:text-white"
            >
              Blog
            </Link>

            <span>/</span>

            <span className="text-slate-300">WEB CODSHOP</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
                <Code2 size={16} />
                Web Development Guide
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Website Source Code for Developers:{" "}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                  What to Look For and Where to Start
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
                A practical guide to understanding website source code,
                choosing a suitable project structure, checking source code
                quality, and preparing a project for customization and
                development.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={APP_URL}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-5 py-3 font-bold text-white transition hover:scale-[1.02]"
                >
                  Explore WEB CODSHOP
                  <ArrowRight size={18} />
                </a>

                <a
                  href={ARTICLE_ZH_URL}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  中文版
                  <ArrowRight size={17} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-red-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a1022] shadow-2xl">
                <img
                  src="/assets/images/webcodshop-banner.png"
                  alt="WEB CODSHOP website source code and web development resources"
                  className="h-auto w-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="prose prose-invert max-w-none">
          <p className="text-lg leading-9 text-slate-300 sm:text-xl">
            Developers often need a starting point when building websites and
            web applications. Instead of creating every page, component,
            layout, or feature from an empty project, they may work with
            existing website source code and adapt it to their requirements.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Website source code can range from a simple HTML, CSS, and
            JavaScript project to a complete application using React.js,
            Next.js, Node.js, PHP, or a MERN stack. The right choice depends
            on what you are building, how much customization you need, and the
            technologies you already use.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            This guide explains what developers should look for when choosing
            website source code and how to approach an existing project before
            customizing or deploying it.
          </p>
        </div>
      </section>

      {/* WHAT IS SOURCE CODE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <SectionTitle
            eyebrow="START WITH THE BASICS"
            title="What is website source code?"
            description="Website source code is the collection of files that defines how a website or web application is structured, displayed, and operated."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: FileCode2,
                title: "Front-End Code",
                text: "HTML, CSS, JavaScript, components, layouts, images, icons, and other assets that create the user interface.",
              },
              {
                icon: Terminal,
                title: "Back-End Code",
                text: "Server-side code, APIs, database connections, authentication logic, and other application functionality.",
              },
              {
                icon: FolderCode,
                title: "Project Files",
                text: "Configuration files, package definitions, environment settings, documentation, scripts, and project structure.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-[#0a1022] p-7"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY DEVELOPERS USE IT */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <SectionTitle
          eyebrow="WHY USE SOURCE CODE?"
          title="Why developers work with existing website projects"
          description="An existing source code project can provide a practical starting structure for learning, customization, prototyping, or further development."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              icon: Rocket,
              title: "Start from an existing structure",
              text: "A project can already contain pages, components, styles, assets, routing, or other foundations that a developer can adapt.",
            },
            {
              icon: Search,
              title: "Study real project organization",
              text: "Source code can help developers understand how files, components, APIs, assets, and configuration are organized in a working project.",
            },
            {
              icon: Wrench,
              title: "Customize the project",
              text: "Developers can change the design, content, functionality, integrations, and other parts according to the project's architecture and license.",
            },
            {
              icon: Smartphone,
              title: "Build for different screen sizes",
              text: "Responsive projects can provide an existing interface structure that developers can test and adapt for desktop, tablet, and mobile screens.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex gap-5 rounded-2xl border border-white/10 bg-[#0a1022] p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TYPES */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <SectionTitle
            eyebrow="SOURCE CODE TYPES"
            title="Website source code categories developers may need"
            description="Different web projects use different technologies. Choose source code based on the stack and functionality required for your project."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group rounded-2xl border border-white/10 bg-[#0a1022] p-6 transition hover:-translate-y-1 hover:border-red-500/30"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400 transition group-hover:bg-red-500/15">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
              <ShieldCheck size={16} />
              BEFORE YOU START
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              What should developers check before using source code?
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
              A project can look attractive while still requiring significant
              setup or customization. Reviewing the project before development
              helps you understand what you are actually working with.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0a1022] p-7 sm:p-9">
            <div className="space-y-4">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-green-400"
                  />

                  <p className="leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOURCE CODE VS TEMPLATE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8">
          <SectionTitle
            eyebrow="UNDERSTANDING THE DIFFERENCE"
            title="Website source code vs. website templates"
            description="The terms are sometimes used together, but they can describe different types of development resources."
          />

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a1022]">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <FileCode2 size={21} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Website Source Code
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  Source code generally refers to the actual project files
                  used to create a website or application. Depending on the
                  project, it can include front-end code, back-end code,
                  configuration, assets, APIs, and other components.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Project files",
                    "Application logic",
                    "Components and pages",
                    "Configuration",
                    "Potential backend functionality",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2 size={17} className="text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                  <Layers3 size={21} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Website Template
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  A website template usually focuses on a reusable design or
                  interface structure. It may contain pages, layouts, styles,
                  components, and assets intended to be customized for a
                  particular website.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Page layouts",
                    "Visual design",
                    "Reusable sections",
                    "Styles and assets",
                    "Responsive interface structure",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2 size={17} className="text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVALUATION */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <SectionTitle
          eyebrow="PROJECT EVALUATION"
          title="How to evaluate website source code"
          description="Before choosing a project, look beyond screenshots and consider the actual development requirements."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "Technology Stack",
              text: "Check whether the project uses HTML, JavaScript, React, Next.js, Node.js, PHP, or another stack that fits your skills and requirements.",
            },
            {
              number: "02",
              title: "Project Structure",
              text: "Review how pages, components, assets, services, APIs, and configuration files are organized.",
            },
            {
              number: "03",
              title: "Dependencies",
              text: "Check package files and dependencies so you know what must be installed before the project can run.",
            },
            {
              number: "04",
              title: "Documentation",
              text: "Clear setup instructions can make it easier to install, configure, customize, and troubleshoot the project.",
            },
            {
              number: "05",
              title: "Responsive Design",
              text: "Test the interface at different screen sizes rather than relying only on a desktop preview.",
            },
            {
              number: "06",
              title: "License & Usage",
              text: "Always review the applicable license and usage terms before modifying, publishing, selling, or redistributing source code.",
            },
          ].map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-white/10 bg-[#0a1022] p-7"
            >
              <span className="text-sm font-black text-red-400">
                {item.number}
              </span>

              <h3 className="mt-3 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <SectionTitle
            eyebrow="DEVELOPMENT WORKFLOW"
            title="A simple workflow for working with source code"
            description="Once you have selected a suitable project, approach it step by step rather than changing everything at once."
          />

          <div className="grid gap-5 md:grid-cols-5">
            {[
              ["1", "Choose", "Select source code that matches your technology and project goal."],
              ["2", "Inspect", "Review the files, dependencies, documentation, and configuration."],
              ["3", "Install", "Set up the required tools and run the project locally."],
              ["4", "Customize", "Modify design, content, functionality, and integrations."],
              ["5", "Test", "Test the project before deploying it to production."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-[#0a1022] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 font-black text-white">
                  {number}
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEB CODSHOP */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a1022]">
            <img
              src="/assets/images/webcodshop-logo.png"
              alt="WEB CODSHOP logo"
              className="mx-auto w-full max-w-sm object-contain p-12"
              loading="lazy"
            />
          </div>

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
              <Download size={16} />
              WEB CODSHOP
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Explore website source code and development projects
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
              WEB CODSHOP is a marketplace for website source code, web
              templates, projects, UI resources, and professional web
              development materials.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "HTML Website Templates",
                "CSS & JavaScript Projects",
                "React.js Projects",
                "Next.js Projects",
                "Node.js Applications",
                "MERN Stack Projects",
                "PHP Scripts",
                "Admin Dashboards",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                >
                  <CheckCircle2 size={17} className="text-red-400" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-black transition hover:bg-slate-200"
              >
                Get on Google Play
                <ExternalLink size={17} />
              </a>

              <a
                href={APP_URL}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View App Page
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <WebCodshopCta />

      {/* RELATED ARTICLES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <SectionTitle
          eyebrow="KEEP READING"
          title="More WEB CODSHOP guides"
          description="Continue exploring website source code and web development resources."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href={ARTICLE_ONE_URL}
            className="group rounded-2xl border border-white/10 bg-[#0a1022] p-7 transition hover:-translate-y-1 hover:border-red-500/30"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-red-400">
                WEB CODSHOP GUIDE
              </span>

              <ArrowRight
                size={19}
                className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-white"
              />
            </div>

            <h3 className="text-xl font-bold text-white">
              Where to Find Website Source Code for Your Next Project
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Learn about different places and approaches for finding website
              source code for web projects.
            </p>
          </a>

          <a
            href={ARTICLE_TWO_URL}
            className="group rounded-2xl border border-white/10 bg-[#0a1022] p-7 transition hover:-translate-y-1 hover:border-orange-500/30"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-orange-400">
                WEB CODSHOP GUIDE
              </span>

              <ArrowRight
                size={19}
                className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-white"
              />
            </div>

            <h3 className="text-xl font-bold text-white">
              Best HTML Website Templates for Developers and Businesses
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Explore what to consider when choosing HTML website templates
              for development and business projects.
            </p>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Common questions about website source code for developers."
          />

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/10 bg-[#0a1022] p-6"
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-white marker:hidden">
                  {item.question}
                </summary>

                <p className="mt-4 leading-8 text-slate-400">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-white">WEB CODSHOP</p>

            <p className="mt-2 text-sm text-slate-500">
              Website source code, templates, and web development resources.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-400">
            <a
              href={APP_URL}
              className="transition hover:text-white"
            >
              App Page
            </a>

            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Google Play
            </a>

            <a
              href={PRIVACY_URL}
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href={ARTICLE_ZH_URL}
              className="transition hover:text-white"
            >
              中文
            </a>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-slate-600">
          <ArrowLeft size={15} />
          <Link
            to="/blog"
            className="transition hover:text-slate-300"
          >
            Back to Blog
          </Link>
        </div>
      </footer>
    </main>
  );
}