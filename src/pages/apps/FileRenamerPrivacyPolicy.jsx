import { motion } from "framer-motion";

const FileRenamerPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Privacy Policy – File Renamer – Bulk Rename
          </h1>

          <p className="text-gray-400 mb-10">
            Effective Date: March 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            <section>
              <p>
                Welcome to{" "}
                <span className="text-cyan-400 font-semibold">
                  File Renamer – Bulk Rename
                </span>{" "}
                developed by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>.
              </p>

              <p className="mt-4">
                Your privacy is important to us. This Privacy Policy explains
                how our app handles user information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Collection
              </h2>

              <p>
                File Renamer – Bulk Rename does not collect, store, or share
                personal information from users.
              </p>

              <p className="mt-4">
                The app does not require account registration or login.
              </p>

              <p className="mt-4">
                All file renaming operations are performed locally on your
                device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                File Access Permission
              </h2>

              <p>
                The app may request permission to access files and storage on
                your device solely for the purpose of:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Selecting files</li>
                <li>Renaming files</li>
                <li>Saving renamed files</li>
              </ul>

              <p className="mt-4">
                Your files are never uploaded to external servers and remain
                fully under your control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Advertisements
              </h2>

              <p>
                This app may display advertisements provided by third-party
                advertising services such as Google AdMob.
              </p>

              <p className="mt-4">
                These services may collect limited non-personal information
                including:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Device information</li>
                <li>Advertising ID</li>
                <li>App interaction data</li>
                <li>Approximate location information</li>
              </ul>

              <p className="mt-4">
                This data is used to provide and improve advertising
                experiences.
              </p>

              <p className="mt-4">
                For more information, please review Google’s Privacy Policy:
              </p>

              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition duration-300"
              >
                Google Privacy Policy
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security
              </h2>

              <p>
                We value user privacy and security. Since the app does not
                collect or store personal information, your data remains on
                your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children’s Privacy
              </h2>

              <p>
                File Renamer – Bulk Rename is not directed toward children
                under the age of 13.
              </p>

              <p className="mt-4">
                We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Any
                updates will be reflected on this page with a revised effective
                date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>Davangere, Karnataka 577001, India</p>
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

export default FileRenamerPrivacyPolicy;