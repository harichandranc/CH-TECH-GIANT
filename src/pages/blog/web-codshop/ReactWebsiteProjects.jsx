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
  "https://chtechgiant.com/blog/web-codshop/react-website-projects/";

const ARTICLE_ZH_URL =
  "https://chtechgiant.com/blog/web-codshop/zh/react-website-projects/";

const ARTICLE_ONE_URL =
  "https://chtechgiant.com/blog/web-codshop/where-to-find-website-source-code/";

const ARTICLE_TWO_URL =
  "https://chtechgiant.com/blog/web-codshop/best-html-website-templates/";

const ARTICLE_THREE_URL =
  "https://chtechgiant.com/blog/web-codshop/website-source-code-for-developers/";

const faqItems = [
  {
    question: "What are React website projects?",
    answer:
      "React website projects are web development projects built with React.js. They can include reusable components, pages, layouts, routing, styling, assets, configuration files, and other project resources used to create interactive web interfaces.",
  },
  {
    question: "Why do developers use ready-made React projects?",
    answer:
      "Ready-made React projects can provide an existing project structure that developers can study, customize, extend, or use as a starting point. They can be useful when a developer wants to work from an existing interface or application structure instead of starting from an empty project.",
  },
  {
    question: "What should I check before using React project source code?",
    answer:
      "Check the React version, package dependencies, project structure, routing, component organization, styling approach, setup instructions, responsive behavior, documentation, security considerations, and the applicable license or usage terms.",
  },
  {
    question: "Can React website source code be customized?",
    answer:
      "Yes. React source code can generally be customized according to the project's architecture and applicable license. Developers can modify components, pages, layouts, styles, content, functionality, integrations, and other supported parts of the project.",
  },
  {
    question: "Where can developers find React website projects?",
    answer:
      "Developers can find React website projects through source code marketplaces, development communities, template platforms, open-source repositories, and other web development resource platforms. The technology stack, project quality, documentation, and license should be reviewed before using a project.",
  },
];

const projectTypes = [
  {
    icon: Layers3,
    title: "React Website Projects",
    description:
      "Complete React-based website structures with pages, components, layouts, styling, and supporting project files.",
  },
  {
    icon: FileCode2,
    title: "React Website Templates",
    description:
      "Reusable React interface structures for landing pages, portfolios, business websites, dashboards, and other web experiences.",
  },
  {
    icon: Terminal,
    title: "React JS Projects",
    description:
      "React JavaScript projects that can provide practical examples of component-based front-end development.",
  },
  {
    icon: FolderCode,
    title: "React Source Code",
    description:
      "Project files that developers can inspect, customize, extend, and integrate into suitable development workflows.",
  },
  {
    icon: Globe2,
    title: "Business Websites",
    description:
      "React-based structures for companies, agencies, startups, services, professional websites, and business-focused interfaces.",
  },
  {
    icon: Rocket,
    title: "Landing Page Projects",
    description:
      "React landing page projects designed around focused page structures, reusable sections, responsive layouts, and calls to action.",
  },
  {
    icon: Wrench,
    title: "Dashboard Interfaces",
    description:
      "Component-based React dashboard interfaces that can provide a foundation for application administration and data-driven screens.",
  },
  {
    icon: Smartphone,
    title: "Responsive React Projects",
    description:
      "Projects designed to adapt interfaces across desktop, tablet, and mobile screen sizes.",
  },
];

