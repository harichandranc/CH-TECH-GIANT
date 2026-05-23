import { motion } from "framer-motion";

import PageBanner from "../../components/PageBanner";
import SectionWrapper from "../../components/SectionWrapper";

const services = [
  "Desktop Software",
  "ERP Systems",
  "Business Management Tools",
  "Billing Software",
  "Automation Systems",
  "Custom Enterprise Solutions",
];

const SoftwareDevelopment = () => {
  return (
    <div className="bg-[#050816] text-white">
      <PageBanner
        title="Software Development"
        subtitle="Custom software solutions engineered for performance, scalability, automation, and business growth."
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
              Smart Business Software
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              We develop reliable software systems tailored for
              businesses, institutions, startups, and organizations
              requiring scalable digital infrastructure.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-cyan-500/10 rounded-2xl p-4 backdrop-blur-xl hover:border-cyan-400/30 transition"
                >
                  <p className="text-gray-300">{item}</p>
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
              Software Expertise
            </h3>

            <div className="space-y-5 text-gray-400">
              <p>✔ Modern scalable architecture</p>

              <p>✔ Secure database integration</p>

              <p>✔ Automation-focused workflows</p>

              <p>✔ High-performance systems</p>

              <p>✔ Business productivity optimization</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SoftwareDevelopment;