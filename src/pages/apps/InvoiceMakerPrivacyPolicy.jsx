import { motion } from "framer-motion";

const InvoiceMakerPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Privacy Policy – Invoice Maker
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
                  Invoice Maker
                </span>
                , developed by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>
                .
              </p>

              <p className="mt-4">
                Your privacy is important to us. This Privacy Policy explains
                how our app handles user information, including information
                that may be processed by third-party services.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Collection
              </h2>

              <p>
                Invoice Maker is designed to store invoice information locally
                on your device. We do not collect or store your invoice or
                business records on our own servers as part of the app's
                local functionality.
              </p>

              <p className="mt-4">
                The app does not require account registration or login unless
                a feature explicitly indicates otherwise.
              </p>

              <p className="mt-4">
                Information you include in invoices, such as customer names,
                business details, addresses, item descriptions, and prices,
                may be stored locally on your device.
              </p>
            </section>

            {/* Permissions */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Permissions Used
              </h2>

              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Storage / Files Access</strong> — Used when needed
                  to save, export, or share invoices and PDF files created
                  within the app.
                </li>

                <li>
                  <strong>Internet Access</strong> — Used for advertising,
                  online services, and other network-dependent features that
                  may be available in the app.
                </li>
              </ul>

              <p className="mt-4">
                Permissions depend on your device, operating system, and app
                version. The app should access files or other device resources
                only as required for its features and as permitted by your
                device settings.
              </p>
            </section>

            {/* Local Data and Security */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Invoice Data and Security
              </h2>

              <p>
                Your invoice data is stored locally on your device. We do not
                upload or store your invoice records or business data on our
                servers as part of the app's local functionality.
              </p>

              <p className="mt-4">
                You are responsible for keeping your device secure and
                maintaining backups of important invoices and exported files.
                If you choose to share or export an invoice, the recipient or
                service you use may process that information according to its
                own practices.
              </p>
            </section>

            {/* Advertising */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Advertising and Third-Party Services
              </h2>

              <p>
                Invoice Maker may use{" "}
                <span className="text-cyan-400 font-semibold">
                  Unity LevelPlay
                </span>{" "}
                mediation and advertising partners, such as Unity Ads and
                ironSource, where enabled and configured in the app. Google
                Play Services may also support app functionality.
              </p>

              <p className="mt-4">
                Depending on the services integrated and enabled, third-party
                advertising providers may collect or process information for
                advertising, analytics, personalization, ad measurement, fraud
                prevention, and related purposes. This information may include:
              </p>

              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Device type, model, and operating system</li>
                <li>Advertising IDs and other device identifiers</li>
                <li>IP address and general network information</li>
                <li>Advertising impressions and interactions</li>
                <li>App usage and diagnostic information related to advertising</li>
                <li>Approximate location information, where permitted</li>
              </ul>

              <p className="mt-4">
                The information processed depends on the advertising services
                enabled, your device settings, and applicable laws. Third-party
                providers handle information according to their own privacy
                policies. We do not control their independent data-processing
                practices.
              </p>

              <p className="mt-4">
                For more information, please review the applicable policies:
              </p>

              <ul className="list-disc pl-6 space-y-3 mt-4">
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

                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition duration-300"
                  >
                    Google Privacy Policy
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
                We do not sell your invoice records or business data. Invoice
                information stored locally is not shared with our servers as
                part of the app's local functionality.
              </p>

              <p className="mt-4">
                Third-party advertising services may process device and
                advertising-related information when their services are
                enabled. If you choose to export or share an invoice, the
                information you share may be received and processed by the
                destination or service you select.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children’s Privacy
              </h2>

              <p>
                Invoice Maker is not specifically directed toward children
                under the age of 13.
              </p>

              <p className="mt-4">
                We do not knowingly collect personal information directly
                from children through our own servers. Third-party services
                may process information according to their own privacy
                policies and applicable laws.
              </p>
            </section>

            {/* Privacy Choices */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Your Privacy Choices
              </h2>

              <p>
                You may be able to manage personalized advertising or limit
                the use of advertising identifiers through your device's
                privacy settings. Available options vary by device, operating
                system, region, and applicable laws.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Any
                changes will be reflected on this page with a revised
                "Last Updated" date. We encourage you to review this policy
                periodically.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>Davangere, Karnataka 577001, India</p>
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

export default InvoiceMakerPrivacyPolicy;