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

const ARTICLE_ONE_ZH_URL =
  "https://chtechgiant.com/blog/web-codshop/zh/where-to-find-website-source-code/";
const ARTICLE_TWO_ZH_URL =
  "https://chtechgiant.com/blog/web-codshop/zh/best-html-website-templates/";
const ARTICLE_THREE_ZH_URL =
  "https://chtechgiant.com/blog/web-codshop/zh/website-source-code-for-developers/";

const faqItems = [
  {
    question: "什么是 React 网站项目？",
    answer:
      "React 网站项目是使用 React 构建的网站或 Web 应用程序源代码。项目通常包含组件、页面、资源、配置文件以及其他用于开发和运行网站的源文件。",
  },
  {
    question: "为什么开发者会使用现成的 React 项目？",
    answer:
      "现成的 React 项目可以作为开发起点，让开发者在已有页面结构、组件和项目组织的基础上进行修改，而不必从完全空白的项目开始。",
  },
  {
    question: "React 网站源码和 React 网站模板有什么区别？",
    answer:
      "React 网站模板通常更侧重于界面、页面布局和可复用组件，而完整的 React 网站项目可能包含更广泛的项目结构、多个页面、组件和配置文件。实际内容取决于具体项目。",
  },
  {
    question: "选择 React 项目时应该检查什么？",
    answer:
      "可以检查 React 项目结构、组件组织、项目配置、响应式布局、可定制程度以及源码信息是否清晰。不要只根据截图或视觉效果选择项目。",
  },
  {
    question: "React 项目适合初学者学习吗？",
    answer:
      "React 项目可以作为学习项目结构和组件组织方式的参考。初学者可以先了解项目文件和组件之间的关系，再逐步修改和扩展项目。",
  },
  {
    question: "在哪里可以找到 React 网站项目源码？",
    answer:
      "开发者可以从网站源码平台、项目市场以及其他提供 Web 开发资源的平台寻找 React 项目。选择时应先了解项目包含的源码、结构和使用条件。",
  },
];

const projectTypes = [
  {
    icon: Globe2,
    title: "企业与商业网站",
    text:
      "适合需要现代化企业网站、服务展示页面或商业品牌网站的开发项目。",
  },
  {
    icon: Smartphone,
    title: "响应式网站项目",
    text:
      "重点关注桌面、平板和移动设备上的页面布局以及用户体验。",
  },
  {
    icon: Layers3,
    title: "React UI 项目",
    text:
      "包含页面、组件、导航、卡片、表单以及其他可复用用户界面元素。",
  },
  {
    icon: Rocket,
    title: "Landing Page 项目",
    text:
      "适合产品介绍、服务推广、营销页面以及其他以转化为目标的网页项目。",
  },
  {
    icon: FolderCode,
    title: "Dashboard 项目",
    text:
      "可以作为管理后台、数据展示界面或内部业务工具的前端开发起点。",
  },
  {
    icon: Code2,
    title: "Web 应用项目",
    text:
      "适合希望研究 React 应用结构、组件关系和更复杂 Web 项目组织方式的开发者。",
  },
];

const checklist = [
  "检查 React 项目的文件和文件夹结构",
  "了解 package 配置以及项目运行要求",
  "检查页面、组件和资源的组织方式",
  "确认网站在不同屏幕尺寸下的响应式表现",
  "评估颜色、布局、内容和组件的可定制程度",
  "在开始开发前了解源码项目包含的内容",
];

