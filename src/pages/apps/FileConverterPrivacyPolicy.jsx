import { motion } from "framer-motion";

const FileConverterPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Privacy Policy – File Converter
          </h1>

          <p className="text-gray-400 mb-10">
            Last Updated: May 24, 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">

            <section>
              <p>
                Welcome to{" "}
                <span className="text-cyan-400 font-semibold">
                  File Converter
                </span>{" "}
                developed by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>.
              </p>

              <p className="mt-4">
                Your privacy is important to us. This Privacy Policy explains
                how File Converter handles user information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Collection
              </h2>

              <p>
                File Converter does not collect, store, or share personal
                information from users.
              </p>

              <p className="mt-4">
                All file processing and conversions are performed locally on
                your device whenever possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Permissions Used
              </h2>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Storage / Media Access</li>
                <li>Internet Permission</li>
              </ul>

              <p className="mt-4">
                The app does not upload or store personal files.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Advertisements
              </h2>

              <p>
                File Converter uses Google AdMob to display ads.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                File Privacy
              </h2>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Your files remain under your control</li>
                <li>We do not upload files to servers</li>
                <li>We do not share files with third parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6">
                <div className="space-y-2">
                  <p>CH TECH GIANT (OPC) PRIVATE LIMITED</p>
                  <p>Davangere, Karnataka 577001</p>
                  <p>Email: info@chtechgiant.com</p>
                  <p>Phone: +91 9980785020</p>
                </div>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FileConverterPrivacyPolicy;