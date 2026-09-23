import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Globe,
  Layers3,
  Monitor,
  Search,
  Smartphone,
} from "lucide-react";

const SITE_URL = "https://chtechgiant.com";

const ARTICLE_URL =
  `${SITE_URL}/blog/web-codshop/zh/where-to-find-website-source-code/`;

const ENGLISH_ARTICLE_URL =
  `${SITE_URL}/blog/web-codshop/where-to-find-website-source-code/`;

const APP_URL = `${SITE_URL}/apps/web-codshop`;

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.chtechgiant.webcodshop";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const technologies = [
  {
    icon: Code2,
    title: "HTML、CSS 和 JavaScript",
    text: "适合传统网站、Landing Page、个人作品集以及前端开发项目。",
  },
  {
    icon: Layers3,
    title: "React.js",
    text: "适合现代组件化网站以及交互式 Web 应用程序。",
  },
  {
    icon: Monitor,
    title: "Next.js",
    text: "适合现代 React 网站以及全栈 Web 应用开发。",
  },
  {
    icon: Globe,
    title: "Node.js",
    text: "适合需要 JavaScript 后端功能的 Web 应用程序。",
  },
  {
    icon: Layers3,
    title: "MERN Stack",
    text: "结合 MongoDB、Express、React 和 Node.js 的全栈 Web 项目。",
  },
  {
    icon: Code2,
    title: "PHP",
    text: "适合服务器端网站、PHP 脚本以及 Web 应用程序。",
  },
];

const faqs = [
  {
    question: "什么是网站源码？",
    answer:
      "网站源码是构成网站或 Web 应用程序的代码和项目文件。根据项目类型，源码可能包含 HTML、CSS、JavaScript、图片、前端框架、后端代码、配置文件以及数据库相关代码。",
  },
  {
    question: "在哪里可以找到网站源码？",
    answer:
      "网站源码可以通过开源项目、代码仓库、网站模板平台、项目资源平台以及专门的网站开发资源市场找到，例如 WEB CODSHOP。",
  },
  {
    question: "WEB CODSHOP 支持哪些网站开发技术？",
    answer:
      "WEB CODSHOP 包含 HTML、CSS、JavaScript、React.js、Next.js、Node.js、MERN Stack、PHP、后台管理 Dashboard、Landing Page、Portfolio、电子商务网站以及企业网站等项目资源。",
  },
  {
    question: "使用现成的网站源码可以节省开发时间吗？",
    answer:
      "合适的网站源码可以作为项目开发的起点。开发者可以在现有项目结构的基础上进行学习、修改和开发，而不必从完全空白的项目开始。",
  },
  {
    question: "哪些人可以使用网站源码？",
    answer:
      "开发者、自由职业者、学生、创业公司、网站开发机构以及企业主，都可以根据自己的项目需求使用合适的网站源码和网站模板资源。",
  },
];

function ArticleMeta() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-400">
      <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
        网站开发
      </span>

      <span>•</span>

      <span>WEB CODSHOP</span>

      <span>•</span>

      <span>更新于 2026年9月23日</span>
    </div>
  );
}

function ArticleSection({ title, children }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className="mt-14"
    >
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>

      <div className="mt-5 space-y-5 text-base leading-8 text-slate-300">
        {children}
      </div>
    </motion.section>
  );
}

