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
    title: "HTML 网站模板",
    description:
      "适用于不同项目和使用场景的即用型 HTML 网站模板。",
  },
  {
    icon: Palette,
    title: "CSS 与 JavaScript 项目",
    description:
      "前端项目、UI 元素以及基于 JavaScript 的网页开发资源。",
  },
  {
    icon: Layers3,
    title: "React.js 项目",
    description:
      "现代 React.js 项目以及可复用的网站源代码。",
  },
  {
    icon: Monitor,
    title: "Next.js 项目",
    description:
      "适用于现代 Web 应用开发的 Next.js 项目。",
  },
  {
    icon: Code2,
    title: "Node.js 应用",
    description:
      "Node.js 应用程序以及面向后端开发的 Web 项目。",
  },
  {
    icon: Layers3,
    title: "MERN Stack 项目",
    description:
      "结合现代 Web 技术的全栈 MERN 项目。",
  },
  {
    icon: FileCode2,
    title: "PHP 脚本",
    description:
      "适用于 Web 开发的 PHP 脚本和网站项目。",
  },
  {
    icon: LayoutDashboard,
    title: "管理后台",
    description:
      "管理后台界面以及 Admin Panel 源代码。",
  },
  {
    icon: Monitor,
    title: "Landing Page",
    description:
      "适用于网站和营销活动的专业 Landing Page 模板。",
  },
  {
    icon: Briefcase,
    title: "个人作品集网站",
    description:
      "适用于专业人士、开发者和创作者的 Portfolio 网站项目。",
  },
  {
    icon: ShoppingCart,
    title: "电子商务网站",
    description:
      "电子商务网站模板以及在线商店项目。",
  },
  {
    icon: Store,
    title: "企业网站",
    description:
      "为企业、公司和组织设计的网站模板。",
  },
];

const benefits = [
  "在一个平台中浏览网站源代码和网站模板。",
  "探索适用于多种 Web 技术的项目。",
  "为个人、学习、自由职业和商业项目寻找开发资源。",
  "使用现有项目资源作为开发起点，节省开发时间。",
  "如果找不到需要的项目，可以提交定制项目请求。",
  "通过移动应用随时随地访问 WEB CODSHOP。",
];