const setMetaTag = (attribute, value, content) => {
  if (!content) return;

  let element = document.head.querySelector(
    `meta[${attribute}="${value}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const setCanonical = (url) => {
  let link = document.head.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
};

const setAlternateLinks = () => {
  const existingLinks = document.head.querySelectorAll(
    'link[data-blog-hreflang="true"]'
  );

  existingLinks.forEach((link) => link.remove());

  const links = [
    {
      lang: "en",
      href: ARTICLE_URL,
    },
    {
      lang: "zh-CN",
      href: ARTICLE_ZH_URL,
    },
    {
      lang: "x-default",
      href: ARTICLE_URL,
    },
  ];

  links.forEach(({ lang, href }) => {
    const link = document.createElement("link");

    link.rel = "alternate";
    link.hreflang = lang;
    link.href = href;
    link.dataset.blogHreflang = "true";

    document.head.appendChild(link);
  });
};

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data),
    }}
  />
);

const SectionTitle = ({ eyebrow, title, description }) => (
  <div className="mx-auto max-w-3xl text-center">
    <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-400">
      {eyebrow}
    </p>

    <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
      {title}
    </h2>

    <p className="mt-5 text-base leading-7 text-slate-400">
      {description}
    </p>
  </div>
);

const WebCodshopCta = () => (
  <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
    <div className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-500/10 via-orange-500/5 to-transparent p-8 sm:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-400">
            WEB CODSHOP
          </p>

          <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
            查找 React 项目源码，开始你的下一个 Web 开发项目
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            浏览 WEB CODSHOP 中的 Web 开发资源，为网站、Web
            应用、管理后台、Landing Page 以及其他开发项目寻找合适的源码起点。
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5"
          >
            浏览 WEB CODSHOP
            <ExternalLink size={17} />
          </a>

          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            下载 Android App
            <Download size={17} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const ReactWebsiteProjectsZh = () => {
  useEffect(() => {
    const title =
      "开发者 React 网站项目指南：如何选择 React 项目源码";
    const description =
      "了解 React 网站项目、React 项目源码和 React 网站模板。学习开发者如何选择、检查和使用 React Web 项目源码。";
    const keywords =
      "React网站项目, React项目源码, React网站源码, React源码, React网站模板, React开发项目, React JS项目, React成品项目, React Web项目, React源码下载";

    document.title = title;

    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    setMetaTag("name", "robots", "index, follow");

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "article");
    setMetaTag("property", "og:url", ARTICLE_ZH_URL);
    setMetaTag(
      "property",
      "og:image",
      "https://chtechgiant.com/assets/images/webcodshop-banner.png"
    );
    setMetaTag("property", "og:site_name", "CH TECH GIANT");

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag(
      "name",
      "twitter:image",
      "https://chtechgiant.com/assets/images/webcodshop-banner.png"
    );

    setCanonical(ARTICLE_ZH_URL);
    setAlternateLinks();

    window.scrollTo(0, 0);

    return () => {
      const alternateLinks = document.head.querySelectorAll(
        'link[data-blog-hreflang="true"]'
      );

      alternateLinks.forEach((link) => link.remove());
    };
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "开发者 React 网站项目指南：如何选择 React 项目源码",
    description:
      "了解 React 网站项目、React 项目源码和 React 网站模板，并学习如何选择适合开发需求的 React 项目。",
    image: [
      "https://chtechgiant.com/assets/images/webcodshop-banner.png",
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": ARTICLE_ZH_URL,
    },
    author: {
      "@type": "Organization",
      name: "CH TECH GIANT",
    },
    publisher: {
      "@type": "Organization",
      name: "CH TECH GIANT",
      logo: {
        "@type": "ImageObject",
        url: "https://chtechgiant.com/assets/images/webcodshop-logo.png",
      },
    },
    inLanguage: "zh-CN",
    articleSection: "Web Development",
    keywords,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "CH TECH GIANT",
        item: "https://chtechgiant.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "博客",
        item: "https://chtechgiant.com/blog/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "WEB CODSHOP",
        item: "https://chtechgiant.com/blog/web-codshop/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "React 网站项目",
        item: ARTICLE_ZH_URL,
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
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <Link
              to="/blog/"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              返回博客
            </Link>

            <span>/</span>

            <Link
              to="/blog/web-codshop/"
              className="transition hover:text-white"
            >
              WEB CODSHOP
            </Link>

            <span>/</span>

            <span className="text-slate-400">React 网站项目</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                  React Web Development
                </span>

                <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  开发者 React 网站项目指南：
                  <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-red-300 bg-clip-text text-transparent">
                    如何选择 React 项目源码
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  如果你正在寻找 React 网站项目、React 项目源码或 React
                  网站模板，这篇指南可以帮助你了解项目结构、选择标准以及从现成源码开始开发时需要注意的事项。
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "React 网站项目",
                    "React 项目源码",
                    "React 网站源码",
                    "React Web 项目",
                    "React JS 项目",
                  ].map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-full bg-red-500/10 blur-3xl" />

              <img
                src="/assets/images/webcodshop-banner.png"
                alt="WEB CODSHOP React 网站项目和源码"
                className="relative w-full rounded-3xl border border-white/10 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="prose prose-invert max-w-none">
          <p className="text-lg leading-8 text-slate-300">
            React
            已经成为现代 Web 开发中常见的前端技术之一。对于开发者、自由职业者、初创公司和开发团队来说，一个结构清晰的
            React 网站项目可以成为新项目的开发起点。
          </p>

          <p className="mt-6 text-base leading-8 text-slate-400">
            与从空白文件开始创建整个网站相比，使用现成的 React
            项目源码可以让开发者先研究已有的页面、组件和项目结构，然后根据自己的需求进行修改。
          </p>

          <p className="mt-6 text-base leading-8 text-slate-400">
            不过，并不是所有 React
            项目都适合每一种开发需求。在选择 React 网站源码、React
            项目模板或成品项目时，了解项目结构和实际包含的内容非常重要。
          </p>
        </div>
      </section>

      {/* WHAT IS REACT PROJECT */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionTitle
            eyebrow="React Basics"
            title="什么是 React 网站项目？"
            description="React 网站项目通常由页面、组件、资源和配置文件组成，可以作为网站或 Web 应用开发的基础。"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-[#050816] p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
                <Code2 size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                React 网站源码
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                React 网站源码通常包含用于构建网站界面的源文件。根据具体项目不同，可能包含页面、组件、样式、图片、配置以及其他开发文件。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-3xl border border-white/10 bg-[#050816] p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                <FolderCode size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                React 项目源码
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                React 项目源码不仅可以用于最终网站，也可以作为开发学习和项目参考。通过研究文件夹、组件和页面之间的关系，开发者可以更好地理解实际项目的组织方式。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY USE EXISTING */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionTitle
          eyebrow="Why React Projects"
          title="为什么开发者会使用现成的 React 项目？"
          description="现成项目可以减少从零开始搭建基础结构所需要的工作，让开发者更快进入定制和功能开发阶段。"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Rocket,
              title: "更快开始",
              text:
                "已有的页面和组件结构可以作为开发起点，减少从空白项目搭建基础界面的工作。",
            },
            {
              icon: Layers3,
              title: "研究项目结构",
              text:
                "开发者可以通过真实项目了解组件、页面、资源和配置文件之间的组织关系。",
            },
            {
              icon: Wrench,
              title: "方便定制",
              text:
                "根据项目结构，可以进一步修改内容、布局、样式和组件，使其适应自己的开发需求。",
            },
            {
              icon: Search,
              title: "寻找开发参考",
              text:
                "React 项目源码也可以作为学习和研究 Web 项目开发方式的参考材料。",
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
                  delay: index * 0.05,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
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
      </section>

      {/* PROJECT TYPES */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Project Types"
            title="常见的 React 网站项目类型"
            description="React 可以用于不同类型的网站和 Web 项目。选择项目时，应根据最终开发目标检查其结构和内容。"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
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

      {/* CHECKLIST */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8">
        <SectionTitle
          eyebrow="Selection Checklist"
          title="选择 React 项目源码时的检查清单"
          description="在下载或使用 React 网站源码之前，可以先从这些基础方面了解项目是否符合你的开发需求。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {checklist.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45 }}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <CheckCircle2
                size={21}
                className="mt-0.5 shrink-0 text-red-400"
              />

              <span className="text-sm leading-6 text-slate-300">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOURCE CODE VS TEMPLATE */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionTitle
          eyebrow="React Projects"
          title="React 网站源码和 React 网站模板有什么区别？"
          description="React 网站模板和完整 React 网站项目都可以帮助开发者加快开发，但它们适合作为不同类型的开发起点。"
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
              React 网站模板
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              React 网站模板通常更关注网站前端界面、页面布局、可复用组件和视觉结构。如果你已经确定了项目功能，只需要一个能够快速定制的前端起点，模板可能会比较方便。
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "预先准备的 React UI 结构",
                "可复用的组件",
                "响应式页面布局",
                "更快进行前端定制",
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
              完整 React 网站项目
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              完整 React 网站项目可以提供更广泛的开发起点。根据具体项目不同，它可能包含多个页面、组件、应用逻辑、配置文件、资源以及其他源代码文件。
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "更完整的项目结构",
                "多个源文件和组件",
                "适合作为实际开发起点",
                "可以帮助理解项目组织方式",
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
            title="如何评估一个 React 网站项目？"
            description="使用现成 React 项目前，应先检查项目结构和开发要求，而不是只根据截图或页面视觉效果进行选择。"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "React 项目结构",
                text:
                  "检查页面、组件、可复用元素以及应用文件是如何组织的。清晰的结构可以让后续定制更加方便。",
              },
              {
                icon: Terminal,
                title: "项目配置",
                text:
                  "了解项目配置和运行环境要求，在开始修改源码之前确认需要使用的开发工具和项目设置。",
              },
              {
                icon: Layers3,
                title: "组件组织",
                text:
                  "检查项目是否合理地组织可复用组件和页面元素。良好的组件结构可以减少重复开发工作。",
              },
              {
                icon: Smartphone,
                title: "响应式布局",
                text:
                  "检查网站是否能够适应不同屏幕尺寸。对于需要同时面向移动端和桌面端用户的网站尤其重要。",
              },
              {
                icon: Wrench,
                title: "定制能力",
                text:
                  "考虑颜色、字体、布局、内容、组件以及页面结构是否方便根据自己的项目需求进行修改。",
              },
              {
                icon: ShieldCheck,
                title: "源码信息",
                text:
                  "选择源码平台或项目提供方时，应先了解项目具体包含哪些源码和资源，避免仅根据展示图片判断项目内容。",
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

      {/* WORKFLOW */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionTitle
          eyebrow="Development Workflow"
          title="使用 React 项目源码的实际开发流程"
          description="选择 React 网站项目后，可以按照结构化流程从源码检查逐步进入定制、测试和部署阶段。"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {[
            {
              number: "01",
              title: "检查",
              text:
                "先查看项目结构、组件、页面、资源和配置文件，再开始修改源码。",
            },
            {
              number: "02",
              title: "运行",
              text:
                "按照项目要求完成本地开发环境设置，并确认现有项目可以正常运行。",
            },
            {
              number: "03",
              title: "定制",
              text:
                "根据项目需求修改内容、页面布局、样式、组件和其他网站元素。",
            },
            {
              number: "04",
              title: "测试",
              text:
                "检查页面导航、响应式布局、交互效果以及项目中的重要使用流程。",
            },
            {
              number: "05",
              title: "部署",
              text:
                "完成定制和测试后，根据所选择的托管和部署环境准备 React 项目。",
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
                      查找 React 项目和 Web 开发源码
                    </h2>
                  </div>
                </div>

                <p className="mt-6 max-w-2xl leading-7 text-slate-300">
                  WEB CODSHOP 是一个面向开发者、自由职业者、初创公司、开发机构和企业用户的网站源码与 Web 开发资源平台。
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                  平台涵盖不同的 Web 开发类别，包括 React.js
                  项目、Next.js 项目、Node.js 应用、MERN Stack
                  项目、HTML 模板、Landing Page、Admin Dashboard、Portfolio
                  Website、Business Website 以及其他 Web 开发资源。
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    "React.js 项目",
                    "Next.js 项目",
                    "Node.js 应用",
                    "MERN Stack 项目",
                    "Admin Dashboard",
                    "Landing Page",
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
                    浏览 WEB CODSHOP
                    <ExternalLink size={17} />
                  </a>

                  <a
                    href={GOOGLE_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    下载 Android App
                    <Download size={17} />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-red-500/10 blur-3xl" />

                <img
                  src="/assets/images/webcodshop-banner.png"
                  alt="WEB CODSHOP React 网站源码平台"
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
          eyebrow="继续阅读"
          title="更多 WEB CODSHOP 指南"
          description="继续阅读网站源码、HTML 模板和 Web 开发项目相关内容。"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <Link
            to={ARTICLE_ONE_ZH_URL}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/30"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">
                指南 01
              </span>

              <ArrowRight
                size={18}
                className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-red-400"
              />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              哪里可以找到网站源码？完整网站项目源码指南
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              了解寻找网站源码和网站开发项目时需要考虑的主要因素。
            </p>
          </Link>

          <Link
            to={ARTICLE_TWO_ZH_URL}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/30"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
                指南 02
              </span>

              <ArrowRight
                size={18}
                className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-orange-400"
              />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              开发者和企业值得了解的最佳 HTML 网站模板
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              了解选择 HTML 网站模板时值得检查的主要内容。
            </p>
          </Link>

          <Link
            to={ARTICLE_THREE_ZH_URL}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/30"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">
                指南 03
              </span>

              <ArrowRight
                size={18}
                className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-red-400"
              />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              开发者网站源码指南：如何选择和开始使用网站源码
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              了解开发者如何评估网站源码，并根据不同开发需求选择项目。
            </p>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8">
          <SectionTitle
            eyebrow="FAQ"
            title="React 网站项目常见问题"
            description="关于 React 网站项目、React 源码以及现成 Web 开发项目的常见问题。"
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
                CH TECH GIANT 提供 Web 开发资源、应用程序和数字产品。
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
                隐私政策
              </a>

              <Link
                to={ARTICLE_URL}
                className="text-slate-400 transition hover:text-white"
              >
                English
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
};

export default ReactWebsiteProjectsZh;