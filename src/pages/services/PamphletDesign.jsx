import { motion } from "framer-motion";

import PageBanner from "../../components/PageBanner";
import SectionWrapper from "../../components/SectionWrapper";

const designServices = [
  "Business Pamphlets",
  "Event Flyers",
  "Marketing Brochures",
  "Corporate Branding",
  "Creative Layout Design",
  "Print Ready Designs",
];

const PamphletDesign = () => {
  return (
    <div className="bg-[#050816] text-white">
      <PageBanner
        title="Pamphlet Design"
        subtitle="Creative and professional pamphlet designs that elevate branding, marketing, and business promotions."
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
              Modern Graphic Design Solutions
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              We create premium-quality pamphlets and marketing
              materials designed to attract customers and build
              strong brand identity.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {designServices.map((service, index) => (
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
              Design Advantages
            </h3>

            <div className="space-y-5 text-gray-400">
              <p>✔ Eye-catching premium layouts</p>

              <p>✔ Professional brand presentation</p>

              <p>✔ High-quality print optimization</p>

              <p>✔ Modern typography & visuals</p>

              <p>✔ Marketing-focused creative design</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PamphletDesign;