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
  "https://chtechgiant.com/blog/web-codshop/best-html-website-templates/";
const CHINESE_ARTICLE_URL =
  "https://chtechgiant.com/blog/web-codshop/zh/best-html-website-templates/";

const ARTICLE_TITLE =
  "Best HTML Website Templates for Developers and Businesses";

const ARTICLE_DESCRIPTION =
  "Discover the best HTML website templates for developers, freelancers, startups, agencies, and businesses. Learn how to choose responsive HTML, CSS, JavaScript, portfolio, landing page, business, and e-commerce templates.";

const keywords = [
  "best HTML website templates",
  "HTML website templates",
  "HTML CSS website templates",
  "HTML website source code",
  "responsive HTML templates",
  "HTML templates for developers",
  "business website templates",
  "portfolio website templates",
  "landing page templates",
  "ready-made HTML websites",
  "HTML source code",
  "website templates for businesses",
];

function SeoHead() {
  useEffect(() => {
    document.documentElement.lang = "en";

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

    setLink("alternate", ARTICLE_URL, {
      hreflang: "en",
    });

    setLink("alternate", CHINESE_ARTICLE_URL, {
      hreflang: "zh-CN",
    });

    setLink("alternate", ARTICLE_URL, {
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
        "HTML website templates",
        "HTML source code",
        "responsive website templates",
        "website development",
      ],
      inLanguage: "en",
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
          name: "WEB CODSHOP",
          item: APP_URL,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Blog",
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
          name: "What is an HTML website template?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An HTML website template is a pre-built website structure containing HTML, CSS and often JavaScript files that can be customized for a project.",
          },
        },
        {
          "@type": "Question",
          name: "Are HTML templates suitable for business websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. HTML templates can be used for business websites, company websites, landing pages, portfolios, service websites and many other web projects.",
          },
        },
        {
          "@type": "Question",
          name: "What should I check before choosing an HTML template?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check responsive design, source code quality, browser compatibility, customization options, page structure, JavaScript dependencies and whether the template matches your project's purpose.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find HTML website source code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Developers can find HTML website source code through template marketplaces, project repositories and dedicated source-code platforms such as WEB CODSHOP.",
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

    addJsonLd("web-codshop-html-article-schema", articleSchema);
    addJsonLd("web-codshop-html-breadcrumb-schema", breadcrumbSchema);
    addJsonLd("web-codshop-html-faq-schema", faqSchema);

    return () => {
      const schemaIds = [
        "web-codshop-html-article-schema",
        "web-codshop-html-breadcrumb-schema",
        "web-codshop-html-faq-schema",
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

export default function BestHtmlWebsiteTemplates() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <SeoHead />

      {/* Top navigation */}
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
              <div className="text-xs text-slate-500">Web Source Code</div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/blog/web-codshop/zh/best-html-website-templates"
              className="hidden rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:border-red-400/30 hover:text-white sm:inline-flex"
            >
              中文
            </Link>

            <Link
              to="/apps/web-codshop"
              className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-400"
            >
              Open App
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

              <span>Blog</span>

              <span>/</span>

              <span className="text-red-400">HTML Templates</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300">
                <Sparkles size={16} />
                HTML Website Templates Guide
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                Best HTML Website Templates for Developers and Businesses
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Looking for HTML website templates, HTML source code, or
                responsive website designs for your next project? Learn how to
                choose the right template for business websites, portfolios,
                landing pages, e-commerce projects, and more.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  HTML
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  CSS
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  JavaScript
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  Responsive Design
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  Source Code
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article */}
        <article className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <Section icon={LayoutTemplate} title="What Is an HTML Website Template?">
            <p>
              An HTML website template is a pre-built website structure that
              provides the main layout and front-end code for a website. A
              typical template may contain HTML pages, CSS stylesheets,
              JavaScript files, images, icons, fonts, and other front-end
              resources.
            </p>

            <p>
              Instead of starting every project with a completely empty
              folder, developers can begin with an existing structure and
              customize it according to the project requirements.
            </p>

            <p>
              HTML website templates are commonly used for company websites,
              portfolios, landing pages, personal websites, product pages,
              service websites, blogs, dashboards, and many other web
              projects.
            </p>
          </Section>

          <Section icon={Zap} title="Why Developers Use HTML Website Templates">
            <p>
              Building a website from scratch gives developers complete
              control, but it can also require significant time for creating
              common layouts, responsive sections, navigation systems,
              typography, buttons, cards, forms, and page structures.
            </p>

            <p>
              A ready-made HTML template can provide a starting point for
              these common elements. Developers can then modify the source code
              instead of rebuilding every visual component from the beginning.
            </p>

            <div className="grid gap-4 pt-3 md:grid-cols-2">
              {[
                "Start projects with an existing page structure",
                "Customize HTML, CSS and JavaScript source code",
                "Reduce repetitive front-end development work",
                "Create prototypes and project demos faster",
                "Use responsive layouts as a starting point",
                "Adapt templates for different industries and projects",
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

          <Section icon={Globe} title="Popular Types of HTML Website Templates">
            <p>
              The right template depends on the purpose of your website.
              Different projects need different page structures, visual
              elements, and functionality.
            </p>

            <div className="grid gap-5 pt-4 md:grid-cols-2">
              <TemplateCard
                icon={Store}
                title="Business Website Templates"
                description="Useful for companies, agencies, service providers, startups, and professional businesses."
                points={[
                  "Company and service pages",
                  "About and contact sections",
                  "Business-focused layouts",
                  "Professional landing pages",
                ]}
              />

              <TemplateCard
                icon={Users}
                title="Portfolio Website Templates"
                description="Designed for developers, designers, freelancers, photographers, agencies, and creative professionals."
                points={[
                  "Project showcase sections",
                  "Personal introduction areas",
                  "Skills and experience sections",
                  "Contact and portfolio pages",
                ]}
              />

              <TemplateCard
                icon={Sparkles}
                title="Landing Page Templates"
                description="Focused page structures for products, services, campaigns, applications, and marketing websites."
                points={[
                  "Hero sections",
                  "Call-to-action areas",
                  "Feature sections",
                  "Conversion-focused layouts",
                ]}
              />

              <TemplateCard
                icon={MonitorSmartphone}
                title="E-Commerce Website Templates"
                description="Front-end templates for online stores and product-focused websites."
                points={[
                  "Product layouts",
                  "Category sections",
                  "Shopping-focused interfaces",
                  "Responsive store designs",
                ]}
              />

              <TemplateCard
                icon={Code2}
                title="Admin Dashboard Templates"
                description="Useful starting points for web application dashboards and administration interfaces."
                points={[
                  "Sidebar navigation",
                  "Tables and cards",
                  "Statistics sections",
                  "Dashboard layouts",
                ]}
              />

              <TemplateCard
                icon={Lightbulb}
                title="Creative Website Templates"
                description="Visually focused templates for agencies, studios, designers, creators, and creative projects."
                points={[
                  "Modern visual layouts",
                  "Creative typography",
                  "Image-focused sections",
                  "Customizable presentation",
                ]}
              />
            </div>
          </Section>

          <Section icon={Store} title="Business Website Templates">
            <p>
              Businesses often need a website that clearly communicates what
              they offer, who they serve, and how visitors can contact them.
              A business website template can provide a structured starting
              point for these requirements.
            </p>

            <p>
              Depending on the project, a business template may include a
              homepage, services section, about page, testimonials, portfolio,
              contact form, pricing area, FAQ section, and call-to-action
              sections.
            </p>

            <p>
              Developers can customize the content, colors, typography,
              navigation, images, and page sections to match the company's
              brand.
            </p>
          </Section>

          <Section icon={Users} title="Portfolio Website Templates">
            <p>
              Portfolio websites are commonly used by developers, designers,
              freelancers, photographers, agencies, and other professionals
              who need to present their work online.
            </p>

            <p>
              A good portfolio template should make projects easy to browse
              and provide clear information about the person or business
              behind the work.
            </p>

            <p>
              HTML portfolio templates can be customized with project
              screenshots, descriptions, skills, services, experience,
              testimonials, social links, and contact information.
            </p>
          </Section>

          <Section icon={Sparkles} title="Landing Page Templates">
            <p>
              Landing pages are often created for a specific product, service,
              campaign, application, event, or marketing objective.
            </p>

            <p>
              HTML landing page templates can provide pre-built hero sections,
              feature blocks, testimonials, pricing sections, FAQs, and
              call-to-action areas.
            </p>

            <p>
              Because landing pages usually focus on a specific goal, choosing
              a clean and focused layout can make customization easier.
            </p>
          </Section>

          <Section icon={MonitorSmartphone} title="Why Responsive HTML Templates Matter">
            <p>
              Visitors can access websites from desktop computers, laptops,
              tablets, and smartphones. A responsive website adapts its layout
              to different screen sizes.
            </p>

            <p>
              When choosing a responsive HTML template, check how navigation,
              images, cards, typography, buttons, forms, and multi-column
              layouts behave on smaller screens.
            </p>

            <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.06] p-6">
              <div className="flex gap-4">
                <Smartphone className="mt-1 shrink-0 text-red-400" size={24} />

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Mobile-first thinking
                  </h3>

                  <p className="text-sm leading-7 text-slate-300">
                    A template that looks good only on a large desktop screen
                    may require significant customization. Responsive behavior
                    should be one of the first things developers inspect before
                    choosing a template.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section icon={Code2} title="HTML + CSS + JavaScript Source Code">
            <p>
              HTML defines the structure of a webpage, CSS controls its visual
              presentation, and JavaScript can add interactive behavior.
            </p>

            <p>
              Many modern HTML website templates combine all three technologies
              to create complete front-end experiences.
            </p>

            <p>
              Having access to the source code is especially useful when a
              developer needs to change layouts, sections, animations,
              navigation, forms, colors, typography, or interactive features.
            </p>

            <div className="grid gap-4 pt-3 md:grid-cols-3">
              {[
                {
                  title: "HTML",
                  text: "Page structure, content and semantic elements.",
                },
                {
                  title: "CSS",
                  text: "Layout, responsive behavior, typography and visual styling.",
                },
                {
                  title: "JavaScript",
                  text: "Interactive components and client-side functionality.",
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

          <Section icon={Search} title="What to Check Before Choosing an HTML Template">
            <p>
              Not every HTML template is suitable for every project. Before
              using one, review the source code and determine whether its
              structure matches your requirements.
            </p>

            <div className="space-y-3 pt-3">
              {[
                "Responsive design across mobile, tablet and desktop screens",
                "Clean and understandable HTML structure",
                "Well-organized CSS files",
                "JavaScript dependencies and browser compatibility",
                "Available pages and reusable sections",
                "Ease of customization",
                "Image and asset organization",
                "Typography and font dependencies",
                "Loading performance and unnecessary resources",
                "License and usage terms",
                "Availability of complete source code",
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

          <Section icon={Download} title="Where to Find HTML Website Source Code">
            <p>
              Developers can find HTML website source code through template
              marketplaces, project repositories, development communities, and
              dedicated source-code platforms.
            </p>

            <p>
              If you are looking for ready-made website projects rather than
              starting from an empty HTML file, a source-code marketplace can
              make it easier to explore different categories and project types.
            </p>

            <p>
              <Link
                to="/blog/web-codshop/where-to-find-website-source-code"
                className="font-semibold text-red-400 transition hover:text-red-300"
              >
                Read our guide about where to find website source code
              </Link>{" "}
              for a broader overview of source-code options.
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
                Explore Website Source Code and Templates with WEB CODSHOP
              </h2>

              <p className="mt-5 max-w-3xl text-[16px] leading-8 text-slate-300">
                WEB CODSHOP is a marketplace for website source code, web
                templates, college projects, UI kits, and professional web
                development resources. Browse different project categories
                and find ready-made starting points for your next web project.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "HTML Website Templates",
                  "React.js Projects",
                  "Next.js Projects",
                  "Node.js Applications",
                  "MERN Stack Projects",
                  "PHP Scripts",
                  "Admin Dashboards",
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
                  Explore WEB CODSHOP
                  <ArrowRight size={18} />
                </Link>

                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 font-semibold text-white transition hover:bg-white/[0.1]"
                >
                  Get on Google Play
                  <ExternalLink size={17} />
                </a>
              </div>
            </div>
          </section>

          <Section icon={Lightbulb} title="How to Choose the Right HTML Template">
            <p>
              Start by defining the purpose of the website. A portfolio,
              business website, landing page, online store, and dashboard
              require different layouts.
            </p>

            <p>
              Next, review the template's responsive behavior and source-code
              organization. Check whether the pages and sections can be
              customized without replacing large parts of the template.
            </p>

            <p>
              Finally, review the assets, dependencies, browser support,
              performance, and license terms before using the template in a
              project.
            </p>
          </Section>

          {/* FAQ */}
          <section className="mb-16">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400">
                <Search size={21} />
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What is an HTML website template?",
                  a: "An HTML website template is a pre-built website structure containing HTML, CSS and often JavaScript files that can be customized for a project.",
                },
                {
                  q: "Are HTML templates suitable for business websites?",
                  a: "Yes. HTML templates can be used for business websites, company websites, landing pages, portfolios, service websites and many other web projects.",
                },
                {
                  q: "What should I check before choosing an HTML template?",
                  a: "Check responsive design, source code quality, browser compatibility, customization options, page structure, JavaScript dependencies and whether the template matches your project's purpose.",
                },
                {
                  q: "Where can I find HTML website source code?",
                  a: "Developers can find HTML website source code through template marketplaces, project repositories and dedicated source-code platforms such as WEB CODSHOP.",
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

          {/* Language + navigation */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/blog/web-codshop/where-to-find-website-source-code"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              <ArrowLeft size={17} />
              Previous: Where to Find Website Source Code
            </Link>

            <Link
              to="/blog/web-codshop/zh/best-html-website-templates"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition hover:text-red-300"
            >
              阅读中文版本
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Privacy */}
          <div className="mt-10 text-center">
            <a
              href={PRIVACY_URL}
              className="text-xs text-slate-500 transition hover:text-slate-300"
            >
              WEB CODSHOP Privacy Policy
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}