const checklist = [
  "Confirm that the project uses a React version compatible with your development environment.",
  "Review package.json and understand the main dependencies before installation.",
  "Inspect the component and folder structure before making major changes.",
  "Check how routing and navigation are implemented.",
  "Understand the styling approach used by the project.",
  "Read the setup and installation instructions carefully.",
  "Run the project locally before beginning customization.",
  "Test responsive behavior across desktop, tablet, and mobile screen sizes.",
  "Review API calls, authentication, and other security-sensitive code before production use.",
  "Check the license and usage rights before publishing or redistributing the project.",
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
                Explore React website projects for your next development project
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                Explore React projects, website source code, templates,
                dashboards, landing pages, and other professional web
                development resources through WEB CODSHOP.
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

export default function ReactWebsiteProjects() {
  useEffect(() => {
    const title =
      "React Website Projects for Developers: What to Look For";

    const description =
      "Learn what to look for in React website projects, React source code, React JS projects, templates, and ready-made React projects before starting your next web development project.";

    const keywords = [
      "React website projects",
      "React projects for developers",
      "React website source code",
      "React project source code",
      "React web projects",
      "React website templates",
      "React source code",
      "React projects",
      "React JS projects",
      "ready-made React projects",
      "React web development projects",
    ].join(", ");

    document.title = title;
    document.documentElement.lang = "en";

    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag(
      "robots",
      "index, follow, max-image-preview:large"
    );

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
    headline: "React Website Projects for Developers: What to Look For",
    description:
      "A practical guide to React website projects, React source code, React JS projects, website templates, project structure, dependencies, customization, and development workflows.",
    url: ARTICLE_URL,
    image:
      "https://chtechgiant.com/assets/images/webcodshop-banner.png",
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
      "React website projects",
      "React.js",
      "React source code",
      "React website templates",
      "React JS projects",
      "Web development",
      "Website source code",
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
        name: "React Website Projects for Developers",
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

            <span className="text-slate-300">
              WEB CODSHOP
            </span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
                <Code2 size={16} />
                React Development Guide
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                React Website Projects for Developers:{" "}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                  What to Look For
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
                Learn how to evaluate React website projects, React source
                code, project structure, dependencies, templates, and
                ready-made React projects before starting your next web
                development project.
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
                  alt="WEB CODSHOP React website projects and React source code"
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
            React has become a widely used technology for building
            component-based web interfaces. Developers working on websites,
            dashboards, business platforms, landing pages, and web
            applications often use React projects as a starting point for
            their development work.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            A React website project can contain much more than individual
            components. Depending on the project, it may include pages,
            layouts, reusable UI components, routing, styling, assets,
            configuration files, dependencies, and application logic.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            This guide explains what developers should look for when choosing
            React website projects and React source code, how to inspect an
            existing project, and how to approach customization before using
            it in a development workflow.
          </p>
        </div>
      </section>

      {/* WHAT IS A REACT PROJECT */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <SectionTitle
            eyebrow="START WITH THE BASICS"
            title="What is a React website project?"
            description="A React website project is a collection of files and development resources used to build a web interface or application with React.js."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Layers3,
                title: "React Components",
                text: "Reusable interface components that can be combined to create pages, layouts, navigation, forms, cards, dashboards, and other parts of a website.",
              },
              {
                icon: FileCode2,
                title: "Pages & Interfaces",
                text: "Individual website pages and interface sections that provide the visible structure and user experience of the React project.",
              },
              {
                icon: FolderCode,
                title: "Project Files",
                text: "Package files, configuration, assets, styling, scripts, routing, documentation, and other files required by the development environment.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
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

      {/* WHY DEVELOPERS USE REACT PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <SectionTitle
          eyebrow="WHY USE REACT PROJECTS?"
          title="Why developers work with existing React projects"
          description="An existing React project can provide a practical starting structure for learning, prototyping, customization, or further web development."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              icon: Rocket,
              title: "Start with an existing structure",
              text: "A React project may already contain pages, components, layouts, navigation, styles, and supporting files that developers can adapt to their requirements.",
            },
            {
              icon: Search,
              title: "Study component organization",
              text: "React source code can provide a practical way to understand how components, pages, assets, routing, and project configuration are organized.",
            },
            {
              icon: Wrench,
              title: "Customize the interface",
              text: "Developers can modify layouts, content, styling, components, functionality, and integrations according to the project's architecture and license.",
            },
            {
              icon: Smartphone,
              title: "Build responsive experiences",
              text: "React website projects can provide interface structures that developers can test and adapt for desktop, tablet, and mobile screen sizes.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
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

      {/* PROJECT TYPES */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <SectionTitle
            eyebrow="REACT PROJECT TYPES"
            title="React website projects developers may need"
            description="React can be used for many types of websites and interfaces. The right project depends on the website goal, required functionality, and development stack."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projectTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
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
              What should developers check before using React source code?
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
              A React project can look polished in a preview while still
              requiring configuration, dependency updates, customization, or
              additional development work. Reviewing the project first helps
              you understand what you are actually working with.
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

                  <p className="leading-7 text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
            {/* SOURCE CODE VS TEMPLATE */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionTitle
          eyebrow="React Projects"
          title="React Website Source Code vs React Templates"
          description="React templates and complete React website projects can both accelerate development, but they serve different starting points."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
              <FileCode2 size={24} />
            </div>

            <h3 className="text-xl font-bold text-white">
              React Website Templates
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              A React website template usually gives you a prepared frontend
              structure, reusable components, layouts, styling, and visual
              elements. It can be useful when you already know what
              functionality your application needs and mainly want to speed up
              the interface development process.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Pre-built React UI structure",
                "Reusable components",
                "Responsive page layouts",
                "Faster frontend customization",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-red-400"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
              <FolderCode size={24} />
            </div>

            <h3 className="text-xl font-bold text-white">
              Complete React Website Projects
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              A complete React website project can provide a broader
              development starting point. Depending on the project, it may
              include multiple pages, components, application logic,
              configuration files, assets, and other source files that help
              developers understand how the project is organized.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Broader project structure",
                "Multiple source files and components",
                "Useful starting point for development",
                "Better reference for learning project organization",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-orange-400"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* HOW TO EVALUATE */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Evaluation Guide"
            title="How to Evaluate a React Website Project"
            description="Before using an existing React project, review its structure and development requirements instead of choosing only from screenshots or visual appearance."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "React Structure",
                text: "Check how pages, components, reusable elements, and application files are organized. A clear structure makes future customization easier.",
              },
              {
                icon: Terminal,
                title: "Project Configuration",
                text: "Review package configuration and the project's development setup so you understand what is required before running or modifying the source code.",
              },
              {
                icon: Layers3,
                title: "Component Organization",
                text: "Look for reusable components and logical separation between sections. Well-organized components can reduce repeated work during customization.",
              },
              {
                icon: Smartphone,
                title: "Responsive Layout",
                text: "Check whether the website layout adapts to different screen sizes. This is particularly important for projects intended for mobile and desktop users.",
              },
              {
                icon: Wrench,
                title: "Customization Potential",
                text: "Consider how easily colors, typography, layouts, sections, content, and other interface elements can be changed for your project.",
              },
              {
                icon: ShieldCheck,
                title: "Source Transparency",
                text: "Use a source-code marketplace or project provider where the available project information clearly explains what you are getting before you start development.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.04,
                  }}
                  className="group rounded-3xl border border-white/10 bg-[#050816] p-6 transition duration-300 hover:border-red-500/30 hover:bg-white/[0.035]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/15 to-orange-500/10 text-red-400 transition group-hover:scale-105">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REACT DEVELOPMENT WORKFLOW */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionTitle
          eyebrow="Development Workflow"
          title="A Practical Workflow for Using React Projects"
          description="Once you select a React website project, a structured workflow can help you move from source code to a customized website."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {[
            {
              number: "01",
              title: "Review",
              text: "Inspect the project structure, components, pages, assets, and configuration before making changes.",
            },
            {
              number: "02",
              title: "Run",
              text: "Set up the project locally and verify that the existing application works as expected.",
            },
            {
              number: "03",
              title: "Customize",
              text: "Update content, layouts, styles, components, and other project-specific elements.",
            },
            {
              number: "04",
              title: "Test",
              text: "Check navigation, responsive layouts, interactions, and important application flows.",
            },
            {
              number: "05",
              title: "Deploy",
              text: "Prepare the customized React project for the hosting and deployment environment you choose.",
            },
          ].map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="text-sm font-bold tracking-[0.2em] text-red-400">
                {step.number}
              </div>

              <h3 className="mt-4 text-lg font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {step.text}
              </p>

              {index < 4 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                  <ArrowRight size={18} className="text-slate-700" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* WEB CODSHOP */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-red-500/[0.08] via-white/[0.025] to-orange-500/[0.06] p-7 sm:p-10"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex items-center gap-4">
                  <img
                    src="/assets/images/webcodshop-logo.png"
                    alt="WEB CODSHOP"
                    className="h-14 w-14 rounded-2xl object-cover"
                  />

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                      WEB CODSHOP
                    </p>

                    <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                      Find React Projects and Web Development Source Code
                    </h2>
                  </div>
                </div>

                <p className="mt-6 max-w-2xl leading-7 text-slate-300">
                  WEB CODSHOP is a source-code marketplace for developers,
                  freelancers, startups, agencies, and business owners looking
                  for ready-made website projects and development resources.
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                  The marketplace covers different web development categories,
                  including React.js projects, Next.js projects, Node.js
                  applications, MERN Stack projects, HTML templates, landing
                  pages, admin dashboards, portfolio websites, business
                  websites, and other web development resources.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    "React.js Projects",
                    "Next.js Projects",
                    "Node.js Applications",
                    "MERN Stack Projects",
                    "Admin Dashboards",
                    "Landing Pages",
                  ].map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium text-slate-300"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5"
                  >
                    Explore WEB CODSHOP
                    <ExternalLink size={17} />
                  </a>

                  <a
                    href={GOOGLE_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Get the Android App
                    <Download size={17} />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-red-500/10 blur-3xl" />

                <img
                  src="/assets/images/webcodshop-banner.png"
                  alt="WEB CODSHOP website source code marketplace"
                  className="relative w-full rounded-2xl border border-white/10 shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <WebCodshopCta />

      {/* RELATED ARTICLES */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionTitle
          eyebrow="Continue Reading"
          title="More WEB CODSHOP Guides"
          description="Explore related guides about website source code, HTML templates, and web development projects."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <Link
            to={ARTICLE_ONE_URL}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/30"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">
                Guide 01
              </span>
              <ArrowRight
                size={18}
                className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-red-400"
              />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Where to Find Website Source Code for Your Next Project
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Learn what to consider when searching for website source code
              and development projects.
            </p>
          </Link>

          <Link
            to={ARTICLE_TWO_URL}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/30"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
                Guide 02
              </span>
              <ArrowRight
                size={18}
                className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-orange-400"
              />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Best HTML Website Templates for Developers and Businesses
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Understand the main things to check when selecting an HTML
              website template.
            </p>
          </Link>

          <Link
            to={ARTICLE_THREE_URL}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/30"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">
                Guide 03
              </span>
              <ArrowRight
                size={18}
                className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-red-400"
              />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Website Source Code for Developers
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Explore how developers can evaluate website source code and
              choose projects for different development needs.
            </p>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8">
          <SectionTitle
            eyebrow="FAQ"
            title="React Website Projects FAQ"
            description="Common questions about React website projects, React source code, and using ready-made development projects."
          />

          <div className="mt-12 space-y-4">
            {faqItems.map((item, index) => (
              <motion.details
                key={item.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5"
              >
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-white marker:hidden">
                  {item.question}
                </summary>

                <p className="mt-4 border-t border-white/5 pt-4 text-sm leading-7 text-slate-400">
                  {item.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#03050d]">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold text-white">
                CH TECH GIANT
              </p>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Web development resources, applications, and digital products
                from CH TECH GIANT.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-white"
              >
                WEB CODSHOP
              </a>

              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-white"
              >
                Google Play
              </a>

              <a
                href={PRIVACY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-white"
              >
                Privacy Policy
              </a>

              <Link
                to={ARTICLE_ZH_URL}
                className="text-slate-400 transition hover:text-white"
              >
                中文
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-white/5 pt-6 text-xs text-slate-600">
            © {new Date().getFullYear()} CH TECH GIANT. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}