export default function WhereToFindWebsiteSourceCodeZh() {
  useEffect(() => {
    document.title =
      "哪里可以找到网站源码？完整网站项目源码指南 | WEB CODSHOP";

    const description =
      "正在寻找网站源码？了解 HTML、React、Next.js、Node.js、MERN、PHP 以及现成网站项目源码，并了解如何选择适合自己项目的网站源码。";

    const setMeta = (name, content) => {
      let element = document.head.querySelector(
        `meta[name="${name}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setProperty = (property, content) => {
      let element = document.head.querySelector(
        `meta[property="${property}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setLink = (rel, href, hreflang = null) => {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`;

      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);

        if (hreflang) {
          element.setAttribute("hreflang", hreflang);
        }

        document.head.appendChild(element);
      }

      element.setAttribute("href", href);
    };

    setMeta("description", description);

    setMeta(
      "keywords",
      "网站源码, 网站项目源码, 网站源码下载, 网站模板源码, 网站开发源码, HTML源码, React项目源码, Next.js源码, MERN项目, Node.js项目, PHP源码"
    );

    setMeta("robots", "index, follow");
    setMeta("author", "CH TECH GIANT");

    setProperty(
      "og:title",
      "哪里可以找到网站源码？完整网站项目源码指南 | WEB CODSHOP"
    );
    setProperty("og:description", description);
    setProperty("og:type", "article");
    setProperty("og:url", ARTICLE_URL);
    setProperty("og:site_name", "CH TECH GIANT");

    setProperty("twitter:card", "summary_large_image");
    setProperty(
      "twitter:title",
      "哪里可以找到网站源码？完整网站项目源码指南"
    );
    setProperty("twitter:description", description);

    setLink("canonical", ARTICLE_URL);
    setLink("alternate", ENGLISH_ARTICLE_URL, "en");

    let schemaScript = document.head.querySelector(
      'script[data-seo="webcodshop-source-code-article-zh"]'
    );

    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.dataset.seo =
        "webcodshop-source-code-article-zh";
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "哪里可以找到网站源码？完整网站项目源码指南",
      description,
      url: ARTICLE_URL,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": ARTICLE_URL,
      },
      author: {
        "@type": "Organization",
        name: "CH TECH GIANT",
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "CH TECH GIANT",
        url: SITE_URL,
      },
      inLanguage: "zh-CN",
      articleSection: "网站开发",
      about: [
        "网站源码",
        "网站项目源码",
        "网站模板",
        "网站开发资源",
      ],
    });

    return () => {
      const oldSchema = document.head.querySelector(
        'script[data-seo="webcodshop-source-code-article-zh"]'
      );

      if (oldSchema) {
        oldSchema.remove();
      }
    };
  }, []);

  return (
    <main
      lang="zh-CN"
      className="min-h-screen overflow-hidden bg-[#050816] text-white"
    >
      {/* HERO */}
      <section className="relative isolate px-6 pb-20 pt-28 sm:px-10 lg:px-16 lg:pb-28 lg:pt-36">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-red-500/10 blur-[120px]" />
          <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[140px]" />
          <div className="absolute bottom-[-15%] left-[35%] h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[130px]" />
        </div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              <BookOpen size={16} />
              WEB CODSHOP 博客
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              哪里可以找到
              <span className="block bg-gradient-to-r from-red-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                网站源码？
              </span>
              完整网站项目源码指南
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              如果你正在寻找网站源码、网站模板或完整的网站项目，
              本指南将介绍不同类型的网站源码资源，以及如何根据项目
              技术和实际需求选择合适的源码。
            </p>

            <ArticleMeta />
          </motion.div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="px-6 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <ArticleSection title="什么是网站源码？">
            <p>
              网站源码是构成网站或 Web 应用程序的代码和项目文件。
              一个简单的网站可能主要包含 HTML、CSS 和 JavaScript，
              而更复杂的 Web 应用可能还会包含 React、Next.js、
              Node.js、PHP、数据库以及各种配置文件。
            </p>

            <p>
              当用户搜索
              <strong> 网站源码 </strong>
              时，他们可能正在寻找完整的网站项目、网站模板、
              前端项目、后台系统或者完整的全栈 Web 应用。
            </p>

            <p>
              因此，选择源码时应该根据项目所使用的技术、
              功能需求以及后续需要进行的定制程度来决定。
            </p>
          </ArticleSection>

          <ArticleSection title="为什么开发者会使用现成的网站源码？">
            <p>
              从完全空白的项目开始开发网站，需要进行项目结构设计、
              页面开发、功能开发以及其他大量工作。
              合适的现成网站源码可以为开发提供一个基础起点。
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "从已有的网站项目结构开始开发。",
                "学习其他项目如何实现特定功能。",
                "根据需求修改页面和功能。",
                "使用网站模板快速建立项目基础。",
                "探索不同 Web 技术开发的网站项目。",
                "为自由职业和企业网站项目寻找开发资源。",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-red-400"
                    />

                    <p className="text-sm leading-7 text-slate-300">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ArticleSection>

          <ArticleSection title="在哪里可以找到网站源码？">
            <p>
              寻找网站源码的方法有很多。具体选择哪一种方式，
              取决于你需要的是开源项目、网站模板、完整 Web 应用，
              还是某一种特定技术的网站项目。
            </p>

            <h3 className="pt-3 text-xl font-bold text-white">
              1. 开源项目
            </h3>

            <p>
              开源代码仓库适合开发者学习现有项目、研究代码结构
              或参与开源项目。在将开源代码用于自己的项目之前，
              应该仔细查看项目所使用的许可证以及对应的使用条件。
            </p>

            <h3 className="pt-3 text-xl font-bold text-white">
              2. 网站模板平台
            </h3>

            <p>
              网站模板平台通常提供现成的网站设计和项目资源。
              如果你正在寻找企业网站、Landing Page、作品集、
              博客或电子商务网站的设计基础，这类资源可能比较实用。
            </p>

            <h3 className="pt-3 text-xl font-bold text-white">
              3. 专业网站开发资源市场
            </h3>

            <p>
              专门的网站开发资源市场可以让用户按照技术和项目类型
              寻找网站源码。WEB CODSHOP 就是一个专注于网站源码、
              网站模板以及专业 Web 开发资源的移动应用。
            </p>

            <div className="rounded-3xl border border-red-500/15 bg-gradient-to-br from-red-500/10 to-transparent p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <Search size={23} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    正在寻找网站源码？
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    WEB CODSHOP 将网站项目、源码、网站模板和 Web
                    开发资源集中到一个移动应用中，方便用户探索不同类型的网站开发资源。
                  </p>

                  <a
                    href={APP_URL}
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-red-400 transition hover:text-red-300"
                  >
                    了解 WEB CODSHOP
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </ArticleSection>

          <ArticleSection title="可以找到哪些类型的网站源码？">
            <p>
              不同的网站项目需要不同的开发技术。
              在选择源码之前，最好先确定项目所需要的技术和架构。
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-red-400/20"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-white">
                      {technology.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {technology.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </ArticleSection>

          <ArticleSection title="使用网站源码之前应该检查什么？">
            <p>
              找到网站源码只是第一步。在使用项目之前，
              应该确认源码的技术、项目结构、文档和使用条件是否符合自己的需求。
            </p>

            <ol className="space-y-4">
              {[
                [
                  "开发技术",
                  "确认项目使用的编程语言或框架是否符合你的项目要求。",
                ],
                [
                  "项目结构",
                  "查看前端、后端、资源文件、配置文件以及其他重要项目文件。",
                ],
                [
                  "项目文档",
                  "确认项目是否提供安装、配置和运行方面的说明。",
                ],
                [
                  "许可证",
                  "在商业使用、修改或发布项目之前，了解相关许可证和使用条件。",
                ],
                [
                  "可定制程度",
                  "确认源码是否能够根据你的设计和功能需求进行修改。",
                ],
              ].map(([title, text], index) => (
                <li
                  key={title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-sm font-bold text-red-400">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="font-bold text-white">{title}</h3>

                    <p className="mt-1 text-sm leading-7 text-slate-400">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </ArticleSection>

          <ArticleSection title="适用于不同网站项目的网站源码">
            <p>
              网站源码可以应用于很多不同类型的项目，例如个人作品集、
              企业网站、Landing Page、电子商务网站、后台管理系统
              以及完整的 Web 应用程序。
            </p>

            <p>
              学生可以通过合适的项目学习 Web 开发技术和项目结构。
              自由职业者和网站开发机构也可以寻找合适的项目资源，
              作为客户网站开发工作的起点。
            </p>

            <p>
              选择源码时，不应该只根据网站外观进行判断。
              更重要的是确认技术、功能以及项目结构是否符合实际需求。
            </p>
          </ArticleSection>

          <ArticleSection title="WEB CODSHOP 如何帮助寻找网站源码？">
            <p>
              WEB CODSHOP 是一个专注于网站源码、网站模板以及专业
              Web 开发资源的移动应用。
            </p>

            <p>
              应用包含 HTML 网站模板、CSS 和 JavaScript 项目、
              React.js 项目、Next.js 项目、Node.js 应用、
              MERN Stack 项目、PHP 脚本、后台管理 Dashboard、
              Landing Page、Portfolio、电子商务网站以及企业网站资源。
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "网站源码",
                "HTML 网站模板",
                "React.js 项目",
                "Next.js 项目",
                "Node.js 应用",
                "MERN Stack 项目",
                "PHP 脚本",
                "后台管理 Dashboard",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-4"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-red-400"
                  />

                  <span className="text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <a
                href={APP_URL}
                className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-1 hover:bg-red-400"
              >
                探索 WEB CODSHOP
                <ArrowRight size={18} />
              </a>
            </div>
          </ArticleSection>

          <ArticleSection title="哪些人适合使用网站源码？">
            <p>
              网站源码可以适用于不同类型的用户，
              具体取决于项目需求以及用户的开发经验。
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Web 开发者",
                "自由职业者",
                "学生",
                "创业公司",
                "网站开发机构",
                "企业主",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <h3 className="font-bold text-white">{item}</h3>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    根据自己的项目需求寻找合适的网站项目、
                    网站模板以及 Web 开发资源。
                  </p>
                </div>
              ))}
            </div>
          </ArticleSection>

          <ArticleSection title="如何开始？">
            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "确定项目",
                  text: "首先确定你想开发的网站或 Web 应用程序类型。",
                },
                {
                  number: "02",
                  title: "选择开发技术",
                  text: "确定项目需要 HTML、React、Next.js、Node.js、MERN、PHP 或其他技术。",
                },
                {
                  number: "03",
                  title: "寻找源码",
                  text: "搜索符合项目需求的网站项目和模板。",
                },
                {
                  number: "04",
                  title: "检查项目",
                  text: "查看项目结构、技术、文档以及相关使用条件。",
                },
                {
                  number: "05",
                  title: "开始开发和定制",
                  text: "将合适的项目作为开发起点，并根据自己的需求进行修改。",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <span className="text-sm font-black text-red-400">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm leading-7 text-slate-400">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ArticleSection>

          {/* FAQ */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold sm:text-3xl">
              常见问题
            </h2>

            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6"
                >
                  <summary className="cursor-pointer list-none font-semibold text-white">
                    <div className="flex items-center justify-between gap-4">
                      <span>{faq.question}</span>

                      <span className="text-xl text-slate-500 transition group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </motion.section>

          {/* LANGUAGE */}
          <section className="mt-16">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-400">
                    Language
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-white">
                    Read this article in English
                  </h2>
                </div>

                <a
                  href={ENGLISH_ARTICLE_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 font-semibold text-white transition hover:bg-white/[0.1]"
                >
                  English
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </section>

          {/* DOWNLOAD */}
          <section className="mt-16">
            <div className="relative overflow-hidden rounded-[2rem] border border-red-500/15 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/5 p-8 sm:p-12">
              <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-red-500/10 blur-[100px]" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
                  <Smartphone size={26} />
                </div>

                <h2 className="mt-6 text-3xl font-bold">
                  使用 WEB CODSHOP 探索网站源码
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
                  通过 WEB CODSHOP 移动应用探索网站模板、
                  网站源码以及各种 Web 开发资源。
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={APP_URL}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 font-semibold text-white transition hover:bg-white/[0.1]"
                  >
                    查看 WEB CODSHOP
                    <ExternalLink size={17} />
                  </a>

                  <a
                    href={GOOGLE_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-400"
                  >
                    <Download size={18} />
                    Google Play 下载
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* RELATED */}
          <section className="mt-16 border-t border-white/10 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-400">
              WEB CODSHOP
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`${SITE_URL}/blog/web-codshop/zh/best-html-website-templates/`}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:border-red-400/30 hover:text-white"
              >
                HTML 网站模板
              </a>

              <a
                href={`${SITE_URL}/blog/web-codshop/zh/react-website-projects/`}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:border-red-400/30 hover:text-white"
              >
                React 网站项目
              </a>

              <a
                href={`${SITE_URL}/blog/web-codshop/zh/nextjs-website-projects/`}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:border-red-400/30 hover:text-white"
              >
                Next.js 网站项目
              </a>

              <a
                href={APP_URL}
                className="rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/15"
              >
                WEB CODSHOP 应用
              </a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}