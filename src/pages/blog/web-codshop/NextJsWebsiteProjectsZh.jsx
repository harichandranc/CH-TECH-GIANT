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
  "https://chtechgiant.com/blog/web-codshop/nextjs-website-projects/";
const ARTICLE_ZH_URL =
  "https://chtechgiant.com/blog/web-codshop/zh/nextjs-website-projects/";

const ARTICLE_ONE_ZH_URL =
  "https://chtechgiant.com/blog/web-codshop/zh/where-to-find-website-source-code/";
const ARTICLE_THREE_ZH_URL =
  "https://chtechgiant.com/blog/web-codshop/zh/website-source-code-for-developers/";
const ARTICLE_FOUR_ZH_URL =
  "https://chtechgiant.com/blog/web-codshop/zh/react-website-projects/";

const FAQS = [
  {
    question: "什么是 Next.js 网站项目？",
    answer:
      "Next.js 网站项目是使用 Next.js 以及相关 JavaScript 技术构建的网站或 Web 项目。根据项目的不同，它可能包含页面、组件、样式、路由、配置、数据处理、资源文件以及其他项目代码。",
  },
  {
    question: "为什么开发者会使用现成的 Next.js 项目？",
    answer:
      "现成的 Next.js 项目可以作为学习、原型开发、网站定制或实际开发的起点。开发者不需要每次都从空文件夹开始，而是可以研究现有项目结构，并根据自己的需求进行修改。",
  },
  {
    question: "选择 Next.js 项目时应该检查什么？",
    answer:
      "建议检查项目结构、package.json、源代码质量、文档、资源文件、依赖项、安装方式、响应式表现以及项目许可条款，并确认它是否符合你的开发需求。",
  },
  {
    question: "Next.js 网站项目适合初学者吗？",
    answer:
      "部分结构清晰、文档完整的项目可以作为初学者学习资源。不过实际难度取决于项目结构、依赖项以及开发者对 JavaScript、React 和 Next.js 的熟悉程度。",
  },
  {
    question: "Next.js 网站项目可以进行定制吗？",
    answer:
      "可以。在项目许可允许的情况下，开发者通常可以修改页面、组件、样式、内容、资源以及其他项目部分。",
  },
  {
    question: "在哪里可以找到 Next.js 网站源码？",
    answer:
      "开发者可以通过源码市场、开发者社区、代码仓库、模板平台以及其他合法的项目分发渠道寻找 Next.js 项目。使用之前应始终查看项目文档和许可条款。",
  },
];

const projectTypes = [
  {
    icon: Globe2,
    title: "企业网站",
    text: "Next.js 项目可以作为公司官网、服务页面、代理机构网站以及其他专业网站体验的开发基础。",
  },
  {
    icon: Layers3,
    title: "落地页",
    text: "现成的落地页项目可以提供页面结构，让开发者更加专注于品牌、内容、交互以及转化相关的优化。",
  },
  {
    icon: Code2,
    title: "Web 应用",
    text: "更复杂的项目可能包含可复用组件、应用界面、数据处理以及其他 Web 应用开发所需要的基础结构。",
  },
  {
    icon: Smartphone,
    title: "响应式网站",
    text: "响应式 Next.js 项目可以作为桌面端、平板以及移动端网站界面的开发起点。",
  },
  {
    icon: Terminal,
    title: "开发者项目",
    text: "开发者可以通过现成项目学习项目组织方式、组件结构、配置方式以及实际 Web 开发流程。",
  },
  {
    icon: Rocket,
    title: "创业项目",
    text: "当现有项目与产品需求匹配时，合适的 Next.js 项目可以帮助团队更快从想法进入可运行的网站界面开发阶段。",
  },
];

const checklist = [
  "在修改之前先了解整个项目结构。",
  "检查 package.json 并了解项目使用的依赖。",
  "阅读安装、配置和运行说明。",
  "确认项目符合自己的技术需求。",
  "查看源代码以及可复用组件。",
  "在不同屏幕尺寸下测试响应式表现。",
  "检查图片、字体、图标以及其他资源。",
  "在使用或再次分发项目之前查看许可条款。",
];