const faqs = [
  {
    question: "什么是 WEB CODSHOP？",
    answer:
      "WEB CODSHOP 是一个专注于网站源代码、网站模板以及专业 Web 开发资源的数字平台。",
  },
  {
    question: "谁可以使用 WEB CODSHOP？",
    answer:
      "WEB CODSHOP 面向开发者、自由职业者、创业公司、数字机构、企业主以及其他需要网站开发资源的用户。",
  },
  {
    question: "WEB CODSHOP 提供哪些类型的项目？",
    answer:
      "平台提供 HTML 网站模板、CSS 和 JavaScript 项目、React.js 项目、Next.js 项目、Node.js 应用、MERN Stack 项目、PHP 脚本、管理后台、Landing Page、个人作品集网站、电子商务模板、企业网站以及 UI 资源等。",
  },
  {
    question: "WEB CODSHOP 支持不同的 Web 技术吗？",
    answer:
      "支持。平台包含 HTML、CSS、JavaScript、React.js、Next.js、Node.js、MERN Stack 和 PHP 等多种 Web 技术相关资源。",
  },
  {
    question: "如果找不到需要的项目，可以提交项目请求吗？",
    answer:
      "可以。如果用户无法找到需要的网站资源或项目，可以使用 WEB CODSHOP 提供的定制项目请求选项。",
  },
  {
    question: "在哪里可以下载 WEB CODSHOP？",
    answer:
      "WEB CODSHOP 可以通过支持的应用商店以及直接 APK 下载方式获取。",
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

export default function WebCodshopZh() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative isolate px-6 pb-20 pt-28 sm:px-10 lg:px-16 lg:pb-28 lg:pt-36">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-red-400">
                  <Sparkles size={14} />
                  WEB CODSHOP
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              >
                网站源代码与
                <span className="text-red-400">
                  {" "}
                  Web 开发资源
                </span>
                平台
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
              >
                WEB CODSHOP 是一个专业的网站源代码、网站模板和
                Web 开发资源平台。开发者、自由职业者、创业公司、
                数字机构和企业主都可以在这里寻找适合自己项目的开发资源。
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
                  下载应用
                </a>

                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3.5 font-semibold text-slate-200 transition-all hover:-translate-y-1 hover:bg-white/[0.1]"
                >
                  探索功能
                  <ArrowRight size={18} />
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400"
              >
                <span className="flex items-center gap-2">
                  <Check size={16} className="text-red-400" />
                  网站模板
                </span>

                <span className="flex items-center gap-2">
                  <Check size={16} className="text-red-400" />
                  源代码
                </span>

                <span className="flex items-center gap-2">
                  <Check size={16} className="text-red-400" />
                  Web 项目
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
                  src="/assets/images/webcodshop-banner.png"
                  alt="WEB CODSHOP 网站源代码和 Web 开发资源平台"
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
                      Web 开发
                    </p>

                    <p className="text-xs text-slate-400">
                      模板与源代码
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
                获取 WEB CODSHOP
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                随时随地探索 Web 开发资源
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                通过你喜欢的平台下载 WEB CODSHOP，
                探索网站源代码、模板以及专业 Web 开发资源。
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                <StoreButton
                  icon={Download}
                  title="Google Play"
                  subtitle="从以下平台下载"
                  href="https://play.google.com/store/apps/details?id=com.chtechgiant.webcodshop"
                />

                <StoreButton
                  icon={Globe}
                  title="Huawei AppGallery"
                  subtitle="应用商店"
                  href="https://appgallery.huawei.com/app/CPLACEHOLDER"
                />

                <StoreButton
                  icon={Smartphone}
                  title="Xiaomi GetApps"
                  subtitle="应用商店"
                  href="https://global.app.mi.com/details?appId=com.chtechgiant.webcodshop"
                />

                <StoreButton
                  icon={Download}
                  title="直接下载 APK"
                  subtitle="下载"
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
              关于 WEB CODSHOP
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              网站源代码与 Web 开发资源平台
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              WEB CODSHOP 帮助开发者、自由职业者、创业公司、
              数字机构和企业主寻找高质量的网站项目和开发资源。
              无需每次都从零开始，你可以探索现有的网站源代码、
              模板和 Web 项目，从而帮助加快开发流程。
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
                探索分类
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                适用于不同技术和开发需求的 Web 项目
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
                浏览不断扩展的网站模板、源代码、应用程序
                以及专业 Web 开发资源。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-white/8 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/30 hover:bg-white/[0.06]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {category.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          TARGET USERS
      ========================================================== */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-6xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              适合谁使用
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              为不同类型的 Web 开发用户打造
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-400">
              无论你是开发者、学生、自由职业者还是企业主，
              WEB CODSHOP 都可以帮助你寻找合适的网站开发资源。
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                icon: Code2,
                title: "开发者",
                description:
                  "寻找源代码、Web 项目和开发资源，加快项目开发。",
              },
              {
                icon: Laptop,
                title: "自由职业者",
                description:
                  "寻找适合客户网站项目的模板和开发资源。",
              },
              {
                icon: Rocket,
                title: "创业公司",
                description:
                  "使用现有 Web 项目资源帮助更快构建产品。",
              },
              {
                icon: Briefcase,
                title: "企业与机构",
                description:
                  "寻找企业网站、Landing Page 和电子商务项目。",
              },
            ].map((user) => {
              const Icon = user.icon;

              return (
                <motion.div
                  key={user.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-white/8 bg-white/[0.035] p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {user.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {user.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          WHY WEB CODSHOP
      ========================================================== */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-gradient-to-br from-red-500/[0.08] via-white/[0.025] to-transparent">

            <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                  为什么选择 WEB CODSHOP？
                </span>

                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  从适合你项目的资源开始
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-400">
                  WEB CODSHOP 将网站源代码、模板和 Web 开发资源
                  集中在一个平台中，并覆盖多种技术和项目类别。
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
              使用方式
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              为你的项目寻找合适的资源
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {[
              {
                number: "01",
                icon: Search,
                title: "探索",
                description:
                  "浏览网站模板、源代码以及 Web 开发资源。",
              },
              {
                number: "02",
                icon: Layers3,
                title: "选择",
                description:
                  "探索不同项目类别，寻找与你需求相关的资源。",
              },
              {
                number: "03",
                icon: Rocket,
                title: "更快开发",
                description:
                  "使用合适的项目资源作为开发起点。",
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: Number(step.number) * 0.08,
                  }}
                  className="relative rounded-2xl border border-white/8 bg-white/[0.035] p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                      <Icon size={23} />
                    </div>

                    <span className="text-4xl font-black text-white/5">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {step.title}
                  </h3>

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
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3"
          >
            <div className="absolute -inset-20 -z-10 bg-red-500/10 blur-[120px]" />

            <img
              src="/assets/images/webcodshop-banner.png"
              alt="WEB CODSHOP 网站模板和源代码"
              className="w-full rounded-[1.5rem] object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-5xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              常见问题
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              关于 WEB CODSHOP 的常见问题
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

                  <span className="flex-1">
                    {faq.question}
                  </span>

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
              了解更多关于 WEB CODSHOP 的信息
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              阅读 WEB CODSHOP 隐私政策，
              了解应用如何处理信息以及第三方服务。
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">

              <a
                href="https://chtechgiant.com/apps/web-codshop/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 font-semibold text-white transition hover:bg-white/[0.1]"
              >
                隐私政策
                <ExternalLink size={16} />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.chtechgiant.webcodshop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-400"
              >
                获取应用
                <ArrowRight size={17} />
              </a>

            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}