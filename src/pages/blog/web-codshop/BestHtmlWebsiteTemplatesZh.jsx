import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Globe,
  LayoutTemplate,
  Lightbulb,
  MonitorSmartphone,
  Search,
  Smartphone,
  Sparkles,
  Store,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const APP_URL = "https://chtechgiant.com/apps/web-codshop";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.chtechgiant.webcodshop";

const PRIVACY_URL =
  "https://chtechgiant.com/apps/web-codshop/privacy-policy";

const ARTICLE_URL =
  "https://chtechgiant.com/blog/web-codshop/zh/best-html-website-templates/";

const ENGLISH_ARTICLE_URL =
  "https://chtechgiant.com/blog/web-codshop/best-html-website-templates/";

const ARTICLE_TITLE =
  "开发者和企业值得了解的最佳 HTML 网站模板";

const ARTICLE_DESCRIPTION =
  "了解适合开发者、自由职业者、创业公司、代理机构和企业的 HTML 网站模板。学习如何选择响应式 HTML、CSS、JavaScript、企业网站、个人作品集、Landing Page 和电商网站模板。";

const keywords = [
  "HTML网站模板",
  "最佳HTML网站模板",
  "HTML CSS网站模板",
  "HTML网站源码",
  "响应式网站模板",
  "HTML模板",
  "企业网站模板",
  "个人网站模板",
  "作品集网站模板",
  "Landing Page模板",
  "HTML源码下载",
  "成品HTML网站",
];

function SeoHead() {
  useEffect(() => {
    document.documentElement.lang = "zh-CN";

    document.title = `${ARTICLE_TITLE} | WEB CODSHOP`;

    const setMeta = (name, content) => {
      let element = document.head.querySelector(`meta[name="${name}"]`);

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

    const setLink = (rel, href, attributes = {}) => {
      let selector = `link[rel="${rel}"]`;

      Object.entries(attributes).forEach(([key, value]) => {
        selector += `[${key}="${value}"]`;
      });

      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);

        Object.entries(attributes).forEach(([key, value]) => {
          element.setAttribute(key, value);
        });

        document.head.appendChild(element);
      }

      element.setAttribute("href", href);
    };

    setMeta("description", ARTICLE_DESCRIPTION);
    setMeta("keywords", keywords.join(", "));
    setMeta("author", "CH TECH GIANT");
    setMeta("robots", "index, follow, max-image-preview:large");

    setProperty("og:type", "article");
    setProperty("og:title", ARTICLE_TITLE);
    setProperty("og:description", ARTICLE_DESCRIPTION);
    setProperty("og:url", ARTICLE_URL);
    setProperty("og:site_name", "CH TECH GIANT");

    setProperty(
      "og:image",
      "https://chtechgiant.com/assets/images/webcodshop-banner.png"
    );

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", ARTICLE_TITLE);
    setMeta("twitter:description", ARTICLE_DESCRIPTION);
    setMeta(
      "twitter:image",
      "https://chtechgiant.com/assets/images/webcodshop-banner.png"
    );

    setLink("canonical", ARTICLE_URL);

    setLink("alternate", ENGLISH_ARTICLE_URL, {
      hreflang: "en",
    });

    setLink("alternate", ARTICLE_URL, {
      hreflang: "zh-CN",
    });

    setLink("alternate", ENGLISH_ARTICLE_URL, {
      hreflang: "x-default",
    });

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: ARTICLE_TITLE,
      description: ARTICLE_DESCRIPTION,
      url: ARTICLE_URL,
      image: [
        "https://chtechgiant.com/assets/images/webcodshop-banner.png",
      ],
      author: {
        "@type": "Organization",
        name: "CH TECH GIANT",
        url: "https://chtechgiant.com",
      },
      publisher: {
        "@type": "Organization",
        name: "CH TECH GIANT",
        url: "https://chtechgiant.com",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": ARTICLE_URL,
      },
      about: [
        "HTML网站模板",
        "HTML网站源码",
        "响应式网站模板",
        "网站开发",
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
          name: "WEB CODSHOP",
          item: APP_URL,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "博客",
          item: "https://chtechgiant.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: ARTICLE_TITLE,
          item: ARTICLE_URL,
        },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "什么是 HTML 网站模板？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HTML 网站模板是预先制作好的网站结构，通常包含 HTML、CSS 以及 JavaScript 文件，可以根据项目需求进行修改和定制。",
          },
        },
        {
          "@type": "Question",
          name: "HTML 模板适合企业网站吗？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "适合。HTML 模板可以用于企业官网、公司网站、服务网站、Landing Page、个人作品集以及许多其他类型的网站项目。",
          },
        },
        {
          "@type": "Question",
          name: "选择 HTML 模板之前应该检查什么？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "建议检查响应式设计、源码质量、浏览器兼容性、自定义难度、页面结构、JavaScript 依赖以及模板是否符合项目用途。",
          },
        },
        {
          "@type": "Question",
          name: "在哪里可以找到 HTML 网站源码？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "开发者可以通过模板市场、项目仓库以及专门的网站源码平台寻找 HTML 网站源码，例如 WEB CODSHOP。",
          },
        },
      ],
    };

    const addJsonLd = (id, data) => {
      let script = document.getElementById(id);

      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = id;
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(data);
    };

    addJsonLd("web-codshop-html-zh-article-schema", articleSchema);
    addJsonLd(
      "web-codshop-html-zh-breadcrumb-schema",
      breadcrumbSchema
    );
    addJsonLd("web-codshop-html-zh-faq-schema", faqSchema);

    return () => {
      const schemaIds = [
        "web-codshop-html-zh-article-schema",
        "web-codshop-html-zh-breadcrumb-schema",
        "web-codshop-html-zh-faq-schema",
      ];

      schemaIds.forEach((id) => {
        document.getElementById(id)?.remove();
      });
    };
  }, []);

  return null;
}

