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
  "https://chtechgiant.com/blog/web-codshop/zh/website-source-code-for-developers/";
const ARTICLE_EN_URL =
  "https://chtechgiant.com/blog/web-codshop/website-source-code-for-developers/";

const ARTICLE_ONE_URL =
  "https://chtechgiant.com/blog/web-codshop/where-to-find-website-source-code/";
const ARTICLE_TWO_URL =
  "https://chtechgiant.com/blog/web-codshop/best-html-website-templates/";

const faqItems = [
  {
    question: "什么是网站源码？",
    answer:
      "网站源码是用于创建和运行网站或 Web 应用程序的一组项目文件。根据项目不同，源码可能包括 HTML、CSS、JavaScript、React、Next.js、Node.js、PHP、配置文件、资源文件以及其他项目文件。",
  },
  {
    question: "为什么开发者会使用现成的网站源码？",
    answer:
      "现成的网站源码可以提供一个已经存在的项目结构，开发者可以根据项目需求进行学习、修改、扩展或二次开发。当不希望从空文件夹开始创建所有页面和功能时，现成源码可以作为一个起点。",
  },
  {
    question: "使用网站源码之前应该检查什么？",
    answer:
      "建议检查技术栈、文件结构、依赖、安装说明、文档、响应式表现、自定义能力、安全相关代码以及适用的授权和使用条款。",
  },
  {
    question: "网站源码可以修改吗？",
    answer:
      "通常可以根据项目结构以及适用的授权条款进行修改。开发者可以对页面设计、样式、内容、功能、接口和其他支持修改的部分进行定制。",
  },
  {
    question: "开发者可以找到哪些类型的网站源码？",
    answer:
      "常见类型包括 HTML、CSS 和 JavaScript 项目、React.js 项目、Next.js 项目、Node.js 应用、MERN Stack 项目、PHP 脚本、管理后台、Landing Page、作品集、企业网站以及电子商务网站项目。",
  },
];

const categories = [
  {
    icon: FileCode2,
    title: "HTML、CSS 和 JavaScript",
    description:
      "适合传统网站、Landing Page、个人作品集、企业网站以及前端开发项目。",
  },
  {
    icon: Layers3,
    title: "React.js 项目",
    description:
      "基于组件化开发的项目，可以作为现代交互式 Web 界面的开发起点。",
  },
  {
    icon: Rocket,
    title: "Next.js 项目",
    description:
      "适合使用 Next.js 技术生态进行现代 React Web 应用开发的开发者。",
  },
  {
    icon: Terminal,
    title: "Node.js 应用",
    description:
      "适用于 API、服务端功能、后端服务以及全栈 Web 应用开发。",
  },
  {
    icon: Code2,
    title: "MERN Stack 项目",
    description:
      "结合 MongoDB、Express、React 和 Node.js 的全栈 Web 开发项目。",
  },
  {
    icon: FolderCode,
    title: "PHP 项目",
    description:
      "适合使用 PHP 开发服务器端网站、脚本和 Web 应用的开发者。",
  },
  {
    icon: Wrench,
    title: "管理后台",
    description:
      "可以作为管理数据、业务流程以及应用后台界面的开发基础。",
  },
  {
    icon: Globe2,
    title: "企业与作品集网站",
    description:
      "适合企业、自由职业者、代理机构、创作者以及专业个人作品集。",
  },
];

