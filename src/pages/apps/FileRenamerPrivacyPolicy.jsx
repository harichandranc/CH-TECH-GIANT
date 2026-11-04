
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
            Effective Date: November 4, 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            {/* Introduction */}
            <section>
              <p>
                Welcome to{" "}
                <span className="text-cyan-400 font-semibold">
                  File Renamer – Bulk Rename
                </span>
                , developed by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>
                .
              </p>

              <p className="mt-4">
                This Privacy Policy explains how the application handles
                information, accesses files, and uses third-party advertising
                services. By using the application, you acknowledge this
                policy, subject to your rights under applicable law.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Information Collection
              </h2>

              <p>
                The application does not require users to create an account
                or log in. File-renaming operations are designed to take
                place locally on your device.
              </p>

              <p className="mt-4">
                We do not intentionally collect users' personal information
                directly through the file-renaming functionality. However,
                third-party advertising and mediation SDKs integrated into
                the application may collect or process certain information
                as described in the Advertising and Third-Party Services
                section below.
              </p>
            </section>

            {/* File Permissions */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. File Access and Permissions
              </h2>

              <p>
                The application may request access to files or use Android's
                file-selection features to perform operations such as:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Selecting files for renaming</li>
                <li>Changing filenames</li>
                <li>Saving or applying renamed filenames</li>
              </ul>

              <p className="mt-4">
                File access is used for the application's file-renaming
                functionality. You remain responsible for selecting the
                correct files and reviewing changes before confirming
                an operation.
              </p>

              <p className="mt-4">
                The application is designed to process selected files locally.
                We do not intentionally upload file contents to our own
                servers for file-renaming operations. This statement does
                not cover information that may be processed by third-party
                SDKs for their own services.
              </p>
            </section>

            {/* Advertising */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Advertising and Advertising Mediation
              </h2>

              <p>
                File Renamer – Bulk Rename is supported by advertisements.
                The application uses Unity LevelPlay, an advertising
                mediation platform, to manage and serve advertisements
                through supported advertising networks.
              </p>

              <p className="mt-4">
                Our advertising setup may include Unity Ads and ironSource
                advertising services, depending on the SDK integrations,
                network adapters, and configurations enabled in the
                application.
              </p>

              <p className="mt-4">
                Depending on the advertising services used, device
                configuration, applicable consent choices, and local
                requirements, advertising partners may collect or process
                information such as:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Device information and device identifiers</li>
                <li>Advertising ID, where available and permitted</li>
                <li>IP address and approximate location derived from it</li>
                <li>Ad impressions, clicks, and advertising interactions</li>
                <li>App usage, diagnostics, and performance information</li>
                <li>Information used for advertising measurement and fraud prevention</li>
                <li>Consent and privacy preference signals, where applicable</li>
              </ul>

              <p className="mt-4">
                The specific information collected depends on the advertising
                SDKs and networks enabled, their configuration, and your
                device and privacy settings. We do not control every data
                processing activity carried out independently by third-party
                advertising providers.
              </p>

              <p className="mt-4">
                Advertising partners may use information in accordance with
                their own privacy policies and applicable law. Where required,
                advertising consent and privacy choices will be handled
                through the applicable consent mechanisms.
              </p>

              <p className="mt-4">
                You can review the providers' privacy information here:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>
                  <a
                    href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline transition duration-300"
                  >
                    Unity Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.is.com/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline transition duration-300"
                  >
                    ironSource Privacy Policy
                  </a>
                </li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Data Sharing and Third Parties
              </h2>

              <p>
                We do not sell users' selected file contents or filenames.
                Information may be processed by third-party service providers
                that support advertising, application functionality,
                diagnostics, or security, where those services are integrated.
              </p>

              <p className="mt-4">
                Such providers may process information under their own terms
                and privacy policies. Their processing practices may differ
                depending on the service and the applicable configuration.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Data Security and Retention
              </h2>

              <p>
                File-renaming operations are designed to take place on your
                device, and we do not intentionally store renamed file
                contents on our own servers.
              </p>

              <p className="mt-4">
                Information processed by third-party advertising services
                is subject to their respective retention, security, and
                privacy practices.
              </p>

              <p className="mt-4">
                No method of electronic processing or storage can be
                guaranteed to be completely secure. We encourage you to
                keep backups of important files before making changes.
              </p>
            </section>

            {/* User Choices */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Your Privacy Choices
              </h2>

              <p>
                You can manage available advertising and privacy settings
                through your device settings and any consent options presented
                by the application, where supported.
              </p>

              <p className="mt-4">
                Depending on your location, you may have rights to request
                access to, correction of, or deletion of personal information
                processed by a service provider. Requests concerning data
                collected directly by an advertising partner may need to be
                directed to that provider.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Children's Privacy
              </h2>

              <p>
                The application's intended audience and applicable age
                restrictions are determined by its distribution settings
                and the laws that apply. We do not knowingly collect
                personal information directly from children in violation
                of applicable law.
              </p>

              <p className="mt-4">
                Advertising SDKs may have additional requirements concerning
                children, age restrictions, and consent. The advertising
                configuration should be appropriate for the app's declared
                target audience.
              </p>
            </section>

            {/* Other Links */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Third-Party Links
              </h2>

              <p>
                The application or its advertisements may provide links to
                third-party websites or services. We are not responsible for
                the privacy practices or content of external services.
                Please review their privacy policies before providing
                personal information.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy to reflect changes in the
                application, advertising integrations, legal requirements,
                or our data practices. Updates will be published on this
                page along with a revised effective date.
              </p>

              <p className="mt-4">
                We encourage users to review this page periodically.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Contact Us
              </h2>

              <p className="mb-4">
                If you have questions about this Privacy Policy or the
                application's privacy practices, contact us:
              </p>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md">
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

                  <p>
                    Website:{" "}
                    <a
                      href="https://chtechgiant.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      chtechgiant.com
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

export default FileRenamerPrivacyPolicy;