const evaluationCards = [
  {
    icon: FolderCode,
    title: "项目结构",
    text: "清晰的文件夹结构可以帮助开发者快速找到页面、组件、资源、配置以及其他项目文件。",
  },
  {
    icon: FileCode2,
    title: "源代码",
    text: "查看源代码是否容易理解、是否具有良好的组织方式，以及是否适合后续定制。",
  },
  {
    icon: Wrench,
    title: "项目依赖",
    text: "检查 package.json，了解项目需要哪些库和依赖，再决定它是否适合加入自己的开发流程。",
  },
  {
    icon: Search,
    title: "项目文档",
    text: "清晰的安装和使用文档可以减少配置、运行、理解和修改项目所需要的时间。",
  },
  {
    icon: ShieldCheck,
    title: "许可条款",
    text: "使用前应查看适用的许可和使用条款，了解项目允许的修改、部署和分发范围。",
  },
  {
    icon: Smartphone,
    title: "响应式设计",
    text: "在不同屏幕尺寸下测试网站，确认项目是否适合你的目标设备和用户。",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "选择合适的项目",
    text: "根据网站类型、技术需求、设计方向以及需要定制的程度选择合适的 Next.js 项目。",
  },
  {
    number: "02",
    title: "检查项目文件",
    text: "在修改之前先查看文件夹、页面、组件、配置文件、资源以及 package 信息。",
  },
  {
    number: "03",
    title: "安装项目依赖",
    text: "按照项目提供的安装方式完成环境配置，并确保开发环境中具备项目所需要的依赖。",
  },
  {
    number: "04",
    title: "定制网站界面",
    text: "根据自己的需求修改内容、组件、样式、资源、导航以及其他相关项目部分。",
  },
  {
    number: "05",
    title: "测试和部署",
    text: "在相关设备和浏览器中测试完成的网站，解决问题后再按照自己的部署流程发布项目。",
  },
];

