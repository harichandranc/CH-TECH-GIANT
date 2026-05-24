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
                your device whenever possible. Your files are not uploaded to
                any external server by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Permissions Used
              </h2>

              <p>
                File Converter may request the following permissions only for
                app functionality:
              </p>

              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                    Storage / Media Access
                  </h3>

                  <p>Used to:</p>

                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>Select files for conversion</li>
                    <li>Save converted files</li>
                    <li>
                      Access images, audio, video, and documents chosen by the
                      user
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                    Internet Permission
                  </h3>

                  <p>Used for:</p>

                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>Loading advertisements through Google AdMob</li>
                    <li>Checking app updates or external links</li>
                  </ul>

                  <p className="mt-4">
                    The app does not use internet access to upload or store
                    your personal files.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Advertisements
              </h2>

              <p>
                File Converter uses Google AdMob to display ads.
              </p>

              <p className="mt-4">
                Third-party services such as AdMob may collect limited
                non-personal information for ad personalization and analytics
                according to their own privacy policies.
              </p>

              <div className="mt-4 space-y-2">
                <p>Learn more:</p>

                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Google Privacy Policy
                </a>

                <a
                  href="https://support.google.com/admob"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Google AdMob
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                File Privacy
              </h2>

              <p>
                Your files remain under your control.
              </p>

              <p className="mt-4">
                We do not:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Upload files to our servers</li>
                <li>Access your private documents</li>
                <li>Share files with third parties</li>
              </ul>

              <p className="mt-4">
                All conversions are initiated manually by the user.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security
              </h2>

              <p>
                We aim to provide a secure and reliable experience. However,
                users are responsible for maintaining backups of important
                files.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children’s Privacy
              </h2>

              <p>
                File Converter is not directed toward children under the age of
                13.
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
                updates will be reflected on this page with a revised “Last
                Updated” date.
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