import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CGPA SGPA Calculator",
    category: "app",
    description: "Smart CGPA & SGPA calculation mobile app.",
    image: "/projects/cgpacalculator.jpg",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.ch_cgpa_sgpa_calculator&pcampaignid=web_share",
  },

  {
    title: "File Converter",
    category: "app",
    description: "Advanced multi-format file conversion tool.",
    image: "/projects/fileconverter.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.everything_converter&pcampaignid=web_share",
  },

  {
    title: "World Clock App",
    category: "app",
    description: "Modern world timezone tracking application.",
    image: "/projects/worldclock.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.worldclock&pcampaignid=web_share",
  },

  {
    title: "File Renamer",
    category: "app",
    description: "Batch file renaming utility app.",
    image: "/projects/filerenamer.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.file_name_cleaner&pcampaignid=web_share",
  },

  {
    title: "Invoice Maker",
    category: "app",
    description: "Professional invoice generation app.",
    image: "/projects/invoicemaker.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.invoice_generator_app&pcampaignid=web_share",
  },

  {
    title: "Image To PDF",
    category: "app",
    description: "Convert images into high quality PDF files.",
    image: "/projects/img2pdf copy.png",
    link: "https://play.google.com/store/apps/details?id=com.chtechgiant.image_to_pdf_converter&pcampaignid=web_share",
  },
];

const filters = ["all", "web", "app", "software", "game"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <div className="min-h-screen bg-[#050816] text-white px-6 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[4px] mb-3">
            Our Portfolio
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Featured <span className="text-cyan-400">Projects</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Explore premium websites, mobile apps, software,
            and game development projects crafted by
            CH TECH GIANT.
          </p>
        </motion.div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full capitalize font-semibold transition-all duration-300 border ${
                activeFilter === filter
                  ? "bg-cyan-500 text-black border-cyan-400 shadow-lg shadow-cyan-500/30"
                  : "bg-white/5 border-white/10 text-gray-300 hover:border-cyan-400"
              }`}
            >
              {filter}
            </button>
          ))}

        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              {/* IMAGE */}
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <div className="mb-4">
                  <span className="px-4 py-1 rounded-full text-xs uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* BUTTON */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-cyan-400 font-semibold hover:text-cyan-300 transition"
                >
                  View Project →
                </a>

              </div>

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition duration-500"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Portfolio;