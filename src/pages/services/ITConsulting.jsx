import { motion } from "framer-motion";

import PageBanner from "../../components/PageBanner";
import SectionWrapper from "../../components/SectionWrapper";

const consultingServices = [
  "Technology Strategy",
  "Cloud Consulting",
  "Business Automation",
  "Digital Transformation",
  "Infrastructure Planning",
  "Technical Support",
];

const ITConsulting = () => {
  return (
    <div className="bg-[#050816] text-white">
      <PageBanner
        title="IT Consulting"
        subtitle="Professional technology consulting services to help businesses scale, modernize, and optimize operations."
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
              Smart Technology Consulting
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              We guide startups, organizations, and enterprises in
              adopting the right technologies, improving workflows,
              and building scalable digital ecosystems.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {consultingServices.map((service, index) => (
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
              Consulting Benefits
            </h3>

            <div className="space-y-5 text-gray-400">
              <p>✔ Business-focused IT strategies</p>

              <p>✔ Modern cloud-based solutions</p>

              <p>✔ Scalable digital infrastructure</p>

              <p>✔ Security and performance optimization</p>

              <p>✔ Long-term technology planning</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ITConsulting;