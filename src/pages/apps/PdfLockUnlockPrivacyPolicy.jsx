import { motion } from "framer-motion";

const PDFLockUnlockPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Privacy Policy – PDF Lock Unlock
          </h1>

          <p className="text-gray-400 mb-10">
            Last Updated: November 4, 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            {/* Introduction */}
            <section>
              <p>
                Welcome to{" "}
                <span className="text-cyan-400 font-semibold">
                  PDF Lock Unlock
                </span>
                , developed by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>
                . Your privacy is important to us. This Privacy Policy explains
                how the app handles your information when you use its features.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Information We Collect
              </h2>

              <p>
                PDF Lock Unlock allows you to password-protect PDF documents
                and remove passwords from supported PDF files. Information
                processed depends on the features you use.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">
                PDF Files
              </h3>

              <p>
                When you choose to lock or unlock a PDF, the selected file may
                be uploaded temporarily to our server for processing, as
                required by the app's implementation.
              </p>

              <p className="mt-4">
                The file may be processed to:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Protect a PDF with a password</li>
                <li>Remove a password from a supported PDF</li>
                <li>Generate a processed PDF for download</li>
              </ul>

              <p className="mt-4">
                Uploaded files are used to provide the operation you request
                and are not intended to be used for unrelated purposes.
              </p>
            </section>

            {/* Temporary File Processing */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Temporary File Processing
              </h2>

              <p>
                If PDF processing requires a server upload, the selected file
                is transferred for the purpose of completing your requested
                operation.
              </p>

              <p className="mt-4">
                Files should be deleted from the server after processing
                according to the application's actual retention and cleanup
                procedures. Please ensure your server implementation follows
                this policy before publishing it.
              </p>

              <p className="mt-4">
                Avoid uploading documents containing sensitive or confidential
                information unless you are comfortable with the processing
                required to provide the requested feature.
              </p>
            </section>

            {/* Advertising */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Advertising
              </h2>

              <p>
                The app may use{" "}
                <span className="text-cyan-400 font-semibold">
                  Unity LevelPlay
                </span>{" "}
                mediation and advertising partners, such as Unity Ads and
                ironSource, where enabled and configured in the app.
              </p>

              <p className="mt-4">
                Depending on the services enabled, advertising providers may
                collect or process information for ad delivery, measurement,
                analytics, fraud prevention, and related purposes. This
                information may include:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Device type, model, and operating system</li>
                <li>Advertising IDs and other device identifiers</li>
                <li>IP address and general network information</li>
                <li>Advertising impressions and interactions</li>
                <li>App usage, diagnostic, and technical information</li>
                <li>Approximate location information, where permitted</li>
              </ul>

              <p className="mt-4">
                The information processed depends on the advertising partners
                integrated into your app version, your device settings, and
                applicable laws. Third-party providers handle information
                according to their own privacy policies.
              </p>

              <p className="mt-4">
                For more information, please review the applicable policies:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>
                  <a
                    href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition duration-300"
                  >
                    Unity Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.is.com/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition duration-300"
                  >
                    ironSource Privacy Policy
                  </a>
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Data Security
              </h2>

              <p>
                We take reasonable measures to protect information processed
                through the app. Where supported by the server configuration,
                secure HTTPS connections should be used to transfer files.
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Use secure connections when transferring PDF files.</li>
                <li>Restrict access to uploaded documents.</li>
                <li>Delete temporary files according to the configured retention policy.</li>
                <li>Avoid retaining uploaded documents longer than necessary.</li>
              </ul>

              <p className="mt-4">
                No method of electronic transmission or storage can be
                guaranteed to be completely secure.
              </p>
            </section>

            {/* Permissions */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Permissions
              </h2>

              <p>The app may require permissions to:</p>

              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>Select PDF files from your device</li>
                <li>Save processed PDF files</li>
                <li>Access the internet for server-based processing</li>
                <li>Load advertisements when advertising services are enabled</li>
              </ul>

              <p className="mt-4">
                Permissions depend on your device, operating system, and app
                version. The app should access only the resources needed for
                its features and authorized by you.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Children's Privacy
              </h2>

              <p>
                The app is not specifically directed toward children under
                the age of 13.
              </p>

              <p className="mt-4">
                We do not knowingly collect children's personal information
                directly through our own services. Third-party advertising
                providers may process information according to their own
                policies and applicable laws.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Third-Party Services
              </h2>

              <p>
                Depending on the app version and services enabled, the app
                may use third-party services for advertising and platform
                functionality, including:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Unity LevelPlay mediation</li>
                <li>Unity Ads, where enabled</li>
                <li>ironSource, where enabled</li>
                <li>Google Play Services, where applicable</li>
              </ul>

              <p className="mt-4">
                These services may process information according to their
                respective privacy policies.
              </p>

              <div className="mt-4 space-y-3">
                <a
                  href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Unity Privacy Policy
                </a>

                <a
                  href="https://www.is.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  ironSource Privacy Policy
                </a>

                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Google Privacy Policy
                </a>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Your Privacy Choices
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Stop using the app at any time.</li>
                <li>Delete downloaded or processed files from your device.</li>
                <li>Manage advertising preferences through available device settings.</li>
                <li>Contact us with privacy-related questions or concerns.</li>
              </ul>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with a revised "Last Updated"
                date.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Contact Us
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>Davangere, Karnataka 577001, India</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:support@chtechgiant.com"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      support@chtechgiant.com
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      href="https://chtechgiant.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      https://chtechgiant.com
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PDFLockUnlockPrivacyPolicy;