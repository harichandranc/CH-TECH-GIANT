import { motion } from "framer-motion";

const ImageToPDFPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Privacy Policy – Image to PDF
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
                  Image to PDF
                </span>{" "}
                developed by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>.
              </p>

              <p className="mt-4">
                Your privacy is important to us. This Privacy Policy explains
                how our app handles user information, including information
                that may be processed by third-party advertising services.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Collection
              </h2>

              <p>
                Image to PDF does not directly collect, store, or share your
                personal files through our own servers.
              </p>

              <p className="mt-4">
                The app does not require account registration or login.
              </p>

              <p className="mt-4">
                Image selection and PDF generation are performed locally on
                your device whenever supported by the app.
              </p>

              <p className="mt-4">
                Third-party advertising services integrated into the app may
                collect or process certain technical, device, and
                advertising-related information, as described below.
              </p>
            </section>

            {/* Permissions */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Permissions Used
              </h2>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Photos or media access, where required</li>
                <li>Select images from your device</li>
                <li>Save generated PDF files to an authorized location</li>
                <li>Share exported PDF documents when requested</li>
              </ul>

              <p className="mt-4">
                The app accesses only the files and photos needed for the
                operation you request and that you select or authorize.
                Specific permissions depend on your device, operating system,
                and app version.
              </p>
            </section>

            {/* File Handling */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                File Handling
              </h2>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Your selected images are processed on your device whenever supported.</li>
                <li>We do not upload your images or generated PDFs to our servers as part of local conversion.</li>
                <li>We do not sell your images or generated PDF documents.</li>
                <li>Exported files are saved to a location you select or authorize.</li>
              </ul>

              <p className="mt-4">
                If a future feature or app integration requires transferring
                files or information off your device, the applicable details
                should be disclosed before that feature is used.
              </p>
            </section>

            {/* Advertising */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Advertising and Third-Party Services
              </h2>

              <p>
                This app may display advertisements through{" "}
                <span className="text-cyan-400 font-semibold">
                  Unity LevelPlay
                </span>{" "}
                mediation and advertising partners, such as Unity Ads and
                ironSource, where enabled and configured in the app.
              </p>

              <p className="mt-4">
                These advertising services may collect or process certain
                information for purposes such as displaying advertisements,
                measuring advertising performance, analytics, fraud
                prevention, and improving their services. Depending on the
                services enabled, device settings, and applicable law, this
                information may include:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Device type, model, and operating system</li>
                <li>Advertising identifiers and other device identifiers</li>
                <li>IP address and general network information</li>
                <li>Ad impressions, interactions, and app usage information related to advertising</li>
                <li>Approximate location information derived from IP address or device settings, where permitted</li>
                <li>Diagnostic, performance, and fraud-prevention information</li>
              </ul>

              <p className="mt-4">
                The information collected depends on the advertising partners
                integrated into the version of the app you use and your device
                privacy settings. We do not control the independent data
                processing practices of third-party advertising providers.
              </p>

              <p className="mt-4">
                For more information, please review the applicable privacy
                policies:
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

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Sharing
              </h2>

              <p>
                We do not sell your personal files or generated PDF documents.
                Information may be processed by third-party advertising
                providers when their services are enabled in the app, in
                accordance with their privacy policies and applicable laws.
              </p>

              <p className="mt-4">
                We do not share your selected images or generated PDF
                documents with advertising partners as part of the local
                conversion process.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security
              </h2>

              <p>
                We aim to protect your privacy by processing images and
                generating PDF files locally on your device whenever
                supported.
              </p>

              <p className="mt-4">
                We do not store your selected images or generated PDF files on
                our external servers as part of local conversion.
              </p>

              <p className="mt-4">
                Information processed by third-party advertising services is
                handled according to their respective privacy policies and
                security practices.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children’s Privacy
              </h2>

              <p>
                This app is not specifically directed toward children under
                the age of 13.
              </p>

              <p className="mt-4">
                We do not knowingly collect personal information directly from
                children through our own servers. Third-party advertising
                services may process information according to their own
                policies and applicable requirements.
              </p>
            </section>

            {/* User Choices */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Your Privacy Choices
              </h2>

              <p>
                You may be able to manage advertising personalization or
                restrict advertising identifiers through your device's
                privacy settings. Available controls vary by device,
                operating system, region, and applicable law.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Any
                changes will be posted on this page with a revised update
                date. We encourage you to review this page periodically.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6">
                <div className="space-y-2">
                  <p>CH TECH GIANT (OPC) PRIVATE LIMITED</p>
                  <p>Davangere, Karnataka – 577001, India</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@chtechgiant.com"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      info@chtechgiant.com
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+919980785020"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      +91 9980785020
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

export default ImageToPDFPrivacyPolicy;