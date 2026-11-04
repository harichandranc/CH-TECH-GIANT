import { motion } from "framer-motion";

const CGPASGPAPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Privacy Policy – CGPA/SGPA Calculator
          </h1>

          <p className="text-gray-400 mb-10">
            Last Updated: November 4, 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            {/* Introduction */}
            <section>
              <p>
                Welcome to the{" "}
                <span className="text-cyan-400 font-semibold">
                  CGPA/SGPA Calculator
                </span>{" "}
                app developed by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>.
              </p>

              <p className="mt-4">
                Your privacy is important to us. This Privacy Policy explains
                how our app handles user information.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Collection
              </h2>

              <p>
                The CGPA/SGPA Calculator app does not directly collect, store,
                or share personal information from users.
              </p>

              <p className="mt-4">
                The app works primarily offline and does not require:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Account registration</li>
                <li>Login</li>
                <li>Personal details</li>
                <li>Internet access for core calculation functionality</li>
              </ul>

              <p className="mt-4">We do not directly collect:</p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Academic institution data</li>
                <li>Passwords</li>
                <li>Location information</li>
              </ul>

              <p className="mt-4">
                However, third-party advertising services integrated into the
                app may process certain technical or advertising-related
                information as described below.
              </p>
            </section>

            {/* Academic Data */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Academic Data
              </h2>

              <p>
                All SGPA, CGPA, grades, credits, and semester calculations are
                processed locally on your device.
              </p>

              <p className="mt-4">
                Academic information entered into the calculator is not
                uploaded, transmitted, or stored on our external servers.
              </p>
            </section>

            {/* Advertisements */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Advertisements
              </h2>

              <p>
                The app may display advertisements through{" "}
                <span className="text-cyan-400 font-semibold">
                  Unity LevelPlay
                </span>
                , an advertising mediation platform. Depending on the
                configuration and enabled advertising networks, ads may be
                provided by Unity Ads, ironSource, or other enabled partners.
              </p>

              <p className="mt-4">
                Advertising service providers may collect and process certain
                information from your device for advertising, analytics, fraud
                prevention, and related purposes. Depending on the service,
                configuration, and applicable laws, this information may
                include:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Device information</li>
                <li>Advertising ID or other device identifiers</li>
                <li>IP address</li>
                <li>App usage and interaction information</li>
                <li>Approximate location information</li>
                <li>Ad impressions and clicks</li>
                <li>Diagnostic and fraud-prevention information</li>
              </ul>

              <p className="mt-4">
                This information may be used to provide advertisements,
                measure advertising performance, perform analytics, prevent
                fraud, and improve advertising services.
              </p>

              <p className="mt-4">
                Advertising providers process information according to their
                own privacy policies and applicable laws.
              </p>

              <p className="mt-4">
                For more information, please review the relevant privacy
                policies:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <a
                    href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition duration-300 underline"
                  >
                    Unity Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.is.com/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition duration-300 underline"
                  >
                    ironSource Privacy Policy
                  </a>
                </li>
              </ul>
            </section>

            {/* Permissions */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Permissions
              </h2>

              <p>
                The CGPA/SGPA Calculator app does not require special device
                permissions for its core calculation functionality. Any
                permissions used by advertising SDKs or other integrated
                services depend on the app's actual configuration.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children’s Privacy
              </h2>

              <p>
                This app is intended for educational purposes and is designed
                for general student use.
              </p>

              <p className="mt-4">
                We do not knowingly collect personal information directly from
                children.
              </p>

              <p className="mt-4">
                Third-party advertising services may process information
                according to their own privacy policies and applicable
                requirements.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Third-Party Services
              </h2>

              <p>The app may use third-party services including:</p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Unity LevelPlay — advertising mediation</li>
                <li>Unity Ads — advertising</li>
                <li>ironSource — advertising</li>
                <li>Other advertising partners enabled in the mediation configuration</li>
              </ul>

              <p className="mt-4">
                These third-party services may collect or process technical,
                advertising, or usage-related information according to their
                own privacy policies.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security
              </h2>

              <p>
                Since the app does not upload or store academic information on
                our external servers, your calculator data remains on your
                device, as described in this policy.
              </p>

              <p className="mt-4">
                Information processed by third-party advertising services is
                handled according to their respective privacy policies.
              </p>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Sharing
              </h2>

              <p>
                We do not upload academic calculation data to our external
                servers or share it with advertising providers. Third-party
                advertising services may independently process technical or
                advertising-related information as described in this policy.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Any
                updates will be posted on this page with a revised update date.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
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

            {/* Consent */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Consent
              </h2>

              <p>
                By using the CGPA/SGPA Calculator app, you acknowledge that
                you have read this Privacy Policy and understand how
                information may be handled as described here.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CGPASGPAPrivacyPolicy;