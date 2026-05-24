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
            Last Updated: May 24, 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
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

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Collection
              </h2>

              <p>
                The CGPA/SGPA Calculator app does not collect, store, or share
                any personal information from users.
              </p>

              <p className="mt-4">
                The app works completely offline and does not require:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Account registration</li>
                <li>Login</li>
                <li>Personal details</li>
                <li>Internet access for core functionality</li>
              </ul>

              <p className="mt-4">
                We do not collect:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Academic institution data</li>
                <li>Passwords</li>
                <li>Location information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Academic Data
              </h2>

              <p>
                All SGPA, CGPA, grades, credits, and semester calculations are
                processed locally on your device.
              </p>

              <p className="mt-4">
                No academic data is uploaded, transmitted, or stored on
                external servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Advertisements
              </h2>

              <p>
                The app may display advertisements using third-party advertising
                services such as Google AdMob.
              </p>

              <p className="mt-4">
                These services may use anonymous advertising identifiers to
                provide and improve ads.
              </p>

              <p className="mt-4">
                For more information, please review:
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
                Permissions
              </h2>

              <p>
                The CGPA/SGPA Calculator app currently does not request or
                require any device permissions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children’s Privacy
              </h2>

              <p>
                This app is intended for educational purposes and is safe for
                general student use.
              </p>

              <p className="mt-4">
                We do not knowingly collect any personal information from
                children.
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
              </ul>

              <p className="mt-4">
                These services may collect limited non-personal technical
                information according to their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security
              </h2>

              <p>
                Since the app does not collect or store personal data on
                external servers, your information remains on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Any updates
                will be posted on this page with a revised update date.
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
                  <p>Davangere, Karnataka – 577001</p>
                  <p>Email: info@chtechgiant.com</p>
                  <p>Phone: +91 9980785020</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Consent
              </h2>

              <p>
                By using the CGPA/SGPA Calculator app, you agree to this
                Privacy Policy.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CGPASGPAPrivacyPolicy;