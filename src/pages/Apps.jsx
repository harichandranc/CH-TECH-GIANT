import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaDownload, FaSearch } from "react-icons/fa";

import apps from "../data/appsData";

const categories = [
  "All",
  ...new Set(apps.map((app) => app.category)),
];

const Apps = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredApps = useMemo(() => {
    return apps.filter((app) => {
      const matchesCategory =
        category === "All" || app.category === category;

      const matchesSearch =
        (app.title || "")
            .toLowerCase()
            .includes(search.toLowerCase()) ||
        (app.description || "")
            .toLowerCase()
            .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
    {/* HERO */}
<section className="relative py-24 px-6">

  <div className="max-w-7xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >

      <span className="inline-block px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-semibold mb-6">
        Official CH TECH GIANT Apps
      </span>

      <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
        Download Our
        <span className="text-cyan-400"> Android Apps</span>
      </h1>

      <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8">
        Discover high-quality productivity, PDF, business,
        education and utility applications developed by
        <span className="text-cyan-400">
          {" "}
          CH TECH GIANT (OPC) PRIVATE LIMITED
        </span>.
      </p>

    </motion.div>

    {/* STATS */}

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16"
    >

      <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
        <h2 className="text-4xl font-black text-cyan-400">
          {apps.length}
        </h2>
        <p className="text-gray-400 mt-2">
          Applications
        </p>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
        <h2 className="text-4xl font-black text-cyan-400">
          100%
        </h2>
        <p className="text-gray-400 mt-2">
          Free Download
        </p>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
        <h2 className="text-4xl font-black text-cyan-400">
          Android
        </h2>
        <p className="text-gray-400 mt-2">
          Supported
        </p>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
        <h2 className="text-4xl font-black text-cyan-400">
          24×7
        </h2>
        <p className="text-gray-400 mt-2">
          Updates
        </p>
      </div>

    </motion.div>

    {/* SEARCH */}

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .3 }}
      className="mt-14 max-w-3xl mx-auto relative"
    >

      <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

      <input
        type="text"
        placeholder="Search applications..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-2xl h-16 pl-16 pr-6 outline-none focus:border-cyan-400 transition text-white placeholder:text-gray-500"
      />

    </motion.div>

    {/* CATEGORY */}

    <div className="flex flex-wrap justify-center gap-4 mt-12">

      {categories.map((item) => (

        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-6 py-3 rounded-full transition font-semibold border

          ${
            category === item

              ? "bg-cyan-500 text-black border-cyan-400 shadow-lg shadow-cyan-500/30"

              : "bg-white/5 border-white/10 hover:border-cyan-400"

          }`}
        >

          {item}

        </button>

      ))}

    </div>

  </div>

</section>
{/* APPS GRID */}

<section className="px-6 pb-24">

  <div className="max-w-7xl mx-auto">

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
    >

      <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
        Our Applications
      </h2>

      <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
        Download our latest Android applications directly from
        Google Play or install the official APK.
      </p>

    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {filteredApps.map((app, index) => (

        <motion.div
          key={app.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: .5,
            delay: index * .08,
          }}
          whileHover={{
            y: -8,
          }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl group"
        >

          {/* Featured */}

          {app.featured && (

            <div className="absolute top-4 left-4 z-20">

              <span className="px-3 py-1 rounded-full bg-cyan-500 text-black text-xs font-bold">

                FEATURED

              </span>

            </div>

          )}

          {/* Image */}

          <div className="h-60 bg-black flex items-center justify-center p-6 overflow-hidden">

            <img
              src={app.image}
              alt={app.title}
              className="h-full object-contain transition duration-500 group-hover:scale-105"
            />

          </div>

          {/* Content */}

          <div className="p-6">

            <div className="flex justify-between items-center mb-4">

              <span className="text-cyan-400 text-sm font-semibold">

                {app.category}

              </span>

              <span className="text-gray-500 text-xs">

                {app.updated}

              </span>

            </div>

            <h3 className="text-2xl font-bold mb-3">

              {app.title}

            </h3>

            <p className="text-gray-400 leading-7 mb-6">

              {app.description}

            </p>

            {/* Version */}

            <div className="flex justify-between text-sm text-gray-400 border-t border-white/10 border-b border-white/10 py-4">

              <div>

                <p className="text-gray-500">

                  Version

                </p>

                <p className="font-semibold text-white">

                  {app.version}

                </p>

              </div>

              <div>

                <p className="text-gray-500">

                  Size

                </p>

                <p className="font-semibold text-white">

                  {app.size}

                </p>

              </div>

            </div>

                        {/* ACTION BUTTONS */}

            <div className="grid grid-cols-2 gap-4 mt-8">

              <a
                href={app.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold h-12 transition duration-300 shadow-lg shadow-cyan-500/30"
              >
                <FaGooglePlay />
                Google Play
              </a>

              <a
                href={app.apk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold h-12 transition duration-300"
              >
                <FaDownload />
                APK
              </a>

            </div>

          </div>

          {/* Hover Glow */}

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition duration-500" />

        </motion.div>

      ))}

    </div>

    {/* Empty State */}

    {filteredApps.length === 0 && (

      <div className="text-center py-24">

        <h2 className="text-3xl font-bold mb-4">
          No Applications Found
        </h2>

        <p className="text-gray-400">
          Try searching with another keyword.
        </p>

      </div>

    )}

    {/* CTA */}

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="mt-28"
    >

      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl p-12 text-center">

        <h2 className="text-4xl font-black mb-5">

          More Apps Coming Soon 🚀

        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto leading-8">

          We continuously build powerful Android applications,
          productivity tools, business software and utility apps.
          Bookmark this page to stay updated with our latest releases.

        </p>

      </div>

    </motion.div>

  </div>

</section>

</div>

  );
};

export default Apps;