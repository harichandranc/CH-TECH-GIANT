import { motion } from "framer-motion";

import PageBanner from "../../components/PageBanner";
import SectionWrapper from "../../components/SectionWrapper";

const features = [
  "Responsive Business Websites",
  "Modern UI/UX Design",
  "Admin Dashboards",
  "E-Commerce Solutions",
  "Custom Web Applications",
  "SEO Friendly Development",
];

const WebDevelopment = () => {
  return (
    <div className="bg-[#050816] text-white">
      <PageBanner
        title="Web Development"
        subtitle="We build premium modern websites, scalable web applications, business platforms, and high-performance digital solutions."
      />

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Premium Web Solutions
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              CH TECH GIANT develops high-performance websites and
              advanced web platforms tailored for startups,
              businesses, organizations, and enterprise clients.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-cyan-500/10 rounded-2xl p-4 backdrop-blur-xl hover:border-cyan-400/30 transition"
                >
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-500/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Why Choose Us?
            </h3>

            <div className="space-y-5 text-gray-400">
              <p>
                ✔ Modern responsive architecture
              </p>

              <p>
                ✔ Scalable frontend & backend systems
              </p>

              <p>
                ✔ Fast loading optimized websites
              </p>

              <p>
                ✔ Premium UI/UX experience
              </p>

              <p>
                ✔ Business-focused development
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default WebDevelopment;