const Section = ({ icon: Icon, title, children }) => (
  <section className="mb-14">
    <div className="flex items-center gap-3 mb-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400">
        <Icon size={21} />
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
    </div>

    <div className="space-y-4 text-[16px] leading-8 text-slate-300">
      {children}
    </div>
  </section>
);

const TemplateCard = ({ icon: Icon, title, description, points }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-red-500/30 hover:bg-white/[0.05]">
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
      <Icon size={23} />
    </div>

    <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>

    <p className="mb-4 text-sm leading-7 text-slate-400">{description}</p>

    <ul className="space-y-2">
      {points.map((point) => (
        <li
          key={point}
          className="flex items-start gap-2 text-sm leading-6 text-slate-300"
        >
          <CheckCircle2
            size={17}
            className="mt-1 shrink-0 text-red-400"
          />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function BestHtmlWebsiteTemplatesZh() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <SeoHead />

      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link
            to="/apps/web-codshop"
            className="flex items-center gap-3"
          >
            <img
              src="/assets/images/webcodshop-logo.png"
              alt="WEB CODSHOP"
              className="h-10 w-10 rounded-xl object-cover"
            />

            <div>
              <div className="text-sm font-bold tracking-wide text-white">
                WEB CODSHOP
              </div>
              <div className="text-xs text-slate-500">
                网站源码平台
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/blog/web-codshop/best-html-website-templates"
              className="hidden rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:border-red-400/30 hover:text-white sm:inline-flex"
            >
              English
            </Link>

            <Link
              to="/apps/web-codshop"
              className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-400"
            >
              打开应用
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.08),transparent_30%)]" />

          <div className="relative mx-auto max-w-5xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="mb-7 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <Link
                to="/apps/web-codshop"
                className="transition hover:text-white"
              >
                WEB CODSHOP
              </Link>

              <span>/</span>

              <span>博客</span>

              <span>/</span>

              <span className="text-red-400">HTML 网站模板</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300">
                <Sparkles size={16} />
                HTML 网站模板指南
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                开发者和企业值得了解的最佳 HTML 网站模板
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                正在寻找 HTML 网站模板、HTML 网站源码或响应式网站设计？
                本指南将介绍企业网站、个人作品集、Landing Page、电商网站等项目中常见的 HTML 模板类型，以及选择模板时应该注意的事项。
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "响应式设计",
                  "网站源码",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article */}
        <article className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <Section
            icon={LayoutTemplate}
            title="什么是 HTML 网站模板？"
          >
            <p>
              HTML 网站模板是一种预先制作好的网站结构，可以为网站项目提供基础页面布局和前端代码。
              一个完整的模板通常可能包含 HTML 页面、CSS 样式文件、JavaScript 文件、图片、图标、字体以及其他前端资源。
            </p>

            <p>
              与其每次从完全空白的项目开始，开发者可以使用现成的网站结构作为起点，然后根据项目需求进行修改和定制。
            </p>

            <p>
              HTML 网站模板常用于企业官网、个人作品集、Landing Page、个人网站、产品页面、服务网站、博客、后台界面以及其他各种 Web 项目。
            </p>
          </Section>

          <Section
            icon={Zap}
            title="为什么开发者会使用 HTML 网站模板？"
          >
            <p>
              从零开始开发网站可以获得完整的控制权，但开发者仍然需要花费时间创建常见的页面布局、导航、字体、按钮、卡片、表单、响应式结构以及其他基础组件。
            </p>

            <p>
              现成的 HTML 模板可以提供这些常见结构的起点。开发者可以直接修改源码，而不是重新创建每一个页面元素。
            </p>

            <div className="grid gap-4 pt-3 md:grid-cols-2">
              {[
                "从现成的网站页面结构开始项目",
                "直接修改 HTML、CSS 和 JavaScript 源码",
                "减少重复性的前端开发工作",
                "更快制作网站原型和项目演示",
                "以响应式布局作为开发起点",
                "根据行业和项目需求调整模板",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-red-400"
                  />

                  <span className="text-sm leading-6 text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          <Section
            icon={Globe}
            title="常见的 HTML 网站模板类型"
          >
            <p>
              不同网站项目需要不同的页面结构。因此，选择 HTML 网站模板时，首先应该根据网站用途确定模板类型。
            </p>

            <div className="grid gap-5 pt-4 md:grid-cols-2">
              <TemplateCard
                icon={Store}
                title="企业网站模板"
                description="适用于公司、代理机构、服务商、创业公司以及专业企业网站。"
                points={[
                  "公司和服务页面",
                  "关于我们和联系我们页面",
                  "专业企业网站布局",
                  "企业 Landing Page",
                ]}
              />

              <TemplateCard
                icon={Users}
                title="个人作品集模板"
                description="适用于开发者、设计师、自由职业者、摄影师、代理机构以及创意工作者。"
                points={[
                  "项目展示区域",
                  "个人介绍页面",
                  "技能和经验区域",
                  "作品集和联系方式",
                ]}
              />

              <TemplateCard
                icon={Sparkles}
                title="Landing Page 模板"
                description="适用于产品、服务、营销活动、应用程序和推广网站。"
                points={[
                  "Hero 主视觉区域",
                  "Call-to-Action 按钮",
                  "功能介绍区域",
                  "转化导向的页面结构",
                ]}
              />

              <TemplateCard
                icon={MonitorSmartphone}
                title="电商网站模板"
                description="适用于在线商店、产品展示和电商类网站的前端项目。"
                points={[
                  "产品展示布局",
                  "商品分类区域",
                  "电商界面结构",
                  "响应式商店设计",
                ]}
              />

              <TemplateCard
                icon={Code2}
                title="Admin Dashboard 模板"
                description="适用于 Web 应用程序后台和管理系统界面。"
                points={[
                  "侧边栏导航",
                  "数据表格和卡片",
                  "统计数据区域",
                  "管理后台布局",
                ]}
              />

              <TemplateCard
                icon={Lightbulb}
                title="创意网站模板"
                description="适用于设计机构、工作室、创作者、设计师以及视觉型网站项目。"
                points={[
                  "现代视觉布局",
                  "创意字体设计",
                  "图片展示区域",
                  "可自定义的网站结构",
                ]}
              />
            </div>
          </Section>

          <Section icon={Store} title="企业网站模板">
            <p>
              企业网站通常需要清楚地介绍企业提供的服务、业务内容以及联系方式。
              企业网站模板可以为这些内容提供基础结构。
            </p>

            <p>
              根据项目不同，企业模板可能包含首页、服务介绍、关于我们、客户评价、作品展示、联系我们、价格、FAQ 和 Call-to-Action 等区域。
            </p>

            <p>
              开发者可以修改网站内容、颜色、字体、导航、图片以及页面结构，使模板符合企业品牌需求。
            </p>
          </Section>

          <Section icon={Users} title="个人作品集网站模板">
            <p>
              个人作品集网站常用于开发者、设计师、自由职业者、摄影师、代理机构以及其他需要在线展示作品的专业人士。
            </p>

            <p>
              一个好的作品集网站应该让访问者能够方便地浏览项目，并快速了解网站背后的个人或企业。
            </p>

            <p>
              HTML 作品集模板可以添加项目截图、项目介绍、技能、服务、工作经验、客户评价、社交链接以及联系方式。
            </p>
          </Section>

          <Section icon={Sparkles} title="Landing Page 模板">
            <p>
              Landing Page 通常用于特定产品、服务、营销活动、应用程序、活动或者其他明确的网站目标。
            </p>

            <p>
              HTML Landing Page 模板通常已经包含 Hero 区域、功能介绍、客户评价、价格区域、FAQ 以及 Call-to-Action 等内容。
            </p>

            <p>
              由于 Landing Page 通常围绕一个明确目标设计，因此选择结构清晰的模板可以让后续修改更加方便。
            </p>
          </Section>

          <Section
            icon={MonitorSmartphone}
            title="为什么响应式 HTML 网站模板很重要？"
          >
            <p>
              用户可能通过台式电脑、笔记本电脑、平板电脑和智能手机访问网站。
              响应式网站可以根据不同屏幕尺寸调整页面布局。
            </p>

            <p>
              选择响应式 HTML 模板时，建议检查导航、图片、卡片、字体、按钮、表单以及多栏布局在手机屏幕上的表现。
            </p>

            <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.06] p-6">
              <div className="flex gap-4">
                <Smartphone
                  className="mt-1 shrink-0 text-red-400"
                  size={24}
                />

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    移动端体验
                  </h3>

                  <p className="text-sm leading-7 text-slate-300">
                    如果模板只适合大型桌面屏幕，那么后续可能需要进行大量修改。
                    因此，在选择模板之前，应该优先检查它在手机和平板设备上的响应式表现。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section
            icon={Code2}
            title="HTML + CSS + JavaScript 网站源码"
          >
            <p>
              HTML 负责网页结构，CSS 负责页面视觉样式，而 JavaScript 可以为网页增加交互功能。
            </p>

            <p>
              很多现代 HTML 网站模板会结合这三种技术，为开发者提供完整的前端项目基础。
            </p>

            <p>
              获取完整源码后，开发者可以修改页面布局、内容、导航、动画、表单、颜色、字体以及其他交互功能。
            </p>

            <div className="grid gap-4 pt-3 md:grid-cols-3">
              {[
                {
                  title: "HTML",
                  text: "负责网页结构、内容以及语义化元素。",
                },
                {
                  title: "CSS",
                  text: "负责布局、响应式设计、字体和视觉样式。",
                },
                {
                  title: "JavaScript",
                  text: "负责交互组件和客户端功能。",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <h3 className="mb-2 font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            icon={Search}
            title="选择 HTML 网站模板之前应该检查什么？"
          >
            <p>
              并不是所有 HTML 模板都适合所有项目。在使用模板之前，应该查看源码，并确认模板结构是否符合项目需求。
            </p>

            <div className="space-y-3 pt-3">
              {[
                "是否支持手机、平板和桌面设备的响应式设计",
                "HTML 结构是否清晰",
                "CSS 文件是否组织合理",
                "JavaScript 依赖以及浏览器兼容性",
                "模板包含哪些页面和可复用区域",
                "是否容易进行二次开发",
                "图片和其他资源是否组织清楚",
                "字体以及第三方资源依赖",
                "网站加载性能和不必要的资源",
                "模板授权和使用条款",
                "是否提供完整的网站源码",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-xs font-bold text-red-400">
                    {index + 1}
                  </span>

                  <span className="text-sm leading-7 text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          <Section icon={Download} title="在哪里可以找到 HTML 网站源码？">
            <p>
              开发者可以通过模板市场、项目仓库、开发者社区以及专业的网站源码平台寻找 HTML 网站源码。
            </p>

            <p>
              如果你正在寻找可以直接作为开发起点的成品网站项目，而不是从空白 HTML 文件开始，那么网站源码平台可以帮助你更方便地浏览不同的网站类型和项目。
            </p>

            <p>
              如果你想进一步了解网站源码的来源和寻找方式，可以阅读：
              {" "}
              <Link
                to="/blog/web-codshop/where-to-find-website-source-code"
                className="font-semibold text-red-400 transition hover:text-red-300"
              >
                哪里可以找到网站源码？
              </Link>
            </p>
          </Section>

          {/* WEB CODSHOP */}
          <section className="relative mb-16 overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/[0.12] to-orange-500/[0.05] p-7 md:p-10">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-300">
                <Sparkles size={14} />
                WEB CODSHOP
              </div>

              <h2 className="max-w-3xl text-2xl font-bold text-white md:text-4xl">
                使用 WEB CODSHOP 探索网站源码和 HTML 模板
              </h2>

              <p className="mt-5 max-w-3xl text-[16px] leading-8 text-slate-300">
                WEB CODSHOP 是一个网站源码、Web 模板、大学项目、UI Kit
                以及专业 Web 开发资源平台。你可以浏览不同项目类别，为下一个网站项目寻找现成的开发起点。
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "HTML 网站模板",
                  "React.js 项目",
                  "Next.js 项目",
                  "Node.js 应用",
                  "MERN Stack 项目",
                  "PHP Scripts",
                  "Admin Dashboard",
                  "Landing Pages",
                  "Portfolio Websites",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-red-400"
                    />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/apps/web-codshop"
                  className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-400"
                >
                  探索 WEB CODSHOP
                  <ArrowRight size={18} />
                </Link>

                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 font-semibold text-white transition hover:bg-white/[0.1]"
                >
                  Google Play
                  <ExternalLink size={17} />
                </a>
              </div>
            </div>
          </section>

          <Section
            icon={Lightbulb}
            title="如何选择适合自己的 HTML 网站模板？"
          >
            <p>
              首先确定网站的用途。作品集、企业官网、Landing Page、在线商店和后台管理系统通常需要不同的页面结构。
            </p>

            <p>
              然后检查模板的响应式表现以及源码结构，确认模板中的页面和区域是否可以方便地进行修改，而不需要重新开发整个网站。
            </p>

            <p>
              最后检查模板资源、第三方依赖、浏览器支持、网站性能以及授权条款，然后再将模板用于实际项目。
            </p>
          </Section>

          {/* FAQ */}
          <section className="mb-16">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400">
                <Search size={21} />
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                常见问题
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "什么是 HTML 网站模板？",
                  a: "HTML 网站模板是预先制作好的网站结构，通常包含 HTML、CSS 以及 JavaScript 文件，可以根据项目需求进行修改和定制。",
                },
                {
                  q: "HTML 模板适合企业网站吗？",
                  a: "适合。HTML 模板可以用于企业官网、公司网站、服务网站、Landing Page、个人作品集以及许多其他类型的网站项目。",
                },
                {
                  q: "选择 HTML 模板之前应该检查什么？",
                  a: "建议检查响应式设计、源码质量、浏览器兼容性、自定义难度、页面结构、JavaScript 依赖以及模板是否符合项目用途。",
                },
                {
                  q: "在哪里可以找到 HTML 网站源码？",
                  a: "开发者可以通过模板市场、项目仓库以及专门的网站源码平台寻找 HTML 网站源码，例如 WEB CODSHOP。",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <summary className="cursor-pointer list-none font-semibold text-white">
                    <div className="flex items-center justify-between gap-4">
                      <span>{item.q}</span>

                      <ArrowRight
                        size={18}
                        className="shrink-0 text-red-400 transition group-open:rotate-90"
                      />
                    </div>
                  </summary>

                  <p className="mt-4 pr-6 text-sm leading-7 text-slate-400">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Navigation */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/blog/web-codshop/where-to-find-website-source-code"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              <ArrowLeft size={17} />
              上一篇：哪里可以找到网站源码？
            </Link>

            <Link
              to="/blog/web-codshop/best-html-website-templates"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition hover:text-red-300"
            >
              Read English Version
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Privacy */}
          <div className="mt-10 text-center">
            <a
              href={PRIVACY_URL}
              className="text-xs text-slate-500 transition hover:text-slate-300"
            >
              WEB CODSHOP 隐私政策
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}