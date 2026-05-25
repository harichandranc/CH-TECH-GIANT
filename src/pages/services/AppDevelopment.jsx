import { motion } from "framer-motion";

import PageBanner from "../../components/PageBanner";
import SectionWrapper from "../../components/SectionWrapper";

const features = [
  "Android App Development",
  "iOS App Development",
  "Cross Platform Flutter Apps",
  "Custom Mobile Applications",
  "App UI/UX Design",
  "Play Store Deployment",
];

const AppDevelopment = () => {
  return (
    <div className="bg-[#050816] text-white">
      <PageBanner
        title="App Development"
        subtitle="We create powerful mobile applications, modern cross-platform apps, and scalable digital products for startups, businesses, and enterprises."
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
              Premium Mobile App Solutions
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              CH TECH GIANT develops high-performance mobile applications
              designed for businesses, startups, creators, and enterprise
              clients. We build scalable, modern, and user-friendly apps
              optimized for performance and growth.
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
                ✔ Modern cross-platform app development
              </p>

              <p>
                ✔ Smooth UI & premium user experience
              </p>

              <p>
                ✔ Fast and optimized app performance
              </p>

              <p>
                ✔ Scalable architecture & backend integration
              </p>

              <p>
                ✔ Complete Play Store deployment support
              </p>
            </div>
          </motion.div>

        </div>
      </SectionWrapper>
    </div>
  );
};

export default AppDevelopment;