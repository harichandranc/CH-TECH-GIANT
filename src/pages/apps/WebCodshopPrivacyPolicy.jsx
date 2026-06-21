import { motion } from "framer-motion";

const WebCodshopPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Privacy Policy – WEB CODSHOP
          </h1>

          <p className="text-gray-400 mb-10">
            Last Updated: June 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            <section>
              <p>
                WEB CODSHOP is owned and operated by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>.
              </p>

              <p className="mt-4">
                This Privacy Policy explains how we collect, use, store, and
                protect your information when you use WEB CODSHOP, our website,
                mobile applications, and related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information We Collect
              </h2>

              <p>
                We may collect the following types of information:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number (if provided)</li>
                <li>Billing Information</li>
                <li>Purchase History</li>
                <li>Download History</li>
                <li>Device Information</li>
                <li>IP Address</li>
                <li>Usage Analytics</li>
                <li>Advertising Identifiers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                How We Use Your Information
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Create and manage your account</li>
                <li>Process payments and orders</li>
                <li>Deliver digital products</li>
                <li>Generate invoices</li>
                <li>Provide customer support</li>
                <li>Improve our services and user experience</li>
                <li>Display advertisements</li>
                <li>Prevent fraud and abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Payment Processing
              </h2>

              <p>
                WEB CODSHOP uses trusted payment providers including:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Razorpay</li>
                <li>PayPal</li>
              </ul>

              <p className="mt-4">
                We do not store complete card details, banking information,
                or payment credentials on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Digital Product Delivery
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Purchased products become available for download.</li>
                <li>
                  Download links may be sent to your registered email address.
                </li>
                <li>
                  Purchase records are maintained to provide future access to
                  purchased products.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Advertising & Analytics
              </h2>

              <p>
                WEB CODSHOP may use third-party advertising and analytics
                services including:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Google AdMob</li>
                <li>Google Analytics</li>
                <li>Firebase Analytics</li>
                <li>Firebase Crashlytics</li>
              </ul>

              <p className="mt-4">
                These services may collect device identifiers, usage data,
                advertising identifiers, and technical information to improve
                services and provide advertisements.
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
                Email Communications
              </h2>

              <p>
                We may send emails related to:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Purchase confirmations</li>
                <li>Invoices</li>
                <li>Product delivery notifications</li>
                <li>Customer support responses</li>
                <li>Important account updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Cookies & Similar Technologies
              </h2>

              <p>
                We may use cookies and similar technologies to:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Maintain user sessions</li>
                <li>Improve functionality</li>
                <li>Analyze traffic and usage</li>
                <li>Provide advertisements</li>
                <li>Enhance user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security
              </h2>

              <p>
                We implement reasonable security measures to protect your
                information from unauthorized access, misuse, alteration,
                disclosure, or loss.
              </p>

              <p className="mt-4">
                However, no online system can guarantee 100% security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children's Privacy
              </h2>

              <p>
                WEB CODSHOP is not intended for children under 13 years of age.
              </p>

              <p className="mt-4">
                We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Your Rights
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Request corrections</li>
                <li>Request deletion where applicable</li>
                <li>Request information about stored data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page along with the updated revision
                date.
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
                  <p>Email: contact@chtechgiant.com</p>
                  <p>Website: https://chtechgiant.com</p>
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

export default WebCodshopPrivacyPolicy;