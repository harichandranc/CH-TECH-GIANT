import { motion } from "framer-motion";

const WorldClockTerms = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Terms and Conditions – World Clock
          </h1>

          <p className="text-gray-400 mb-10">
            Effective Date: November 4, 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            <section>
              <p>
                World Clock ("the App") is developed and published by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>.
              </p>
              <p className="mt-4">
                These Terms and Conditions govern your use of the World Clock
                mobile application. By downloading, installing, or using the
                App, you agree to these Terms. If you do not agree, please
                discontinue using the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Purpose of the App
              </h2>
              <p>
                World Clock helps users view time across different time zones.
                Depending on the installed version, features may include world
                clocks, time displays, home-screen widgets, alarms,
                notifications, and related clock utilities. Features may vary
                between devices and app versions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Acceptable Use
              </h2>
              <p>You agree to use the App lawfully and responsibly.</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Do not use the App for unlawful or fraudulent purposes.</li>
                <li>
                  Do not interfere with the App's operation, security, or
                  integrity.
                </li>
                <li>
                  Do not reverse engineer, modify, or redistribute the App
                  except where permitted by law or authorized by us.
                </li>
                <li>
                  Do not use the App in a way that infringes another person's
                  rights or damages our services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Time Accuracy
              </h2>
              <p>
                We aim to provide useful and accurate time and time-zone
                information but do not guarantee that all displayed times,
                time-zone conversions, or daylight-saving adjustments will
                always be accurate or up to date.
              </p>
              <p className="mt-4">
                Information may depend on your device settings, operating
                system, time-zone database, and other technical factors.
                Independently verify critical time information for travel,
                business, financial transactions, or other important activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Alarms, Notifications, and Widgets
              </h2>
              <p>
                If supported, alarms, reminders, notifications, and widgets may
                depend on device permissions, battery optimization settings,
                background execution restrictions, and operating system
                behavior.
              </p>
              <p className="mt-4">
                We cannot guarantee that every alarm or notification will
                activate at the intended time or that widgets will always
                display updated information. Do not rely solely on the App for
                emergencies, critical medical reminders, or safety-related
                notifications.
              </p>
              <p className="mt-4">
                You are responsible for granting the necessary permissions and
                checking your device settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Advertisements and Third-Party Services
              </h2>
              <p>
                The App may display advertisements or use third-party services
                for advertising, analytics, crash reporting, and performance
                monitoring. Depending on the version released, these services
                may include Unity Ads, Unity LevelPlay (ironSource), Google
                Play Services, Firebase Analytics, or Firebase Crashlytics.
              </p>
              <p className="mt-4">
                Third-party services operate under their own terms and privacy
                policies. Their availability and data-processing practices are
                not entirely under our control.
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
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Privacy
              </h2>
              <p>
                Your use of World Clock is also subject to our Privacy Policy,
                which explains how information may be handled by the App and
                its third-party services.
              </p>
              <p className="mt-4">
                Please review the Privacy Policy on our website:
              </p>
              <a
                href="https://chtechgiant.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-cyan-400 hover:text-cyan-300"
              >
                https://chtechgiant.com
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Intellectual Property
              </h2>
              <p>
                Unless otherwise stated, the App and its original content,
                interface, graphics, branding, and software are owned by or
                licensed to CH TECH GIANT (OPC) PRIVATE LIMITED and are
                protected by applicable intellectual property laws.
              </p>
              <p className="mt-4">
                We grant you a limited, personal, non-exclusive,
                non-transferable, and revocable license to use the App for
                lawful purposes in accordance with these Terms. No ownership
                rights are transferred to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Updates and Availability
              </h2>
              <p>
                We may release updates, bug fixes, improvements, or changes to
                the App. Some features may require an updated version or a
                compatible device.
              </p>
              <p className="mt-4">
                We do not guarantee uninterrupted or error-free operation.
                Availability may be affected by maintenance, technical issues,
                network conditions, operating system changes, or circumstances
                beyond our reasonable control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Disclaimer of Warranties
              </h2>
              <p>
                To the extent permitted by applicable law, the App is provided
                on an "as is" and "as available" basis without warranties of
                any kind, whether express or implied.
              </p>
              <p className="mt-4">
                We do not guarantee that the App will always be available,
                error-free, compatible with every device, or suitable for
                every user's requirements. Nothing in these Terms excludes
                rights or warranties that cannot legally be excluded.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Limitation of Liability
              </h2>
              <p>
                To the extent permitted by applicable law, CH TECH GIANT
                (OPC) PRIVATE LIMITED will not be liable for indirect,
                incidental, special, or consequential losses arising from
                the use of, or inability to use, the App.
              </p>
              <p className="mt-4">
                This may include losses associated with inaccurate time
                displays, missed alarms or notifications, device
                incompatibility, service interruptions, or third-party
                service failures. Nothing in these Terms limits liability
                where such a limitation is prohibited by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Suspension and Termination
              </h2>
              <p>
                We may restrict or discontinue access to the App when
                reasonably necessary for security, maintenance, legal
                compliance, or to address misuse or violations of these Terms.
                You may stop using the App and uninstall it at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                12. Changes to These Terms
              </h2>
              <p>
                We may update these Terms to reflect changes to the App,
                our services, or applicable legal requirements. Updated Terms
                will be published on this page with a revised effective date.
                Continued use after updated Terms take effect constitutes
                acceptance to the extent permitted by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                13. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of India, subject to
                applicable legal requirements and mandatory consumer
                protections. Disputes will be handled by the competent
                courts or authorities with jurisdiction under applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                14. Contact Us
              </h2>
              <p>
                If you have questions or concerns regarding these Terms and
                Conditions, please contact us using the details below.
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

export default WorldClockTerms;