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
            Last Updated: May 24, 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">

            <section>
              <p>
                Welcome to Invoice Maker developed by
                <span className="text-cyan-400 font-semibold">
                  {" "}CH TECH GIANT
                </span>.
              </p>

              <p className="mt-4">
                Your privacy is important to us. This Privacy Policy explains
                how our app handles user information and third-party services
                used within the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Collection
              </h2>

              <p>
                Invoice Maker does not directly collect, store, or share
                personal information from users.
              </p>

              <p className="mt-4">
                All invoice data created within the app is stored locally on
                your device unless you choose to export or share it yourself.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Permissions Used
              </h2>

              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Storage / Files Access</strong> — Used to save,
                  export, and share invoices or PDF files created by the user.
                </li>

                <li>
                  <strong>Internet Access</strong> — Used to provide
                  advertisements and other optional online features.
                </li>
              </ul>

              <p className="mt-4">
                The app does not access your personal contacts, messages,
                photos, or sensitive information without your permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security
              </h2>

              <p>
                Your invoice data remains on your device. We do not upload or
                store your invoice or business data on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Advertising and Third-Party Services
              </h2>

              <p>
                Invoice Maker uses third-party services to provide
                advertisements within the app. These services may collect
                certain information from your device, such as advertising
                identifiers, device information, IP address, and information
                related to advertising interactions, in accordance with their
                own privacy policies.
              </p>

              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Google Play Services</li>
                <li>Start.io</li>
              </ul>

              <p className="mt-4">
                Start.io may process information for advertising,
                personalization, measurement, fraud prevention, and related
                advertising purposes. The collection and use of such
                information is governed by Start.io's privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children’s Privacy
              </h2>

              <p>
                This app is not directed toward children under the age of 13.
                We do not knowingly collect personal information directly from
                children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Any
                changes will be reflected on this page with an updated
                "Last Updated" date.
              </p>
            </section>

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

export default InvoiceMakerPrivacyPolicy;