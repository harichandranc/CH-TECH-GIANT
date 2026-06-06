import { motion } from "framer-motion";

import PageBanner from "../../../components/PageBanner";
import SectionWrapper from "../../../components/SectionWrapper";

const erpFeatures = [
  "Student Management",
  "Attendance Tracking",
  "Fee Management",
  "Examination System",
  "Timetable Management",
  "Parent Communication",
];

const SchoolERP = () => {
  return (
    <div className="bg-[#050816] text-white">
      <PageBanner
        title="School ERP System"
        subtitle="A complete digital platform to manage students, staff, academics, attendance, fees, and school operations efficiently."
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
              Smart School Management Solution
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              Our School ERP System simplifies administrative tasks,
              enhances communication, and provides a centralized
              platform for managing all academic and operational
              activities of educational institutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {erpFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-cyan-500/10 rounded-2xl p-4 backdrop-blur-xl hover:border-cyan-400/30 transition"
                >
                  <p className="text-gray-300">{feature}</p>
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
              School ERP Benefits
            </h3>

            <div className="space-y-5 text-gray-400">
              <p>✔ Centralized school management</p>

              <p>✔ Real-time attendance monitoring</p>

              <p>✔ Automated fee and billing system</p>

              <p>✔ Efficient examination management</p>

              <p>✔ Improved parent-teacher communication</p>

              <p>✔ Secure cloud-based data access</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SchoolERP;