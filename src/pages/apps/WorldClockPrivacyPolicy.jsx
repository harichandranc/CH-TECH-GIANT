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
            Effective Date: May 24, 2026
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
                This Privacy Policy explains how information is handled when
                you use the World Clock mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Collection and Use
              </h2>

              <p>
                World Clock does not collect personally identifiable
                information from users directly.
              </p>

              <p className="mt-4">
                However, the app may use trusted third-party services that may
                collect limited technical information such as:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Device information</li>
                <li>App performance data</li>
                <li>Crash reports</li>
                <li>Advertising identifiers</li>
                <li>Usage analytics</li>
              </ul>

              <p className="mt-4">
                This information is used only to improve app stability,
                performance, and user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Third-Party Services
              </h2>

              <p>
                The app may use third-party services including:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Google AdMob</li>
                <li>Google Play Services</li>
                <li>Firebase Analytics</li>
                <li>Firebase Crashlytics</li>
              </ul>

              <p className="mt-4">
                These services may collect information in accordance with their
                own privacy policies.
              </p>

              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition duration-300"
              >
                https://policies.google.com/privacy
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Advertisements
              </h2>

              <p>
                World Clock may display advertisements provided by Google
                AdMob.
              </p>

              <p className="mt-4">
                Ad providers may use device identifiers and cookies to provide
                personalized or non-personalized advertisements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Permissions Used
              </h2>

              <p>
                World Clock may request the following permissions for app
                functionality:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>
                  <strong>Internet Access</strong> — used for advertisements
                  and online services.
                </li>

                <li>
                  <strong>Notification Permission</strong> — used for alarms,
                  reminders, and notifications.
                </li>

                <li>
                  <strong>Exact Alarm Permission</strong> — used to schedule
                  accurate alarms and alerts.
                </li>

                <li>
                  <strong>Boot Completed Permission</strong> — used to restore
                  alarms and widgets after device restart.
                </li>

                <li>
                  <strong>Wake Lock Permission</strong> — used to ensure alarms
                  function correctly.
                </li>

                <li>
                  <strong>Storage / Media Access Permission</strong> — used for
                  selecting custom alarm sounds or audio files.
                </li>

                <li>
                  <strong>Widget Access</strong> — used to provide home screen
                  clock widgets and live clock functionality.
                </li>
              </ul>

              <p className="mt-4">
                Permissions are only used for core app features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security
              </h2>

              <p>
                We value user privacy and use reasonable measures to protect
                app functionality and data handled by third-party services.
              </p>

              <p className="mt-4">
                No personal information is sold, traded, or shared with
                unauthorized parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children’s Privacy
              </h2>

              <p>
                World Clock is not intended for children under the age of 13.
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
                This Privacy Policy may be updated periodically. Any changes
                will be reflected on this page.
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
                  <p>Email: info@chtechgiant.com</p>
                  <p>Phone: +91 9980785020</p>
                  <p>Location: Davangere, Karnataka – 577001, India</p>
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