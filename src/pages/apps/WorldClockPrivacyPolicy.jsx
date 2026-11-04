import { motion } from "framer-motion";

const WorldClockPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Privacy Policy – World Clock
          </h1>

          <p className="text-gray-400 mb-10">
            Effective Date: November 4, 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            <section>
              <p>
                World Clock (“the App”) is developed and published by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>.
              </p>

              <p className="mt-4">
                This Privacy Policy explains how information may be collected,
                used, stored, and shared when you use the World Clock mobile
                application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Collection and Use
              </h2>

              <p>
                World Clock does not directly request or collect personally
                identifiable information unless a feature specifically
                requires it. However, third-party services integrated into
                the app may automatically collect certain technical
                information, depending on the SDKs enabled in the app.
              </p>

              <p className="mt-4">Such information may include:</p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Device model, operating system, and technical details</li>
                <li>IP address and approximate location derived from it</li>
                <li>Advertising identifiers and device identifiers</li>
                <li>Ad impressions, clicks, and advertising interactions</li>
                <li>App usage, session, and interaction information</li>
                <li>Crash reports, diagnostics, and performance data</li>
              </ul>

              <p className="mt-4">
                Depending on the service used, this information may help
                deliver advertisements, measure advertising performance,
                diagnose technical problems, prevent fraud, and improve app
                stability and functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Third-Party Services
              </h2>

              <p>
                World Clock may use the following third-party services,
                depending on the SDKs and features included in the published
                version of the app:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Unity Ads</li>
                <li>Unity LevelPlay (ironSource), if integrated</li>
                <li>Google Play Services</li>
                <li>Firebase Analytics, if integrated</li>
                <li>Firebase Crashlytics, if integrated</li>
              </ul>

              <p className="mt-4">
                These providers may process technical information according
                to their own privacy policies. The information collected and
                processed depends on the services actually integrated and
                enabled in the app.
              </p>

              <div className="space-y-2 mt-4">
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
                  Unity LevelPlay / ironSource Privacy Policy
                </a>

                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Google Privacy Policy
                </a>

                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Firebase Privacy Information
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Advertisements
              </h2>

              <p>
                World Clock may display advertisements provided by Unity Ads
                or through Unity LevelPlay mediation, if these services are
                integrated and enabled.
              </p>

              <p className="mt-4">
                Depending on the advertising provider and configuration,
                advertising partners may process device information,
                advertising identifiers, IP addresses, approximate location,
                ad impressions, clicks, app interaction data, and technical
                or diagnostic information. This information may be used to
                deliver advertisements, measure ad performance, improve
                advertising services, and detect or prevent fraud and abuse.
              </p>

              <p className="mt-4">
                Advertisements may be personalized or non-personalized
                depending on the provider, your settings, applicable law,
                and any consent required in your region.
              </p>

              <div className="space-y-2 mt-4">
                <a
                  href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Unity Advertising Privacy Policy
                </a>

                <a
                  href="https://www.is.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Unity LevelPlay / ironSource Privacy Policy
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Permissions Used
              </h2>

              <p>
                World Clock may request permissions required for its
                implemented features. Depending on the version of the app,
                these may include:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>
                  <strong>Internet Access</strong> — used for online
                  functionality, advertising, and related services.
                </li>

                <li>
                  <strong>Notification Permission</strong> — used for clock
                  alerts, reminders, or notifications, if supported.
                </li>

                <li>
                  <strong>Exact Alarm Permission</strong> — used to schedule
                  precise alarms, if the app includes alarm functionality.
                </li>

                <li>
                  <strong>Boot Completed Permission</strong> — may be used to
                  restore scheduled alarms or widgets after a device restart,
                  if supported.
                </li>

                <li>
                  <strong>Wake Lock Permission</strong> — may help keep
                  relevant operations active when required by supported
                  features.
                </li>

                <li>
                  <strong>Storage or Media Access</strong> — may be used to
                  select custom sounds or media, if that feature is available.
                </li>

                <li>
                  <strong>Widget Functionality</strong> — used to provide
                  home-screen clock widgets, if supported.
                </li>
              </ul>

              <p className="mt-4">
                Only permissions required by the features available in the
                installed version of the app should be requested. Permissions
                not used by the app should be removed from its configuration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Sharing and Security
              </h2>

              <p>
                We do not sell users' personal information. Technical data
                may be processed or shared by third-party providers when
                necessary to provide advertising, analytics, crash reporting,
                app functionality, security, or other services enabled in
                the app.
              </p>

              <p className="mt-4">
                We use reasonable measures to protect information under our
                control. However, no method of electronic transmission or
                storage can be guaranteed to be completely secure. Third-party
                providers process information under their own policies and
                practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Retention
              </h2>

              <p>
                Information handled directly by the app is retained only as
                necessary for its intended functionality. Third-party
                providers may retain information according to their own
                retention policies, contractual obligations, and applicable
                laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children's Privacy
              </h2>

              <p>
                World Clock is not specifically directed at children under
                the age of 13. We do not knowingly collect personal
                information directly from children. If you believe that a
                child has provided personal information in connection with
                the app, please contact us so that we can review the matter.
              </p>

              <p className="mt-4">
                Advertising and other third-party SDK configurations should
                comply with applicable child privacy requirements whenever
                children are part of the intended audience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Your Privacy Choices
              </h2>

              <p>
                Depending on your location and applicable law, you may have
                choices regarding personalized advertising and certain data
                processing activities. You may be able to manage advertising
                preferences through your device settings or consent options
                presented in the app, where available.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy periodically to reflect
                changes to the app, third-party services, or applicable
                requirements. The updated policy will be published on this
                page with a revised effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>

              <p>
                If you have questions about this Privacy Policy or the
                handling of information related to World Clock, contact us
                using the details below.
              </p>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md mt-4">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>Email: info@chtechgiant.com</p>
                  <p>Phone: +91 9980785020</p>
                  <p>Location: Davangere, Karnataka – 577001, India</p>
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

export default WorldClockPrivacyPolicy;