const checklist = [
  "确认技术栈是否符合项目需求。",
  "在进行重大修改之前检查项目文件和文件夹结构。",
  "查看项目依赖以及需要的软件版本。",
  "仔细阅读安装和配置说明。",
  "部署之前先在本地运行并测试项目。",
  "检查桌面、平板和移动设备上的响应式表现。",
  "正式上线之前检查涉及安全的代码。",
  "发布、销售或再次分发源码之前检查许可证和使用条款。",
  "确认源码是否允许按照你的项目需求进行定制。",
  "持续维护项目依赖和配置。",
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
      href: ARTICLE_EN_URL,
    },
    {
      hrefLang: "zh-CN",
      href: ARTICLE_URL,
    },
    {
      hrefLang: "x-default",
      href: ARTICLE_EN_URL,
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
                为下一个 Web 项目寻找网站源码
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                探索网站项目、网站模板、源码、管理后台、Landing
                Page以及其他 Web 开发资源。
              </p>
            </div>

            <a
              href={APP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-6 py-4 font-bold text-white shadow-lg shadow-red-500/20 transition hover:scale-[1.02]"
            >
              探索 WEB CODSHOP
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WebsiteSourceCodeForDevelopersZh() {
  useEffect(() => {
    const title =
      "开发者网站源码指南：如何选择和开始使用网站源码";

    const description =
      "了解什么是网站源码、开发者选择源码时应该检查什么，以及 HTML、React、Next.js、Node.js、MERN、PHP 和现成网站项目如何满足不同的 Web 开发需求。";

    const keywords = [
      "网站源码",
      "网站源码下载",
      "开发者网站源码",
      "Web开发源码",
      "HTML网站源码",
      "CSS JavaScript源码",
      "网站项目源码",
      "成品网站源码",
      "网站源码项目",
      "程序员网站源码",
      "React网站源码",
      "Next.js网站项目",
      "Node.js源码",
      "MERN Stack项目",
      "HTML源码",
    ].join(", ");

    document.title = title;
    document.documentElement.lang = "zh-CN";

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
    setMetaTag("og:locale", "zh_CN", true);

    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag(
      "twitter:image",
      "https://chtechgiant.com/assets/images/webcodshop-banner.png"
    );

    setCanonical(ARTICLE_URL);
    setAlternateLinks();

    return () => {
      document.documentElement.lang = "en";
    };
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "开发者网站源码指南：如何选择和开始使用网站源码",
    description:
      "介绍网站源码的类型、项目检查方法、安装、定制、授权以及 Web 开发流程。",
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
      "网站源码",
      "Web开发",
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "MERN Stack",
      "PHP",
    ],
    inLanguage: "zh-CN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首页",
        item: "https://chtechgiant.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "博客",
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
        name: "开发者网站源码指南",
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
            <Link to="/" className="transition hover:text-white">
              首页
            </Link>

            <span>/</span>

            <Link to="/blog" className="transition hover:text-white">
              博客
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
                Web 开发指南
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                开发者网站源码指南：
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                  如何选择和开始使用网站源码
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
                了解网站源码的组成、如何选择合适的项目结构、如何检查源码质量，以及如何开始进行项目安装、定制和开发。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={APP_URL}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-5 py-3 font-bold text-white transition hover:scale-[1.02]"
                >
                  探索 WEB CODSHOP
                  <ArrowRight size={18} />
                </a>

                <a
                  href={ARTICLE_EN_URL}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  English
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
                  alt="WEB CODSHOP 网站源码和 Web 开发资源"
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
        <p className="text-lg leading-9 text-slate-300 sm:text-xl">
          开发者在创建网站和 Web
          应用时，经常需要一个合适的起点。与其从空文件夹开始创建所有页面、组件、布局和功能，也可以根据项目需求使用现有的网站源码进行修改和扩展。
        </p>

        <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
          网站源码可以非常简单，例如 HTML、CSS 和 JavaScript
          项目，也可以是使用 React.js、Next.js、Node.js、PHP 或 MERN
          Stack 构建的完整 Web 应用。具体选择取决于你正在开发什么项目、需要多少定制以及你熟悉哪些技术。
        </p>

        <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
          本指南将介绍开发者选择网站源码时应该关注的内容，以及在进行二次开发或部署之前应该如何检查一个现有项目。
        </p>
      </section>

      {/* BASICS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <SectionTitle
            eyebrow="基础知识"
            title="什么是网站源码？"
            description="网站源码是一组用于定义网站或 Web 应用结构、界面和功能的项目文件。"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: FileCode2,
                title: "前端代码",
                text: "包括 HTML、CSS、JavaScript、组件、页面布局、图片、图标以及其他创建用户界面的资源。",
              },
              {
                icon: Terminal,
                title: "后端代码",
                text: "包括服务器端代码、API、数据库连接、身份验证逻辑以及其他应用功能。",
              },
              {
                icon: FolderCode,
                title: "项目文件",
                text: "包括配置文件、package 文件、环境配置、脚本、文档以及项目目录结构。",
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

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <SectionTitle
          eyebrow="为什么使用源码？"
          title="为什么开发者会使用现成的网站项目？"
          description="现成源码可以提供一个实际的项目结构，可用于学习、原型开发、项目定制以及后续开发。"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              icon: Rocket,
              title: "从现有结构开始",
              text: "项目可能已经包含页面、组件、样式、资源、路由或其他基础结构，开发者可以在此基础上进行修改。",
            },
            {
              icon: Search,
              title: "学习真实项目结构",
              text: "源码可以帮助开发者了解页面、组件、API、资源和配置文件在一个实际项目中的组织方式。",
            },
            {
              icon: Wrench,
              title: "定制项目",
              text: "开发者可以根据项目架构和授权条款修改设计、内容、功能、接口和其他项目部分。",
            },
            {
              icon: Smartphone,
              title: "适配不同设备",
              text: "响应式项目可以提供现成的界面结构，开发者可以继续测试和调整桌面、平板以及移动设备上的表现。",
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
            eyebrow="源码类型"
            title="开发者可能需要的网站源码类型"
            description="不同 Web 项目使用不同技术。应该根据项目需要的技术栈和功能选择合适的源码。"
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
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
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
              开始之前
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              使用网站源码之前应该检查什么？
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
              一个项目看起来不错，并不代表它一定可以直接使用。正式开始开发之前检查项目，可以帮助你了解真正需要处理的工作。
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

      {/* SOURCE VS TEMPLATE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8">
          <SectionTitle
            eyebrow="了解区别"
            title="网站源码与网站模板有什么区别？"
            description="这两个词经常一起出现，但它们可能代表不同类型的 Web 开发资源。"
          />

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a1022]">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <FileCode2 size={21} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  网站源码
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  网站源码通常指创建网站或 Web
                  应用所使用的实际项目文件。根据项目不同，可以包括前端代码、后端代码、配置、资源、API
                  以及其他应用组件。
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "项目文件",
                    "应用逻辑",
                    "组件和页面",
                    "项目配置",
                    "可能包含后端功能",
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
                  网站模板
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  网站模板通常更加关注可复用的设计和界面结构。它可能包含页面、布局、样式、组件和资源，方便开发者针对具体网站进行定制。
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "页面布局",
                    "视觉设计",
                    "可复用区块",
                    "样式和资源",
                    "响应式界面结构",
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
          eyebrow="项目评估"
          title="如何评估网站源码？"
          description="选择源码时不要只看截图，还应该考虑实际的开发需求。"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "技术栈",
              text: "检查项目使用 HTML、JavaScript、React、Next.js、Node.js、PHP 还是其他技术，并确认是否适合你的项目。",
            },
            {
              number: "02",
              title: "项目结构",
              text: "查看页面、组件、资源、服务、API 和配置文件是如何组织的。",
            },
            {
              number: "03",
              title: "项目依赖",
              text: "查看 package 文件和依赖，了解运行项目之前需要安装哪些软件和依赖。",
            },
            {
              number: "04",
              title: "文档",
              text: "清晰的安装和使用说明可以帮助开发者更容易地安装、配置、定制和排查问题。",
            },
            {
              number: "05",
              title: "响应式设计",
              text: "在不同屏幕尺寸下测试网站，而不是只依赖桌面端预览图。",
            },
            {
              number: "06",
              title: "许可证和使用方式",
              text: "在修改、发布、销售或再次分发源码之前，务必查看适用的许可证和使用条款。",
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

              <p className="mt-3 leading-7 text-slate-400">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <SectionTitle
            eyebrow="开发流程"
            title="使用网站源码的简单流程"
            description="选择合适项目后，建议按照步骤逐渐熟悉和修改源码，而不是一次性修改所有内容。"
          />

          <div className="grid gap-5 md:grid-cols-5">
            {[
              ["1", "选择", "根据技术栈和项目目标选择合适的源码。"],
              ["2", "检查", "检查文件、依赖、文档和项目配置。"],
              ["3", "安装", "安装需要的软件并在本地运行项目。"],
              ["4", "定制", "修改设计、内容、功能和第三方接口。"],
              ["5", "测试", "上线之前充分测试项目。"],
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

      {/* APP */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a1022]">
            <img
              src="/assets/images/webcodshop-logo.png"
              alt="WEB CODSHOP 标志"
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
              探索网站源码和 Web 开发项目
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
              WEB CODSHOP 是一个面向开发者、自由职业者、创业者、代理机构以及企业用户的网站源码、Web
              模板、项目、UI 资源和开发资源平台。
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "HTML 网站模板",
                "CSS 和 JavaScript 项目",
                "React.js 项目",
                "Next.js 项目",
                "Node.js 应用",
                "MERN Stack 项目",
                "PHP 脚本",
                "管理后台",
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
                Google Play
                <ExternalLink size={17} />
              </a>

              <a
                href={APP_URL}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                查看应用页面
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <WebCodshopCta />

      {/* RELATED */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <SectionTitle
          eyebrow="继续阅读"
          title="更多 WEB CODSHOP 指南"
          description="继续了解网站源码和 Web 开发资源。"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href={ARTICLE_ONE_URL}
            className="group rounded-2xl border border-white/10 bg-[#0a1022] p-7 transition hover:-translate-y-1 hover:border-red-500/30"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-red-400">
                WEB CODSHOP 指南
              </span>

              <ArrowRight
                size={19}
                className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-white"
              />
            </div>

            <h3 className="text-xl font-bold text-white">
              哪里可以找到下一个项目的网站源码？
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              了解寻找网站源码时可以采用的不同方式和资源。
            </p>
          </a>

          <a
            href={ARTICLE_TWO_URL}
            className="group rounded-2xl border border-white/10 bg-[#0a1022] p-7 transition hover:-translate-y-1 hover:border-orange-500/30"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-orange-400">
                WEB CODSHOP 指南
              </span>

              <ArrowRight
                size={19}
                className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-white"
              />
            </div>

            <h3 className="text-xl font-bold text-white">
              开发者和企业值得了解的最佳 HTML 网站模板
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              了解如何根据开发和企业项目需求选择 HTML 网站模板。
            </p>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8">
          <SectionTitle
            eyebrow="常见问题"
            title="关于网站源码的常见问题"
            description="开发者在选择和使用网站源码时经常遇到的问题。"
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
              网站源码、模板和 Web 开发资源。
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-400">
            <a href={APP_URL} className="transition hover:text-white">
              应用页面
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
              隐私政策
            </a>

            <a
              href={ARTICLE_EN_URL}
              className="transition hover:text-white"
            >
              English
            </a>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-slate-600">
          <ArrowLeft size={15} />

          <Link
            to="/blog"
            className="transition hover:text-slate-300"
          >
            返回博客
          </Link>
        </div>
      </footer>
    </main>
  );
}