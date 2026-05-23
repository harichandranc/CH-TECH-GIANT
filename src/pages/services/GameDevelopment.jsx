import { motion } from "framer-motion";

import PageBanner from "../../components/PageBanner";
import SectionWrapper from "../../components/SectionWrapper";

const gameServices = [
  "2D Game Development",
  "3D Game Development",
  "Mobile Games",
  "PC Games",
  "Game UI/UX Design",
  "Multiplayer Systems",
];

const GameDevelopment = () => {
  return (
    <div className="bg-[#050816] text-white">
      <PageBanner
        title="Game Development"
        subtitle="Immersive gaming experiences designed with creativity, performance, and modern technology."
      />

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Creative Game Solutions
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              We build engaging and visually stunning games for
              mobile, desktop, and interactive platforms with smooth
              gameplay and scalable architecture.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {gameServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-cyan-500/10 rounded-2xl p-4 backdrop-blur-xl hover:border-cyan-400/30 transition"
                >
                  <p className="text-gray-300">{service}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-500/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Why Our Games Stand Out
            </h3>

            <div className="space-y-5 text-gray-400">
              <p>✔ High-quality graphics & animations</p>

              <p>✔ Optimized game performance</p>

              <p>✔ Cross-platform compatibility</p>

              <p>✔ Interactive gameplay mechanics</p>

              <p>✔ Scalable multiplayer architecture</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default GameDevelopment;