import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { translations } from "../locales";

const languages = [

     {
       code: "en",

       path: "/about",

       label: "🇺🇸 English",

     },

     {

       code: "zh",

       path: "/zh/about",

       label: "🇨🇳 简体中文",

     },

     {

       code: "es",

       path: "/es/about",

       label: "🇪🇸 Español",

     },

     {

       code: "pt",

       path: "/pt/about",

       label: "🇧🇷 Português",

     },

     {

       code: "de",

       path: "/de/about",

       label: "🇩🇪 Deutsch",

     },

     {

       code: "ko",

       path: "/ko/about",

       label: "🇰🇷 한국어",

     },

     {

       code: "ja",

       path: "/ja/about",

       label: "🇯🇵 日本語",

     },

];



const supportedLanguages = [

     "zh",

     "es",

     "pt",

     "de",

     "ko",

     "ja",

];

const About = () => {
     const { lang } = useParams();
     const navigate = useNavigate();
     const language = supportedLanguages.includes(lang)
       ? lang
       : "en";
     const t = translations[language] || translations.en;
     const aboutT = t.about || translations.en.about;
  // GSAP + ScrollTrigger power the page parallax and pinned horizontal gallery.
  const pageRef = useRef(null);
  const galleryRef = useRef(null);
  const galleryTrackRef = useRef(null);
  const galleryProgressRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;
    let refreshFrame;
    const track = galleryTrackRef.current;
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      // Keep decorative parallax subtle so it never shifts whole sections.
      gsap.utils.toArray("[data-parallax]", page).forEach((element) => {
        const direction = element.dataset.parallax === "reverse" ? 1 : -1;
        gsap.to(element, {
          y: () => direction * (element.dataset.parallax === "image" ? 45 : 70),
          ease: "none",
          scrollTrigger: {
            trigger: element.closest("section") || element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      const section = galleryRef.current;
      const progress = galleryProgressRef.current;
      if (!section || !track) return;

      media.add("(min-width: 1024px)", () => {
        const getDistance = () =>
          Math.max(0, track.scrollWidth - document.documentElement.clientWidth);

        gsap.set(track, { x: 0 });
        if (progress) gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });

        const distance = getDistance();
        if (distance <= 0) return undefined;

        const horizontalTween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            // The site navbar is fixed and about 96px tall; don't pin content beneath it.
            start: "top top+=96",
            end: () => `+=${getDistance()}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 1,
          },
        });

        if (progress) {
          gsap.to(progress, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top+=96",
              end: () => `+=${getDistance()}`,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }

        return () => horizontalTween.scrollTrigger?.kill();
      });
    }, page);

    const refresh = () => ScrollTrigger.refresh();
    const imageListeners = [];
    if (track) {
      track.querySelectorAll("img").forEach((img) => {
        if (!img.complete) {
          img.addEventListener("load", refresh);
          img.addEventListener("error", refresh);
          imageListeners.push(img);
        }
      });
    }
    refreshFrame = requestAnimationFrame(refresh);

    return () => {
      cancelAnimationFrame(refreshFrame);
      imageListeners.forEach((img) => {
        img.removeEventListener("load", refresh);
        img.removeEventListener("error", refresh);
      });
      media.revert();
      context.revert();
    };
  }, []);
     /* =====================================================
        AUTO LANGUAGE DETECTION
     ===================================================== */
     useEffect(() => {

       if (lang) return;
       const browserLanguage = navigator.language.toLowerCase();
       if (browserLanguage.startsWith("zh")) {
         navigate("/zh/about", { replace: true });
       } else if (browserLanguage.startsWith("es")) {

         navigate("/es/about", { replace: true });

       } else if (browserLanguage.startsWith("pt")) {

         navigate("/pt/about", { replace: true });

       } else if (browserLanguage.startsWith("de")) {

         navigate("/de/about", { replace: true });

       } else if (browserLanguage.startsWith("ko")) {

         navigate("/ko/about", { replace: true });

       } else if (browserLanguage.startsWith("ja")) {

         navigate("/ja/about", { replace: true });

       } else {

         navigate("/about", { replace: true });

       }

     }, [lang, navigate]);
     return (

       <>
         {/* =====================================================
             SEO
         ===================================================== */}
         <Helmet>

           <title>{aboutT.seo.title}</title>
           <meta
             name="description"
             content={aboutT.seo.description}
           />
           <meta
             name="keywords"
             content={aboutT.seo.keywords}

           />
           <meta
             name="author"
             content={aboutT.seo.author}
           />
           <meta
             property="og:title"
             content={aboutT.seo.ogTitle}
           />
           <meta
             property="og:description"
             content={aboutT.seo.ogDescription}
           />
           <meta
             property="og:image"
             content="https://chtechgiant.com/about.png"

           />
           <meta

             property="og:url"

             content={`https://chtechgiant.com${

               language === "en"

                 ? "/about"

                 : `/${language}/about`

             }`}
           />
           <meta property="og:type" content="website" />
           <meta
             name="twitter:card"
             content="summary_large_image"

           />
           <link

             rel="canonical"

             href={`https://chtechgiant.com${

               language === "en"

                 ? "/about"

                 : `/${language}/about`

             }`}

           />
           <meta

             name="theme-color"

             content="#050816"

           />
           {/* =====================================================
               STRUCTURED DATA
           ===================================================== */}
           <script type="application/ld+json">

             {JSON.stringify({

               "@context": "https://schema.org",

               "@type": "Organization",

               name: "CH TECH GIANT (OPC) PRIVATE LIMITED",

               legalName:

                 "CH TECH GIANT (OPC) PRIVATE LIMITED",

               url: "https://chtechgiant.com",

               logo: "https://chtechgiant.com/chtechgiant.png",

               description:

                 "Premium software development company offering app development, web development, software solutions, and digital services.",

               telephone: "+91-9980785020",

               email: "info@chtechgiant.com",

               identifier: {

                 "@type": "PropertyValue",

                 propertyID: "CIN",

                 value: "U62012KA2025OPC203976",

               },

               foundingDate: "2025-06-10",

               address: {

                 "@type": "PostalAddress",

                 streetAddress:

                   "1135/1, Behind BDO Office, Betur Road, Imam Nagara, Barline Road-Davanagere",

                 addressLocality: "Davanagere",

                 addressRegion: "Karnataka",

                 postalCode: "577001",

                 addressCountry: "IN",

               },

             })}

           </script>

         </Helmet>
         {/* =====================================================
             PAGE
         ===================================================== */}
         <div
  ref={pageRef}
  className="relative isolate min-h-screen w-full min-w-0 max-w-full overflow-x-clip bg-[#050816] px-4 pt-24 text-white sm:px-6 sm:pt-24 md:pt-0"
>
      {/* Parallax atmosphere — decorative only, existing content stays above it. */}
      <motion.div
        data-parallax="slow"
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-48 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[120px]"
      />
      <motion.div
        data-parallax="reverse"
        aria-hidden="true"
        className="pointer-events-none absolute top-[38%] -right-56 h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-[130px]"
      />
           <div className="mx-auto w-full min-w-0 max-w-7xl">
            {/* 
            LANGUAGE SWITCHER
            Same positioning as Services page */}
<div className="flex min-w-0 justify-center mb-2 md:mb-16">
     {/* MOBILE LANGUAGE DROPDOWN */}
     <div className="relative z-50 mb-6 flex w-full min-w-0 justify-end md:hidden">

       <select

         id="mobile-language"

         value={language}

         onChange={(e) => {

           const selectedLanguage = languages.find(

             (item) => item.code === e.target.value

           );
           if (selectedLanguage) {

             navigate(selectedLanguage.path);

           }

         }}

         className="h-10 w-32 rounded-xl border border-white/20 bg-[#050816] px-3 text-sm text-white outline-none backdrop-blur-xl focus:border-cyan-400 transition cursor-pointer"
       >
         {languages.map((item) => (

           <option

             key={item.code}

             value={item.code}

             className="bg-[#050816] text-white"
           >
             {item.label}
           </option>
         ))}
       </select>
     </div>
     {/* DESKTOP LANGUAGE BUTTONS */}
     <div className="hidden md:flex justify-center gap-3 flex-wrap pt-20">

       {languages.map((item) => (
         <button

           key={item.code}

           type="button"

           onClick={() => navigate(item.path)}

           className={`px-5 py-2 rounded-full border transition ${

             language === item.code

               ? "bg-cyan-500 text-black border-cyan-500"

               : "border-white/20 hover:border-cyan-500"

           }`}
         >

           {item.label}

         </button>

       ))}
     </div>
</div>
             {/* =================================================
                 HEADER
             ================================================= */}
             <motion.div
               initial={{
                 opacity: 0,
                 y: 30,
               }}
               animate={{
                 opacity: 1,
                 y: 0,
               }}
               transition={{
                 duration: 0.7,
               }}
               className="mx-auto mb-14 w-full min-w-0 max-w-5xl pt-4 text-center sm:mb-24 sm:pt-12"             
               >
               <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gray-400 sm:text-sm sm:tracking-[5px]">

                 {aboutT.hero.eyebrow}

               </p>
               <h1 className="mb-6 break-words text-3xl font-black leading-tight sm:mb-8 sm:text-4xl md:text-7xl">
                 {aboutT.hero.title}
                 <span className="block text-white/80">

                   {aboutT.hero.titleHighlight}

                 </span>
               </h1>
               <p className="mx-auto max-w-4xl break-words px-1 text-base leading-relaxed text-gray-400 sm:text-lg">

                 {aboutT.hero.description}

               </p>
             </motion.div>
             {/* =================================================
                 MAIN SECTION
             ================================================= */}
             <div className="mb-16 grid w-full min-w-0 grid-cols-1 items-center gap-10 sm:gap-12 lg:mb-24 lg:grid-cols-2 lg:gap-20">
               {/* IMAGE */}
               {/* RESPONSIVE ABOUT IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="relative mx-auto w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl sm:rounded-3xl"
                >
                  <img
                    src="/about/about.png"
                    alt="CH TECH GIANT — Software, Website, App and IT Services"
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full max-w-full object-contain"
                    style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                  />
                </motion.div>
               {/* CONTENT */}
               <motion.div
                 className="min-w-0"
                 initial={{
                   opacity: 0,
                   x: 0,
                 }}
                 animate={{
                   opacity: 1,
                   x: 0,
                 }}
                 transition={{

                   duration: 0.8,

                 }}
               >
                 <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8">
                   {aboutT.main.title}
                 </h2>
                 {aboutT.main.paragraphs.map(
                   (paragraph, index) => (
                     <p
                       key={index}
                       className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 last:mb-0"
                     >
                       {paragraph}
                     </p>
                   )

                 )}
               </motion.div>
             </div>
             {/* =================================================
                 COMPANY INFORMATION
             ================================================= */}
             <section className="mb-24">
               <motion.div
                 initial={{
                   opacity: 0,
                   y: 30,
                 }}
                 whileInView={{
                   opacity: 1,
                   y: 0,
                 }}
                 viewport={{
                   once: true,
                 }}
                 className="text-center mb-16"
               >
                 <p className="text-gray-400 uppercase tracking-[5px] mb-4">
                   {aboutT.company.eyebrow}
                 </p>
                 <h2 className="text-3xl md:text-5xl font-black">
                   {aboutT.company.title}
                   <span className="text-cyan-400">

                     {" "}

                     {aboutT.company.titleHighlight}

                   </span>
                 </h2>
               </motion.div>
               <motion.div

                 initial={{
                   opacity: 0,
                   y: 40,
                 }}
                 whileInView={{
                   opacity: 1,
                   y: 0,
                 }}
                 viewport={{
                   once: true,
                 }}
                 transition={{
                   duration: 0.7,
                 }}
                 className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-xl"
               >
                 <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                   {/* LEGAL NAME */}
                   <div>
                     <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                       {aboutT.company.legalNameLabel}
                     </p>
                     <p className="text-white text-lg font-semibold">
                       {aboutT.company.legalName}
                     </p>
                   </div>
                   {/* CIN */}
                   <div>
                     <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                       {aboutT.company.cinLabel}
                     </p>
                     <p className="text-cyan-400 text-lg font-semibold break-all">
                       {aboutT.company.cin}
                     </p>
                   </div>
                   {/* ENTITY TYPE */}
                   <div>
                     <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                       {aboutT.company.entityTypeLabel}
                     </p>
                     <p className="text-white text-lg font-semibold">
                       {aboutT.company.entityType}
                     </p>
                   </div>
                   {/* INCORPORATION */}
                   <div>
                     <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                       {aboutT.company.incorporationLabel}
                     </p>
                     <p className="text-white text-lg font-semibold">
                       {aboutT.company.incorporation}
                     </p>
                   </div>
                   {/* ROC */}
                   <div>
                     <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                       {aboutT.company.rocLabel}
                     </p>
                     <p className="text-white text-lg font-semibold">
                       {aboutT.company.roc}
                     </p>
                   </div>
                   {/* DIRECTOR */}
                   <div>
                     <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">

                       {aboutT.company.directorLabel}

                     </p>
                     <p className="text-white text-lg font-semibold">

                       {aboutT.company.director}

                     </p>
                   </div>
                   {/* APPOINTMENT DATE */}
                   <div>
                     <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">

                       {aboutT.company.appointmentLabel}

                     </p>
                     <p className="text-white text-lg font-semibold">

                       {aboutT.company.appointmentDate}

                     </p>
                   </div>
                   {/* REGISTERED ADDRESS */}
                   <div className="md:col-span-2">



                     <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">

                       {aboutT.company.addressLabel}

                     </p>
                     <p className="text-gray-300 text-base md:text-lg leading-relaxed">

                       {aboutT.company.address}

                     </p>
                   </div>
                 </div>
               </motion.div>
             </section>
             {/* =================================================
                 SERVICES
             ================================================= */}

             <section className="mb-24">
               <motion.div
                 initial={{
                   opacity: 0,
                   y: 30,
                 }}
                 whileInView={{
                   opacity: 1,
                   y: 0,
                 }}
                 viewport={{
                   once: true,
                 }}
                 className="text-center mb-16"
               >
                 <p className="text-gray-400 uppercase tracking-[5px] mb-4">

                   {aboutT.services.eyebrow}
                 </p>
                 <h2 className="text-3xl md:text-5xl font-black">
                   {aboutT.services.title}
                   <span className="text-cyan-400">
                     {" "}
                     {aboutT.services.titleHighlight}
                   </span>
                 </h2>
               </motion.div>
               <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
                 {aboutT.services.items.map(
                   (service, index) => (
                     <motion.div
                       key={index}
                       initial={{
                         opacity: 0,
                         y: 30,
                       }}
                       whileInView={{
                         opacity: 1,
                         y: 0,
                       }}
                       transition={{
                         delay: index * 0.08,
                       }}
                       viewport={{
                         once: true,
                       }}
                       className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-xl hover:border-cyan-400/30 transition"
                     >
                       <p className="text-gray-300 font-medium">
                         {service}
                       </p>
                     </motion.div>

                   )
                 )}
               </div>
             </section>
             {/* =================================================
                 FEATURES
             ================================================= */}

             <div className="mb-24">
               <motion.div
                 initial={{
                   opacity: 0,
                   y: 30,
                 }}
                 whileInView={{
                   opacity: 1,
                   y: 0,
                 }}
                 viewport={{
                   once: true,
                 }}

                 className="text-center mb-16"

               >
                 <p className="text-gray-400 uppercase tracking-[5px] mb-4">

                   {aboutT.features.eyebrow}

                 </p>
                 <h2 className="text-3xl md:text-5xl font-black">
                   {aboutT.features.title}
                   <span className="text-cyan-400">

                     {" "}

                     {aboutT.features.titleHighlight}

                   </span>
                 </h2>

               </motion.div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {aboutT.features.items.map(

                   (feature, index) => (

                     <motion.div

                       key={index}

                       initial={{

                         opacity: 0,

                         y: 40,

                       }}

                       whileInView={{

                         opacity: 1,

                         y: 0,

                       }}

                       transition={{

                         duration: 0.6,

                         delay: index * 0.1,

                       }}

                       viewport={{

                         once: true,

                       }}

                       whileHover={{
                         y: -8,

                       }}
                       className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/30 transition"
                     >
                       <h3 className="text-2xl font-bold mb-5">

                         {feature.title}

                       </h3>
                       <p className="text-gray-400 leading-relaxed">

                         {feature.description}

                       </p>
                     </motion.div>
                   )
                 )}
               </div>
             </div>
             {/* =================================================
                 TECHNOLOGIES
             ================================================= */}
             <section className="mb-24">
               <motion.div

                 initial={{

                   opacity: 0,

                   y: 30,

                 }}

                 whileInView={{

                   opacity: 1,

                   y: 0,

                 }}

                 viewport={{

                   once: true,

                 }}

                 className="text-center mb-16"

               >
                 <p className="text-gray-400 uppercase tracking-[5px] mb-4">

                   {aboutT.technologies.eyebrow}

                 </p>
                 <h2 className="text-3xl md:text-5xl font-black">
                   {aboutT.technologies.title}
                   <span className="text-cyan-400">
                     {" "}
                     {aboutT.technologies.titleHighlight}

                   </span>
                 </h2>
               </motion.div>
               <div className="flex flex-wrap justify-center gap-4">
                 {aboutT.technologies.items.map(
                   (tech, index) => (
                     <motion.div
                       key={index}
                       initial={{
                         opacity: 0,
                         scale: 0.9,
                       }}
                       whileInView={{
                         opacity: 1,
                         scale: 1,
                       }}
                       transition={{
                         delay: index * 0.05,
                       }}
                       viewport={{
                         once: true,
                       }}
                       className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 backdrop-blur-xl hover:border-cyan-400/30 transition"
                     >

                       {tech}

                     </motion.div>
                   )
                 )}
               </div>
             </section>
             {/*PROCESS*/}
             <section className="mb-24">
               <motion.div

                 initial={{
                   opacity: 0,
                   y: 30,
                 }}
                 whileInView={{
                   opacity: 1,
                   y: 0,
                 }}
                 viewport={{
                   once: true,
                 }}
                 className="text-center mb-16"
               >
                 <p className="text-gray-400 uppercase tracking-[5px] mb-4">
                   {aboutT.process.eyebrow}
                 </p>
                 <h2 className="text-3xl md:text-5xl font-black">
                   {aboutT.process.title}
                   <span className="text-cyan-400">

                     {" "}

                     {aboutT.process.titleHighlight}

                   </span>
                 </h2>
               </motion.div>
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                 {aboutT.process.items.map(

                   (step, index) => (

                     <motion.div

                       key={index}

                       initial={{

                         opacity: 0,

                         y: 30,

                       }}

                       whileInView={{

                         opacity: 1,

                         y: 0,

                       }}

                       transition={{

                         delay: index * 0.08,

                       }}

                       viewport={{

                         once: true,

                       }}

                       className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-xl hover:border-cyan-400/30 transition"

                     >



                       <div className="text-cyan-400 text-2xl font-black mb-3">

                         0{index + 1}

                       </div>



                       <p className="text-gray-300">

                         {step}

                       </p>
                     </motion.div>

                   )

                 )}
               </div>
             </section>

             
{/* SCROLL-DRIVEN HORIZONTAL PROJECT GALLERY */}
<section
  ref={galleryRef}
  className="relative w-full min-w-0 max-w-full"
  aria-label="CH TECH GIANT visual gallery"
>
  <div className="relative flex min-h-[70svh] flex-col justify-center overflow-hidden py-12 lg:min-h-0 lg:py-8">
    {/* Gallery heading */}
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 mb-8 px-1 md:mb-10"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
        Ideas in motion
      </p>

      <h2 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl">
        A closer look at{" "}
        <span className="text-amber-100">what we create.</span>
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
        Scroll to explore our world of apps, web experiences,
        software, and digital design.
      </p>
    </motion.div>

    {/* Single horizontal scrolling container */}
    <div className="w-full overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible">
      <div
        ref={galleryTrackRef}
        className="flex w-max items-stretch gap-5 pl-1 pr-6 md:gap-8 lg:gap-[4vw] lg:pl-[9vw] lg:pr-[9vw]"
      >
        {[
          {
            title: "Web experiences",
            category: "WEB DEVELOPMENT",
            image: "/services/web.webp",
            alt: "Website design and web development showcase",
          },
          {
            title: "Apps that connect",
            category: "APP DEVELOPMENT",
            image: "/services/app.webp",
            alt: "Mobile application development showcase",
          },
          {
            title: "Thoughtful design",
            category: "UI / UX DESIGN",
            image: "/services/pamphlet.webp",
            alt: "Digital design and creative design showcase",
          },
          {
            title: "Engineering ideas",
            category: "SOFTWARE DEVELOPMENT",
            image: "/services/software.webp",
            alt: "Software development showcase",
          },
          {
            title: "Built for performance",
            category: "DIGITAL SOLUTIONS",
            image: "/services/itconsult.webp",
            alt: "IT consulting and digital solutions showcase",
          },
          {
            title: "From concept to launch",
            category: "GAME DEVELOPMENT",
            image: "/services/game.webp",
            alt: "Game development showcase",
          },
        ].map((item, index) => (
          <motion.article
            key={item.title}
            whileHover={{ y: -5 }}
            className="group relative flex w-[86vw] max-w-[620px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080b12] sm:w-[72vw] md:w-[55vw] lg:w-[34vw]"
          >
            {/* Complete image: no cropping or zoom */}
            <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-[#080b12]">
              <img
                src={item.image}
                alt={item.alt}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                draggable="false"
                className="block h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Readable text overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/20 to-transparent" />

              <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs text-white/90 backdrop-blur-md md:right-5 md:top-5">
                {String(index + 1).padStart(2, "0")} / 06
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8">
                <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-amber-100/90 sm:text-xs sm:tracking-[0.28em]">
                  {item.category}
                </p>

                <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
                  {item.title}
                </h3>

                <span className="mt-4 block h-px w-14 bg-amber-100 transition-all duration-500 group-hover:w-24" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>

    {/* Scroll progress indicator */}
    <div className="mt-6 flex items-center gap-3 px-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-500 lg:absolute lg:bottom-2 lg:left-[9vw] lg:mt-0">
      <span className="h-px w-10 shrink-0 bg-amber-200" />
      <span>Keep scrolling to explore</span>
    </div>

    <div className="absolute bottom-0 left-6 right-6 h-px bg-white/10 lg:left-[9vw] lg:right-[9vw]">
      <div
        ref={galleryProgressRef}
        className="h-px w-full origin-left bg-amber-100/80"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  </div>
</section>


        {/* EXTRA COMPANY STORY — added section */}
        <section className="relative mb-24 overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/[0.03] to-blue-500/10 px-7 py-12 md:px-14 md:py-16">
          <motion.div data-parallax="reverse" aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-cyan-400/10" />
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
          >
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">Beyond the code</p>
              <h2 className="mb-6 text-3xl font-black leading-tight md:text-5xl">Technology built around <span className="text-cyan-400">real people.</span></h2>
              <p className="max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
                At CH TECH GIANT, we bring design, engineering, and practical problem-solving together to create digital products that are useful, dependable, and ready to grow. From the first idea to launch and ongoing improvements, we focus on clear communication and thoughtful execution.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { number: "01", title: "Understand", description: "Start with your goals, audience, and real-world requirements." },
                { number: "02", title: "Design", description: "Plan a clear, intuitive experience for every screen size." },
                { number: "03", title: "Build", description: "Develop maintainable solutions with care and attention to detail." },
                { number: "04", title: "Improve", description: "Keep refining the product as your business evolves." },
              ].map((item, index) => (
                <motion.div key={item.number} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} whileHover={{ y: -5 }} className="rounded-2xl border border-white/10 bg-[#050816]/55 p-5 backdrop-blur-xl transition-colors hover:border-cyan-400/40">
                  <span className="mb-4 block text-sm font-black tracking-widest text-cyan-400">{item.number}</span>
                  <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* =================================================
                 MISSION
            ================================================= */}
             <motion.div
               initial={{
                 opacity: 0,
                 y: 40,

               }}

               whileInView={{
                 opacity: 1,
                 y: 0,
               }}
               viewport={{
                 once: true,

               }}
               className="mb-16 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-white/5 p-6 text-center sm:mb-24 sm:rounded-[40px] sm:p-8 md:p-16"
             >
               <p className="text-cyan-400 uppercase tracking-[5px] mb-4">

                 {aboutT.mission.eyebrow}

               </p>



               <h2 className="text-3xl md:text-6xl font-black leading-tight mb-8">
                 {aboutT.mission.title}
                 <span className="text-cyan-400">

                   {" "}

                   {aboutT.mission.titleHighlight}

                 </span>
               </h2>
               <p className="max-w-4xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">

                 {aboutT.mission.description}

               </p>
             </motion.div>
           </div>

         </div>
       </>
     );
};

export default About;