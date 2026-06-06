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
      <SectionWrapper>
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-white mb-4">
      Complete School ERP Modules
    </h2>

    <p className="text-gray-400 max-w-3xl mx-auto">
      Manage every aspect of your institution through a single
      integrated platform designed for schools, colleges, and
      educational organizations.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <span className="text-cyan-400 text-sm font-medium">
        Module 01
      </span>

      <h3 className="text-white text-xl font-semibold mt-2 mb-3">
        Admin Dashboard
      </h3>

      <p className="text-gray-400">
        Complete control over students, teachers, classes,
        academics, fees, reports, and school operations.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <span className="text-cyan-400 text-sm font-medium">
        Module 02
      </span>

      <h3 className="text-white text-xl font-semibold mt-2 mb-3">
        Student Management
      </h3>

      <p className="text-gray-400">
        Manage admissions, student profiles, academic records,
        attendance, and important documents.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <span className="text-cyan-400 text-sm font-medium">
        Module 03
      </span>

      <h3 className="text-white text-xl font-semibold mt-2 mb-3">
        Teacher Management
      </h3>

      <p className="text-gray-400">
        Handle teacher profiles, subject allocation,
        attendance tracking, and assignments.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <span className="text-cyan-400 text-sm font-medium">
        Module 04
      </span>

      <h3 className="text-white text-xl font-semibold mt-2 mb-3">
        Attendance System
      </h3>

      <p className="text-gray-400">
        Track daily attendance with detailed reports,
        statistics, and absentee monitoring.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <span className="text-cyan-400 text-sm font-medium">
        Module 05
      </span>

      <h3 className="text-white text-xl font-semibold mt-2 mb-3">
        Examination Management
      </h3>

      <p className="text-gray-400">
        Schedule exams, enter marks, generate report cards,
        and publish results instantly.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <span className="text-cyan-400 text-sm font-medium">
        Module 06
      </span>

      <h3 className="text-white text-xl font-semibold mt-2 mb-3">
        Fee Management
      </h3>

      <p className="text-gray-400">
        Collect fees, generate receipts, monitor dues,
        and manage financial records efficiently.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <span className="text-cyan-400 text-sm font-medium">
        Module 07
      </span>

      <h3 className="text-white text-xl font-semibold mt-2 mb-3">
        Timetable Management
      </h3>

      <p className="text-gray-400">
        Create class schedules, teacher timetables,
        and organize academic periods efficiently.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <span className="text-cyan-400 text-sm font-medium">
        Module 08
      </span>

      <h3 className="text-white text-xl font-semibold mt-2 mb-3">
        Parent Portal
      </h3>

      <p className="text-gray-400">
        Parents can access attendance, results,
        fee information, and school notices.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <span className="text-cyan-400 text-sm font-medium">
        Module 09
      </span>

      <h3 className="text-white text-xl font-semibold mt-2 mb-3">
        Reports & Analytics
      </h3>

      <p className="text-gray-400">
        Generate academic, attendance, financial,
        and administrative reports with ease.
      </p>
    </div>

  </div>
</SectionWrapper>

<SectionWrapper>
  <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
    <h2 className="text-4xl font-bold text-center mb-8">
      Why Schools Choose Our ERP
    </h2>

    <div className="grid md:grid-cols-4 gap-8 text-center">
      <div>
        <h3 className="text-3xl font-bold text-white mb-2">
          100%
        </h3>
        <p className="text-gray-400">
          Digital Operations
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-white mb-2">
          24/7
        </h3>
        <p className="text-gray-400">
          Cloud Access
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-white mb-2">
          Secure
        </h3>
        <p className="text-gray-400">
          Data Protection
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-white mb-2">
          Real-Time
        </h3>
        <p className="text-gray-400">
          Insights & Reports
        </p>
      </div>
    </div>
  </div>
</SectionWrapper>
    </div>
  );
};

export default SchoolERP;