function setMetaTag(attribute, value, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${value}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", value);
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
  const links = [
    {
      rel: "alternate",
      hreflang: "en",
      href: ARTICLE_URL,
    },
    {
      rel: "alternate",
      hreflang: "zh-CN",
      href: ARTICLE_ZH_URL,
    },
    {
      rel: "alternate",
      hreflang: "x-default",
      href: ARTICLE_URL,
    },
  ];

  document
    .head
    .querySelectorAll('link[data-nextjs-blog-hreflang="true"]')
    .forEach((link) => link.remove());

  links.forEach(({ rel, hreflang, href }) => {
    const link = document.createElement("link");
    link.rel = rel;
    link.hreflang = hreflang;
    link.href = href;
    link.dataset.nextjsBlogHreflang = "true";
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
      <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
        {eyebrow}
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

function WebCodshopCta() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent p-8 sm:p-10">
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-300">
          <Download className="h-4 w-4" />
          WEB CODSHOP
        </div>

        <h2 className="max-w-2xl text-2xl font-bold text-white sm:text-3xl">
          正在寻找现成的网站源码？
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
          探索 WEB CODSHOP，寻找网站源码、Web
          项目、网站模板、UI 资源以及其他开发资源，为你的下一个项目提供实用的开发起点。
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-5 py-3 font-semibold text-white transition hover:opacity-90"
          >
            探索 WEB CODSHOP
            <ExternalLink className="h-4 w-4" />
          </a>

          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-3 font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
          >
            获取 App
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function NextJsWebsiteProjectsZh() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const title =
      "开发者 Next.js 网站项目指南：如何选择 Next.js 项目源码";

    const description =
      "了解如何选择、评估、定制和使用 Next.js 网站项目与源码，为 Web 开发项目寻找合适的 Next.js 项目起点。";

    const keywords =
      "Next.js网站项目, Next.js项目源码, Next.js网站源码, Next.js源码, Next.js网站模板, Next.js开发项目, Next.js Web项目, Next.js成品项目, Next.js源码下载, Next.js网站项目源码";

    document.title = title;

    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    setMetaTag("name", "robots", "index, follow");

    setMetaTag("property", "og:type", "article");
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", ARTICLE_ZH_URL);
    setMetaTag(
      "property",
      "og:image",
      "https://chtechgiant.com/assets/images/webcodshop-banner.png"
    );
    setMetaTag("property", "og:site_name", "CH Tech Giant");

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
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "开发者 Next.js 网站项目指南：如何选择 Next.js 项目源码",
    description:
      "介绍如何选择、评估、定制和使用 Next.js 网站项目与网站源码。",
    image: ["https://chtechgiant.com/assets/images/webcodshop-banner.png"],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": ARTICLE_ZH_URL,
    },
    author: {
      "@type": "Organization",
      name: "CH Tech Giant",
    },
    publisher: {
      "@type": "Organization",
      name: "CH Tech Giant",
      logo: {
        "@type": "ImageObject",
        url: "https://chtechgiant.com/assets/images/webcodshop-logo.png",
      },
    },
    datePublished: "2026-09-23",
    dateModified: "2026-09-23",
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
        name: "Next.js 网站项目",
        item: ARTICLE_ZH_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#050816] text-slate-200">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-800/70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.14),transparent_35%),radial-gradient(circle_at_top_left,rgba(239,68,68,0.10),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8 lg:px-10">
            <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link
                to="/blog/"
                className="transition hover:text-orange-400"
              >
                博客
              </Link>

              <span>/</span>

              <Link
                to="/blog/web-codshop/"
                className="transition hover:text-orange-400"
              >
                WEB CODSHOP
              </Link>

              <span>/</span>

              <span className="text-slate-400">Next.js 网站项目</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-300">
                <Code2 className="h-4 w-4" />
                Next.js 开发
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                开发者 Next.js 网站项目指南：如何选择 Next.js 项目源码
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
                了解如何选择、评估、定制和使用 Next.js
                网站项目与源码，为你的下一个 Web 开发项目找到合适的起点。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Next.js 网站项目",
                  "Next.js 项目源码",
                  "网站源码",
                  "Web 开发",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article */}
        <article className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-8 text-slate-300">
              Next.js
              网站项目可以为开发者提供一个实用的开发起点。在每次创建网站时，如果都从空文件夹开始编写页面、组件、样式和项目结构，往往需要投入大量重复工作。使用合适的现成项目，可以先获得一个基础代码结构，再围绕自己的需求进行定制。
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              但是，寻找 Next.js
              项目并不只是下载代码。开发者还需要了解项目包含什么、文件如何组织、使用哪些依赖、定制空间有多大，以及项目的许可和文档是否符合自己的使用场景。
            </p>

            <div className="my-12 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                  <Rocket className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white">快速总结</h2>

                  <p className="mt-3 leading-8 text-slate-400">
                    合适的 Next.js
                    网站项目应该符合你的技术需求，拥有容易理解的源代码、清晰的文档、可管理的依赖以及明确的使用条款。项目与最终目标越接近，需要进行的重复定制工作通常就越少。
                  </p>
                </div>
              </div>
            </div>

            <SectionTitle
              eyebrow="Next.js 基础"
              title="什么是 Next.js 网站项目？"
              description="在下载和修改项目之前先了解它的结构，可以让后续开发更加顺利。"
            />

            <div className="space-y-6 text-base leading-8 text-slate-400">
              <p>
                Next.js
                网站项目通常是使用 Next.js、React 以及其他相关技术构建的 Web
                项目。根据项目的实际设计，它可能包含可复用组件、页面、布局、样式、资源、配置、数据处理以及其他应用代码。
              </p>

              <p>
                不同的 Next.js
                项目可以用于完全不同的场景。有些项目可能主要面向企业官网或服务网站，而另一些项目则可能更偏向 Web
                应用。因此，在选择项目时应该实际检查代码和项目结构，而不是仅仅根据框架名称判断。
              </p>

              <p>
                对开发者来说，源码尤其有价值，因为它可以让开发者查看实际实现方式。在项目许可允许的情况下，你可以研究组件结构、修改页面内容、调整样式、替换资源，并根据自己的需求进一步定制项目。
              </p>
            </div>

            <div className="my-16">
              <SectionTitle
                eyebrow="为什么使用现成项目"
                title="为什么开发者会使用现成的 Next.js 项目？"
                description="合适的现成项目可以减少重复的初始化工作，同时提供一个可以研究和定制的实际开发基础。"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  {
                    icon: Rocket,
                    title: "更快开始开发",
                    text: "现成项目可以提供页面、组件、样式和项目组织结构，让开发者不必从完全空白的项目开始。",
                  },
                  {
                    icon: Code2,
                    title: "学习实际代码",
                    text: "开发者可以研究真实项目源码，了解页面、组件以及其他代码部分是如何协同工作的。",
                  },
                  {
                    icon: Layers3,
                    title: "复用组件",
                    text: "一些项目包含可复用的界面组件，可以在项目许可允许的情况下进行修改和适配。",
                  },
                  {
                    icon: Wrench,
                    title: "定制基础结构",
                    text: "根据项目结构和许可条款，可以修改网站内容、视觉设计、组件以及其他适合调整的部分。",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="my-16">
              <SectionTitle
                eyebrow="项目类型"
                title="常见的 Next.js 网站项目类型"
                description="Next.js 可以作为不同网站和 Web 应用体验的开发基础。"
              />

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {projectTypes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition hover:-translate-y-1 hover:border-orange-500/30"
                    >
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/15 to-red-500/10 text-orange-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="my-16">
              <SectionTitle
                eyebrow="开始之前"
                title="Next.js 项目选择检查清单"
                description="在把现成项目加入自己的开发流程之前，可以使用下面的检查清单。"
              />

              <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {checklist.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-400" />

                      <p className="leading-7 text-slate-400">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="my-16">
              <SectionTitle
                eyebrow="源码与模板"
                title="Next.js 网站源码和网站模板有什么区别？"
                description="这两个概念有时会重叠，但在寻找开发资源时理解它们的区别仍然有帮助。"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <FileCode2 className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    Next.js 网站源码
                  </h3>

                  <p className="mt-4 leading-8 text-slate-400">
                    网站源码可以让开发者访问项目实际的代码实现，例如组件、页面、样式、配置、资源以及其他项目文件。当开发者希望理解项目并进行定制时，源码尤其重要。
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                    <Layers3 className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    Next.js 网站模板
                  </h3>

                  <p className="mt-4 leading-8 text-slate-400">
                    网站模板通常更强调可重复使用的网站或界面基础。根据项目的不同，它可能包含完整页面、组件、样式、资源以及其他可以进行定制的开发资源。
                  </p>
                </div>
              </div>

              <p className="mt-6 text-base leading-8 text-slate-400">
                在比较不同项目时，不要只关注项目名称或标签。更应该检查实际文件、项目文档、包含的功能、定制空间以及许可条款。
              </p>
            </div>

            <div className="my-16">
              <SectionTitle
                eyebrow="项目评估"
                title="如何评估一个 Next.js 网站项目？"
                description="进行简单的技术检查，可以帮助你判断项目是否适合作为开发起点。"
              />

              <div className="grid gap-5 md:grid-cols-2">
                {evaluationCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                          <Icon className="h-5 w-5" />
                        </div>

                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>

                      <p className="leading-7 text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="my-16">
              <SectionTitle
                eyebrow="开发流程"
                title="使用 Next.js 项目的实用开发流程"
                description="不要在下载项目后立即修改文件，先按照结构化流程了解项目。"
              />

              <div className="space-y-5">
                {workflowSteps.map((step) => (
                  <div
                    key={step.number}
                    className="flex gap-5 rounded-2xl border border-slate-800 bg-slate-900/30 p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-sm font-bold text-white">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-400">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-16">
              <SectionTitle
                eyebrow="技术检查"
                title="Next.js 项目中应该检查哪些内容？"
                description="通过查看几个重要的文件和文件夹，可以快速了解项目的组织方式。"
              />

              <div className="space-y-5 text-base leading-8 text-slate-400">
                <p>
                  首先检查项目的 package
                  配置。项目中的{" "}
                  <code className="mx-1 rounded bg-slate-800 px-2 py-1 text-sm text-orange-300">
                    package.json
                  </code>{" "}
                  通常可以帮助你了解项目使用的依赖、脚本以及其他配置信息。
                </p>

                <p>
                  然后检查源代码目录，了解页面、组件、样式、资源以及其他项目文件分别位于什么位置。不同 Next.js
                  项目的目录结构可能存在差异，因此了解当前项目本身的结构比假设所有项目都完全相同更加重要。
                </p>

                <p>
                  同时也要阅读项目文档。安装步骤、开发命令、配置要求以及其他说明可以帮助你减少项目设置和后续定制过程中遇到的问题。
                </p>
              </div>
            </div>

            <div className="my-16">
              <WebCodshopCta />
            </div>

            <div className="my-16">
              <SectionTitle
                eyebrow="WEB CODSHOP"
                title="为你的下一个项目寻找网站源码"
                description="WEB CODSHOP 面向开发者、自由职业者、创业团队、代理机构以及企业用户，提供网站源码和 Web 开发资源。"
              />

              <div className="grid gap-5 md:grid-cols-3">
                {[
                  {
                    icon: Code2,
                    title: "网站源码",
                    text: "探索不同类型的网站项目和源码资源，为各种 Web 开发需求寻找合适的项目基础。",
                  },
                  {
                    icon: FolderCode,
                    title: "开发项目",
                    text: "寻找可以用于学习、研究、定制以及实际开发的 Web 项目基础。",
                  },
                  {
                    icon: Rocket,
                    title: "更快开始开发",
                    text: "从现有项目基础开始，把更多时间投入到适合自己需求的网站定制和开发工作中。",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="my-16">
              <SectionTitle
                eyebrow="相关文章"
                title="继续了解 WEB CODSHOP 开发资源"
                description="阅读更多关于网站源码、HTML 模板和 React 项目的指南。"
              />

              <div className="grid gap-5 md:grid-cols-3">
                <Link
                  to="/blog/web-codshop/zh/website-source-code-for-developers/"
                  className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition hover:-translate-y-1 hover:border-orange-500/30"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <Code2 className="h-6 w-6 text-orange-400" />

                    <ArrowRight className="h-5 w-5 text-slate-600 transition group-hover:translate-x-1 group-hover:text-orange-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    开发者网站源码指南
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    了解开发者选择网站源码时需要关注的关键因素。
                  </p>
                </Link>

                <Link
                  to="/blog/web-codshop/zh/react-website-projects/"
                  className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition hover:-translate-y-1 hover:border-orange-500/30"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <Layers3 className="h-6 w-6 text-orange-400" />

                    <ArrowRight className="h-5 w-5 text-slate-600 transition group-hover:translate-x-1 group-hover:text-orange-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    React 网站项目指南
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    了解选择 React 网站项目和项目源码时需要考虑的内容。
                  </p>
                </Link>

                <Link
                  to="/blog/web-codshop/zh/where-to-find-website-source-code/"
                  className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition hover:-translate-y-1 hover:border-orange-500/30"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <Search className="h-6 w-6 text-orange-400" />

                    <ArrowRight className="h-5 w-5 text-slate-600 transition group-hover:translate-x-1 group-hover:text-orange-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    哪里可以找到网站源码？
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    了解开发者寻找合法网站源码资源时可以关注的渠道。
                  </p>
                </Link>
              </div>
            </div>

            <div className="my-16">
              <SectionTitle
                eyebrow="常见问题"
                title="关于 Next.js 网站项目的常见问题"
              />

              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6"
                  >
                    <summary className="cursor-pointer list-none pr-8 font-semibold text-white">
                      {faq.question}
                    </summary>

                    <p className="mt-4 leading-8 text-slate-400">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            <div className="my-16">
              <div className="flex flex-col gap-5 rounded-3xl border border-slate-800 bg-slate-900/40 p-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-400">
                    继续阅读
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    探索更多网站开发资源
                  </h3>
                </div>

                <Link
                  to="/blog/web-codshop/"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 font-semibold text-slate-200 transition hover:border-orange-500/40 hover:text-orange-300"
                >
                  WEB CODSHOP 博客
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  to="/blog/web-codshop/zh/react-website-projects/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-orange-400"
                >
                  <ArrowLeft className="h-4 w-4" />
                  上一篇：React 网站项目
                </Link>

                <Link
                  to="/blog/web-codshop/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-orange-400"
                >
                  全部 WEB CODSHOP 文章
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="border-t border-slate-800 bg-[#030611]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="font-semibold text-white">WEB CODSHOP</p>

            <p className="mt-1 text-sm text-slate-500">
              CH Tech Giant 提供的网站源码和 Web 开发资源。
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-orange-400"
            >
              WEB CODSHOP
            </a>

            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-orange-400"
            >
              Google Play
            </a>

            <Link
              to="/blog/web-codshop/nextjs-website-projects/"
              className="text-slate-400 transition hover:text-orange-400"
            >
              English
            </Link>

            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-orange-400"
            >
              隐私政策
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}