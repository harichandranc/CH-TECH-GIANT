import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="h-screen flex items-center justify-center px-6 relative">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-blue-900/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            CH Tech Giant
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-10"
          >
            Web Development • App Development • UI/UX Design
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4 flex-wrap"
          >

            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
              Get Started
            </button>

            <button className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition">
              View Portfolio
            </button>

          </motion.div>

        </div>

      </section>
            {/* ABOUT SECTION */}
      <section className="py-32 px-6 bg-[#050505]">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-blue-400 font-semibold mb-4">
              ABOUT US
            </p>

            <h2 className="text-5xl font-bold mb-8 leading-tight">
              We Build Modern Digital Experiences
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              CH Tech Giant specializes in creating modern websites,
              mobile applications, UI/UX designs, and scalable digital
              solutions for businesses and startups.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              We focus on performance, animations, responsive design,
              and premium user experiences using modern technologies.
            </p>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-[2px]">

              <div className="bg-black rounded-3xl p-10">

                <div className="grid grid-cols-2 gap-6">

                  <div className="text-center">
                    <h3 className="text-5xl font-bold text-white mb-2">
                      10+
                    </h3>
                    <p className="text-gray-400">
                      Projects
                    </p>
                  </div>

                  <div className="text-center">
                    <h3 className="text-5xl font-bold text-white mb-2">
                      5+
                    </h3>
                    <p className="text-gray-400">
                      Clients
                    </p>
                  </div>

                  <div className="text-center">
                    <h3 className="text-5xl font-bold text-white mb-2">
                      24/7
                    </h3>
                    <p className="text-gray-400">
                      Support
                    </p>
                  </div>

                  <div className="text-center">
                    <h3 className="text-5xl font-bold text-white mb-2">
                      100%
                    </h3>
                    <p className="text-gray-400">
                      Quality
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;