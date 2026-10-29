import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  Sparkles,
  Star,
  Globe,
  Palette,
  Brain,
  BookMarked,
  BadgeCheck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const books = [
  {
    title: "Cute Animals Coloring Book",
    subtitle: "A Fun and Easy Coloring Book for Kids Ages 3–8",
    description:
      "A cheerful collection of cute animal illustrations designed to give young children a fun, simple coloring activity.",
    category: "Coloring Book",
    audience: "Ages 3–8",
    cover: "images/books/cuteanimals.webp",
    amazonUrl: "https://a.co/d/0dzPZBGa", // Replace with the published Amazon book URL.
  },
  {
    title: "Kids Puzzle Book",
    subtitle: "Spot the Difference: Colourful Animal Puzzles",
    description:
      "Animal-themed spot-the-difference puzzles that encourage observation, concentration, and screen-free fun.",
    category: "Puzzle Book",
    audience: "Ages 4–8",
    cover: "images/books/puzzlebook.webp",
    amazonUrl: "https://a.co/d/0bViX16q", // Replace with the published Amazon book URL.
  },
  {
    title: "500 AI Prompts for Everything",
    subtitle: "A Practical Guide to Boost Productivity, Creativity and Learning with AI",
    description:
      "A collection of practical prompts for writing, studying, business, content creation, planning, and everyday tasks.",
    category: "AI Prompt Guide",
    audience: "General Readers",
    cover: "images/books/500-ai-prompts.webp",
    amazonUrl: "https://a.co/d/0fGzV16q", // Replace with the published Amazon book URL.
  },
];


function BookCard({ book, index }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-red-400/30 hover:bg-white/[0.065]"
    >
      <div className="relative mb-5 flex min-h-[270px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-red-500/10 via-white/[0.03] to-orange-500/10 p-5">
        <div className="absolute inset-0 bg-red-500/[0.04] opacity-0 transition group-hover:opacity-100" />
        <img
          src={book.cover}
          alt={`${book.title} book cover`}
          className="relative z-10 max-h-[260px] w-auto max-w-full rounded-md object-contain shadow-2xl shadow-black/40 transition duration-500 group-hover:scale-[1.03]"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget.nextElementSibling.style.display = "flex";
          }}
        />
        <div className="hidden min-h-[230px] w-full max-w-[190px] flex-col items-center justify-center rounded-xl border border-white/15 bg-[#10172b] p-5 text-center shadow-2xl">
          <BookOpen className="mb-4 text-red-400" size={34} />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">Book Cover {String(index + 1).padStart(2, "0")}</span>
          <span className="mt-3 text-lg font-black leading-tight text-white">{book.title}</span>
          <span className="mt-3 text-xs leading-5 text-slate-400">Add your cover image to show it here</span>
        </div>
        
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="text-xl font-bold leading-snug text-white">{book.title}</h3>
        <p className="mt-2 text-sm font-medium leading-6 text-red-200">{book.subtitle}</p>
        <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{book.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-300">{book.audience}</span>
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-300">Published work</span>
        </div>
        <a
          href={book.amazonUrl}
          target={book.amazonUrl !== "#" ? "_blank" : undefined}
          rel={book.amazonUrl !== "#" ? "noopener noreferrer" : undefined}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
        >
          View book <ArrowRight size={16} />
        </a>
      </div>
    </motion.article>
  );
}

export default function BookPortfolio() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Hero */}
      <section className="relative isolate px-6 pb-20 pt-28 sm:px-10 lg:px-16 lg:pb-28 lg:pt-36">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-red-500/10 blur-[120px]" />
          <div className="absolute right-[-8%] top-[5%] h-[480px] w-[480px] rounded-full bg-orange-500/10 blur-[140px]" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm font-medium text-red-300">
              <Sparkles size={15} /> Published Books
            </motion.div>
            <motion.h1 variants={fadeUp} className="max-w-3xl text-4xl font-black leading-[1.06] tracking-tight sm:text-5xl lg:text-7xl">
              Stories, ideas &
              <span className="block bg-gradient-to-r from-red-400 via-red-500 to-orange-400 bg-clip-text text-transparent">books worth exploring.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Welcome to Our publishing portfolio. Explore the books I have created for young readers, puzzle lovers, and people who want practical ideas for using AI in everyday life.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a href="#published-books" className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-1 hover:bg-red-400">
                Explore Our Books <ArrowRight size={18} />
              </a>
              <a href="#platforms" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3.5 font-semibold text-slate-200 transition hover:-translate-y-1 hover:bg-white/[0.1]">
                Publishing Platforms <Globe size={17} />
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2"><BadgeCheck size={16} className="text-red-400" /> Published projects</span>
              <span className="flex items-center gap-2"><Palette size={16} className="text-red-400" /> Creative topics</span>
              <span className="flex items-center gap-2"><Brain size={16} className="text-red-400" /> Learning & ideas</span>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-red-500/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                {books.slice(0, 2).map((book) => (
                  <div key={book.title} className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#0a1020] p-4 text-center">
                    <img src={book.cover} alt={`${book.title} cover`} className="max-h-[220px] max-w-full object-contain" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                    <span className="mt-3 text-sm font-bold text-white">{book.title}</span>
                  </div>
                ))}
                <div className="col-span-2 flex items-center gap-4 rounded-2xl border border-red-400/15 bg-red-500/[0.07] p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-300"><BookOpen size={24} /></div>
                  <div><p className="font-bold">From children’s activities to AI guides</p><p className="mt-1 text-sm leading-6 text-slate-400">A growing collection of independently published books.</p></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-12 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
          {[
            { value: "03", label: "Books featured", icon: BookOpen },
            { value: "Kids + Adults", label: "Different audiences", icon: Star },
            { value: "Multi-platform", label: "Publishing-ready portfolio", icon: Globe },
          ].map((item) => {
            const Icon = item.icon;
            return <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400"><Icon size={22} /></div><div><p className="font-bold text-white">{item.value}</p><p className="mt-1 text-sm text-slate-400">{item.label}</p></div></div>;
          })}
        </div>
      </section>

      {/* Books */}
      <section id="published-books" className="border-y border-white/5 bg-white/[0.015] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">The collection</span><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">My Published Books</h2><p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">Browse the books, learn what each one offers, and follow the link to its official listing.</p></div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"><BookOpen size={16} className="text-red-400" /> Featured titles</span>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }} className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {books.map((book, index) => <BookCard key={book.title} book={book} index={index} />)}
          </motion.div>
        </div>
      </section>

      

      {/* CTA */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-[2rem] border border-red-500/15 bg-gradient-to-br from-red-500/10 via-white/[0.025] to-orange-500/[0.04] p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div><span className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1.5 text-xs font-semibold text-red-300"><Sparkles size={14} /> Thank you for visiting</span><h2 className="mt-5 max-w-3xl text-3xl font-bold sm:text-4xl">Every book begins with an idea.</h2><p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">Thank you for exploring my publishing portfolio. Check out the book listings and follow along as I create more resources for readers, learners, and curious minds.</p><a href="#published-books" className="mt-7 inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3.5 font-semibold text-white transition hover:bg-red-400">Explore the collection <ArrowRight size={18} /></a></div>
              <div className="hidden h-36 w-36 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.05] text-red-300 lg:flex"><BookOpen size={66} strokeWidth={1.3} /></div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
