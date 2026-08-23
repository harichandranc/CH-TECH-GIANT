import { motion } from "framer-motion";

import PageBanner from "../../../components/PageBanner";
import SectionWrapper from "../../../components/SectionWrapper";

const hospitalFeatures = [
  "Role-Based Authentication",
  "Admin Dashboard",
  "Doctor Management",
  "Staff Management",
  "Patient Management",
  "Department Management",
];
const screenshots = [
  "/projects/hospital-management-system/thumbnail.webp",
  "/projects/hospital-management-system/1.webp",
  "/projects/hospital-management-system/2.webp",
  "/projects/hospital-management-system/3.webp",
  "/projects/hospital-management-system/4.webp",
  "/projects/hospital-management-system/5.webp",
  "/projects/hospital-management-system/6.webp",
  "/projects/hospital-management-system/7.webp",
  "/projects/hospital-management-system/8.webp",
  "/projects/hospital-management-system/9.webp",
  "/projects/hospital-management-system/10.webp",
  "/projects/hospital-management-system/11.webp",
  "/projects/hospital-management-system/12.webp",
  "/projects/hospital-management-system/13.webp",
];

const HospitalManagementSystem = () => {
  return (
    <div className="bg-[#050816] text-white">
      <PageBanner
        title="Hospital Management System"
        subtitle="A modern Hospital ERP solution designed to simplify healthcare administration with secure role-based dashboards and centralized management."
      />

      {/* Hero Section */}
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
              Modern Hospital Administration Platform
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              Our Hospital Management System (Basic Edition) helps
              hospitals, clinics, startups, and educational institutions
              manage departments, doctors, staff, and patients through a
              secure role-based dashboard. Built with modern web
              technologies, it offers a clean interface, JWT
              authentication, and centralized hospital administration.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {hospitalFeatures.map((feature, index) => (
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
              Key Benefits
            </h3>

            <div className="space-y-5 text-gray-400">
              <p>✔ Secure JWT Authentication</p>

              <p>✔ Role-Based Dashboard Access</p>

              <p>✔ Centralized Hospital Management</p>

              <p>✔ Easy Doctor & Staff Administration</p>

              <p>✔ Patient Information Management</p>

              <p>✔ Modern & Responsive Interface</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Modules */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Hospital Management Modules
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Everything required to manage hospital users, departments,
            and administration through a secure and user-friendly
            platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <span className="text-cyan-400 text-sm font-medium">
              Module 01
            </span>

            <h3 className="text-xl font-semibold mt-2 mb-3">
              Authentication
            </h3>

            <p className="text-gray-400">
              Secure JWT login, role-based authentication,
              protected routes, and logout functionality.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <span className="text-cyan-400 text-sm font-medium">
              Module 02
            </span>

            <h3 className="text-xl font-semibold mt-2 mb-3">
              Admin Dashboard
            </h3>

            <p className="text-gray-400">
              Complete control over departments,
              doctors, staff, patients, and
              hospital administration.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <span className="text-cyan-400 text-sm font-medium">
              Module 03
            </span>

            <h3 className="text-xl font-semibold mt-2 mb-3">
              Department Management
            </h3>

            <p className="text-gray-400">
              Create, update, and organize
              hospital departments efficiently.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <span className="text-cyan-400 text-sm font-medium">
              Module 04
            </span>

            <h3 className="text-xl font-semibold mt-2 mb-3">
              Doctor Management
            </h3>

            <p className="text-gray-400">
              Manage doctors, qualifications,
              specialization, consultation fees,
              and profiles.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <span className="text-cyan-400 text-sm font-medium">
              Module 05
            </span>

            <h3 className="text-xl font-semibold mt-2 mb-3">
              Staff Management
            </h3>

            <p className="text-gray-400">
              Add and manage staff accounts,
              permissions, profile details,
              and account status.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <span className="text-cyan-400 text-sm font-medium">
              Module 06
            </span>

            <h3 className="text-xl font-semibold mt-2 mb-3">
              Patient Management
            </h3>

            <p className="text-gray-400">
              Register patients, manage profiles,
              contact information, and hospital
              records.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <span className="text-cyan-400 text-sm font-medium">
              Module 07
            </span>

            <h3 className="text-xl font-semibold mt-2 mb-3">
              Doctor Dashboard
            </h3>

            <p className="text-gray-400">
              Doctors can securely access
              their profile, qualification,
              specialization, and consultation
              details.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <span className="text-cyan-400 text-sm font-medium">
              Module 08
            </span>

            <h3 className="text-xl font-semibold mt-2 mb-3">
              Staff Dashboard
            </h3>

            <p className="text-gray-400">
              Staff members can view
              personal information,
              account status,
              and role details.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <span className="text-cyan-400 text-sm font-medium">
              Module 09
            </span>

            <h3 className="text-xl font-semibold mt-2 mb-3">
              Hospital Statistics
            </h3>

            <p className="text-gray-400">
              Dashboard overview displaying
              departments, doctors,
              staff, patients,
              and hospital statistics.
            </p>
          </div>

        </div>
      </SectionWrapper>

      {/* Screenshots */}
    <SectionWrapper>
    <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
        Application Screenshots
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
        Explore the Hospital Management System interface, including
        authentication, dashboards, department management, doctor profiles,
        staff management, patient management, and other core modules.
        </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {screenshots.map((image, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-3xl border border-cyan-500/10 bg-white/5 backdrop-blur-xl"
        >
            <img
            src={image}
            alt={`Hospital Management System Screenshot ${index + 1}`}
            loading="lazy"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
        </motion.div>
        ))}
    </div>
    </SectionWrapper>

      {/* Technology */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">
              Technology Stack
            </h2>

            <div className="space-y-5">

              <div>
                <h3 className="text-cyan-400 font-semibold mb-2">
                  Frontend
                </h3>

                <p className="text-gray-400">
                  HTML5 • CSS3 • Bootstrap 5 •
                  Vanilla JavaScript • Axios
                </p>
              </div>

              <div>
                <h3 className="text-cyan-400 font-semibold mb-2">
                  Backend
                </h3>

                <p className="text-gray-400">
                  Node.js • Express.js • MongoDB •
                  Mongoose • JWT Authentication •
                  bcryptjs • Multer
                </p>
              </div>

            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">
              Perfect For
            </h2>

            <div className="space-y-4 text-gray-400">

              <p>✔ College Final Year Projects</p>

              <p>✔ Clinics & Small Hospitals</p>

              <p>✔ Healthcare Startups</p>

              <p>✔ Students Learning Backend Development</p>

              <p>✔ Freelancers</p>

              <p>✔ Software Developers</p>

            </div>
          </div>

        </div>
      </SectionWrapper>

      

      {/* Stats */}
      <SectionWrapper>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
          <h2 className="text-4xl font-bold text-center mb-8">
            Why Choose Our Hospital ERP
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-3xl font-bold mb-2">
                100%
              </h3>

              <p className="text-gray-400">
                Secure Role Access
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-2">
                Fast
              </h3>

              <p className="text-gray-400">
                User Management
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-2">
                Responsive
              </h3>

              <p className="text-gray-400">
                Modern UI
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-2">
                Secure
              </h3>

              <p className="text-gray-400">
                JWT Authentication
              </p>
            </div>

          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HospitalManagementSystem;